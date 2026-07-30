import { generateNextApp, pushToGitHub } from "@openpages/codegen";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fetchCmsPosts } from "@/lib/integrations";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { getSiteDocument } from "@/lib/sites";

const Body = z.object({
  siteId: z.string(),
  owner: z.string().optional(),
  repo: z.string().optional(),
  token: z.string().optional(),
  dryRun: z.boolean().default(false),
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
      include: { workspace: true, domains: true },
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });

    const document = await getSiteDocument(site.id);
    const postsRaw = await fetchCmsPosts(site.workspaceId, site.id);
    const posts = postsRaw.map((p) => ({
      title: String(p.title ?? "Untitled"),
      slug: String(p.slug ?? "post"),
      excerpt: p.excerpt ? String(p.excerpt) : "",
      body: typeof p.content === "object" ? JSON.stringify(p.content) : String(p.content ?? ""),
      publishedAt: p.publishedAt ? String(p.publishedAt) : undefined,
    }));

    const host =
      site.domains.find((d) => d.isPrimary)?.host ||
      `${site.slug}.${process.env.ROOT_DOMAIN || "openpages.ai"}`;
    const files = generateNextApp({
      document,
      siteName: site.name,
      siteUrl: `https://${host}`,
      posts,
    });

    if (body.dryRun || (!body.token && !process.env.GITHUB_TOKEN)) {
      return NextResponse.json({
        dryRun: true,
        fileCount: files.length,
        files: files.map((f) => f.path),
      });
    }

    const token = body.token || process.env.GITHUB_TOKEN!;
    const owner = body.owner || "openpages-export";
    const repo = body.repo || site.slug;
    const result = await pushToGitHub({ token, owner, repo, files });

    await prisma.gitHubConnection.upsert({
      where: { workspaceId: site.workspaceId },
      create: {
        workspaceId: site.workspaceId,
        accessToken: token,
        owner,
        repo,
        lastExportAt: new Date(),
      },
      update: {
        accessToken: token,
        owner,
        repo,
        lastExportAt: new Date(),
      },
    });

    return NextResponse.json({ url: result.url, fileCount: files.length });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "ERROR" },
      { status: 400 },
    );
  }
}
