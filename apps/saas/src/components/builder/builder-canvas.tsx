"use client";

import {
  applyBlockElementState,
  catalogEditableElements,
  findBlock,
  type CatalogedElement,
} from "@openpages/blocks";
import { themeToCssVars } from "@openpages/blocks";
import type { Block, ElementStyle, ThemeTokens } from "@openpages/document-schema";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";

export type DevicePreview = "desktop" | "tablet" | "mobile";

export type SelectedElementState = {
  blockId: string;
  nodeId: string;
  tag: string;
  text: string;
  href?: string;
  styles: ElementStyle;
};

function readInlineStyles(el: HTMLElement): ElementStyle {
  return {
    fontSize: el.style.fontSize || undefined,
    fontWeight: el.style.fontWeight || undefined,
    color: el.style.color || undefined,
    backgroundColor: el.style.backgroundColor || undefined,
    width: el.style.width || undefined,
    height: el.style.height || undefined,
    padding: el.style.padding || undefined,
    margin: el.style.margin || undefined,
    borderRadius: el.style.borderRadius || undefined,
    textAlign: el.style.textAlign || undefined,
    lineHeight: el.style.lineHeight || undefined,
    letterSpacing: el.style.letterSpacing || undefined,
    maxWidth: el.style.maxWidth || undefined,
  };
}

function CanvasItem({
  block,
  onDelete,
  selected,
  onSelectBlock,
  selectedNodeId,
  onSelectElement,
  onCatalog,
  onElementTextCommit,
}: {
  block: Block;
  onDelete: (id: string) => void;
  selected: boolean;
  onSelectBlock: (id: string) => void;
  selectedNodeId: string | null;
  onSelectElement: (el: SelectedElementState, catalog: CatalogedElement[]) => void;
  onCatalog: (blockId: string, catalog: CatalogedElement[]) => void;
  onElementTextCommit: (blockId: string, nodeId: string, text: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id: block.id });

  const contentRef = useRef<HTMLDivElement | null>(null);
  const onCatalogRef = useRef(onCatalog);
  const onSelectBlockRef = useRef(onSelectBlock);
  const onSelectElementRef = useRef(onSelectElement);
  const onElementTextCommitRef = useRef(onElementTextCommit);
  onCatalogRef.current = onCatalog;
  onSelectBlockRef.current = onSelectBlock;
  onSelectElementRef.current = onSelectElement;
  onElementTextCommitRef.current = onElementTextCommit;

  const entry =
    block.type === "UitripledSection" ? findBlock(block.animationId) : null;
  const Component = entry?.component;
  const elementsKey =
    block.type === "UitripledSection"
      ? JSON.stringify({
          elements: block.elements ?? {},
          text: block.textContent ?? {},
        })
      : "";

  useEffect(() => {
    const container = contentRef.current;
    if (!container || block.type !== "UitripledSection") return;

    const focused =
      document.activeElement instanceof HTMLElement &&
      document.activeElement.isContentEditable &&
      container.contains(document.activeElement)
        ? document.activeElement
        : null;

    const elementsForApply = { ...(block.elements ?? {}) };
    const textForApply = { ...(block.textContent ?? {}) };
    if (focused?.dataset.builderTextId) {
      const fid = focused.dataset.builderTextId;
      if (elementsForApply[fid]) {
        elementsForApply[fid] = { ...elementsForApply[fid], text: undefined };
      }
      delete textForApply[fid];
    }

    const catalogResult = applyBlockElementState(
      container,
      block.id,
      elementsForApply,
      textForApply,
    );
    onCatalogRef.current(block.id, catalogResult.elements);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const editable = target.closest<HTMLElement>("[data-builder-text-id]");
      if (!editable || !container.contains(editable)) return;
      event.preventDefault();
      event.stopPropagation();

      container.querySelectorAll<HTMLElement>("[contenteditable='true']").forEach((el) => {
        if (el !== editable) {
          el.removeAttribute("contenteditable");
          el.style.outline = "";
          el.style.outlineOffset = "";
        }
      });

      const nodeId = editable.dataset.builderTextId!;
      const tag = editable.tagName.toLowerCase();
      const fresh = catalogEditableElements(container, block.id);

      if (tag !== "input" && tag !== "textarea") {
        editable.setAttribute("contenteditable", "true");
        editable.style.outline = "2px solid hsl(var(--primary))";
        editable.style.outlineOffset = "2px";
        editable.focus();
      }

      const href =
        tag === "a"
          ? editable.getAttribute("href") || undefined
          : editable.getAttribute("data-href") || undefined;

      onSelectBlockRef.current(block.id);
      onSelectElementRef.current(
        {
          blockId: block.id,
          nodeId,
          tag,
          text:
            tag === "input" || tag === "textarea"
              ? (editable as HTMLInputElement).value || ""
              : editable.textContent ?? "",
          href,
          styles: {
            ...readInlineStyles(editable),
            ...(block.elements?.[nodeId]?.styles ?? {}),
          },
        },
        fresh.elements,
      );
    };

    const onBlurCommit = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.dataset.builderTextId) return;
      if (target.getAttribute("contenteditable") !== "true") return;
      onElementTextCommitRef.current(
        block.id,
        target.dataset.builderTextId,
        target.textContent ?? "",
      );
    };

    container.addEventListener("click", onClick);
    container.addEventListener("blur", onBlurCommit, true);

    return () => {
      container.removeEventListener("click", onClick);
      container.removeEventListener("blur", onBlurCommit, true);
    };
  }, [block.id, block.type, elementsKey, selectedNodeId]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={(e) => {
        e.stopPropagation();
        onSelectBlock(block.id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative mb-4 rounded-lg border-2 border-dashed bg-card/50 p-4 transition-all ${
        isOver && !isDragging
          ? "border-solid border-primary bg-primary/10"
          : selected
            ? "border-solid border-primary"
            : isDragging
              ? "border-border opacity-50"
              : "border-border hover:border-primary"
      } cursor-grab`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <AnimatePresence>
        {isHovered ? (
          <motion.button
            type="button"
            data-builder-chrome
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(block.id);
            }}
            className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90"
          >
            <X className="h-4 w-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>
      <div data-builder-chrome className="mb-2 text-xs font-medium text-muted-foreground">
        {entry?.name || block.type}
      </div>
      <div
        ref={contentRef}
        className="relative w-full overflow-hidden rounded-lg bg-background"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("[data-builder-text-id]")) {
            e.stopPropagation();
          }
        }}
      >
        {Component ? (
          <Suspense fallback={<p className="p-4 text-sm text-muted-foreground">Loading…</p>}>
            <Component />
          </Suspense>
        ) : (
          <p className="p-4 text-sm">Unknown block</p>
        )}
      </div>
    </motion.div>
  );
}

const DEVICE_WIDTH: Record<DevicePreview, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "390px",
};

export function BuilderCanvas({
  blocks,
  theme,
  onDelete,
  selectedBlockId,
  onSelectBlock,
  selectedNodeId,
  onSelectElement,
  onCatalog,
  onElementTextCommit,
  device,
}: {
  blocks: Block[];
  theme: ThemeTokens;
  onDelete: (id: string) => void;
  selectedBlockId: string;
  onSelectBlock: (id: string) => void;
  selectedNodeId: string | null;
  onSelectElement: (el: SelectedElementState, catalog: CatalogedElement[]) => void;
  onCatalog: (blockId: string, catalog: CatalogedElement[]) => void;
  onElementTextCommit: (blockId: string, nodeId: string, text: string) => void;
  device: DevicePreview;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: "builder-canvas" });
  const themeStyle = themeToCssVars(theme);

  return (
    <div
      ref={setNodeRef}
      className={`h-full min-h-0 overflow-y-auto overscroll-contain bg-muted/30 p-4 md:p-6 ${
        isOver ? "bg-primary/5" : ""
      }`}
      onClick={() => onSelectBlock("")}
    >
      <div
        className={`op-page mx-auto overflow-hidden rounded-xl border border-border/60 shadow-sm transition-[max-width] duration-300 ${
          theme.colorMode === "dark" ? "dark" : "light"
        }`}
        style={{
          maxWidth: DEVICE_WIDTH[device],
          ...themeStyle,
          background: theme.background,
          color: theme.foreground,
        }}
      >
        {blocks.length === 0 ? (
          <div className="flex h-[60vh] flex-col items-center justify-center border-2 border-dashed border-border/40 text-center">
            <p className="text-lg font-medium" style={{ fontFamily: "var(--op-font-display)" }}>
              Drop blocks here
            </p>
            <p className="mt-2 max-w-sm text-sm opacity-70">
              Start with Site Navbar, then add heroes, cards, and sections. Open Settings for fonts,
              colors, SEO and AEO.
            </p>
          </div>
        ) : (
          <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
            <AnimatePresence>
              {blocks.map((block) => (
                <CanvasItem
                  key={block.id}
                  block={block}
                  onDelete={onDelete}
                  selected={selectedBlockId === block.id}
                  onSelectBlock={onSelectBlock}
                  selectedNodeId={selectedBlockId === block.id ? selectedNodeId : null}
                  onSelectElement={onSelectElement}
                  onCatalog={onCatalog}
                  onElementTextCommit={onElementTextCommit}
                />
              ))}
            </AnimatePresence>
          </SortableContext>
        )}
      </div>
    </div>
  );
}
