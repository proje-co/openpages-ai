import { NextResponse } from "next/server";
import { z } from "zod";
import { runUnlighthouseAudit } from "@/lib/integrations";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

export async function GET(req: Request) {
  try {
    const { userId } = await requireUser();
    const siteId = new URL(req.url).searchParams.get("siteId");
    if (!siteId) return NextResponse.json({ error: "siteId required" }, { status: 400 });
    const site = await prisma.site.findFirst({
      where: {
        id: siteId,
        workspace: { memberships: { some: { userId } } },
      },
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    const reports = await prisma.auditReport.findMany({
      where: { siteId },
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ reports });
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
}

const Body = z.object({
  siteId: z.string(),
  url: z.string().url().optional(),
});

export async function POST(req: Request) {
  try {
    const { userId } = await requireUser();
    const body = Body.parse(await req.json());
    const site = await prisma.site.findFirst({
      where: {
        id: body.siteId,
        workspace: { memberships: { some: { userId } } },
      },
      include: { domains: true },
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    const host = site.domains.find((d) => d.isPrimary)?.host;
    const url =
      body.url ||
      (process.env.SITES_URL
        ? `${process.env.SITES_URL}/?host=${encodeURIComponent(host || site.slug)}`
        : `https://${host}`);
    const audit = await runUnlighthouseAudit(url);
    const report = await prisma.auditReport.create({
      data: {
        siteId: site.id,
        url: audit.url,
        scores: audit.scores,
        raw: audit,
      },
    });
    return NextResponse.json({ report });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
