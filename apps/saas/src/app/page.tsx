import Link from "next/link";
import { LazyBlock } from "@/components/LazyBlock";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/50 px-6 py-4 backdrop-blur-xl">
        <div className="text-xl font-semibold tracking-tight">OpenPages AI</div>
        <div className="flex items-center gap-2">
          <Link
            href="/pricing"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/login"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Start free
          </Link>
        </div>
      </nav>
      <LazyBlock id="site-navbar-block" />
      <LazyBlock id="glowy-waves-hero" />
      <LazyBlock id="glassmorphism-logo-showcase-block" />
      <LazyBlock id="feature-cards-block" />
      <LazyBlock id="bento-grid-block" />
      <LazyBlock id="stats-counter-block" />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        <LazyBlock id="glass-blog-card" />
        <LazyBlock id="project-card" />
        <LazyBlock id="hover-expand-card" />
      </div>
      <LazyBlock id="glassmorphism-testimonials-block" />
      <LazyBlock id="faq-accordion-block" />
      <LazyBlock id="glassmorphism-pricing-block" />
      <LazyBlock id="glassmorphism-cta-block" />
      <LazyBlock id="footer-block" />
    </div>
  );
}
