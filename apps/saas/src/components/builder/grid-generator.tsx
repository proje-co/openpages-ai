"use client";

import { useMemo, useState } from "react";

type Cell = { row: number; col: number; rowSpan: number; colSpan: number };

function generateCode(cols: number, gap: number, cells: Cell[]) {
  const items = cells
    .map(
      (c) =>
        `  <div className="col-span-${c.colSpan} row-span-${c.rowSpan} rounded-lg bg-muted p-4" />`,
    )
    .join("\n");
  return `<div className="grid grid-cols-${cols} gap-${gap}">\n${items}\n</div>`;
}

export function GridGeneratorPanel() {
  const [cols, setCols] = useState(4);
  const [gap, setGap] = useState(4);
  const [cells, setCells] = useState<Cell[]>([
    { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
    { row: 1, col: 3, rowSpan: 1, colSpan: 2 },
    { row: 2, col: 3, rowSpan: 1, colSpan: 1 },
    { row: 2, col: 4, rowSpan: 1, colSpan: 1 },
  ]);
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => generateCode(cols, gap, cells), [cols, gap, cells]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 overflow-y-auto overscroll-contain p-3">
      <div>
        <h3 className="text-sm font-semibold">Grid Generator</h3>
        <p className="text-xs text-muted-foreground">
          UITripled-style Tailwind bento grid composer
        </p>
      </div>
      <label className="text-xs">
        Columns: {cols}
        <input
          type="range"
          min={2}
          max={6}
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </label>
      <label className="text-xs">
        Gap: {gap}
        <input
          type="range"
          min={1}
          max={8}
          value={gap}
          onChange={(e) => setGap(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </label>
      <div
        className="grid gap-2 rounded-lg border border-border bg-background p-2"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cells.map((c, i) => (
          <button
            key={i}
            type="button"
            className="rounded-md bg-primary/15 p-3 text-xs"
            style={{ gridColumn: `span ${c.colSpan}`, gridRow: `span ${c.rowSpan}` }}
            onClick={() =>
              setCells((prev) =>
                prev.map((cell, idx) =>
                  idx === i
                    ? {
                        ...cell,
                        colSpan: cell.colSpan >= 3 ? 1 : cell.colSpan + 1,
                      }
                    : cell,
                ),
              )
            }
          >
            {c.colSpan}×{c.rowSpan}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="rounded-md border border-border px-2 py-1.5 text-xs"
        onClick={() =>
          setCells((prev) => [
            ...prev,
            { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
          ])
        }
      >
        Add cell
      </button>
      <pre className="overflow-x-auto rounded-md bg-muted p-2 text-[10px] leading-relaxed">
        {code}
      </pre>
      <button
        type="button"
        className="rounded-md bg-primary px-2 py-1.5 text-xs text-primary-foreground"
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy Tailwind"}
      </button>
    </div>
  );
}
