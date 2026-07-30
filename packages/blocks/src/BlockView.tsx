import type { Block, ThemeTokens } from "@openpages/document-schema";
import type { CSSProperties, ReactNode } from "react";
import { UitripledSectionView } from "./UitripledSectionView";

export function themeToCssVars(theme: ThemeTokens): CSSProperties {
  return {
    ["--op-primary" as string]: theme.primary,
    ["--op-secondary" as string]: theme.secondary,
    ["--op-bg" as string]: theme.background,
    ["--op-fg" as string]: theme.foreground,
    ["--op-accent" as string]: theme.accent,
    ["--op-radius" as string]: theme.radius,
    ["--op-font-display" as string]: `"${theme.fontDisplay}", Georgia, serif`,
    ["--op-font-body" as string]: `"${theme.fontBody}", system-ui, sans-serif`,
    ["--op-body-size" as string]: theme.bodyFontSize,
    ["--op-body-weight" as string]: theme.bodyFontWeight,
    ["--op-h1-size" as string]: theme.h1FontSize,
    ["--op-h1-weight" as string]: theme.h1FontWeight,
    ["--op-h2-size" as string]: theme.h2FontSize,
    ["--op-h2-weight" as string]: theme.h2FontWeight,
    ["--op-h3-size" as string]: theme.h3FontSize,
    ["--op-h3-weight" as string]: theme.h3FontWeight,
    colorScheme: theme.colorMode,
  };
}

function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`op-section ${className}`.trim()}>{children}</section>;
}

export function BlockView({
  block,
  blogPosts,
}: {
  block: Block;
  blogPosts?: Array<{
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
  }>;
}) {
  if (block.type === "UitripledSection") {
    return (
      <UitripledSectionView
        blockId={block.id}
        animationId={block.animationId}
        elements={block.elements}
        textContent={block.textContent}
      />
    );
  }

  switch (block.type) {
    case "Hero":
      return (
        <section className="op-hero op-section">
          {block.eyebrow ? <div className="op-eyebrow">{block.eyebrow}</div> : null}
          <h1>{block.headline}</h1>
          {block.subheadline ? <p>{block.subheadline}</p> : null}
          <div className="op-actions">
            {block.primaryCta ? (
              <a className="op-btn op-btn-primary" href={block.primaryCta.href}>
                {block.primaryCta.label}
              </a>
            ) : null}
            {block.secondaryCta ? (
              <a className="op-btn op-btn-secondary" href={block.secondaryCta.href}>
                {block.secondaryCta.label}
              </a>
            ) : null}
          </div>
          {block.mediaUrl ? (
            block.mediaType === "video" ? (
              <video
                className="op-media"
                src={block.mediaUrl}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img className="op-media" src={block.mediaUrl} alt="" />
            )
          ) : null}
        </section>
      );
    case "Navbar":
      return (
        <nav className="op-nav" aria-label="Primary">
          <strong>{block.brand}</strong>
          <div>
            {block.links.map((l) => (
              <a key={l.href + l.label} href={l.href}>
                {l.label}
              </a>
            ))}
            {block.cta ? (
              <a className="op-btn op-btn-primary" href={block.cta.href}>
                {block.cta.label}
              </a>
            ) : null}
          </div>
        </nav>
      );
    case "LogoCloud":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div className="op-grid op-grid-4" style={{ marginTop: "1.5rem" }}>
            {block.logos.map((logo) => (
              <div className="op-card" key={logo.name}>
                <img src={logo.src} alt={logo.name} style={{ maxHeight: 40 }} />
              </div>
            ))}
          </div>
        </Section>
      );
    case "Features":
      return (
        <Section>
          <h2>{block.title}</h2>
          {block.subtitle ? <p>{block.subtitle}</p> : null}
          <div className="op-grid op-grid-3" style={{ marginTop: "1.5rem" }}>
            {block.items.map((item) => (
              <article className="op-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>
      );
    case "FeatureGrid":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div
            className={`op-grid op-grid-${block.columns}`}
            style={{ marginTop: "1.5rem" }}
          >
            {block.items.map((item) => (
              <article className="op-card" key={item.title}>
                {item.image ? (
                  <img className="op-media" src={item.image} alt="" />
                ) : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>
      );
    case "Stats":
      return (
        <Section>
          <div className="op-grid op-grid-4">
            {block.items.map((item) => (
              <div className="op-card" key={item.label}>
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>{item.value}</div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </Section>
      );
    case "Testimonials":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div className="op-grid op-grid-2" style={{ marginTop: "1.5rem" }}>
            {block.items.map((item) => (
              <blockquote className="op-card" key={item.author + item.quote.slice(0, 12)}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.author}</strong>
                  {item.role ? ` — ${item.role}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>
      );
    case "CTA":
      return (
        <Section>
          <div className="op-card" style={{ textAlign: "center", padding: "2.5rem" }}>
            <h2>{block.title}</h2>
            {block.subtitle ? <p>{block.subtitle}</p> : null}
            <a className="op-btn op-btn-primary" href={block.button.href}>
              {block.button.label}
            </a>
          </div>
        </Section>
      );
    case "Pricing":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div className="op-grid op-grid-3" style={{ marginTop: "1.5rem" }}>
            {block.plans.map((plan) => (
              <article
                className="op-card"
                key={plan.name}
                style={
                  plan.highlighted
                    ? { outline: "2px solid var(--op-primary)" }
                    : undefined
                }
              >
                <h3>{plan.name}</h3>
                <p style={{ fontSize: "2rem", fontWeight: 700 }}>
                  {plan.price}
                  <span style={{ fontSize: "1rem" }}>{plan.period}</span>
                </p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="op-btn op-btn-primary" href={plan.cta.href}>
                  {plan.cta.label}
                </a>
              </article>
            ))}
          </div>
        </Section>
      );
    case "Footer":
      return (
        <footer className="op-footer">
          <span>{block.copyright}</span>
          <div>
            {block.links.map((l) => (
              <a key={l.href} href={l.href} style={{ marginRight: "1rem" }}>
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      );
    case "RichText":
      return (
        <Section>
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </Section>
      );
    case "Image":
      return (
        <Section>
          <figure>
            <img className="op-media" src={block.src} alt={block.alt} />
            {block.caption ? <figcaption>{block.caption}</figcaption> : null}
          </figure>
        </Section>
      );
    case "Video":
      return (
        <Section>
          <video
            className="op-media"
            src={block.src}
            poster={block.poster}
            autoPlay={block.autoPlay}
            muted={block.muted}
            loop={block.loop}
            playsInline
            controls
          />
          {block.transcript ? (
            <details>
              <summary>Transcript</summary>
              <p>{block.transcript}</p>
            </details>
          ) : null}
        </Section>
      );
    case "FormContact":
      return (
        <Section>
          <form className="op-card" onSubmit={(e) => e.preventDefault()}>
            <h2>{block.title}</h2>
            <label>
              Email
              <input type="email" name="email" required style={{ display: "block", width: "100%", margin: "0.5rem 0 1rem", padding: "0.75rem" }} />
            </label>
            <label>
              Message
              <textarea name="message" required rows={4} style={{ display: "block", width: "100%", margin: "0.5rem 0 1rem", padding: "0.75rem" }} />
            </label>
            <button className="op-btn op-btn-primary" type="submit">
              {block.submitLabel}
            </button>
          </form>
        </Section>
      );
    case "AnswerBlock":
      return (
        <Section>
          <div className="op-answer">
            <h2 style={{ fontSize: "1.25rem" }}>{block.question}</h2>
            <p>{block.answer}</p>
          </div>
        </Section>
      );
    case "FAQ":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div className="op-faq">
            {block.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      );
    case "HowToSteps":
      return (
        <Section>
          <h2>{block.title}</h2>
          <ol className="op-grid" style={{ marginTop: "1.5rem", gap: "1rem" }}>
            {block.steps.map((step, i) => (
              <li className="op-card" key={step.title}>
                <strong>
                  {i + 1}. {step.title}
                </strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Section>
      );
    case "Comparison":
      return (
        <Section>
          <h2>{block.title}</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th align="left">Feature</th>
                {block.columns.map((c) => (
                  <th key={c} align="left">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td key={`${row.feature}-${i}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      );
    case "EntityCard":
      return (
        <Section>
          <article className="op-card">
            <div className="op-eyebrow">{block.entityType}</div>
            <h2>{block.name}</h2>
            <p>{block.description}</p>
            {block.url ? <a href={block.url}>{block.url}</a> : null}
          </article>
        </Section>
      );
    case "BlogList":
      return (
        <Section>
          <h2>{block.title}</h2>
          <div className="op-grid op-grid-2" style={{ marginTop: "1.5rem" }}>
            {(blogPosts ?? []).slice(0, block.limit).map((post) => (
              <a className="op-card" key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <h3>{post.title}</h3>
                {post.excerpt ? <p>{post.excerpt}</p> : null}
                {post.publishedAt ? <small>{post.publishedAt}</small> : null}
              </a>
            ))}
            {!blogPosts?.length ? (
              <p>No published posts yet. Add content in Keystone CMS.</p>
            ) : null}
          </div>
        </Section>
      );
    case "BlogPostBody":
      return (
        <Section>
          <p className="op-eyebrow">Blog post body binds at publish time</p>
        </Section>
      );
    case "Section":
      return (
        <section style={{ background: block.background }}>
          {block.children.map((child) => (
            <BlockView key={child.id} block={child} blogPosts={blogPosts} />
          ))}
        </section>
      );
    case "Columns":
      return (
        <Section>
          <div className={`op-grid op-grid-${block.columns}`} style={{ gap: block.gap }}>
            {block.children.map((child) => (
              <div key={child.id}>
                <BlockView block={child} blogPosts={blogPosts} />
              </div>
            ))}
          </div>
        </Section>
      );
    default: {
      const _exhaustive: never = block;
      return null;
    }
  }
}
