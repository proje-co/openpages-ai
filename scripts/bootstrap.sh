#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
pnpm install
docker compose up -d
sleep 3
pnpm --filter @openpages/saas exec prisma db push
pnpm --filter @openpages/saas exec prisma generate
pnpm --filter @openpages/sites exec prisma generate
echo "Ready. Run: pnpm dev:saas"
