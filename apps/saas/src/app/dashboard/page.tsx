"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { LazyBlock } from "@/components/LazyBlock";
import { PlatformShell } from "@/components/PlatformShell";

type Site = {
  id: string;
  name: string;
  slug: string;
  domains: Array<{ host: string; status: string }>;
};

export default function DashboardPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [workspace, setWorkspace] = useState<{
    name: string;
    aiCredits: number;
    plan: string;
  } | null>(null);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/sites");
    if (!res.ok) {
      setError("Please log in");
      return;
    }
    const data = await res.json();
    setSites(data.sites || []);
    setWorkspace(data.workspace);
  }

  useEffect(() => {
    load();
  }, []);

  async function createSite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/sites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        slug: fd.get("slug"),
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed");
      return;
    }
    const data = await res.json();
    window.location.href = `/editor/${data.site.id}`;
  }

  return (
    <PlatformShell
      actions={
        <>
          {workspace ? (
            <span className="rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              {workspace.plan} · {workspace.aiCredits} credits
            </span>
          ) : null}
          <Link
            href="/pricing"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Upgrade
          </Link>
        </>
      }
    >
      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Workspace
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your sites</h1>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
              {sites.length} live
            </span>
          </div>
          {error ? <p className="mb-4 text-sm text-destructive">{error}</p> : null}
          <div className="space-y-3">
            {sites.map((site) => (
              <div
                key={site.id}
                className="group flex items-center justify-between rounded-2xl border border-border/50 bg-background/40 p-4 transition hover:border-primary/50"
              >
                <div>
                  <div className="font-medium">{site.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {site.domains[0]?.host}
                  </div>
                </div>
                <Link
                  className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition group-hover:-translate-y-0.5"
                  href={`/editor/${site.id}`}
                >
                  Open builder
                </Link>
              </div>
            ))}
            {!sites.length ? (
              <p className="text-sm text-muted-foreground">
                No sites yet — create one with the glass form.
              </p>
            ) : null}
          </div>
        </section>

        <div className="space-y-6">
          <form
            onSubmit={createSite}
            className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              New project
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Create a site</h2>
            <div className="mt-6 grid gap-3">
              <input
                name="name"
                placeholder="Site name"
                required
                className="h-11 rounded-2xl border border-border/60 bg-background/60 px-4 text-sm"
              />
              <input
                name="slug"
                placeholder="slug"
                required
                className="h-11 rounded-2xl border border-border/60 bg-background/60 px-4 text-sm"
              />
              <button
                className="h-11 rounded-full bg-primary text-sm font-medium text-primary-foreground"
                type="submit"
              >
                Launch builder
              </button>
            </div>
          </form>

          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-2 backdrop-blur">
            <LazyBlock id="glass-wallet-card" />
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-2 backdrop-blur">
            <LazyBlock id="project-card" />
          </div>
        </div>
      </main>
    </PlatformShell>
  );
}
