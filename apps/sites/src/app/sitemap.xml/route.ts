import { buildSitemapXml } from "@openpages/seo-aeo";
import { headers } from "next/headers";
import { resolveSiteByHost, snapshotDocument } from "@/lib/resolve";

export async function GET() {
  const h = await headers();
  const host = h.get("x-openpages-host") || "localhost:3002";
  const resolved = await resolveSiteByHost(host);
  if (!resolved?.publication) {
    return new Response("<?xml version=\"1.0\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"></urlset>", {
      headers: { "Content-Type": "application/xml" },
    });
  }
  const { document } = snapshotDocument(resolved.publication);
  const body = buildSitemapXml(`https://${host}`, document);
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
