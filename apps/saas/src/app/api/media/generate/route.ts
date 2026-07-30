import { generateMedia } from "@openpages/media";
import { NextResponse } from "next/server";
import { z } from "zod";
import { spendCredits } from "@/lib/credits";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { getSiteDocument, saveSiteDocument } from "@/lib/sites";
import { storeAssetLocally } from "@/lib/storage";

const Body = z.object({
  siteId: z.string(),
  kind: z.enum(["image", "video"]),
  prompt: z.string().min(3),
  pageId: z.string().optional(),
  blockId: z.string().optional(),
  alt: z.string().optional(),
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
    });
    if (!site) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });

    await spendCredits({
      workspaceId: site.workspaceId,
      userId,
      kind: body.kind,
      reason: `generate_${body.kind}`,
      meta: { prompt: body.prompt },
    });

    const asset = await generateMedia({
      kind: body.kind,
      prompt: body.prompt,
      brandKit: { primary: "#0F766E", style: "editorial teal" },
    });

    const filename = `${body.kind}-${Date.now()}.${body.kind === "image" ? "webp" : "mp4"}`;
    const url = await storeAssetLocally({
      siteId: site.id,
      filename,
      buffer: asset.buffer,
      contentType: asset.contentType,
    });

    let posterUrl: string | undefined;
    if (asset.posterBuffer) {
      posterUrl = await storeAssetLocally({
        siteId: site.id,
        filename: `poster-${Date.now()}.webp`,
        buffer: asset.posterBuffer,
        contentType: "image/webp",
      });
    }

    const row = await prisma.asset.create({
      data: {
        siteId: site.id,
        kind: body.kind === "image" ? "IMAGE" : "VIDEO",
        url,
        prompt: body.prompt,
        alt: body.alt ?? body.prompt.slice(0, 120),
        transcript: asset.transcript,
        width: asset.width,
        height: asset.height,
        contentType: asset.contentType,
        provider: asset.provider,
        meta: { posterUrl },
      },
    });

    if (body.pageId && body.blockId) {
      const document = await getSiteDocument(site.id);
      const page = document.pages.find((p) => p.id === body.pageId);
      const block = page?.blocks.find((b) => b.id === body.blockId);
      if (block) {
        if (block.type === "Hero") {
          block.mediaUrl = url;
          block.mediaType = body.kind;
        } else if (block.type === "Image" && body.kind === "image") {
          block.src = url;
          block.alt = body.alt ?? block.alt;
        } else if (block.type === "Video" && body.kind === "video") {
          block.src = url;
          block.poster = posterUrl;
          block.transcript = asset.transcript;
        }
        await saveSiteDocument(site.id, document, "Media attach");
      }
    }

    return NextResponse.json({ asset: row, url, posterUrl });
  } catch (e) {
    const message = e instanceof Error ? e.message : "ERROR";
    const status = message === "INSUFFICIENT_CREDITS" ? 402 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
