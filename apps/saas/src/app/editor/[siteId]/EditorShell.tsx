"use client";

import { findBlock, type CatalogedElement } from "@openpages/blocks";
import type {
  Block,
  ElementOverride,
  ElementStyle,
  Page,
  SiteDocument,
} from "@openpages/document-schema";
import {
  DndContext,
  type CollisionDetection,
  type DragEndEvent,
  type DragMoveEvent,
  type DragStartEvent,
  PointerSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import {
  Monitor,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackgroundBuilderPanel } from "@/components/builder/background-builder";
import {
  BuilderCanvas,
  type DevicePreview,
  type SelectedElementState,
} from "@/components/builder/builder-canvas";
import { BuilderSidebar } from "@/components/builder/builder-sidebar";
import { BuilderDragOverlay } from "@/components/builder/drag-overlay";
import { ElementInspector } from "@/components/builder/element-inspector";
import { GridGeneratorPanel } from "@/components/builder/grid-generator";
import {
  isPointInRect,
  resolveLibraryDrop,
} from "@/components/builder/library-drop";
import { PageTabs } from "@/components/builder/page-tabs";
import { SiteSettingsPanel } from "@/components/builder/site-settings-panel";
import { ThemeToggle } from "@/components/theme-toggle";

type Props = { siteId: string };
type ChatMessage = { role: "user" | "assistant"; content: string };
type RightTab = "settings" | "inspect" | "copilot" | "grid" | "background";
type SaveStatus = "idle" | "dirty" | "saving" | "saved" | "error";

function newId() {
  return crypto.randomUUID();
}

export function EditorShell({ siteId }: Props) {
  const [document, setDocument] = useState<SiteDocument | null>(null);
  const [pageId, setPageId] = useState("");
  const [blockId, setBlockId] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [rightTab, setRightTab] = useState<RightTab>("settings");
  const [device, setDevice] = useState<DevicePreview>("desktop");
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [selectedElement, setSelectedElement] = useState<SelectedElementState | null>(
    null,
  );
  const [catalog, setCatalog] = useState<CatalogedElement[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Click any element to edit text, links, and styles. Navbar is in Blocks. Undo/redo and autosave are on.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const historyRef = useRef<SiteDocument[]>([]);
  const futureRef = useRef<SiteDocument[]>([]);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const documentRef = useRef<SiteDocument | null>(null);
  const dragPointerRef = useRef<{ x: number; y: number } | null>(null);

  const page = useMemo(
    () => document?.pages.find((p) => p.id === pageId) ?? document?.pages[0],
    [document, pageId],
  );

  useEffect(() => {
    documentRef.current = document;
  }, [document]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );

  // Library items live in a scroll container; pointer-based collision is required
  // so drops onto the canvas register reliably.
  const collisionDetection: CollisionDetection = (args) => {
    const pointerHits = pointerWithin(args);
    if (pointerHits.length > 0) return pointerHits;
    return closestCenter(args);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/sites/${siteId}`);
      const data = await res.json();
      if (data.document) {
        setDocument(data.document);
        documentRef.current = data.document;
        setPageId(data.document.pages[0]?.id ?? "");
        setSaveStatus("saved");
      }
    })();
  }, [siteId]);

  const persistRemote = useCallback(
    async (next: SiteDocument) => {
      setSaveStatus("saving");
      try {
        const res = await fetch(`/api/sites/${siteId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ document: next }),
        });
        setSaveStatus(res.ok ? "saved" : "error");
      } catch {
        setSaveStatus("error");
      }
    },
    [siteId],
  );

  const scheduleAutosave = useCallback(
    (next: SiteDocument) => {
      setSaveStatus("dirty");
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        void persistRemote(next);
      }, 700);
    },
    [persistRemote],
  );

  const commitDocument = useCallback(
    (next: SiteDocument, opts?: { recordHistory?: boolean; autosave?: boolean }) => {
      const recordHistory = opts?.recordHistory !== false;
      const autosave = opts?.autosave !== false;
      const current = documentRef.current;
      if (recordHistory && current) {
        historyRef.current = [...historyRef.current.slice(-49), structuredClone(current)];
        futureRef.current = [];
        setCanUndo(true);
        setCanRedo(false);
      }
      next.version = (current?.version ?? next.version ?? 0) + 1;
      setDocument(next);
      documentRef.current = next;
      if (autosave) scheduleAutosave(next);
    },
    [scheduleAutosave],
  );

  const undo = useCallback(() => {
    const current = documentRef.current;
    const prev = historyRef.current.pop();
    if (!current || !prev) return;
    futureRef.current.push(structuredClone(current));
    setCanUndo(historyRef.current.length > 0);
    setCanRedo(true);
    setDocument(prev);
    documentRef.current = prev;
    scheduleAutosave(prev);
  }, [scheduleAutosave]);

  const redo = useCallback(() => {
    const current = documentRef.current;
    const next = futureRef.current.pop();
    if (!current || !next) return;
    historyRef.current.push(structuredClone(current));
    setCanUndo(true);
    setCanRedo(futureRef.current.length > 0);
    setDocument(next);
    documentRef.current = next;
    scheduleAutosave(next);
  }, [scheduleAutosave]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;
      if (e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if ((e.key === "z" && e.shiftKey) || e.key === "y") {
        e.preventDefault();
        redo();
      } else if (e.key === "s") {
        e.preventDefault();
        if (documentRef.current) void persistRemote(documentRef.current);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [undo, redo, persistRemote]);

  const updateActivePage = useCallback(
    (
      updater: (page: Page) => Page,
      opts?: { recordHistory?: boolean },
    ) => {
      const current = documentRef.current;
      if (!current || !page) return;
      const updatedPage = updater(page);
      if (updatedPage === page) return;
      const next = structuredClone(current);
      next.pages = next.pages.map((p) => (p.id === page.id ? updatedPage : p));
      commitDocument(next, opts);
    },
    [page, commitDocument],
  );

  const patchElement = useCallback(
    (
      blockIdToPatch: string,
      nodeId: string,
      patch: Partial<ElementOverride>,
      opts?: { recordHistory?: boolean },
    ) => {
      updateActivePage((p) => {
        const blocks = p.blocks.map((b) => {
          if (b.id !== blockIdToPatch || b.type !== "UitripledSection") return b;
          const prev = b.elements?.[nodeId] ?? {};
          const styles: ElementStyle = {
            ...(prev.styles ?? {}),
            ...(patch.styles ?? {}),
          };
          const nextText =
            patch.text !== undefined
              ? patch.text
              : b.textContent?.[nodeId]?.value ?? prev.text ?? "";
          return {
            ...b,
            elements: {
              ...(b.elements ?? {}),
              [nodeId]: {
                ...prev,
                ...patch,
                styles: Object.keys(styles).length ? styles : prev.styles,
                tag: patch.tag ?? prev.tag,
                text: patch.text ?? prev.text,
              },
            },
            textContent: {
              ...(b.textContent ?? {}),
              [nodeId]: {
                original: b.textContent?.[nodeId]?.original ?? nextText,
                value: nextText,
              },
            },
          };
        });
        return { ...p, blocks };
      }, opts);
      setSelectedElement((sel) => {
        if (!sel || sel.blockId !== blockIdToPatch || sel.nodeId !== nodeId) return sel;
        return {
          ...sel,
          text: patch.text ?? sel.text,
          href: patch.href ?? sel.href,
          styles: { ...sel.styles, ...(patch.styles ?? {}) },
        };
      });
    },
    [updateActivePage],
  );

  const addSection = useCallback(
    (animationId: string, index?: number) => {
      if (!findBlock(animationId)) return;
      const current = documentRef.current;
      const activePageId = pageId || current?.pages[0]?.id;
      if (!current || !activePageId) return;
      const activePage = current.pages.find((p) => p.id === activePageId);
      if (!activePage) return;

      const block: Block = {
        id: newId(),
        type: "UitripledSection",
        animationId,
      };
      const blocks = [...activePage.blocks];
      if (typeof index === "number") blocks.splice(index, 0, block);
      else blocks.push(block);

      const next = structuredClone(current);
      next.pages = next.pages.map((p) =>
        p.id === activePageId ? { ...p, blocks } : p,
      );
      commitDocument(next);
      setBlockId(block.id);
      setRightTab("inspect");
    },
    [pageId, commitDocument],
  );

  const pointerOverCanvas = useCallback(() => {
    const pt = dragPointerRef.current;
    if (!pt || typeof globalThis.document === "undefined") return false;
    const canvas = globalThis.document.querySelector("[data-builder-canvas]");
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      if (isPointInRect(pt.x, pt.y, rect)) return true;
    }
    const el = globalThis.document.elementFromPoint(pt.x, pt.y);
    return Boolean(el?.closest("[data-builder-canvas]"));
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
    dragPointerRef.current = null;
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const translated = event.active.rect.current.translated;
    if (translated) {
      dragPointerRef.current = {
        x: translated.left + translated.width / 2,
        y: translated.top + translated.height / 2,
      };
      return;
    }
    const activator = event.activatorEvent;
    if (activator && "clientX" in activator) {
      dragPointerRef.current = {
        x: (activator as PointerEvent).clientX + event.delta.x,
        y: (activator as PointerEvent).clientY + event.delta.y,
      };
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
    dragPointerRef.current = null;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const current = documentRef.current;
    const activePageId = pageId || current?.pages[0]?.id;
    if (!current || !activePageId) {
      dragPointerRef.current = null;
      return;
    }
    const activePage = current.pages.find((p) => p.id === activePageId);
    if (!activePage) {
      dragPointerRef.current = null;
      return;
    }

    const { active, over } = event;
    const activeStr = String(active.id);
    const fromLibrary =
      Boolean(active.data.current?.fromLibrary) || Boolean(findBlock(activeStr));
    const existingIds = activePage.blocks.map((b) => b.id);

    if (
      !fromLibrary &&
      over &&
      existingIds.includes(activeStr) &&
      existingIds.includes(String(over.id))
    ) {
      const oldIndex = existingIds.indexOf(activeStr);
      const newIndex = existingIds.indexOf(String(over.id));
      if (oldIndex !== newIndex) {
        updateActivePage((p) => ({
          ...p,
          blocks: arrayMove(p.blocks, oldIndex, newIndex),
        }));
      }
      dragPointerRef.current = null;
      return;
    }

    if (fromLibrary) {
      const plan = resolveLibraryDrop({
        overId: over ? String(over.id) : null,
        existingBlockIds: existingIds,
        pointerOverCanvas: pointerOverCanvas(),
      });
      if (plan.action === "append") addSection(activeStr);
      else if (plan.action === "insert") addSection(activeStr, plan.index);
    }

    dragPointerRef.current = null;
  };

  async function sendChat() {
    if (!input.trim() || !document) return;
    const userMsg = { role: "user" as const, content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setBusy(true);
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        siteId,
        messages: [...messages, userMsg],
        selection: { pageId: page?.id, blockId: blockId || undefined },
        autoApply: true,
      }),
    });
    const data = await res.json();
    setBusy(false);
    if (data.document) {
      commitDocument(data.document, { recordHistory: true });
    }
    setMessages((m) => [
      ...m,
      { role: "assistant", content: data.content || data.error || "Done." },
    ]);
  }

  async function publish() {
    if (documentRef.current) await persistRemote(documentRef.current);
    setBusy(true);
    const res = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteId }),
    });
    const data = await res.json();
    setBusy(false);
    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        content: res.ok
          ? `Published at ${data.publication?.url}`
          : data.error || "Publish failed",
      },
    ]);
  }

  async function exportGithub() {
    setBusy(true);
    const res = await fetch("/api/github/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteId, dryRun: true }),
    });
    const data = await res.json();
    setBusy(false);
    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        content: res.ok
          ? `Export ready (${data.fileCount} files)`
          : data.error || "Export failed",
      },
    ]);
  }

  if (!document || !page) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-foreground">
        Loading UITripled builder…
      </div>
    );
  }

  const saveLabel =
    saveStatus === "saving"
      ? "Saving…"
      : saveStatus === "saved"
        ? "Saved"
        : saveStatus === "dirty"
          ? "Unsaved"
          : saveStatus === "error"
            ? "Save failed"
            : "";

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
        <header className="flex shrink-0 items-center gap-3 border-b border-border/60 bg-card/70 px-4 py-2 backdrop-blur-xl">
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
            ← Dashboard
          </Link>
          <strong className="text-sm">OpenPages · UITripled + ReUI</strong>
          <span className="text-xs text-muted-foreground">{saveLabel}</span>

          <div className="ml-2 flex items-center gap-1 rounded-full border border-border/60 bg-background/50 p-0.5">
            {(
              [
                ["desktop", Monitor],
                ["tablet", Tablet],
                ["mobile", Smartphone],
              ] as const
            ).map(([id, Icon]) => (
              <button
                key={id}
                type="button"
                title={id}
                onClick={() => setDevice(id)}
                className={`rounded-full p-1.5 ${
                  device === id ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              disabled={!canUndo}
              onClick={undo}
              title="Undo (⌘Z)"
              className="rounded-full border border-border/60 p-1.5 disabled:opacity-40"
            >
              <Undo2 className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              disabled={!canRedo}
              onClick={redo}
              title="Redo (⌘⇧Z)"
              className="rounded-full border border-border/60 p-1.5 disabled:opacity-40"
            >
              <Redo2 className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={exportGithub}
              className="rounded-full border border-border/60 px-3 py-1.5 text-xs"
            >
              Export
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={publish}
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
            >
              Publish
            </button>
          </div>
        </header>

        <PageTabs
          pages={document.pages}
          activePageId={page.id}
          onSelect={setPageId}
          onAdd={() => {
            const id = newId();
            const route = `/page-${document.pages.length + 1}`;
            const next = structuredClone(document);
            next.pages.push({
              id,
              title: `Page ${next.pages.length + 1}`,
              slug: route.slice(1),
              route,
              seo: { title: "", description: "", noIndex: false },
              aeo: {
                intent: "",
                primaryAnswer: "",
                entities: [],
                faq: [],
                llmsHints: [],
              },
              blocks: [],
            });
            commitDocument(next);
            setPageId(id);
          }}
          onDelete={(id) => {
            if (document.pages.length <= 1) return;
            const next = structuredClone(document);
            next.pages = next.pages.filter((p) => p.id !== id);
            commitDocument(next);
            setPageId(next.pages[0].id);
          }}
        />

        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-[340px_1fr_360px]">
          <aside className="hidden min-h-0 overflow-hidden border-r border-border md:flex md:flex-col">
            <BuilderSidebar
              onSelectComponent={(id) => addSection(id)}
              allowDrag
            />
          </aside>

          <div className="min-h-0 overflow-hidden">
            <BuilderCanvas
              blocks={page.blocks}
              theme={document.theme}
              device={device}
              onDelete={(id) => {
                updateActivePage((p) => ({
                  ...p,
                  blocks: p.blocks.filter((b) => b.id !== id),
                }));
                if (selectedElement?.blockId === id) {
                  setSelectedElement(null);
                  setCatalog([]);
                }
              }}
              selectedBlockId={blockId}
              onSelectBlock={(id) => {
                setBlockId(id);
                if (!id) {
                  setSelectedElement(null);
                } else {
                  setRightTab("inspect");
                }
              }}
              selectedNodeId={selectedElement?.nodeId ?? null}
              onSelectElement={(el, els) => {
                setSelectedElement(el);
                setCatalog(els);
                setBlockId(el.blockId);
                setRightTab("inspect");
              }}
              onCatalog={(id, els) => {
                if (id === blockId || id === selectedElement?.blockId) setCatalog(els);
              }}
              onElementTextCommit={(bId, nodeId, text) => {
                patchElement(bId, nodeId, { text }, { recordHistory: true });
              }}
            />
          </div>

          <aside className="flex min-h-0 flex-col overflow-hidden border-l border-border bg-card">
            <div className="flex shrink-0 border-b border-border">
              {(["settings", "inspect", "copilot", "grid", "background"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setRightTab(tab)}
                  className={`flex-1 px-1.5 py-2 text-[11px] capitalize ${
                    rightTab === tab ? "bg-primary/10 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {tab === "inspect" ? "Elements" : tab}
                </button>
              ))}
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain">
            {rightTab === "settings" ? (
              <SiteSettingsPanel
                theme={document.theme}
                brandVoice={document.brandVoice}
                page={page}
                onThemeChange={(patch) => {
                  const next = structuredClone(document);
                  const merged = { ...next.theme, ...patch };
                  if (patch.colorMode === "dark" && !patch.background && !patch.foreground) {
                    if (
                      next.theme.background === "#F8FAFC" ||
                      next.theme.background.toLowerCase() === "#f8fafc"
                    ) {
                      merged.background = "#0F172A";
                      merged.foreground = "#F8FAFC";
                    }
                  }
                  if (patch.colorMode === "light" && !patch.background && !patch.foreground) {
                    if (
                      next.theme.background === "#0F172A" ||
                      next.theme.background.toLowerCase() === "#0f172a"
                    ) {
                      merged.background = "#F8FAFC";
                      merged.foreground = "#0F172A";
                    }
                  }
                  next.theme = merged;
                  commitDocument(next);
                }}
                onBrandVoiceChange={(patch) => {
                  const next = structuredClone(document);
                  next.brandVoice = { ...next.brandVoice, ...patch };
                  commitDocument(next);
                }}
                onPageChange={(patch) => {
                  updateActivePage((p) => ({ ...p, ...patch }));
                }}
              />
            ) : null}
            {rightTab === "inspect" ? (
              <ElementInspector
                selected={selectedElement}
                catalog={catalog}
                onSelectNode={(nodeId) => {
                  const found = catalog.find((c) => c.nodeId === nodeId);
                  if (!found || !selectedElement) return;
                  const block = page.blocks.find((b) => b.id === selectedElement.blockId);
                  const override =
                    block?.type === "UitripledSection" ? block.elements?.[nodeId] : undefined;
                  setSelectedElement({
                    blockId: selectedElement.blockId,
                    nodeId,
                    tag: found.tag,
                    text: override?.text ?? found.text,
                    href: override?.href ?? found.href,
                    styles: override?.styles ?? {},
                  });
                }}
                onChange={(patch) => {
                  if (!selectedElement) return;
                  patchElement(selectedElement.blockId, selectedElement.nodeId, patch);
                }}
              />
            ) : null}
            {rightTab === "copilot" ? (
              <>
                <div className="flex-1 space-y-2 overflow-y-auto p-3">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-3 text-sm whitespace-pre-wrap ${
                        m.role === "user" ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      {m.content}
                    </div>
                  ))}
                </div>
                <div className="grid gap-2 border-t border-border p-3">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[72px] w-full rounded-md border border-border bg-background p-2 text-sm"
                    placeholder="Ask copilot…"
                  />
                  <button
                    type="button"
                    disabled={busy}
                    onClick={sendChat}
                    className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                  >
                    {busy ? "Working…" : "Send"}
                  </button>
                </div>
              </>
            ) : null}
            {rightTab === "grid" ? <GridGeneratorPanel /> : null}
            {rightTab === "background" ? <BackgroundBuilderPanel /> : null}
            </div>
          </aside>
        </div>
      </div>
      <BuilderDragOverlay activeId={activeId} />
    </DndContext>
  );
}
