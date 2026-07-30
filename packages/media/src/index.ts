import sharp from "sharp";
import { z } from "zod";

export const MediaGenerateInputSchema = z.object({
  prompt: z.string().min(3),
  kind: z.enum(["image", "video"]),
  brandKit: z
    .object({
      primary: z.string().optional(),
      style: z.string().optional(),
    })
    .optional(),
});
export type MediaGenerateInput = z.infer<typeof MediaGenerateInputSchema>;

export type GeneratedAsset = {
  kind: "image" | "video";
  prompt: string;
  buffer: Buffer;
  contentType: string;
  width?: number;
  height?: number;
  posterBuffer?: Buffer;
  transcript?: string;
  provider: string;
};

function svgPlaceholder(prompt: string, primary = "#0F766E"): Buffer {
  const safe = prompt.replace(/[<>&]/g, "").slice(0, 120);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="${primary}" offset="0"/>
      <stop stop-color="#134E4A" offset="1"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="64" y="360" fill="white" font-size="42" font-family="Georgia, serif">${safe}</text>
</svg>`;
  return Buffer.from(svg);
}

export async function optimizeImage(
  input: Buffer,
): Promise<{ webp: Buffer; avif: Buffer; meta: sharp.Metadata }> {
  const image = sharp(input).rotate();
  const meta = await image.metadata();
  const webp = await image.clone().webp({ quality: 82 }).toBuffer();
  const avif = await image.clone().avif({ quality: 55 }).toBuffer();
  return { webp, avif, meta };
}

export async function generateMedia(
  raw: MediaGenerateInput,
): Promise<GeneratedAsset> {
  const input = MediaGenerateInputSchema.parse(raw);
  const provider =
    process.env.OPENPAGES_IMAGE_PROVIDER ||
    process.env.OPENAI_API_KEY ||
    "placeholder";

  if (input.kind === "image") {
    // Prefer OpenAI Images when key present; otherwise deterministic SVG→WebP placeholder.
    if (process.env.OPENAI_API_KEY && process.env.OPENPAGES_IMAGE_PROVIDER !== "placeholder") {
      try {
        const res = await fetch("https://api.openai.com/v1/images/generations", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-image-1",
            prompt: `${input.prompt}. Brand style: ${input.brandKit?.style ?? "clean modern teal"}`,
            size: "1280x720",
          }),
        });
        if (res.ok) {
          const json = (await res.json()) as {
            data?: Array<{ b64_json?: string; url?: string }>;
          };
          let buffer: Buffer | null = null;
          const first = json.data?.[0];
          if (first?.b64_json) buffer = Buffer.from(first.b64_json, "base64");
          else if (first?.url) {
            const img = await fetch(first.url);
            buffer = Buffer.from(await img.arrayBuffer());
          }
          if (buffer) {
            const { webp, meta } = await optimizeImage(buffer);
            return {
              kind: "image",
              prompt: input.prompt,
              buffer: webp,
              contentType: "image/webp",
              width: meta.width,
              height: meta.height,
              provider: "openai",
            };
          }
        }
      } catch {
        // fall through to placeholder
      }
    }

    const svg = svgPlaceholder(input.prompt, input.brandKit?.primary);
    const { webp, meta } = await optimizeImage(svg);
    return {
      kind: "image",
      prompt: input.prompt,
      buffer: webp,
      contentType: "image/webp",
      width: meta.width ?? 1280,
      height: meta.height ?? 720,
      provider: String(provider),
    };
  }

  // Short muted loop video: MVP generates poster + synthetic transcript; MP4 bytes via minimal placeholder.
  const posterSvg = svgPlaceholder(`VIDEO: ${input.prompt}`, input.brandKit?.primary);
  const { webp: poster } = await optimizeImage(posterSvg);
  const transcript = `Auto transcript for short hero video about: ${input.prompt}`;
  // Minimal valid-ish placeholder bytes (clients treat as downloadable asset URL in storage).
  const buffer = Buffer.from(
    `OpenPages AI video placeholder (≤15s loop)\nPrompt: ${input.prompt}\n`,
  );
  return {
    kind: "video",
    prompt: input.prompt,
    buffer,
    contentType: "video/mp4",
    posterBuffer: poster,
    transcript,
    provider: process.env.OPENPAGES_VIDEO_PROVIDER || "placeholder",
    width: 1280,
    height: 720,
  };
}

export function creditCost(kind: "image" | "video" | "chat" | "tool"): number {
  switch (kind) {
    case "image":
      return 10;
    case "video":
      return 40;
    case "chat":
      return 1;
    case "tool":
      return 2;
  }
}
