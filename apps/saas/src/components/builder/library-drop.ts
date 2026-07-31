/** Resolve where a library block should insert into the canvas page. */

export type LibraryDropResult =
  | { action: "none" }
  | { action: "append" }
  | { action: "insert"; index: number };

export function isLibraryDrag(active: {
  id: string | number;
  data?: { current?: { fromLibrary?: boolean } | null };
}): boolean {
  return Boolean(active.data?.current?.fromLibrary);
}

/**
 * Map a dnd-kit `over` target (and optional canvas hit-test) to an insert plan.
 * - canvas droppable → append
 * - existing block id → insert at that index
 * - pointer over canvas element (when over is null) → append
 */
export function resolveLibraryDrop(args: {
  overId: string | null;
  existingBlockIds: string[];
  pointerOverCanvas?: boolean;
}): LibraryDropResult {
  const { overId, existingBlockIds, pointerOverCanvas } = args;

  if (overId === "builder-canvas" || overId === "builder-canvas-empty") {
    return { action: "append" };
  }

  if (overId) {
    const index = existingBlockIds.indexOf(overId);
    if (index >= 0) return { action: "insert", index };
    // Unknown droppable (e.g. chrome) — still append if pointer is in canvas.
    if (pointerOverCanvas) return { action: "append" };
    return { action: "none" };
  }

  if (pointerOverCanvas) return { action: "append" };
  return { action: "none" };
}

export function isPointInRect(
  x: number,
  y: number,
  rect: { left: number; top: number; right: number; bottom: number },
): boolean {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}
