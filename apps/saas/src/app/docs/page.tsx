import Link from "next/link";
import { LazyBlock } from "@/components/LazyBlock";
import { PlatformShell } from "@/components/PlatformShell";

export default function DocsPage() {
  return (
    <PlatformShell
      actions={
        <Link
          href="/signup"
          className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Start free
        </Link>
      }
    >
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Docs</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Build with the full UITripled catalog
        </h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            The editor mirrors UITripled’s Landing Builder: drag any block, card, component,
            or native control from the library, reorder on the canvas with @dnd-kit, edit text
            inline, and use Grid / Background tools in the right panel.
          </p>
          <p>
            The catalog includes everything from{" "}
            <a
              className="text-primary underline-offset-4 hover:underline"
              href="https://ui.tripled.work/components"
              target="_blank"
              rel="noreferrer"
            >
              ui.tripled.work/components
            </a>
            — blocks, cards, components, native UI, page transitions, resumes, and more.
          </p>
          <p>
            Every page supports AEO intent + primary answer. Publish emits JSON-LD, llms.txt,
            sitemap, and robots.
          </p>
        </div>
      </section>
      <LazyBlock id="about-us-section" />
      <LazyBlock id="our-services-section" />
      <LazyBlock id="timeline-block" />
      <LazyBlock id="faq-accordion-block" />
      <LazyBlock id="footer-block" />
    </PlatformShell>
  );
}
