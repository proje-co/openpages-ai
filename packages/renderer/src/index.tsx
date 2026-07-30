import { BlockView, themeToCssVars } from "@openpages/blocks";
import type { Page, SiteDocument } from "@openpages/document-schema";

export type BlogPostSummary = {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
};

export function renderPage(
  document: SiteDocument,
  page: Page,
  options?: { blogPosts?: BlogPostSummary[] },
) {
  const style = themeToCssVars(document.theme);
  return (
    <div
      className={`op-page ${document.theme.colorMode === "dark" ? "dark" : "light"}`}
      style={style}
      data-page-id={page.id}
      data-color-mode={document.theme.colorMode}
    >
      <main>
        {page.blocks.map((block) => (
          <BlockView
            key={block.id}
            block={block}
            blogPosts={options?.blogPosts}
          />
        ))}
      </main>
    </div>
  );
}

export function resolvePageByRoute(
  document: SiteDocument,
  route: string,
): Page | undefined {
  const normalized = route === "" ? "/" : route.startsWith("/") ? route : `/${route}`;
  return (
    document.pages.find((p) => p.route === normalized) ??
    document.pages.find((p) => p.slug === normalized.replace(/^\//, ""))
  );
}

export { themeToCssVars, BlockView };
