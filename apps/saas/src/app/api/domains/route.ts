import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";

const Body = z.object({
  siteId: z.string(),
  host: z.string().min(3),
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
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    const txtToken = `op-verify-${Math.random().toString(36).slice(2, 10)}`;
    const domain = await prisma.domain.create({
      data: {
        siteId: site.id,
        host: body.host.toLowerCase(),
        status: "PENDING",
        isPrimary: false,
        txtToken,
      },
    });
    return NextResponse.json({
      domain,
      instructions: {
        cname: `${process.env.ROOT_DOMAIN || "openpages.ai"}`,
        txt: txtToken,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}

const VerifyBody = z.object({
  domainId: z.string(),
});

export async function PUT(req: Request) {
  try {
    const { userId } = await requireUser();
    const body = VerifyBody.parse(await req.json());
    const domain = await prisma.domain.findFirst({
      where: {
        id: body.domainId,
        site: { workspace: { memberships: { some: { userId } } } },
      },
    });
    if (!domain) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    // MVP: mark verified after user confirms DNS (real lookup in prod)
    const updated = await prisma.domain.update({
      where: { id: domain.id },
      data: { status: "VERIFIED", isPrimary: true },
    });
    return NextResponse.json({ domain: updated });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
