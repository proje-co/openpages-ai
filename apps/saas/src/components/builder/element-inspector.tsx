"use client";

import type { ElementOverride, ElementStyle } from "@openpages/document-schema";
import type { CatalogedElement } from "@openpages/blocks";

export type SelectedElement = {
  blockId: string;
  nodeId: string;
  tag: string;
  text: string;
  href?: string;
  styles: ElementStyle;
};

type Props = {
  selected: SelectedElement | null;
  catalog: CatalogedElement[];
  onSelectNode: (nodeId: string) => void;
  onChange: (patch: Partial<ElementOverride> & { styles?: ElementStyle }) => void;
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-xs">
      <span className="text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "h-9 w-full rounded-lg border border-border/60 bg-background/70 px-2 text-sm text-foreground";

export function ElementInspector({
  selected,
  catalog,
  onSelectNode,
  onChange,
}: Props) {
  if (!selected) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Element inspector</p>
        <p>Click any text, button, or link on the canvas to edit it.</p>
      </div>
    );
  }

  const styles = selected.styles || {};
  const isLinkable = selected.tag === "a" || selected.tag === "button";

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="border-b border-border/60 p-3">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Elements
        </div>
        <div className="mt-2 max-h-36 space-y-1 overflow-y-auto">
          {catalog.map((el) => (
            <button
              key={el.nodeId}
              type="button"
              onClick={() => onSelectNode(el.nodeId)}
              className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs ${
                el.nodeId === selected.nodeId
                  ? "bg-primary/15 text-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase">
                {el.tag}
              </span>
              <span className="truncate">{el.text || "(empty)"}</span>
            </button>
          ))}
          {!catalog.length ? (
            <p className="text-xs text-muted-foreground">No editable elements found.</p>
          ) : null}
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
          <div className="text-xs text-muted-foreground">Selected</div>
          <div className="mt-1 font-mono text-sm uppercase">{selected.tag}</div>
        </div>

        <Field label="Text / label">
          <textarea
            className={`${inputClass} min-h-[72px] py-2`}
            value={selected.text}
            onChange={(e) => onChange({ text: e.target.value })}
          />
        </Field>

        {isLinkable ? (
          <Field label="Link (href)">
            <input
              className={inputClass}
              placeholder="/pricing or https://…"
              value={selected.href || ""}
              onChange={(e) => onChange({ href: e.target.value })}
            />
          </Field>
        ) : null}

        <div className="grid grid-cols-2 gap-2">
          <Field label="Font size">
            <input
              className={inputClass}
              placeholder="16px"
              value={styles.fontSize || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, fontSize: e.target.value } })
              }
            />
          </Field>
          <Field label="Font weight">
            <select
              className={inputClass}
              value={styles.fontWeight || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, fontWeight: e.target.value } })
              }
            >
              <option value="">Default</option>
              <option value="300">Light</option>
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semibold</option>
              <option value="700">Bold</option>
              <option value="800">Extra bold</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="Text color">
            <input
              type="color"
              className="h-9 w-full cursor-pointer rounded-lg border border-border/60 bg-background"
              value={/^#/.test(styles.color || "") ? styles.color! : "#ffffff"}
              onChange={(e) =>
                onChange({ styles: { ...styles, color: e.target.value } })
              }
            />
          </Field>
          <Field label="Background">
            <input
              type="color"
              className="h-9 w-full cursor-pointer rounded-lg border border-border/60 bg-background"
              value={
                /^#/.test(styles.backgroundColor || "")
                  ? styles.backgroundColor!
                  : "#000000"
              }
              onChange={(e) =>
                onChange({
                  styles: { ...styles, backgroundColor: e.target.value },
                })
              }
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="Width">
            <input
              className={inputClass}
              placeholder="auto / 100% / 240px"
              value={styles.width || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, width: e.target.value } })
              }
            />
          </Field>
          <Field label="Height">
            <input
              className={inputClass}
              placeholder="auto / 48px"
              value={styles.height || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, height: e.target.value } })
              }
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="Padding">
            <input
              className={inputClass}
              placeholder="8px 16px"
              value={styles.padding || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, padding: e.target.value } })
              }
            />
          </Field>
          <Field label="Margin">
            <input
              className={inputClass}
              placeholder="0 0 16px"
              value={styles.margin || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, margin: e.target.value } })
              }
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="Radius">
            <input
              className={inputClass}
              placeholder="8px / 999px"
              value={styles.borderRadius || ""}
              onChange={(e) =>
                onChange({
                  styles: { ...styles, borderRadius: e.target.value },
                })
              }
            />
          </Field>
          <Field label="Align">
            <select
              className={inputClass}
              value={styles.textAlign || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, textAlign: e.target.value } })
              }
            >
              <option value="">Default</option>
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Field label="Line height">
            <input
              className={inputClass}
              placeholder="1.5 / 24px"
              value={styles.lineHeight || ""}
              onChange={(e) =>
                onChange({ styles: { ...styles, lineHeight: e.target.value } })
              }
            />
          </Field>
          <Field label="Letter spacing">
            <input
              className={inputClass}
              placeholder="0.02em"
              value={styles.letterSpacing || ""}
              onChange={(e) =>
                onChange({
                  styles: { ...styles, letterSpacing: e.target.value },
                })
              }
            />
          </Field>
        </div>

        <Field label="Max width">
          <input
            className={inputClass}
            placeholder="640px / 40rem"
            value={styles.maxWidth || ""}
            onChange={(e) =>
              onChange({ styles: { ...styles, maxWidth: e.target.value } })
            }
          />
        </Field>
      </div>
    </div>
  );
}
