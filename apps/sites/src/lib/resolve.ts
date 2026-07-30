import { parseSiteDocument, type PublicationSnapshot } from "@openpages/document-schema";
import { prisma } from "./prisma";

export async function resolveSiteByHost(host: string) {
  const clean = host.split(":")[0].toLowerCase();
  const domain = await prisma.domain.findUnique({
    where: { host: clean },
    include: {
      site: {
        include: {
          publications: { where: { status: "LIVE" }, orderBy: { createdAt: "desc" }, take: 1 },
        },
      },
    },
  });
  if (domain?.site?.publications[0]) {
    return {
      site: domain.site,
      publication: domain.site.publications[0],
      host: clean,
    };
  }

  // Fallback: slug.openpages.ai
  const root = process.env.ROOT_DOMAIN || "openpages.ai";
  if (clean.endsWith(`.${root}`)) {
    const slug = clean.replace(`.${root}`, "");
    const site = await prisma.site.findFirst({
      where: { slug },
      include: {
        publications: { where: { status: "LIVE" }, orderBy: { createdAt: "desc" }, take: 1 },
        document: true,
      },
    });
    if (site?.publications[0]) {
      return { site, publication: site.publications[0], host: clean };
    }
    // Preview draft when no publication
    if (site?.document) {
      return {
        site,
        publication: null,
        draft: parseSiteDocument(site.document.data),
        host: clean,
      };
    }
  }
  return null;
}

export function snapshotDocument(publication: { snapshot: unknown }) {
  const snap = publication.snapshot as PublicationSnapshot & { posts?: unknown[] };
  return {
    document: parseSiteDocument(snap.document),
    posts: (snap.posts as Array<{ title: string; slug: string; excerpt?: string; publishedAt?: string }>) || [],
    siteName: snap.siteName,
    siteSlug: snap.siteSlug,
  };
}

export async function fetchKeystonePosts(workspaceId: string, siteId: string) {
  const base = process.env.KEYSTONE_URL || "http://localhost:3001";
  try {
    const res = await fetch(`${base}/api/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query($workspaceId: String!, $siteId: String!) {
          posts(where: {
            workspaceId: { equals: $workspaceId },
            siteId: { equals: $siteId },
            status: { equals: "published" }
          }) {
            title slug excerpt publishedAt
          }
        }`,
        variables: { workspaceId, siteId },
      }),
      next: { revalidate: 60, tags: [`site-${siteId}`] },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data?.posts ?? [];
  } catch {
    return [];
  }
}
