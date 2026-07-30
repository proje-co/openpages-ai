"use client";

import type { Page } from "@openpages/document-schema";
import { Plus, X } from "lucide-react";

export function PageTabs({
  pages,
  activePageId,
  onSelect,
  onAdd,
  onDelete,
}: {
  pages: Page[];
  activePageId: string;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1 overflow-x-auto border-b border-border bg-card px-2 py-1.5">
      {pages.map((page) => (
        <div
          key={page.id}
          className={`group flex items-center gap-1 rounded-md px-3 py-1.5 text-sm ${
            page.id === activePageId
              ? "bg-primary/15 text-foreground"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          <button type="button" onClick={() => onSelect(page.id)} className="whitespace-nowrap">
            {page.title}
            <span className="ml-2 text-xs opacity-60">{page.route}</span>
          </button>
          {pages.length > 1 ? (
            <button
              type="button"
              className="opacity-0 group-hover:opacity-100"
              onClick={() => onDelete(page.id)}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="ml-1 inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <Plus className="h-3.5 w-3.5" /> Page
      </button>
    </div>
  );
}
