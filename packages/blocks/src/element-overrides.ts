"use client";

import type { ElementOverride, ElementStyle } from "@openpages/document-schema";

export const EDITABLE_SELECTOR =
  "h1,h2,h3,h4,h5,h6,p,span,button,a,li,blockquote,figcaption,label,strong,em,small,td,th,textarea,input,div[role='button']";

export type CatalogedElement = {
  nodeId: string;
  tag: string;
  text: string;
  href?: string;
};

export function catalogEditableElements(
  container: HTMLElement,
  blockId: string,
): { elements: CatalogedElement[]; nodes: HTMLElement[] } {
  const all = Array.from(container.querySelectorAll<HTMLElement>(EDITABLE_SELECTOR));
  const nodes = all.filter((el) => {
    if (el.closest("[data-builder-chrome]")) return false;
    const tag = el.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") return true;
    const text = el.textContent?.trim();
    if (!text) return false;
    const hasChild = Array.from(el.querySelectorAll<HTMLElement>(EDITABLE_SELECTOR)).some(
      (child) => child !== el && !!child.textContent?.trim(),
    );
    return !hasChild;
  });

  const elements = nodes.map((el, index) => {
    const nodeId = `${blockId}-${index}`;
    el.dataset.builderTextId = nodeId;
    const tag = el.tagName.toLowerCase();
    const href =
      tag === "a"
        ? el.getAttribute("href") || undefined
        : el.getAttribute("data-href") || undefined;
    return {
      nodeId,
      tag,
      text:
        tag === "input" || tag === "textarea"
          ? (el as HTMLInputElement).value || el.getAttribute("placeholder") || ""
          : el.textContent ?? "",
      href,
    };
  });

  return { elements, nodes };
}

export function applyStylesToElement(el: HTMLElement, styles?: ElementStyle) {
  if (!styles) return;
  const keys: Array<keyof ElementStyle> = [
    "fontSize",
    "fontWeight",
    "color",
    "backgroundColor",
    "width",
    "height",
    "padding",
    "margin",
    "borderRadius",
    "textAlign",
    "opacity",
    "letterSpacing",
    "lineHeight",
    "display",
    "maxWidth",
  ];
  for (const key of keys) {
    const value = styles[key];
    if (value === undefined || value === "") continue;
    (el.style as unknown as Record<string, string>)[key] = value;
  }
}

export function applyElementOverride(el: HTMLElement, override?: ElementOverride) {
  if (!override) return;
  const tag = el.tagName.toLowerCase();
  if (override.text !== undefined) {
    if (tag === "input" || tag === "textarea") {
      (el as HTMLInputElement).value = override.text;
    } else if (el.textContent !== override.text) {
      el.textContent = override.text;
    }
  }
  if (override.href !== undefined) {
    if (tag === "a") el.setAttribute("href", override.href);
    else {
      el.setAttribute("data-href", override.href);
      if (tag === "button") el.setAttribute("title", `Link: ${override.href}`);
    }
  }
  applyStylesToElement(el, override.styles);
}

export function applyBlockElementState(
  container: HTMLElement,
  blockId: string,
  elements?: Record<string, ElementOverride>,
  textContent?: Record<string, { original: string; value: string }>,
  opts?: { skipTextFor?: HTMLElement | null },
) {
  const catalog = catalogEditableElements(container, blockId);
  catalog.nodes.forEach((el, index) => {
    const nodeId = `${blockId}-${index}`;
    const fromElements = elements?.[nodeId];
    const fromText = textContent?.[nodeId];
    const skipText = opts?.skipTextFor === el;
    applyElementOverride(el, {
      ...fromElements,
      text: skipText ? undefined : fromElements?.text ?? fromText?.value,
    });
  });
  return catalog;
}
