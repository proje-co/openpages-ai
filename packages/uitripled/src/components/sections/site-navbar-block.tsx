"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export function SiteNavbarBlock() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="/"
          className="text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          OpenPages AI
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
          >
            Start free
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
