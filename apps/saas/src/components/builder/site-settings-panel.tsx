"use client";

import type { BrandVoice, Page, ThemeTokens } from "@openpages/document-schema";
import { useState, type ReactNode } from "react";

type Scope = "site" | "page";

const FONT_OPTIONS = [
  "Sora",
  "Fraunces",
  "Inter",
  "Georgia",
  "Playfair Display",
  "Space Grotesk",
  "DM Sans",
  "IBM Plex Sans",
  "Libre Baskerville",
  "system-ui",
];

const WEIGHT_OPTIONS = ["300", "400", "500", "600", "700", "800"];

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1 text-xs">
      <span className="text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm text-foreground";

export function SiteSettingsPanel({
  theme,
  brandVoice,
  page,
  onThemeChange,
  onBrandVoiceChange,
  onPageChange,
}: {
  theme: ThemeTokens;
  brandVoice: BrandVoice;
  page: Page;
  onThemeChange: (patch: Partial<ThemeTokens>) => void;
  onBrandVoiceChange: (patch: Partial<BrandVoice>) => void;
  onPageChange: (patch: Partial<Page>) => void;
}) {
  const [scope, setScope] = useState<Scope>("site");
  const [siteTab, setSiteTab] = useState<"general" | "typography" | "colors" | "meta" | "voice">(
    "general",
  );
  const [pageTab, setPageTab] = useState<"general" | "seo" | "aeo">("seo");

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex border-b border-border">
        {(
          [
            ["site", "Site"],
            ["page", "Page"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setScope(id)}
            className={`flex-1 px-3 py-2 text-xs font-medium ${
              scope === id ? "bg-primary/10 text-foreground" : "text-muted-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {scope === "site" ? (
        <>
          <div className="flex flex-wrap gap-1 border-b border-border p-2">
            {(
              [
                ["general", "General"],
                ["typography", "Type"],
                ["colors", "Colors"],
                ["meta", "Meta"],
                ["voice", "Voice"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setSiteTab(id)}
                className={`rounded-full px-2.5 py-1 text-[11px] ${
                  siteTab === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {siteTab === "general" ? (
              <>
                <Field label="Brand name">
                  <input
                    className={inputClass}
                    value={theme.brandName}
                    onChange={(e) => onThemeChange({ brandName: e.target.value })}
                  />
                </Field>
                <Field label="Site color mode">
                  <select
                    className={inputClass}
                    value={theme.colorMode}
                    onChange={(e) =>
                      onThemeChange({ colorMode: e.target.value as "light" | "dark" })
                    }
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </Field>
                <Field label="Corner radius">
                  <input
                    className={inputClass}
                    value={theme.radius}
                    onChange={(e) => onThemeChange({ radius: e.target.value })}
                    placeholder="12px"
                  />
                </Field>
                <Field label="Favicon URL">
                  <input
                    className={inputClass}
                    value={theme.faviconUrl ?? ""}
                    onChange={(e) => onThemeChange({ faviconUrl: e.target.value || undefined })}
                    placeholder="https://…"
                  />
                </Field>
              </>
            ) : null}

            {siteTab === "typography" ? (
              <>
                <Field label="Display font (headings)">
                  <select
                    className={inputClass}
                    value={theme.fontDisplay}
                    onChange={(e) => onThemeChange({ fontDisplay: e.target.value })}
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Body font">
                  <select
                    className={inputClass}
                    value={theme.fontBody}
                    onChange={(e) => onThemeChange({ fontBody: e.target.value })}
                  >
                    {FONT_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="grid grid-cols-2 gap-2">
                  <Field label="Body size">
                    <input
                      className={inputClass}
                      value={theme.bodyFontSize}
                      onChange={(e) => onThemeChange({ bodyFontSize: e.target.value })}
                    />
                  </Field>
                  <Field label="Body weight">
                    <select
                      className={inputClass}
                      value={theme.bodyFontWeight}
                      onChange={(e) => onThemeChange({ bodyFontWeight: e.target.value })}
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Field label="H1 size">
                    <input
                      className={inputClass}
                      value={theme.h1FontSize}
                      onChange={(e) => onThemeChange({ h1FontSize: e.target.value })}
                    />
                  </Field>
                  <Field label="H1 weight">
                    <select
                      className={inputClass}
                      value={theme.h1FontWeight}
                      onChange={(e) => onThemeChange({ h1FontWeight: e.target.value })}
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Field label="H2 size">
                    <input
                      className={inputClass}
                      value={theme.h2FontSize}
                      onChange={(e) => onThemeChange({ h2FontSize: e.target.value })}
                    />
                  </Field>
                  <Field label="H2 weight">
                    <select
                      className={inputClass}
                      value={theme.h2FontWeight}
                      onChange={(e) => onThemeChange({ h2FontWeight: e.target.value })}
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Field label="H3 size">
                    <input
                      className={inputClass}
                      value={theme.h3FontSize}
                      onChange={(e) => onThemeChange({ h3FontSize: e.target.value })}
                    />
                  </Field>
                  <Field label="H3 weight">
                    <select
                      className={inputClass}
                      value={theme.h3FontWeight}
                      onChange={(e) => onThemeChange({ h3FontWeight: e.target.value })}
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
              </>
            ) : null}

            {siteTab === "colors" ? (
              <>
                {(
                  [
                    ["background", "Background"],
                    ["foreground", "Text"],
                    ["primary", "Primary"],
                    ["secondary", "Secondary"],
                    ["accent", "Accent"],
                  ] as const
                ).map(([key, label]) => (
                  <Field key={key} label={label}>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        className="h-9 w-12 cursor-pointer rounded border border-border bg-transparent p-0.5"
                        value={theme[key]}
                        onChange={(e) => onThemeChange({ [key]: e.target.value })}
                      />
                      <input
                        className={inputClass}
                        value={theme[key]}
                        onChange={(e) => onThemeChange({ [key]: e.target.value })}
                      />
                    </div>
                  </Field>
                ))}
              </>
            ) : null}

            {siteTab === "meta" ? (
              <>
                <p className="text-[11px] text-muted-foreground">
                  Site-wide defaults. Page SEO overrides these when set.
                </p>
                <Field label="Default meta title">
                  <input
                    className={inputClass}
                    value={theme.defaultMetaTitle}
                    onChange={(e) => onThemeChange({ defaultMetaTitle: e.target.value })}
                  />
                </Field>
                <Field label="Default meta description">
                  <textarea
                    className={`${inputClass} min-h-[72px]`}
                    value={theme.defaultMetaDescription}
                    onChange={(e) => onThemeChange({ defaultMetaDescription: e.target.value })}
                  />
                </Field>
                <Field label="Default OG image URL">
                  <input
                    className={inputClass}
                    value={theme.defaultOgImage ?? ""}
                    onChange={(e) =>
                      onThemeChange({ defaultOgImage: e.target.value || undefined })
                    }
                  />
                </Field>
              </>
            ) : null}

            {siteTab === "voice" ? (
              <>
                <Field label="Tone">
                  <input
                    className={inputClass}
                    value={brandVoice.tone}
                    onChange={(e) => onBrandVoiceChange({ tone: e.target.value })}
                  />
                </Field>
                <Field label="Audience">
                  <input
                    className={inputClass}
                    value={brandVoice.audience}
                    onChange={(e) => onBrandVoiceChange({ audience: e.target.value })}
                  />
                </Field>
                <Field label="Keywords (comma-separated)">
                  <input
                    className={inputClass}
                    value={brandVoice.keywords.join(", ")}
                    onChange={(e) =>
                      onBrandVoiceChange({
                        keywords: e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                  />
                </Field>
                <Field label="Forbidden claims (one per line)">
                  <textarea
                    className={`${inputClass} min-h-[72px]`}
                    value={brandVoice.forbiddenClaims.join("\n")}
                    onChange={(e) =>
                      onBrandVoiceChange({
                        forbiddenClaims: e.target.value
                          .split("\n")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                  />
                </Field>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-1 border-b border-border p-2">
            {(
              [
                ["general", "General"],
                ["seo", "SEO"],
                ["aeo", "AEO"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setPageTab(id)}
                className={`rounded-full px-2.5 py-1 text-[11px] ${
                  pageTab === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {pageTab === "general" ? (
              <>
                <Field label="Page title">
                  <input
                    className={inputClass}
                    value={page.title}
                    onChange={(e) => onPageChange({ title: e.target.value })}
                  />
                </Field>
                <Field label="Slug">
                  <input
                    className={inputClass}
                    value={page.slug}
                    onChange={(e) => {
                      const slug = e.target.value.replace(/^\//, "");
                      onPageChange({
                        slug,
                        route: slug === "home" || slug === "" ? "/" : `/${slug}`,
                      });
                    }}
                  />
                </Field>
                <Field label="Route">
                  <input
                    className={inputClass}
                    value={page.route}
                    onChange={(e) => onPageChange({ route: e.target.value })}
                  />
                </Field>
              </>
            ) : null}

            {pageTab === "seo" ? (
              <>
                <Field label="SEO title">
                  <input
                    className={inputClass}
                    value={page.seo.title}
                    onChange={(e) =>
                      onPageChange({ seo: { ...page.seo, title: e.target.value } })
                    }
                    placeholder={theme.defaultMetaTitle || "Page title"}
                  />
                </Field>
                <Field label="Meta description">
                  <textarea
                    className={`${inputClass} min-h-[80px]`}
                    value={page.seo.description}
                    onChange={(e) =>
                      onPageChange({ seo: { ...page.seo, description: e.target.value } })
                    }
                    placeholder={theme.defaultMetaDescription || "Describe this page…"}
                  />
                </Field>
                <Field label="Canonical URL">
                  <input
                    className={inputClass}
                    value={page.seo.canonical ?? ""}
                    onChange={(e) =>
                      onPageChange({
                        seo: { ...page.seo, canonical: e.target.value || undefined },
                      })
                    }
                  />
                </Field>
                <Field label="OG image URL">
                  <input
                    className={inputClass}
                    value={page.seo.ogImage ?? ""}
                    onChange={(e) =>
                      onPageChange({
                        seo: { ...page.seo, ogImage: e.target.value || undefined },
                      })
                    }
                    placeholder={theme.defaultOgImage ?? ""}
                  />
                </Field>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={page.seo.noIndex}
                    onChange={(e) =>
                      onPageChange({ seo: { ...page.seo, noIndex: e.target.checked } })
                    }
                  />
                  <span>noindex (hide from search)</span>
                </label>
              </>
            ) : null}

            {pageTab === "aeo" ? (
              <>
                <Field label="Search / answer intent">
                  <input
                    className={inputClass}
                    value={page.aeo.intent}
                    onChange={(e) =>
                      onPageChange({ aeo: { ...page.aeo, intent: e.target.value } })
                    }
                    placeholder="What question does this page answer?"
                  />
                </Field>
                <Field label="Primary answer">
                  <textarea
                    className={`${inputClass} min-h-[96px]`}
                    value={page.aeo.primaryAnswer}
                    onChange={(e) =>
                      onPageChange({ aeo: { ...page.aeo, primaryAnswer: e.target.value } })
                    }
                    placeholder="Concise answer for AI overviews / featured snippets"
                  />
                </Field>
                <Field label="Entities (comma-separated)">
                  <input
                    className={inputClass}
                    value={page.aeo.entities.join(", ")}
                    onChange={(e) =>
                      onPageChange({
                        aeo: {
                          ...page.aeo,
                          entities: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        },
                      })
                    }
                  />
                </Field>
                <Field label="LLM hints (one per line)">
                  <textarea
                    className={`${inputClass} min-h-[72px]`}
                    value={page.aeo.llmsHints.join("\n")}
                    onChange={(e) =>
                      onPageChange({
                        aeo: {
                          ...page.aeo,
                          llmsHints: e.target.value
                            .split("\n")
                            .map((s) => s.trim())
                            .filter(Boolean),
                        },
                      })
                    }
                  />
                </Field>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">FAQ</span>
                    <button
                      type="button"
                      className="text-[11px] text-primary"
                      onClick={() =>
                        onPageChange({
                          aeo: {
                            ...page.aeo,
                            faq: [...page.aeo.faq, { question: "", answer: "" }],
                          },
                        })
                      }
                    >
                      + Add
                    </button>
                  </div>
                  {page.aeo.faq.map((item, i) => (
                    <div key={i} className="space-y-1 rounded-md border border-border p-2">
                      <input
                        className={inputClass}
                        placeholder="Question"
                        value={item.question}
                        onChange={(e) => {
                          const faq = [...page.aeo.faq];
                          faq[i] = { ...faq[i], question: e.target.value };
                          onPageChange({ aeo: { ...page.aeo, faq } });
                        }}
                      />
                      <textarea
                        className={`${inputClass} min-h-[56px]`}
                        placeholder="Answer"
                        value={item.answer}
                        onChange={(e) => {
                          const faq = [...page.aeo.faq];
                          faq[i] = { ...faq[i], answer: e.target.value };
                          onPageChange({ aeo: { ...page.aeo, faq } });
                        }}
                      />
                      <button
                        type="button"
                        className="text-[11px] text-destructive"
                        onClick={() => {
                          const faq = page.aeo.faq.filter((_, j) => j !== i);
                          onPageChange({ aeo: { ...page.aeo, faq } });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
