# OpenPages AI — SaaS control plane (EasyPanel / GHCR)
FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate \
  && apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

FROM base AS builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/saas ./apps/saas
COPY packages ./packages
# Keep NODE_ENV unset during install so prisma (devDependency) is available.
ENV NEXTAUTH_URL="http://localhost:3000" \
    NEXTAUTH_SECRET="build-time-secret" \
    NODE_OPTIONS=--max-old-space-size=6144 \
    DATABASE_URL="file:/app/apps/saas/prisma/seed.db"
RUN pnpm install --frozen-lockfile \
  && pnpm --filter @openpages/saas exec prisma generate \
  && pnpm --filter @openpages/saas exec prisma db push --skip-generate \
  && NODE_ENV=production pnpm --filter @openpages/saas build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=80 \
    HOSTNAME=0.0.0.0 \
    DATA_DIR=/data \
    DATABASE_URL="file:/data/openpages.db"
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p /data \
  && chown -R node:node /data /app
COPY --from=builder --chown=node:node /app/apps/saas/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/saas/.next/static ./apps/saas/.next/static
COPY --from=builder --chown=node:node /app/apps/saas/prisma ./apps/saas/prisma
COPY --from=builder --chown=node:node /app/apps/saas/public ./apps/saas/public
USER node
EXPOSE 80
VOLUME ["/data"]
CMD ["sh", "-c", "if [ ! -f /data/openpages.db ]; then cp /app/apps/saas/prisma/seed.db /data/openpages.db; fi; node apps/saas/server.js"]
