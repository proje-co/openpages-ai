import { NextResponse } from "next/server";
import { z } from "zod";
import { fetchCmsPosts, runUnlighthouseAudit } from "@/lib/integrations";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { getSiteDocument } from "@/lib/sites";
import { hashCmsContent } from "@/lib/storage";

const Body = z.object({
  siteId: z.string(),
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
      include: { domains: true, workspace: true },
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });

    const document = await getSiteDocument(site.id);
    const posts = await fetchCmsPosts(site.workspaceId, site.id);
    const cmsContentHash = hashCmsContent(posts);
    const primary =
      site.domains.find((d) => d.isPrimary)?.host ||
      `${site.slug}.${process.env.ROOT_DOMAIN || "openpages.ai"}`;
    const url = `http://${primary}`;

    const snapshot = {
      document,
      cmsContentHash,
      publishedAt: new Date().toISOString(),
      siteSlug: site.slug,
      siteName: site.name,
      posts,
    };

    const publication = await prisma.publication.create({
      data: {
        siteId: site.id,
        status: "LIVE",
        snapshot: JSON.parse(JSON.stringify(snapshot)),
        cmsContentHash,
        url,
      },
    });

    await prisma.domain.updateMany({
      where: { siteId: site.id, isPrimary: true },
      data: { status: "VERIFIED" },
    });

    // Fire audit job (inline for MVP; swap to queue in prod)
    const audit = await runUnlighthouseAudit(
      process.env.SITES_URL
        ? `${process.env.SITES_URL}/?host=${encodeURIComponent(primary)}`
        : url,
    );
    await prisma.auditReport.create({
      data: {
        siteId: site.id,
        url: audit.url,
        scores: audit.scores,
        raw: audit,
      },
    });

    const gh = await prisma.gitHubConnection.findUnique({
      where: { workspaceId: site.workspaceId },
    });
    return NextResponse.json({
      publication,
      audit,
      exportOnPublish: gh?.exportOnPublish ?? false,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
