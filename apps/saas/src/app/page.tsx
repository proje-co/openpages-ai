import { LazyBlock } from "@/components/LazyBlock";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
