import { NextResponse } from "next/server";
import { requireUser } from "@/lib/session";
import { getSiteDocument, saveSiteDocument } from "@/lib/sites";
import { prisma } from "@/lib/prisma";

async function assertSiteAccess(siteId: string, userId: string) {
  const site = await prisma.site.findFirst({
    where: {
      id: siteId,
      workspace: { memberships: { some: { userId } } },
    },
    include: { workspace: true, domains: true, assets: true },
  });
  if (!site) throw new Error("FORBIDDEN");
  return site;
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ siteId: string }> },
) {
  try {
    const { userId } = await requireUser();
    const { siteId } = await ctx.params;
    const site = await assertSiteAccess(siteId, userId);
    const document = await getSiteDocument(siteId);
    const components = await prisma.savedComponent.findMany({ where: { siteId } });
    return NextResponse.json({ site, document, components });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 401 },
    );
  }
}

export async function PUT(
  req: Request,
  ctx: { params: Promise<{ siteId: string }> },
) {
  try {
    const { userId } = await requireUser();
    const { siteId } = await ctx.params;
    await assertSiteAccess(siteId, userId);
    const body = await req.json();
    const updated = await saveSiteDocument(siteId, body.document, body.label);
    return NextResponse.json({ ok: true, version: updated.version });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
