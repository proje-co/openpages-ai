import {
  collectJsonLd,
  renderJsonLdScript,
} from "@openpages/seo-aeo";
import { resolvePageByRoute, renderPage } from "@openpages/renderer";
import { headers } from "next/headers";
import {
  fetchKeystonePosts,
  resolveSiteByHost,
  snapshotDocument,
} from "@/lib/resolve";

async function getHost(searchParams?: { host?: string }) {
  const h = await headers();
  return (
    searchParams?.host ||
    h.get("x-openpages-host") ||
    "localhost:3002"
  );
}

export default async function SiteCatchAll({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ host?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const host = await getHost(sp);
  const resolved = await resolveSiteByHost(host);

  if (!resolved) {
    return (
      <main style={{ padding: "3rem", fontFamily: "system-ui" }}>
        <h1>OpenPages AI</h1>
        <p>No published site for host <code>{host}</code>.</p>
        <p>Publish from the SaaS editor, then open via subdomain or <code>?host=slug.openpages.ai</code>.</p>
      </main>
    );
  }

  const route = !slug?.length ? "/" : `/${slug.join("/")}`;
  let document;
  let posts: Array<{ title: string; slug: string; excerpt?: string; publishedAt?: string }> = [];
  let siteName = resolved.site.name;

  if (resolved.publication) {
    const snap = snapshotDocument(resolved.publication);
    document = snap.document;
    posts = snap.posts;
    siteName = snap.siteName;
  } else if ("draft" in resolved && resolved.draft) {
    document = resolved.draft;
    posts = await fetchKeystonePosts(resolved.site.workspaceId, resolved.site.id);
  } else {
    return <main style={{ padding: "3rem" }}>Site not published yet.</main>;
  }

  // Blog post detail: /blog/[slug]
  if (slug?.[0] === "blog" && slug[1]) {
    const post = posts.find((p) => p.slug === slug[1]);
    return (
      <main className="op-page" style={{ padding: "3rem", maxWidth: 760, margin: "0 auto" }}>
        <a href="/blog">← Blog</a>
        <h1>{post?.title || "Post"}</h1>
        {post?.publishedAt ? <p>{post.publishedAt}</p> : null}
        <p>{post?.excerpt}</p>
      </main>
    );
  }

  const page = resolvePageByRoute(document, route);
  if (!page) {
    return <main style={{ padding: "3rem" }}>404 — page not found</main>;
  }

  const siteUrl = `https://${host}`;
  const jsonLd = collectJsonLd(document, page, siteUrl);
  const title =
    page.seo.title ||
    document.theme.defaultMetaTitle ||
    `${page.title} · ${siteName}`;
  const description =
    page.seo.description ||
    document.theme.defaultMetaDescription ||
    page.aeo.primaryAnswer ||
    "";
  const ogImage = page.seo.ogImage || document.theme.defaultOgImage;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderJsonLdScript(jsonLd) }} />
      <header>
        <title>{title}</title>
        <meta name="description" content={description} />
        {page.seo.canonical ? <link rel="canonical" href={page.seo.canonical} /> : null}
        {page.seo.noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
        {ogImage ? <meta property="og:image" content={ogImage} /> : null}
        {document.theme.faviconUrl ? (
          <link rel="icon" href={document.theme.faviconUrl} />
        ) : null}
      </header>
      {renderPage(document, page, { blogPosts: posts })}
    </>
  );
}
