"use client";

import { findBlock } from "@openpages/blocks";
import { Suspense, type ReactNode } from "react";

export function LazyBlock({
  id,
  fallback = null,
}: {
  id: string;
  fallback?: ReactNode;
}) {
  const entry = findBlock(id);
  if (!entry) return null;
  const Comp = entry.component;
  return (
    <Suspense fallback={fallback ?? <div className="p-8 text-sm text-muted-foreground">Loading…</div>}>
      <Comp />
    </Suspense>
  );
}
