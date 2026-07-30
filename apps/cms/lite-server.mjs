/**
 * Lightweight CMS GraphQL sidecar used when full Keystone bootstrap is unavailable.
 * Exposes the same Post query shape expected by SaaS/Sites.
 * Prefer `pnpm dev` (Keystone) in normal operation.
 */
import { createServer } from "http";
import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("cms-lite.db");
db.exec(`
CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  title TEXT,
  slug TEXT,
  excerpt TEXT,
  status TEXT,
  workspaceId TEXT,
  siteId TEXT,
  publishedAt TEXT,
  content TEXT
);
`);

const port = Number(process.env.PORT || 3001);

createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/graphql" && req.method === "POST") {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
    const variables = body.variables || {};
    const rows = db
      .prepare(
        `SELECT title, slug, excerpt, publishedAt, content FROM posts
         WHERE workspaceId = ? AND siteId = ? AND status = 'published'`,
      )
      .all(variables.workspaceId || "", variables.siteId || "");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: {
          posts: rows.map((r) => ({
            title: r.title,
            slug: r.slug,
            excerpt: r.excerpt,
            publishedAt: r.publishedAt,
            content: { document: r.content },
          })),
        },
      }),
    );
    return;
  }

  if (req.url === "/api/posts" && req.method === "POST") {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
    const id = crypto.randomUUID();
    db.prepare(
      `INSERT INTO posts (id, title, slug, excerpt, status, workspaceId, siteId, publishedAt, content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      id,
      body.title,
      body.slug,
      body.excerpt || "",
      body.status || "published",
      body.workspaceId,
      body.siteId,
      body.publishedAt || new Date().toISOString(),
      body.content || "",
    );
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    `<html><body><h1>OpenPages CMS</h1><p>Keystone Admin or lite GraphQL at <code>/api/graphql</code></p></body></html>`,
  );
}).listen(port, () => {
  console.log(`CMS lite listening on :${port}`);
});
