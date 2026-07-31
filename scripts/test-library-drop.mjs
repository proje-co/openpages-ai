import assert from "node:assert/strict";

/** Mirrors apps/saas/src/components/builder/library-drop.ts */
function resolveLibraryDrop({ overId, existingBlockIds, pointerOverCanvas }) {
  if (overId === "builder-canvas" || overId === "builder-canvas-empty") {
    return { action: "append" };
  }
  if (overId) {
    const index = existingBlockIds.indexOf(overId);
    if (index >= 0) return { action: "insert", index };
    if (pointerOverCanvas) return { action: "append" };
    return { action: "none" };
  }
  if (pointerOverCanvas) return { action: "append" };
  return { action: "none" };
}

function isPointInRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

assert.deepEqual(
  resolveLibraryDrop({ overId: "builder-canvas", existingBlockIds: ["a", "b"] }),
  { action: "append" },
);
assert.deepEqual(
  resolveLibraryDrop({ overId: "b", existingBlockIds: ["a", "b", "c"] }),
  { action: "insert", index: 1 },
);
assert.deepEqual(
  resolveLibraryDrop({
    overId: null,
    existingBlockIds: ["a"],
    pointerOverCanvas: true,
  }),
  { action: "append" },
);
assert.deepEqual(
  resolveLibraryDrop({
    overId: null,
    existingBlockIds: ["a"],
    pointerOverCanvas: false,
  }),
  { action: "none" },
);
assert.deepEqual(
  resolveLibraryDrop({
    overId: "unknown",
    existingBlockIds: ["a"],
    pointerOverCanvas: true,
  }),
  { action: "append" },
);
assert.equal(isPointInRect(50, 50, { left: 10, top: 10, right: 100, bottom: 200 }), true);
assert.equal(isPointInRect(5, 50, { left: 10, top: 10, right: 100, bottom: 200 }), false);

console.log("library-drop tests passed");
