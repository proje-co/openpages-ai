/**
 * Client-side AEO hints slot.
 * Wired for @xenova/transformers (Transformers.js) when the model pack is enabled.
 * Default path uses lightweight heuristics so the builder stays snappy offline.
 */
export type AeoHint = { id: string; message: string; severity: "info" | "warn" };

export function heuristicAeoHints(input: {
  text: string;
  keywords: string[];
  hasIntent: boolean;
  hasAnswer: boolean;
}): AeoHint[] {
  const hints: AeoHint[] = [];
  if (!input.hasIntent) {
    hints.push({
      id: "intent",
      message: "Add an AEO intent so answer engines know the page question.",
      severity: "warn",
    });
  }
  if (!input.hasAnswer) {
    hints.push({
      id: "answer",
      message: "Add a primary answer (Answer block or page.aeo.primaryAnswer).",
      severity: "warn",
    });
  }
  const lower = input.text.toLowerCase();
  const hit = input.keywords.filter((k) => lower.includes(k.toLowerCase()));
  if (input.keywords.length && hit.length === 0) {
    hints.push({
      id: "keywords",
      message: "Brand keywords missing from visible copy.",
      severity: "info",
    });
  }
  const words = lower.split(/\s+/).filter(Boolean).length;
  if (words < 40) {
    hints.push({
      id: "thin",
      message: "Copy looks thin for citation-friendly AEO.",
      severity: "info",
    });
  }
  return hints;
}

export async function transformersAeoHints(
  text: string,
): Promise<AeoHint[] | null> {
  try {
    // Optional dynamic import — only when @xenova/transformers is installed.
    const dynImport = new Function("m", "return import(m)") as (
      m: string,
    ) => Promise<{ pipeline?: unknown }>;
    const mod = await dynImport("@xenova/transformers").catch(() => null);
    if (!mod) return null;
    void text;
    return [
      {
        id: "transformers",
        message: "Transformers.js loaded — advanced AEO pass available.",
        severity: "info",
      },
    ];
  } catch {
    return null;
  }
}
