import { NextResponse } from "next/server";
import { getDefaultWorkspace, requireUser } from "@/lib/session";
import { createSiteForWorkspace, getSiteDocument } from "@/lib/sites";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export async function GET() {
  try {
    const { userId } = await requireUser();
    const workspace = await getDefaultWorkspace(userId);
    if (!workspace) return NextResponse.json({ sites: [] });
    const sites = await prisma.site.findMany({
      where: { workspaceId: workspace.id },
      include: { domains: true, document: true, publications: { take: 1, orderBy: { createdAt: "desc" } } },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json({ workspace, sites });
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
}

const CreateBody = z.object({
  name: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
});

export async function POST(req: Request) {
  try {
    const { userId } = await requireUser();
    const workspace = await getDefaultWorkspace(userId);
    if (!workspace) return NextResponse.json({ error: "NO_WORKSPACE" }, { status: 400 });
    const body = CreateBody.parse(await req.json());
    const site = await createSiteForWorkspace({
      workspaceId: workspace.id,
      name: body.name,
      slug: body.slug,
    });
    const document = await getSiteDocument(site.id);
    return NextResponse.json({ site, document });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
