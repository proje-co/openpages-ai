import { createHash } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export async function storeAssetLocally(input: {
  siteId: string;
  filename: string;
  buffer: Buffer;
  contentType: string;
}): Promise<string> {
  const dir = path.join(process.cwd(), "public", "uploads", input.siteId);
  await mkdir(dir, { recursive: true });
  const filePath = path.join(dir, input.filename);
  await writeFile(filePath, input.buffer);
  return `/uploads/${input.siteId}/${input.filename}`;
}

export function hashCmsContent(payload: unknown): string {
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}
