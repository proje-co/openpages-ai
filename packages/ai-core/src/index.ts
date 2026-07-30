import {
  BlockSchema,
  createDefaultBlock,
  findPage,
  type Block,
  type BlockType,
  type SiteDocument,
} from "@openpages/document-schema";
import { aeoChecklist } from "@openpages/seo-aeo";
import { z } from "zod";

export const CopilotSelectionSchema = z.object({
  pageId: z.string().optional(),
  blockId: z.string().optional(),
});
export type CopilotSelection = z.infer<typeof CopilotSelectionSchema>;

export function buildSystemPrompt(input: {
  document: SiteDocument;
  selection?: CopilotSelection;
  brandDocs?: string;
}): string {
  const { document, selection, brandDocs } = input;
  const page = selection?.pageId
    ? findPage(document, selection.pageId)
    : document.pages[0];
  return [
    "You are the OpenPages AI copilot for a block-based website studio.",
    "Mutate the site only via provided tools. Prefer AEO-native structure: intent, primary answer, FAQ, HowTo.",
    `Brand: ${document.theme.brandName}`,
    `Brand voice: ${document.brandVoice.tone}; audience: ${document.brandVoice.audience}`,
    `Keywords: ${document.brandVoice.keywords.join(", ") || "(none)"}`,
    selection?.pageId ? `Selected pageId: ${selection.pageId}` : "",
    selection?.blockId ? `Selected blockId: ${selection.blockId}` : "",
    page
      ? `Current page route ${page.route}; intent: ${page.aeo.intent}; answer: ${page.aeo.primaryAnswer}`
      : "",
    brandDocs ? `Brand docs:\n${brandDocs.slice(0, 6000)}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export const toolSchemas = {
  createPage: z.object({
    title: z.string(),
    route: z.string(),
    intent: z.string().optional(),
    primaryAnswer: z.string().optional(),
  }),
  updatePageMeta: z.object({
    pageId: z.string(),
    title: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    intent: z.string().optional(),
    primaryAnswer: z.string().optional(),
  }),
  setNav: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        href: z.string(),
      }),
    ),
  }),
  insertBlock: z.object({
    pageId: z.string(),
    blockType: z.string(),
    index: z.number().int().optional(),
  }),
  updateBlock: z.object({
    pageId: z.string(),
    blockId: z.string(),
    patch: z.record(z.unknown()),
  }),
  deleteBlock: z.object({
    pageId: z.string(),
    blockId: z.string(),
  }),
  moveBlock: z.object({
    pageId: z.string(),
    blockId: z.string(),
    toIndex: z.number().int(),
  }),
  generateCopy: z.object({
    pageId: z.string(),
    blockId: z.string().optional(),
    brief: z.string(),
  }),
  applySeoPack: z.object({
    pageId: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  applyAeoPack: z.object({
    pageId: z.string(),
    intent: z.string(),
    primaryAnswer: z.string(),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
  generateImage: z.object({
    prompt: z.string(),
    pageId: z.string().optional(),
    blockId: z.string().optional(),
  }),
  generateVideo: z.object({
    prompt: z.string(),
    pageId: z.string().optional(),
    blockId: z.string().optional(),
  }),
  suggestInternalLinks: z.object({
    pageId: z.string(),
  }),
  runAeoCritique: z.object({
    pageId: z.string(),
  }),
};

export type DocumentMutation =
  | { type: "replace"; document: SiteDocument }
  | { type: "noop"; message: string }
  | {
      type: "media";
      kind: "image" | "video";
      prompt: string;
      pageId?: string;
      blockId?: string;
    };

function newId() {
  return crypto.randomUUID();
}

export function applyToolToDocument(
  document: SiteDocument,
  toolName: keyof typeof toolSchemas,
  rawArgs: unknown,
): { document: SiteDocument; mutation: DocumentMutation; message: string } {
  const args = toolSchemas[toolName].parse(rawArgs);
  const next: SiteDocument = structuredClone(document);
  next.version += 1;

  switch (toolName) {
    case "createPage": {
      const a = args as z.infer<typeof toolSchemas.createPage>;
      const id = newId();
      next.pages.push({
        id,
        title: a.title,
        slug: a.route.replace(/^\//, "") || "page",
        route: a.route.startsWith("/") ? a.route : `/${a.route}`,
        seo: { title: a.title, description: a.primaryAnswer ?? "", noIndex: false },
        aeo: {
          intent: a.intent ?? "",
          primaryAnswer: a.primaryAnswer ?? "",
          entities: [next.theme.brandName],
          faq: [],
          llmsHints: [],
        },
        blocks: [
          createDefaultBlock("Hero"),
          createDefaultBlock("AnswerBlock"),
          createDefaultBlock("Footer"),
        ],
      });
      next.nav.items.push({
        id: newId(),
        label: a.title,
        href: a.route.startsWith("/") ? a.route : `/${a.route}`,
      });
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: `Created page ${a.title}`,
      };
    }
    case "updatePageMeta": {
      const a = args as z.infer<typeof toolSchemas.updatePageMeta>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      if (a.title) page.title = a.title;
      if (a.seoTitle) page.seo.title = a.seoTitle;
      if (a.seoDescription) page.seo.description = a.seoDescription;
      if (a.intent) page.aeo.intent = a.intent;
      if (a.primaryAnswer) page.aeo.primaryAnswer = a.primaryAnswer;
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Updated page meta",
      };
    }
    case "setNav": {
      const a = args as z.infer<typeof toolSchemas.setNav>;
      next.nav.items = a.items;
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Updated navigation",
      };
    }
    case "insertBlock": {
      const a = args as z.infer<typeof toolSchemas.insertBlock>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      const block = createDefaultBlock(a.blockType as BlockType);
      if (typeof a.index === "number") page.blocks.splice(a.index, 0, block);
      else page.blocks.push(block);
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: `Inserted ${a.blockType}`,
      };
    }
    case "updateBlock": {
      const a = args as z.infer<typeof toolSchemas.updateBlock>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      const idx = page.blocks.findIndex((b) => b.id === a.blockId);
      if (idx < 0) throw new Error("Block not found");
      const merged = { ...page.blocks[idx], ...a.patch, id: a.blockId };
      page.blocks[idx] = BlockSchema.parse(merged);
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Updated block",
      };
    }
    case "deleteBlock": {
      const a = args as z.infer<typeof toolSchemas.deleteBlock>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      page.blocks = page.blocks.filter((b) => b.id !== a.blockId);
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Deleted block",
      };
    }
    case "moveBlock": {
      const a = args as z.infer<typeof toolSchemas.moveBlock>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      const from = page.blocks.findIndex((b) => b.id === a.blockId);
      if (from < 0) throw new Error("Block not found");
      const [item] = page.blocks.splice(from, 1);
      page.blocks.splice(a.toIndex, 0, item);
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Moved block",
      };
    }
    case "generateCopy": {
      const a = args as z.infer<typeof toolSchemas.generateCopy>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      if (a.blockId) {
        const block = page.blocks.find((b) => b.id === a.blockId);
        if (block && block.type === "Hero") {
          block.headline = a.brief.slice(0, 80);
          block.subheadline = a.brief;
        } else if (block && block.type === "RichText") {
          block.html = `<p>${a.brief}</p>`;
        } else if (block && block.type === "AnswerBlock") {
          block.answer = a.brief;
        }
      } else {
        page.aeo.primaryAnswer = a.brief;
      }
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Applied generated copy",
      };
    }
    case "applySeoPack": {
      const a = args as z.infer<typeof toolSchemas.applySeoPack>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      page.seo.title = a.title;
      page.seo.description = a.description;
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Applied SEO pack",
      };
    }
    case "applyAeoPack": {
      const a = args as z.infer<typeof toolSchemas.applyAeoPack>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      page.aeo.intent = a.intent;
      page.aeo.primaryAnswer = a.primaryAnswer;
      if (a.faq) page.aeo.faq = a.faq;
      const answer = page.blocks.find((b) => b.type === "AnswerBlock");
      if (answer && answer.type === "AnswerBlock") {
        answer.question = a.intent;
        answer.answer = a.primaryAnswer;
      } else {
        page.blocks.unshift({
          id: newId(),
          type: "AnswerBlock",
          question: a.intent,
          answer: a.primaryAnswer,
        });
      }
      if (a.faq?.length) {
        const faq = page.blocks.find((b) => b.type === "FAQ");
        if (faq && faq.type === "FAQ") faq.items = a.faq;
        else
          page.blocks.push({
            id: newId(),
            type: "FAQ",
            title: "FAQ",
            items: a.faq,
          });
      }
      return {
        document: next,
        mutation: { type: "replace", document: next },
        message: "Applied AEO pack",
      };
    }
    case "generateImage": {
      const a = args as z.infer<typeof toolSchemas.generateImage>;
      return {
        document,
        mutation: {
          type: "media",
          kind: "image",
          prompt: a.prompt,
          pageId: a.pageId,
          blockId: a.blockId,
        },
        message: "Image generation requested",
      };
    }
    case "generateVideo": {
      const a = args as z.infer<typeof toolSchemas.generateVideo>;
      return {
        document,
        mutation: {
          type: "media",
          kind: "video",
          prompt: a.prompt,
          pageId: a.pageId,
          blockId: a.blockId,
        },
        message: "Video generation requested",
      };
    }
    case "suggestInternalLinks": {
      const a = args as z.infer<typeof toolSchemas.suggestInternalLinks>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      const suggestions = next.pages
        .filter((p) => p.id !== page.id)
        .map((p) => `- [${p.title}](${p.route})`)
        .join("\n");
      return {
        document,
        mutation: { type: "noop", message: suggestions || "No other pages" },
        message: suggestions || "No other pages",
      };
    }
    case "runAeoCritique": {
      const a = args as z.infer<typeof toolSchemas.runAeoCritique>;
      const page = findPage(next, a.pageId);
      if (!page) throw new Error("Page not found");
      const checklist = aeoChecklist(page);
      const report = checklist
        .map((c) => `${c.ok ? "OK" : "FIX"} — ${c.label}`)
        .join("\n");
      return {
        document,
        mutation: { type: "noop", message: report },
        message: report,
      };
    }
    default:
      throw new Error(`Unknown tool`);
  }
}

/** Lightweight LangChain-style agent plan for multi-step site generation */
export function planLandingGeneration(brief: string): string[] {
  return [
    `createPage for Home from brief: ${brief}`,
    "applyAeoPack with intent + primaryAnswer",
    "insertBlock Features, FAQ, CTA, Pricing",
    "generateImage for hero",
    "runAeoCritique",
  ];
}

export function planBlogOutline(topic: string): string[] {
  return [
    `Create blog index intent for ${topic}`,
    "Outline 3 posts with titles and primary answers",
    "Seed Keystone drafts via CMS API",
  ];
}

export function ragContextFromDocs(docs: string[], query: string): string {
  const q = query.toLowerCase();
  const ranked = docs
    .map((d) => ({
      d,
      score: q
        .split(/\s+/)
        .filter(Boolean)
        .reduce((s, w) => s + (d.toLowerCase().includes(w) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.d);
  return ranked.join("\n---\n");
}

export type { Block };
