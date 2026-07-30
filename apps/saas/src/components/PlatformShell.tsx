"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

export function PlatformShell({
  children,
  actions,
}: {
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(251,191,36,0.1),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <nav className="relative z-20 flex items-center justify-between border-b border-border/50 bg-background/50 px-6 py-4 backdrop-blur-xl">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          OpenPages AI
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/pricing"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
          >
            Docs
          </Link>
          <ThemeToggle />
          {actions}
        </div>
      </nav>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
