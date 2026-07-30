import { z } from "zod";

export const ThemeTokensSchema = z.object({
  primary: z.string().default("#0F766E"),
  secondary: z.string().default("#134E4A"),
  background: z.string().default("#F8FAFC"),
  foreground: z.string().default("#0F172A"),
  accent: z.string().default("#F59E0B"),
  fontDisplay: z.string().default("Fraunces"),
  fontBody: z.string().default("Sora"),
  bodyFontSize: z.string().default("16px"),
  bodyFontWeight: z.string().default("400"),
  h1FontSize: z.string().default("3rem"),
  h1FontWeight: z.string().default("700"),
  h2FontSize: z.string().default("2.25rem"),
  h2FontWeight: z.string().default("600"),
  h3FontSize: z.string().default("1.5rem"),
  h3FontWeight: z.string().default("600"),
  /** Site canvas / published site appearance */
  colorMode: z.enum(["light", "dark"]).default("light"),
  radius: z.string().default("12px"),
  brandName: z.string().default("OpenPages AI"),
  /** Site-wide default meta (pages can override) */
  defaultMetaTitle: z.string().default(""),
  defaultMetaDescription: z.string().default(""),
  defaultOgImage: z.string().optional(),
  faviconUrl: z.string().optional(),
});
export type ThemeTokens = z.infer<typeof ThemeTokensSchema>;

export const BrandVoiceSchema = z.object({
  tone: z.string().default("clear, confident, helpful"),
  audience: z.string().default("founders and marketers"),
  forbiddenClaims: z.array(z.string()).default([]),
  keywords: z.array(z.string()).default([]),
});
export type BrandVoice = z.infer<typeof BrandVoiceSchema>;

export const NavItemSchema: z.ZodType<NavItem> = z.lazy(() =>
  z.object({
    id: z.string(),
    label: z.string(),
    href: z.string(),
    children: z.array(NavItemSchema).optional(),
  }),
);
export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
};

export const NavTreeSchema = z.object({
  items: z.array(NavItemSchema).default([]),
});
export type NavTree = z.infer<typeof NavTreeSchema>;

export const PageSeoSchema = z.object({
  title: z.string().default(""),
  description: z.string().default(""),
  canonical: z.string().optional(),
  ogImage: z.string().optional(),
  noIndex: z.boolean().default(false),
});
export type PageSeo = z.infer<typeof PageSeoSchema>;

export const PageAeoSchema = z.object({
  intent: z.string().default(""),
  primaryAnswer: z.string().default(""),
  entities: z.array(z.string()).default([]),
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .default([]),
  llmsHints: z.array(z.string()).default([]),
});
export type PageAeo = z.infer<typeof PageAeoSchema>;

export const BlockBaseSchema = z.object({
  id: z.string(),
  aeoHints: z.array(z.string()).optional(),
  seoHeadingLevel: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  analyticsId: z.string().optional(),
});

export const HeroBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Hero"),
  eyebrow: z.string().default(""),
  headline: z.string(),
  subheadline: z.string().default(""),
  primaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
  secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
  mediaUrl: z.string().optional(),
  mediaType: z.enum(["image", "video"]).optional(),
});

export const LogoCloudBlockSchema = BlockBaseSchema.extend({
  type: z.literal("LogoCloud"),
  title: z.string().default("Trusted by"),
  logos: z.array(z.object({ name: z.string(), src: z.string() })).default([]),
});

export const FeaturesBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Features"),
  title: z.string(),
  subtitle: z.string().default(""),
  items: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
      }),
    )
    .default([]),
});

export const FeatureGridBlockSchema = BlockBaseSchema.extend({
  type: z.literal("FeatureGrid"),
  title: z.string(),
  columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).default(3),
  items: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      }),
    )
    .default([]),
});

export const StatsBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Stats"),
  items: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .default([]),
});

export const TestimonialsBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Testimonials"),
  title: z.string().default("What customers say"),
  items: z
    .array(
      z.object({
        quote: z.string(),
        author: z.string(),
        role: z.string().optional(),
        avatar: z.string().optional(),
      }),
    )
    .default([]),
});

export const CtaBlockSchema = BlockBaseSchema.extend({
  type: z.literal("CTA"),
  title: z.string(),
  subtitle: z.string().default(""),
  button: z.object({ label: z.string(), href: z.string() }),
});

export const PricingBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Pricing"),
  title: z.string().default("Pricing"),
  plans: z
    .array(
      z.object({
        name: z.string(),
        price: z.string(),
        period: z.string().default("/mo"),
        features: z.array(z.string()).default([]),
        cta: z.object({ label: z.string(), href: z.string() }),
        highlighted: z.boolean().default(false),
      }),
    )
    .default([]),
});

export const FooterBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Footer"),
  copyright: z.string().default("© OpenPages AI"),
  links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
});

export const NavbarBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Navbar"),
  brand: z.string().default("OpenPages AI"),
  links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  cta: z.object({ label: z.string(), href: z.string() }).optional(),
});

export const RichTextBlockSchema = BlockBaseSchema.extend({
  type: z.literal("RichText"),
  html: z.string().default(""),
});

export const ImageBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Image"),
  src: z.string(),
  alt: z.string().default(""),
  caption: z.string().optional(),
});

export const VideoBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Video"),
  src: z.string(),
  poster: z.string().optional(),
  transcript: z.string().optional(),
  autoPlay: z.boolean().default(true),
  muted: z.boolean().default(true),
  loop: z.boolean().default(true),
});

export const FormContactBlockSchema = BlockBaseSchema.extend({
  type: z.literal("FormContact"),
  title: z.string().default("Contact us"),
  submitLabel: z.string().default("Send"),
  successMessage: z.string().default("Thanks — we'll be in touch."),
});

export const AnswerBlockSchema = BlockBaseSchema.extend({
  type: z.literal("AnswerBlock"),
  question: z.string(),
  answer: z.string(),
});

export const FaqBlockSchema = BlockBaseSchema.extend({
  type: z.literal("FAQ"),
  title: z.string().default("FAQ"),
  items: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .default([]),
});

export const HowToStepsBlockSchema = BlockBaseSchema.extend({
  type: z.literal("HowToSteps"),
  title: z.string(),
  steps: z
    .array(z.object({ title: z.string(), description: z.string() }))
    .default([]),
});

export const ComparisonBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Comparison"),
  title: z.string().default("Compare"),
  columns: z.array(z.string()).default([]),
  rows: z
    .array(
      z.object({
        feature: z.string(),
        values: z.array(z.string()),
      }),
    )
    .default([]),
});

export const EntityCardBlockSchema = BlockBaseSchema.extend({
  type: z.literal("EntityCard"),
  name: z.string(),
  entityType: z.enum(["Organization", "Product", "Person", "Place"]),
  description: z.string().default(""),
  url: z.string().optional(),
  sameAs: z.array(z.string()).default([]),
});

export const BlogListBlockSchema = BlockBaseSchema.extend({
  type: z.literal("BlogList"),
  title: z.string().default("Blog"),
  limit: z.number().int().positive().default(10),
  categorySlug: z.string().optional(),
});

export const BlogPostBodyBlockSchema = BlockBaseSchema.extend({
  type: z.literal("BlogPostBody"),
  showAuthor: z.boolean().default(true),
  showDate: z.boolean().default(true),
});

export const SectionBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Section"),
  background: z.string().optional(),
  children: z.array(z.any()).default([]),
});

export const ColumnsBlockSchema = BlockBaseSchema.extend({
  type: z.literal("Columns"),
  columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).default(2),
  gap: z.string().default("1.5rem"),
  children: z.array(z.any()).default([]),
});

export const ElementStyleSchema = z.object({
  fontSize: z.string().optional(),
  fontWeight: z.string().optional(),
  color: z.string().optional(),
  backgroundColor: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  padding: z.string().optional(),
  margin: z.string().optional(),
  borderRadius: z.string().optional(),
  textAlign: z.string().optional(),
  opacity: z.string().optional(),
  letterSpacing: z.string().optional(),
  lineHeight: z.string().optional(),
  display: z.string().optional(),
  maxWidth: z.string().optional(),
});
export type ElementStyle = z.infer<typeof ElementStyleSchema>;

export const ElementOverrideSchema = z.object({
  text: z.string().optional(),
  href: z.string().optional(),
  tag: z.string().optional(),
  styles: ElementStyleSchema.optional(),
});
export type ElementOverride = z.infer<typeof ElementOverrideSchema>;

export const UitripledSectionBlockSchema = BlockBaseSchema.extend({
  type: z.literal("UitripledSection"),
  animationId: z.string(),
  textContent: z
    .record(z.object({ original: z.string(), value: z.string() }))
    .optional(),
  elements: z.record(ElementOverrideSchema).optional(),
});

export const BlockSchema = z.discriminatedUnion("type", [
  HeroBlockSchema,
  LogoCloudBlockSchema,
  FeaturesBlockSchema,
  FeatureGridBlockSchema,
  StatsBlockSchema,
  TestimonialsBlockSchema,
  CtaBlockSchema,
  PricingBlockSchema,
  FooterBlockSchema,
  NavbarBlockSchema,
  RichTextBlockSchema,
  ImageBlockSchema,
  VideoBlockSchema,
  FormContactBlockSchema,
  AnswerBlockSchema,
  FaqBlockSchema,
  HowToStepsBlockSchema,
  ComparisonBlockSchema,
  EntityCardBlockSchema,
  BlogListBlockSchema,
  BlogPostBodyBlockSchema,
  SectionBlockSchema,
  ColumnsBlockSchema,
  UitripledSectionBlockSchema,
]);
export type Block = z.infer<typeof BlockSchema>;
export type BlockType = Block["type"];

export const PageSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  route: z.string(),
  seo: PageSeoSchema.default({}),
  aeo: PageAeoSchema.default({}),
  blocks: z.array(BlockSchema).default([]),
});
export type Page = z.infer<typeof PageSchema>;

export const SiteDocumentSchema = z.object({
  version: z.number().int().nonnegative().default(1),
  theme: ThemeTokensSchema.default({}),
  brandVoice: BrandVoiceSchema.default({}),
  nav: NavTreeSchema.default({ items: [] }),
  pages: z.array(PageSchema).default([]),
});
export type SiteDocument = z.infer<typeof SiteDocumentSchema>;

export const PublicationSnapshotSchema = z.object({
  document: SiteDocumentSchema,
  cmsContentHash: z.string(),
  publishedAt: z.string(),
  siteSlug: z.string(),
  siteName: z.string(),
});
export type PublicationSnapshot = z.infer<typeof PublicationSnapshotSchema>;

export const BLOCK_CATALOG: {
  type: BlockType;
  label: string;
  category: string;
}[] = [
  { type: "Hero", label: "Hero", category: "Hero" },
  { type: "Navbar", label: "Navbar", category: "Layout" },
  { type: "LogoCloud", label: "Logo Cloud", category: "SocialProof" },
  { type: "Features", label: "Features", category: "Content" },
  { type: "FeatureGrid", label: "Feature Grid", category: "Content" },
  { type: "Stats", label: "Stats", category: "SocialProof" },
  { type: "Testimonials", label: "Testimonials", category: "SocialProof" },
  { type: "CTA", label: "CTA", category: "CommerceLite" },
  { type: "Pricing", label: "Pricing", category: "CommerceLite" },
  { type: "Footer", label: "Footer", category: "Layout" },
  { type: "RichText", label: "Rich Text", category: "Content" },
  { type: "Image", label: "Image", category: "Media" },
  { type: "Video", label: "Video", category: "Media" },
  { type: "FormContact", label: "Contact Form", category: "CommerceLite" },
  { type: "AnswerBlock", label: "Answer", category: "AEO" },
  { type: "FAQ", label: "FAQ", category: "AEO" },
  { type: "HowToSteps", label: "How-To Steps", category: "AEO" },
  { type: "Comparison", label: "Comparison", category: "AEO" },
  { type: "EntityCard", label: "Entity Card", category: "AEO" },
  { type: "BlogList", label: "Blog List", category: "Blog" },
  { type: "BlogPostBody", label: "Blog Post Body", category: "Blog" },
  { type: "Section", label: "Section", category: "Layout" },
  { type: "UitripledSection", label: "UITripled Section", category: "UITripled" },
];

export function createEmptyDocument(
  brandName = "OpenPages AI",
): SiteDocument {
  const homeId = cryptoRandomId();
  return SiteDocumentSchema.parse({
    version: 1,
    theme: { brandName },
    brandVoice: {},
    nav: {
      items: [
        { id: cryptoRandomId(), label: "Home", href: "/" },
        { id: cryptoRandomId(), label: "Blog", href: "/blog" },
      ],
    },
    pages: [
      {
        id: homeId,
        title: "Home",
        slug: "home",
        route: "/",
        seo: {
          title: `${brandName} — Home`,
          description: `Welcome to ${brandName}`,
        },
        aeo: {
          intent: `What is ${brandName}?`,
          primaryAnswer: `${brandName} helps you build SEO and AEO ready websites with AI.`,
          entities: [brandName],
          faq: [],
          llmsHints: [],
        },
        blocks: [
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "site-navbar-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "glowy-waves-hero",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "feature-cards-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "stats-counter-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "faq-accordion-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "glassmorphism-pricing-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "glassmorphism-cta-block",
          },
          {
            id: cryptoRandomId(),
            type: "UitripledSection",
            animationId: "footer-block",
          },
        ],
      },
      {
        id: cryptoRandomId(),
        title: "Blog",
        slug: "blog",
        route: "/blog",
        seo: {
          title: `${brandName} Blog`,
          description: "Articles and updates",
        },
        aeo: {
          intent: `${brandName} blog articles`,
          primaryAnswer: `Read the latest from ${brandName}.`,
          entities: [brandName],
          faq: [],
          llmsHints: [],
        },
        blocks: [
          {
            id: cryptoRandomId(),
            type: "BlogList",
            title: "Latest posts",
            limit: 10,
          },
        ],
      },
    ],
  });
}

export function createDefaultBlock(type: BlockType): Block {
  const id = cryptoRandomId();
  switch (type) {
    case "Hero":
      return HeroBlockSchema.parse({
        id,
        type,
        headline: "New hero headline",
        subheadline: "Supporting copy goes here.",
      });
    case "LogoCloud":
      return LogoCloudBlockSchema.parse({ id, type });
    case "Features":
      return FeaturesBlockSchema.parse({
        id,
        type,
        title: "Features",
        items: [
          { title: "Feature one", description: "Description" },
          { title: "Feature two", description: "Description" },
        ],
      });
    case "FeatureGrid":
      return FeatureGridBlockSchema.parse({ id, type, title: "Grid" });
    case "Stats":
      return StatsBlockSchema.parse({
        id,
        type,
        items: [{ label: "Sites", value: "1k+" }],
      });
    case "Testimonials":
      return TestimonialsBlockSchema.parse({ id, type });
    case "CTA":
      return CtaBlockSchema.parse({
        id,
        type,
        title: "Ready to ship?",
        button: { label: "Start", href: "#" },
      });
    case "Pricing":
      return PricingBlockSchema.parse({ id, type });
    case "Footer":
      return FooterBlockSchema.parse({ id, type });
    case "Navbar":
      return NavbarBlockSchema.parse({ id, type });
    case "RichText":
      return RichTextBlockSchema.parse({
        id,
        type,
        html: "<p>Write something insightful.</p>",
      });
    case "Image":
      return ImageBlockSchema.parse({
        id,
        type,
        src: "/placeholder.svg",
        alt: "Placeholder",
      });
    case "Video":
      return VideoBlockSchema.parse({
        id,
        type,
        src: "/placeholder-video.mp4",
      });
    case "FormContact":
      return FormContactBlockSchema.parse({ id, type });
    case "AnswerBlock":
      return AnswerBlockSchema.parse({
        id,
        type,
        question: "What question does this page answer?",
        answer: "A clear, citation-friendly answer.",
      });
    case "FAQ":
      return FaqBlockSchema.parse({ id, type });
    case "HowToSteps":
      return HowToStepsBlockSchema.parse({
        id,
        type,
        title: "How it works",
        steps: [
          { title: "Describe", description: "Tell the copilot what you need." },
          { title: "Edit", description: "Tune blocks on the canvas." },
          { title: "Publish", description: "Ship to your subdomain." },
        ],
      });
    case "Comparison":
      return ComparisonBlockSchema.parse({
        id,
        type,
        columns: ["Us", "Them"],
        rows: [{ feature: "AEO blocks", values: ["Yes", "No"] }],
      });
    case "EntityCard":
      return EntityCardBlockSchema.parse({
        id,
        type: "EntityCard",
        name: "OpenPages AI",
        entityType: "Organization",
        description: "AI-native website studio",
      });
    case "BlogList":
      return BlogListBlockSchema.parse({ id, type });
    case "BlogPostBody":
      return BlogPostBodyBlockSchema.parse({ id, type });
    case "Section":
      return SectionBlockSchema.parse({ id, type, children: [] });
    case "Columns":
      return ColumnsBlockSchema.parse({ id, type, children: [] });
    case "UitripledSection":
      return UitripledSectionBlockSchema.parse({
        id,
        type: "UitripledSection",
        animationId: "glassmorphism-hero-block",
      });
    default: {
      const _exhaustive: never = type;
      throw new Error(`Unknown block type: ${_exhaustive}`);
    }
  }
}

function cryptoRandomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id_${Math.random().toString(36).slice(2, 10)}`;
}

export function findPage(
  doc: SiteDocument,
  pageId: string,
): Page | undefined {
  return doc.pages.find((p) => p.id === pageId);
}

export function findBlock(
  blocks: Block[],
  blockId: string,
): Block | undefined {
  for (const block of blocks) {
    if (block.id === blockId) return block;
    if (block.type === "Section" || block.type === "Columns") {
      const nested = findBlock(block.children as Block[], blockId);
      if (nested) return nested;
    }
  }
  return undefined;
}

export function parseSiteDocument(input: unknown): SiteDocument {
  return SiteDocumentSchema.parse(input);
}
