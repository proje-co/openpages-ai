"use client";

import { findBlock } from "@openpages/blocks";
import { DragOverlay as DndOverlay } from "@dnd-kit/core";

export function BuilderDragOverlay({ activeId }: { activeId: string | null }) {
  if (!activeId) return <DndOverlay />;
  const entry = findBlock(activeId);
  return (
    <DndOverlay>
      {entry ? (
        <div className="rounded-lg border border-primary bg-card p-3 shadow-xl">
          <div className="text-sm font-medium">{entry.name}</div>
          <div className="text-xs text-muted-foreground">{entry.description}</div>
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-3 shadow-xl text-sm">Moving block…</div>
      )}
    </DndOverlay>
  );
}
