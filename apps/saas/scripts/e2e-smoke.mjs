import { createEmptyDocument, parseSiteDocument } from "@openpages/document-schema";
import { generateNextApp } from "@openpages/codegen";
import { aeoChecklist, buildLlmsTxt } from "@openpages/seo-aeo";
import { applyToolToDocument } from "@openpages/ai-core";
import { creditCost } from "@openpages/media";

const BASE = process.env.SAAS_URL || "http://localhost:3000";

async function main() {
  console.log("OpenPages AI E2E smoke (offline unit + optional HTTP)");

  const doc = createEmptyDocument("E2E Co");
  parseSiteDocument(doc);
  const page = doc.pages[0];
  const checklist = aeoChecklist(page);
  console.log("AEO checklist items:", checklist.length);

  const mutated = applyToolToDocument(doc, "applyAeoPack", {
    pageId: page.id,
    intent: "What is E2E Co?",
    primaryAnswer: "E2E Co is a demo brand.",
    faq: [{ question: "Is this a test?", answer: "Yes." }],
  });
  console.log("AI tool ok:", mutated.message);

  const files = generateNextApp({
    document: mutated.document,
    siteName: "E2E Co",
    siteUrl: "https://e2e.openpages.ai",
  });
  console.log("Codegen files:", files.length);
  console.log("llms.txt sample length:", buildLlmsTxt({
    siteName: "E2E Co",
    siteUrl: "https://e2e.openpages.ai",
    document: mutated.document,
  }).length);
  console.log("Credit costs:", {
    chat: creditCost("chat"),
    image: creditCost("image"),
    video: creditCost("video"),
  });

  try {
    const res = await fetch(BASE);
    console.log("SaaS HTTP:", res.status);
  } catch {
    console.log("SaaS HTTP: skipped (server not running)");
  }

  console.log("E2E smoke passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
