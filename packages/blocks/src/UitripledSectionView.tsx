"use client";

import { Suspense, useEffect, useRef } from "react";
import type { ElementOverride } from "@openpages/document-schema";
import { applyBlockElementState } from "./element-overrides";
import { findBlock } from "./registry";

export function UitripledSectionView({
  blockId,
  animationId,
  elements,
  textContent,
}: {
  blockId: string;
  animationId: string;
  elements?: Record<string, ElementOverride>;
  textContent?: Record<string, { original: string; value: string }>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = findBlock(animationId);
  const Comp = entry?.component;

  useEffect(() => {
    if (!ref.current) return;
    applyBlockElementState(ref.current, blockId, elements, textContent);
  }, [blockId, elements, textContent, animationId]);

  if (!Comp) {
    return <p>Missing block: {animationId}</p>;
  }

  return (
    <div ref={ref}>
      <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading…</div>}>
        <Comp />
      </Suspense>
    </div>
  );
}
