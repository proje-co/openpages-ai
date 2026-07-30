"use client";

import { useMemo, useState } from "react";

type Layer = {
  id: string;
  color: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  blur: number;
};

export function BackgroundBuilderPanel() {
  const [layers, setLayers] = useState<Layer[]>([
    {
      id: "a",
      color: "#2dd4bf",
      x: 20,
      y: 10,
      size: 55,
      opacity: 0.45,
      blur: 60,
    },
    {
      id: "b",
      color: "#f59e0b",
      x: 70,
      y: 40,
      size: 45,
      opacity: 0.35,
      blur: 70,
    },
  ]);
  const [copied, setCopied] = useState(false);

  const css = useMemo(() => {
    const blobs = layers
      .map(
        (l) =>
          `radial-gradient(circle at ${l.x}% ${l.y}%, ${l.color}${Math.round(
            l.opacity * 255,
          )
            .toString(16)
            .padStart(2, "0")} 0%, transparent ${l.size}%)`,
      )
      .join(",\n    ");
    return `background:
    ${blobs},
    hsl(var(--background));
backdrop-filter: blur(${Math.max(...layers.map((l) => l.blur / 4))}px);`;
  }, [layers]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 overflow-y-auto overscroll-contain p-3">
      <div>
        <h3 className="text-sm font-semibold">Background Builder</h3>
        <p className="text-xs text-muted-foreground">
          UITripled Aurora-style layered gradients
        </p>
      </div>
      <div
        className="h-40 rounded-xl border border-border"
        style={{
          background: `${layers
            .map(
              (l) =>
                `radial-gradient(circle at ${l.x}% ${l.y}%, ${l.color} 0%, transparent ${l.size}%)`,
            )
            .join(", ")}, hsl(var(--background))`,
        }}
      />
      {layers.map((layer) => (
        <div key={layer.id} className="space-y-1 rounded-md border border-border p-2">
          <div className="flex items-center justify-between text-xs">
            <span>Layer {layer.id}</span>
            <input
              type="color"
              value={layer.color}
              onChange={(e) =>
                setLayers((prev) =>
                  prev.map((l) =>
                    l.id === layer.id ? { ...l, color: e.target.value } : l,
                  ),
                )
              }
            />
          </div>
          <label className="block text-[10px] text-muted-foreground">
            X {layer.x}
            <input
              type="range"
              min={0}
              max={100}
              value={layer.x}
              className="w-full"
              onChange={(e) =>
                setLayers((prev) =>
                  prev.map((l) =>
                    l.id === layer.id ? { ...l, x: Number(e.target.value) } : l,
                  ),
                )
              }
            />
          </label>
          <label className="block text-[10px] text-muted-foreground">
            Y {layer.y}
            <input
              type="range"
              min={0}
              max={100}
              value={layer.y}
              className="w-full"
              onChange={(e) =>
                setLayers((prev) =>
                  prev.map((l) =>
                    l.id === layer.id ? { ...l, y: Number(e.target.value) } : l,
                  ),
                )
              }
            />
          </label>
        </div>
      ))}
      <pre className="overflow-x-auto rounded-md bg-muted p-2 text-[10px]">{css}</pre>
      <button
        type="button"
        className="rounded-md bg-primary px-2 py-1.5 text-xs text-primary-foreground"
        onClick={async () => {
          await navigator.clipboard.writeText(css);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy CSS"}
      </button>
    </div>
  );
}
