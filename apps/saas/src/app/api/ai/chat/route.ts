import { openai } from "@ai-sdk/openai";
import {
  applyToolToDocument,
  buildSystemPrompt,
  planBlogOutline,
  planLandingGeneration,
  ragContextFromDocs,
  toolSchemas,
} from "@openpages/ai-core";
import { parseSiteDocument } from "@openpages/document-schema";
import { generateText, tool } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { spendCredits } from "@/lib/credits";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/session";
import { saveSiteDocument } from "@/lib/sites";

const Body = z.object({
  siteId: z.string(),
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
  selection: z
    .object({
      pageId: z.string().optional(),
      blockId: z.string().optional(),
    })
    .optional(),
  autoApply: z.boolean().default(true),
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
      include: {
        document: true,
        workspace: { include: { brandDocs: true } },
      },
    });
    if (!site?.document) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });

    await spendCredits({
      workspaceId: site.workspaceId,
      userId,
      kind: "chat",
      reason: "ai_chat",
    });

    let document = parseSiteDocument(site.document.data);
    const brandDocs = site.workspace.brandDocs.map((d) => `${d.title}\n${d.content}`);
    const lastUser = [...body.messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const rag = ragContextFromDocs(brandDocs, lastUser);

    const toolResults: Array<{ tool: string; message: string }> = [];
    let mediaJobs: Array<{
      kind: "image" | "video";
      prompt: string;
      pageId?: string;
      blockId?: string;
    }> = [];

    const runTool = (name: keyof typeof toolSchemas, args: unknown) => {
      const result = applyToolToDocument(document, name, args);
      document = result.document;
      toolResults.push({ tool: name, message: result.message });
      if (result.mutation.type === "media") {
        mediaJobs.push({
          kind: result.mutation.kind,
          prompt: result.mutation.prompt,
          pageId: result.mutation.pageId,
          blockId: result.mutation.blockId,
        });
      }
      return result.message;
    };

    if (!process.env.OPENAI_API_KEY) {
      // Deterministic offline copilot for local/dev without keys
      if (/landing|site|page/i.test(lastUser)) {
        planLandingGeneration(lastUser).forEach(() => undefined);
        runTool("applyAeoPack", {
          pageId: body.selection?.pageId ?? document.pages[0]?.id,
          intent: lastUser.slice(0, 80),
          primaryAnswer: `OpenPages AI helps you ${lastUser}`,
          faq: [
            {
              question: "What is OpenPages AI?",
              answer: "An AI-native SEO/AEO website studio.",
            },
          ],
        });
        runTool("insertBlock", {
          pageId: body.selection?.pageId ?? document.pages[0]?.id,
          blockType: "Features",
        });
      } else if (/blog/i.test(lastUser)) {
        const outline = planBlogOutline(lastUser);
        toolResults.push({ tool: "planBlogOutline", message: outline.join("\n") });
      } else if (/image/i.test(lastUser)) {
        mediaJobs.push({
          kind: "image",
          prompt: lastUser,
          pageId: body.selection?.pageId,
          blockId: body.selection?.blockId,
        });
      } else if (/video/i.test(lastUser)) {
        mediaJobs.push({
          kind: "video",
          prompt: lastUser,
          pageId: body.selection?.pageId,
          blockId: body.selection?.blockId,
        });
      } else if (body.selection?.pageId) {
        runTool("runAeoCritique", { pageId: body.selection.pageId });
      }

      if (body.autoApply) {
        await saveSiteDocument(site.id, document, "AI copilot");
      }

      return NextResponse.json({
        role: "assistant",
        content:
          toolResults.map((t) => t.message).join("\n") ||
          "Tell me what to build — pages, AEO packs, images, or video.",
        document,
        toolResults,
        mediaJobs,
        planHints: {
          landing: planLandingGeneration(lastUser),
          blog: planBlogOutline(lastUser),
        },
      });
    }

    const result = await generateText({
      model: openai("gpt-4o-mini"),
      system: buildSystemPrompt({
        document,
        selection: body.selection,
        brandDocs: rag,
      }),
      messages: body.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      tools: {
        createPage: tool({
          description: "Create a new page",
          parameters: toolSchemas.createPage,
          execute: async (args) => runTool("createPage", args),
        }),
        updatePageMeta: tool({
          description: "Update page SEO/AEO meta",
          parameters: toolSchemas.updatePageMeta,
          execute: async (args) => runTool("updatePageMeta", args),
        }),
        setNav: tool({
          description: "Replace navigation items",
          parameters: toolSchemas.setNav,
          execute: async (args) => runTool("setNav", args),
        }),
        insertBlock: tool({
          description: "Insert a block into a page",
          parameters: toolSchemas.insertBlock,
          execute: async (args) => runTool("insertBlock", args),
        }),
        updateBlock: tool({
          description: "Patch a block",
          parameters: toolSchemas.updateBlock,
          execute: async (args) => runTool("updateBlock", args),
        }),
        deleteBlock: tool({
          description: "Delete a block",
          parameters: toolSchemas.deleteBlock,
          execute: async (args) => runTool("deleteBlock", args),
        }),
        moveBlock: tool({
          description: "Move a block",
          parameters: toolSchemas.moveBlock,
          execute: async (args) => runTool("moveBlock", args),
        }),
        generateCopy: tool({
          description: "Generate copy into page/block",
          parameters: toolSchemas.generateCopy,
          execute: async (args) => runTool("generateCopy", args),
        }),
        applySeoPack: tool({
          description: "Apply SEO title/description",
          parameters: toolSchemas.applySeoPack,
          execute: async (args) => runTool("applySeoPack", args),
        }),
        applyAeoPack: tool({
          description: "Apply AEO intent/answer/FAQ",
          parameters: toolSchemas.applyAeoPack,
          execute: async (args) => runTool("applyAeoPack", args),
        }),
        generateImage: tool({
          description: "Generate an image asset",
          parameters: toolSchemas.generateImage,
          execute: async (args) => runTool("generateImage", args),
        }),
        generateVideo: tool({
          description: "Generate a short video asset",
          parameters: toolSchemas.generateVideo,
          execute: async (args) => runTool("generateVideo", args),
        }),
        suggestInternalLinks: tool({
          description: "Suggest internal links",
          parameters: toolSchemas.suggestInternalLinks,
          execute: async (args) => runTool("suggestInternalLinks", args),
        }),
        runAeoCritique: tool({
          description: "Critique AEO readiness",
          parameters: toolSchemas.runAeoCritique,
          execute: async (args) => runTool("runAeoCritique", args),
        }),
      },
      maxSteps: 6,
    });

    await spendCredits({
      workspaceId: site.workspaceId,
      userId,
      kind: "tool",
      reason: "ai_tools",
      meta: { count: toolResults.length },
    });

    if (body.autoApply) {
      await saveSiteDocument(site.id, document, "AI copilot");
    }

    return NextResponse.json({
      role: "assistant",
      content: result.text || toolResults.map((t) => t.message).join("\n"),
      document,
      toolResults,
      mediaJobs,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "ERROR";
    const status = message === "UNAUTHORIZED" ? 401 : message === "INSUFFICIENT_CREDITS" ? 402 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
