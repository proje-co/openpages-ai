import { buildLlmsTxt } from "@openpages/seo-aeo";
import { headers } from "next/headers";
import { resolveSiteByHost, snapshotDocument } from "@/lib/resolve";

export async function GET() {
  const h = await headers();
  const host = h.get("x-openpages-host") || "localhost:3002";
  const resolved = await resolveSiteByHost(host);
  if (!resolved?.publication) {
    return new Response(`# ${host}\n\nSite not published.\n`, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  const { document, siteName } = snapshotDocument(resolved.publication);
  const body = buildLlmsTxt({
    siteName,
    siteUrl: `https://${host}`,
    document,
  });
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
