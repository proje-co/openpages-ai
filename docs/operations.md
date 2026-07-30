# OpenPages AI operations

## Services

| Service | Port | Command |
| --- | --- | --- |
| Postgres + MinIO | 5432 / 9000 | `docker compose up -d` |
| SaaS + Editor | 3000 | `pnpm dev:saas` |
| Keystone CMS | 3001 | `pnpm dev:cms` |
| Sites renderer | 3002 | `pnpm dev:sites` |

## Abuse & monitoring

- AI credits enforce soft rate limits per workspace
- All site queries filter by `workspaceId`
- Public renderer only serves `Publication` snapshots (or draft preview by host)
- LangChain/URL crawl should use allowlists (`OPENPAGES_CRAWL_ALLOWLIST`)
- Store audit reports from Unlighthouse-compatible jobs in `AuditReport`

## Backups

- Postgres volume `pgdata`
- Uploaded assets under `apps/saas/public/uploads`

## Billing

Plans: Free / Pro / Scale via `/pricing` and `POST /api/billing/plan`.
Wire Stripe/Polar webhooks using Open SaaS patterns (`STRIPE_SECRET_KEY`).
