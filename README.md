# OpenPages AI

AI-native, SEO/AEO focused, block-based website builder.

Build multi-page sites and blogs with a three-panel editor, AI copilot (copy, structure, images, and video), platform SSR hosting, and GitHub export.

## Stack

| Layer | Tech |
| --- | --- |
| SaaS control plane | Next.js (Open SaaS–inspired), Prisma, NextAuth |
| CMS | Keystone 6 sidecar |
| Sites | Next.js multi-tenant SSR/ISR |
| Editor | Shared block renderer + 3-panel UI (Puck-ready) |
| AI | Vercel AI SDK tools + LangChain-style agents/RAG helpers |
| SEO/AEO | schema-dts, llms.txt, Zod, Transformers.js hooks |
| Media | sharp + image/video providers |
| Export | Codegen + Velite content collections + GitHub App |
| Audit | Unlighthouse-compatible jobs |

## Quick start

```bash
pnpm install
cp apps/saas/.env.example apps/saas/.env
pnpm db:push
pnpm dev:saas    # http://localhost:3000
pnpm dev:cms     # http://localhost:3001 (Keystone)
pnpm dev:sites   # http://localhost:3002
```

Local default DB is **SQLite** (`apps/saas/prisma/dev.db`) so Docker is optional.
For production Postgres + MinIO: start `docker compose up -d` and switch `DATABASE_URL` / Prisma provider back to `postgresql` (see `docker-compose.yml`).

## Acceptance smoke

```bash
pnpm e2e      # offline package smoke
pnpm smoke    # creates demo site + publication + media + export files
```

## Workspace layout

See [AGENTS.md](./AGENTS.md). Operations notes in [docs/operations.md](./docs/operations.md).

## License

Proprietary — OpenPages AI
