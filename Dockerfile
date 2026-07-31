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
ENV NODE_ENV=production \
    NODE_OPTIONS=--max-old-space-size=6144 \
    DATABASE_URL="file:./build.db" \
    NEXTAUTH_URL="http://localhost:3000" \
    NEXTAUTH_SECRET="build-time-secret"
RUN pnpm install --frozen-lockfile \
  && pnpm --filter @openpages/saas exec prisma generate \
  && pnpm --filter @openpages/saas build

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
  && npm install -g prisma@6.1.0 \
  && chown -R node:node /data /app
COPY --from=builder /app/apps/saas/public ./apps/saas/public
COPY --from=builder --chown=node:node /app/apps/saas/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/saas/.next/static ./apps/saas/.next/static
COPY --from=builder --chown=node:node /app/apps/saas/prisma ./apps/saas/prisma
USER node
EXPOSE 80
VOLUME ["/data"]
CMD ["sh", "-c", "prisma db push --schema=/app/apps/saas/prisma/schema.prisma --skip-generate && node apps/saas/server.js"]
