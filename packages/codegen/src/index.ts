import type { SiteDocument } from "@openpages/document-schema";
import {
  buildLlmsTxt,
  buildRobotsTxt,
  buildSitemapXml,
} from "@openpages/seo-aeo";

export type CodegenFile = { path: string; contents: string };

export type BlogExportPost = {
  title: string;
  slug: string;
  excerpt?: string;
  body: string;
  publishedAt?: string;
};

export function generateNextApp(input: {
  document: SiteDocument;
  siteName: string;
  siteUrl: string;
  posts?: BlogExportPost[];
}): CodegenFile[] {
  const { document, siteName, siteUrl, posts = [] } = input;
  const files: CodegenFile[] = [];

  files.push({
    path: "package.json",
    contents: JSON.stringify(
      {
        name: siteName.toLowerCase().replace(/\s+/g, "-"),
        private: true,
        scripts: {
          dev: "next dev",
          build: "velite && next build",
          start: "next start",
        },
        dependencies: {
          next: "15.1.0",
          react: "18.3.1",
          "react-dom": "18.3.1",
        },
        devDependencies: {
          velite: "0.2.1",
          typescript: "5.7.2",
        },
      },
      null,
      2,
    ),
  });

  files.push({
    path: "README.md",
    contents: `# ${siteName}\n\nExported from OpenPages AI.\n`,
  });

  files.push({
    path: "velite.config.ts",
    contents: `import { defineConfig, s } from 'velite'

export default defineConfig({
  root: 'content',
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s.object({
        title: s.string(),
        slug: s.slug('posts'),
        excerpt: s.string().optional(),
        publishedAt: s.isodate().optional(),
        body: s.mdx(),
      }),
    },
  },
})
`,
  });

  files.push({
    path: "app/layout.tsx",
    contents: `export const metadata = { title: ${JSON.stringify(siteName)} }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
`,
  });

  files.push({
    path: "lib/document.json",
    contents: JSON.stringify(document, null, 2),
  });

  files.push({
    path: "app/page.tsx",
    contents: `import document from '../lib/document.json'
import { PageRenderer } from '../components/PageRenderer'

export default function HomePage() {
  const page = document.pages.find((p: any) => p.route === '/') ?? document.pages[0]
  return <PageRenderer document={document} page={page} />
}
`,
  });

  for (const page of document.pages) {
    if (page.route === "/") continue;
    const seg = page.route.replace(/^\//, "");
    files.push({
      path: `app/${seg}/page.tsx`,
      contents: `import document from '../../lib/document.json'
import { PageRenderer } from '../../components/PageRenderer'

export default function Page() {
  const page = document.pages.find((p: any) => p.route === ${JSON.stringify(page.route)})
  if (!page) return <div>Not found</div>
  return <PageRenderer document={document} page={page} />
}
`,
    });
  }

  files.push({
    path: "components/PageRenderer.tsx",
    contents: `export function PageRenderer({ document, page }: { document: any; page: any }) {
  return (
    <main>
      <h1>{page.title}</h1>
      {page.aeo?.primaryAnswer ? <p><strong>Answer:</strong> {page.aeo.primaryAnswer}</p> : null}
      {page.blocks?.map((block: any) => (
        <section key={block.id} data-type={block.type} style={{ padding: '1.5rem 0' }}>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(block, null, 2)}</pre>
        </section>
      ))}
    </main>
  )
}
`,
  });

  files.push({
    path: "public/llms.txt",
    contents: buildLlmsTxt({ siteName, siteUrl, document }),
  });
  files.push({
    path: "public/robots.txt",
    contents: buildRobotsTxt(siteUrl),
  });
  files.push({
    path: "public/sitemap.xml",
    contents: buildSitemapXml(siteUrl, document),
  });

  for (const post of posts) {
    files.push({
      path: `content/posts/${post.slug}.mdx`,
      contents: `---
title: ${JSON.stringify(post.title)}
slug: ${post.slug}
excerpt: ${JSON.stringify(post.excerpt ?? "")}
publishedAt: ${JSON.stringify(post.publishedAt ?? new Date().toISOString())}
---

${post.body}
`,
    });
  }

  return files;
}

export async function pushToGitHub(input: {
  token: string;
  owner: string;
  repo: string;
  files: CodegenFile[];
  message?: string;
}): Promise<{ url: string; sha?: string }> {
  const { token, owner, repo, files, message = "Export from OpenPages AI" } = input;
  const createRes = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: repo,
      private: true,
      auto_init: true,
      description: "Exported from OpenPages AI",
    }),
  });
  // 201 created or 422 already exists — both OK to continue
  if (!createRes.ok && createRes.status !== 422) {
    const text = await createRes.text();
    throw new Error(`GitHub create repo failed: ${createRes.status} ${text}`);
  }

  for (const file of files) {
    const path = file.path;
    const content = Buffer.from(file.contents, "utf8").toString("base64");
    const put = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, content }),
      },
    );
    if (!put.ok && put.status !== 422) {
      // try get sha then update
      const existing = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        },
      );
      if (existing.ok) {
        const meta = (await existing.json()) as { sha: string };
        await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message, content, sha: meta.sha }),
          },
        );
      }
    }
  }

  return { url: `https://github.com/${owner}/${repo}` };
}
