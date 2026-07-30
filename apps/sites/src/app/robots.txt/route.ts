import { buildRobotsTxt } from "@openpages/seo-aeo";
import { headers } from "next/headers";

export async function GET() {
  const h = await headers();
  const host = h.get("x-openpages-host") || "localhost:3002";
  const body = buildRobotsTxt(`https://${host}`);
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
