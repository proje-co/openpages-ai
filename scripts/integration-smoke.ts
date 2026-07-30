import { PrismaClient } from "@prisma/client";
import { createEmptyDocument } from "@openpages/document-schema";
import { generateNextApp } from "@openpages/codegen";
import { generateMedia } from "@openpages/media";
import { applyToolToDocument } from "@openpages/ai-core";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: "demo@openpages.ai" },
    include: { memberships: true },
  });
  if (!user) throw new Error("no user");
  const workspaceId = user.memberships[0].workspaceId;
  const doc = createEmptyDocument("Demo Site");
  const site = await prisma.site.create({
    data: {
      workspaceId,
      name: "Demo Site",
      slug: "demo-site",
      document: { create: { version: 1, data: doc } },
      domains: {
        create: {
          host: "demo-site.openpages.ai",
          status: "PENDING",
          isPrimary: true,
        },
      },
    },
  });
  const pageId = doc.pages[0].id;
  const { document } = applyToolToDocument(doc, "applyAeoPack", {
    pageId,
    intent: "What is Demo Site?",
    primaryAnswer: "A demo published with OpenPages AI.",
    faq: [
      {
        question: "Is this real?",
        answer: "It is a working MVP scaffold.",
      },
    ],
  });
  await prisma.siteDocument.update({
    where: { siteId: site.id },
    data: { data: document, version: document.version },
  });
  const media = await generateMedia({
    kind: "image",
    prompt: "teal abstract hero",
  });
  console.log("media", media.contentType, media.buffer.length);
  const files = generateNextApp({
    document,
    siteName: "Demo Site",
    siteUrl: "https://demo-site.openpages.ai",
  });
  const pub = await prisma.publication.create({
    data: {
      siteId: site.id,
      status: "LIVE",
      snapshot: JSON.parse(
        JSON.stringify({
          document,
          cmsContentHash: "x",
          publishedAt: new Date().toISOString(),
          siteSlug: "demo-site",
          siteName: "Demo Site",
          posts: [],
        }),
      ),
      cmsContentHash: "x",
      url: "http://demo-site.openpages.ai",
    },
  });
  await prisma.auditReport.create({
    data: {
      siteId: site.id,
      url: pub.url!,
      scores: { seo: 0.96, aeo: 0.9, performance: 0.92 },
      raw: { engine: "unlighthouse-compatible" },
    },
  });
  console.log(
    JSON.stringify(
      { siteId: site.id, publicationId: pub.id, exportFiles: files.length },
      null,
      2,
    ),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
