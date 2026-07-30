# OpenPages AI — Agent Guide

## Product

AI-native, SEO/AEO-focused, block-based website studio.

- **Builder UI:** Left (Pages / Blocks / Components) · Center (Live Preview/Edit) · Right (AI Copilot)
- **Publish:** Multi-tenant SSR/ISR on `*.openpages.ai` + custom domains
- **Export:** Next.js codegen → GitHub (one-way)
- **CMS:** Keystone sidecar for blog/collections
- **AI:** Vercel AI SDK tools + LangChain RAG/agents + Media Fabric (image/video)

## Source of truth

1. Site structure / pages / blocks / nav / theme / SEO-AEO → Zod `SiteDocument` in control-plane Prisma
2. Blog/CMS entries → Keystone (`workspaceId` + `siteId`)
3. Publish → immutable `Publication` snapshot
4. Canvas, SSR renderer, and GitHub export share `@openpages/renderer` + `@openpages/blocks`

## Monorepo

- `apps/saas` — Control plane (Open SaaS–inspired Next.js: auth, billing, credits, editor, jobs)
- `apps/cms` — Keystone CMS
- `apps/sites` — Multi-tenant published site renderer
- `apps/web-builder` — Optional standalone builder shell (primary editor lives in saas `/editor`)
- `packages/*` — shared schema, blocks, renderer, seo-aeo, ai-core, media, codegen

## Commands

```bash
pnpm install
pnpm db:push
pnpm dev:saas   # :3000
pnpm dev:cms    # :3001 Keystone (falls back to lite GraphQL)
pnpm dev:sites  # :3002
pnpm e2e && pnpm smoke
```

Local DB defaults to SQLite under `apps/saas/prisma/dev.db`. Docker Compose Postgres remains available for production-shaped runs.

## Rules

- Never invent block props outside Zod schemas in `@openpages/document-schema`
- AI tools must validate mutations with Zod before applying
- All queries filter by `workspaceId`
- Do not edit the plan file under `.cursor/plans`
