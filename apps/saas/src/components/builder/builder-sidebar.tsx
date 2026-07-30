"use client";

import {
  blocksRegistry,
  blockCategories,
  type BlockRegistryItem,
} from "@openpages/blocks";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";

const HERO_FILTER = "__hero__";

const BASE_CATEGORY_LABELS: Record<string, string> = {
  [HERO_FILTER]: "Hero",
  blocks: "Blocks",
  cards: "Cards",
  components: "Components",
  native: "Native",
  page: "Page",
  decorative: "Decorative",
  microinteractions: "Micro",
  resumes: "Resumes",
  data: "Data",
  forms: "Forms",
};

function categoryLabel(cat: string) {
  if (BASE_CATEGORY_LABELS[cat]) return BASE_CATEGORY_LABELS[cat];
  if (cat.startsWith("reui-")) {
    const name = cat.slice(5).replace(/-/g, " ");
    return `ReUI · ${name.replace(/\b\w/g, (c) => c.toUpperCase())}`;
  }
  return cat;
}

function isHeroBlock(c: BlockRegistryItem) {
  const hay = `${c.id} ${c.name} ${c.tags.join(" ")}`.toLowerCase();
  return hay.includes("hero");
}

function previewScale(category: string) {
  if (category === "blocks" || category === "page" || category === HERO_FILTER)
    return 0.28;
  if (category.startsWith("reui-")) return 0.7;
  if (category === "cards" || category === "resumes") return 0.42;
  if (category === "components") return 0.5;
  return 0.55;
}

function LivePreview({
  Component,
  category,
  scrollRoot,
}: {
  Component: ComponentType;
  category: string;
  scrollRoot: HTMLElement | null;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const scale = previewScale(category);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || !scrollRoot) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: scrollRoot, rootMargin: "80px", threshold: 0.01 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [scrollRoot]);

  return (
    <div
      ref={hostRef}
      className="relative h-40 overflow-hidden rounded-lg border border-border/50 bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.08),_transparent_60%)]" />
      {visible ? (
        <div
          className="absolute left-1/2 top-1/2 origin-center"
          style={{
            width: `${100 / scale}%`,
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          <div className="flex w-full items-center justify-center p-4 [&_a]:pointer-events-none [&_button]:pointer-events-none">
            <Suspense
              fallback={
                <span className="text-[11px] text-muted-foreground">Loading…</span>
              }
            >
              <Component />
            </Suspense>
          </div>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-[11px] text-muted-foreground">
          Preview on scroll
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/90 to-transparent" />
    </div>
  );
}

function PreviewCard({
  component,
  scrollRoot,
  className = "",
}: {
  component: BlockRegistryItem;
  scrollRoot: HTMLElement | null;
  className?: string;
}) {
  const Comp = component.component as ComponentType;
  return (
    <div className={className}>
      <LivePreview
        Component={Comp}
        category={component.category}
        scrollRoot={scrollRoot}
      />
      <div className="mt-2.5 px-0.5">
        <div className="truncate text-sm font-medium text-foreground">
          {component.name}
        </div>
        <div className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
          {component.description}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DraggableComponent({
  component,
  scrollRoot,
}: {
  component: BlockRegistryItem;
  scrollRoot: HTMLElement | null;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: component.id });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className={`cursor-grab rounded-xl border border-border/60 bg-card/80 p-2.5 backdrop-blur transition-colors hover:border-primary/60 hover:bg-accent/5 active:cursor-grabbing ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <PreviewCard component={component} scrollRoot={scrollRoot} />
    </motion.div>
  );
}

export function BuilderSidebar({
  onSelectComponent,
  allowDrag = true,
  className = "",
}: {
  onSelectComponent?: (id: string) => void;
  allowDrag?: boolean;
  className?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<string>(HERO_FILTER);
  const [source, setSource] = useState<"all" | "uitripled" | "reui">("uitripled");
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollRoot, setScrollRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setScrollRoot(listRef.current);
  }, []);

  const categories = useMemo(() => {
    const uitripledOrder = [
      "blocks",
      "cards",
      "components",
      "native",
      "page",
      "decorative",
      "microinteractions",
      "forms",
      "data",
      "resumes",
    ];
    const available = new Set(blockCategories);
    const uitripled = uitripledOrder.filter((c) => available.has(c));
    const reui = [...available]
      .filter((c) => c.startsWith("reui-"))
      .sort((a, b) => a.localeCompare(b));

    if (source === "uitripled") return [HERO_FILTER, ...uitripled];
    if (source === "reui") return reui;
    return [HERO_FILTER, ...uitripled, ...reui];
  }, [source]);

  useEffect(() => {
    if (source === "reui" && category === HERO_FILTER) {
      setCategory(categories[0] ?? "reui-accordion");
      return;
    }
    if (!categories.includes(category) && categories[0]) {
      setCategory(categories[0]);
    }
  }, [categories, category, source]);

  // Reset list scroll + unload offscreen previews when filter changes
  useEffect(() => {
    listRef.current?.scrollTo({ top: 0 });
  }, [category, source, searchQuery]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = blocksRegistry
      .filter((c) => c.display !== false)
      .filter((c) => {
        if (source === "reui") return c.category.startsWith("reui-");
        if (source === "uitripled") return !c.category.startsWith("reui-");
        return true;
      })
      .filter((c) => {
        if (q) return true;
        if (category === HERO_FILTER) return isHeroBlock(c);
        return c.category === category;
      })
      .filter((c) => {
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q)) ||
          c.category.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
        );
      });
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, category, source]);

  const heroCount = useMemo(
    () =>
      blocksRegistry.filter(
        (c) =>
          c.display !== false &&
          !c.category.startsWith("reui-") &&
          isHeroBlock(c),
      ).length,
    [],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { [HERO_FILTER]: heroCount };
    for (const item of blocksRegistry) {
      if (item.display === false) continue;
      map[item.category] = (map[item.category] || 0) + 1;
    }
    return map;
  }, [heroCount]);

  const sourceCounts = useMemo(() => {
    let uitripled = 0;
    let reui = 0;
    for (const item of blocksRegistry) {
      if (item.display === false) continue;
      if (item.category.startsWith("reui-")) reui += 1;
      else uitripled += 1;
    }
    return { uitripled, reui, all: uitripled + reui };
  }, []);

  return (
    <div className={`flex h-full min-h-0 flex-col bg-card/40 backdrop-blur ${className}`}>
      <div className="shrink-0 border-b border-border/60 p-4">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Library</h2>
        <div className="mb-3 flex gap-1 rounded-full border border-border/60 bg-background/40 p-0.5">
          {(
            [
              ["uitripled", `UITripled · ${sourceCounts.uitripled}`],
              ["reui", `ReUI · ${sourceCounts.reui}`],
              ["all", `All · ${sourceCounts.all}`],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setSource(id);
                if (id !== "reui") setCategory(HERO_FILTER);
              }}
              className={`flex-1 rounded-full px-2 py-1 text-[11px] font-medium ${
                source === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border/60 bg-background/60 py-2 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto overscroll-contain">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setSearchQuery("");
              }}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                category === cat && !searchQuery
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabel(cat)} · {counts[cat] || 0}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {searchQuery
            ? `${filtered.length} matches`
            : `${filtered.length} in ${categoryLabel(category)}`}
          {" · previews load as you scroll"}
        </p>
      </div>
      <div
        ref={listRef}
        className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-3"
      >
        {filtered.map((component) =>
          allowDrag ? (
            <DraggableComponent
              key={component.id}
              component={component}
              scrollRoot={scrollRoot}
            />
          ) : (
            <button
              key={component.id}
              type="button"
              onClick={() => onSelectComponent?.(component.id)}
              className="w-full rounded-xl border border-border/60 bg-card/80 p-2.5 text-left hover:border-primary/60"
            >
              <PreviewCard component={component} scrollRoot={scrollRoot} />
            </button>
          ),
        )}
        {filtered.length === 0 ? (
          <p className="px-2 py-8 text-center text-sm text-muted-foreground">
            No components in this filter.
          </p>
        ) : null}
      </div>
    </div>
  );
}
