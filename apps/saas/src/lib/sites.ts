import { createEmptyDocument, parseSiteDocument } from "@openpages/document-schema";
import { prisma } from "./prisma";

export async function createSiteForWorkspace(input: {
  workspaceId: string;
  name: string;
  slug: string;
}) {
  const document = createEmptyDocument(input.name);
  const site = await prisma.site.create({
    data: {
      workspaceId: input.workspaceId,
      name: input.name,
      slug: input.slug,
      themeJSON: document.theme,
      brandVoiceJSON: document.brandVoice,
      document: {
        create: {
          version: document.version,
          data: document,
        },
      },
      domains: {
        create: {
          host: `${input.slug}.${process.env.ROOT_DOMAIN || "openpages.ai"}`,
          status: "PENDING",
          isPrimary: true,
        },
      },
      versions: {
        create: {
          version: document.version,
          data: document,
          label: "Initial",
        },
      },
    },
    include: { document: true, domains: true },
  });

  await prisma.keystoneLink.upsert({
    where: { workspaceId: input.workspaceId },
    create: {
      workspaceId: input.workspaceId,
      tenantKey: input.workspaceId,
      adminUrl: `${process.env.KEYSTONE_URL || "http://localhost:3001"}`,
    },
    update: {},
  });

  return site;
}

export async function getSiteDocument(siteId: string) {
  const row = await prisma.siteDocument.findUnique({ where: { siteId } });
  if (!row) throw new Error("DOCUMENT_NOT_FOUND");
  return parseSiteDocument(row.data);
}

export async function saveSiteDocument(
  siteId: string,
  data: unknown,
  label?: string,
) {
  const document = parseSiteDocument(data);
  const updated = await prisma.siteDocument.update({
    where: { siteId },
    data: {
      version: document.version,
      data: document,
    },
  });
  await prisma.documentVersion.create({
    data: {
      siteId,
      version: document.version,
      data: document,
      label,
    },
  });
  return updated;
}
