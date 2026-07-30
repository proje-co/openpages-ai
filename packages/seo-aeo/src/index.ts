import type { Page, SiteDocument } from "@openpages/document-schema";
import type {
  FAQPage,
  HowTo,
  Organization,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

export function buildOrganizationJsonLd(
  document: SiteDocument,
  siteUrl: string,
): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: document.theme.brandName,
    url: siteUrl,
  };
}

export function buildWebSiteJsonLd(
  document: SiteDocument,
  siteUrl: string,
): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: document.theme.brandName,
    url: siteUrl,
  };
}

export function buildWebPageJsonLd(
  page: Page,
  siteUrl: string,
): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.seo.title || page.title,
    description: page.seo.description || page.aeo.primaryAnswer,
    url: `${siteUrl}${page.route === "/" ? "" : page.route}`,
    abstract: page.aeo.primaryAnswer || undefined,
  };
}

export function buildFaqJsonLd(page: Page): WithContext<FAQPage> | null {
  const fromAeo = page.aeo.faq;
  const fromBlocks = page.blocks.flatMap((b) =>
    b.type === "FAQ" ? b.items : [],
  );
  const items = [...fromAeo, ...fromBlocks];
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHowToJsonLd(page: Page): WithContext<HowTo> | null {
  const howto = page.blocks.find((b) => b.type === "HowToSteps");
  if (!howto || howto.type !== "HowToSteps") return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howto.title,
    step: howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function collectJsonLd(
  document: SiteDocument,
  page: Page,
  siteUrl: string,
): object[] {
  const graphs: object[] = [
    buildOrganizationJsonLd(document, siteUrl),
    buildWebSiteJsonLd(document, siteUrl),
    buildWebPageJsonLd(page, siteUrl),
  ];
  const faq = buildFaqJsonLd(page);
  if (faq) graphs.push(faq);
  const howto = buildHowToJsonLd(page);
  if (howto) graphs.push(howto);
  return graphs;
}

export function renderJsonLdScript(graphs: object[]): string {
  return graphs
    .map(
      (g) =>
        `<script type="application/ld+json">${JSON.stringify(g)}</script>`,
    )
    .join("\n");
}

export function buildLlmsTxt(input: {
  siteName: string;
  siteUrl: string;
  document: SiteDocument;
}): string {
  const { siteName, siteUrl, document } = input;
  const lines: string[] = [
    `# ${siteName}`,
    "",
    `> ${siteName} — AI-native website published with OpenPages AI.`,
    "",
    "## Site",
    "",
    `- Home: ${siteUrl}/`,
    ...document.pages.map(
      (p) =>
        `- ${p.title}: ${siteUrl}${p.route === "/" ? "" : p.route} — ${p.aeo.intent || p.seo.description}`,
    ),
    "",
    "## Primary answers",
    "",
  ];
  for (const page of document.pages) {
    if (page.aeo.primaryAnswer) {
      lines.push(`### ${page.aeo.intent || page.title}`);
      lines.push(page.aeo.primaryAnswer);
      lines.push("");
    }
  }
  lines.push("## Optional");
  lines.push("");
  lines.push(`- Sitemap: ${siteUrl}/sitemap.xml`);
  lines.push(`- Robots: ${siteUrl}/robots.txt`);
  return lines.join("\n");
}

export function buildRobotsTxt(siteUrl: string): string {
  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export function buildSitemapXml(
  siteUrl: string,
  document: SiteDocument,
): string {
  const urls = document.pages
    .map((p) => {
      const loc = `${siteUrl}${p.route === "/" ? "" : p.route}`;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function aeoChecklist(page: Page): {
  id: string;
  label: string;
  ok: boolean;
}[] {
  return [
    {
      id: "intent",
      label: "Page has AEO intent",
      ok: Boolean(page.aeo.intent.trim()),
    },
    {
      id: "answer",
      label: "Page has primary answer",
      ok: Boolean(page.aeo.primaryAnswer.trim()),
    },
    {
      id: "faq-or-answer-block",
      label: "FAQ or Answer block present",
      ok: page.blocks.some((b) => b.type === "FAQ" || b.type === "AnswerBlock"),
    },
    {
      id: "seo-title",
      label: "SEO title set",
      ok: Boolean(page.seo.title.trim()),
    },
    {
      id: "seo-description",
      label: "SEO description set",
      ok: Boolean(page.seo.description.trim()),
    },
  ];
}

export {
  heuristicAeoHints,
  transformersAeoHints,
  type AeoHint,
} from "./transformers-hints";

