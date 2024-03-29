FROM node:18-alpine AS base

# ----------------------------------------
# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# ----------------------------------------
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

ARG NEXT_PUBLIC_API_ENDPOINT
ARG NEXT_PUBLIC_CDN_URL
ARG NEXT_PUBLIC_CDN_REMOVE_PREFIXES
ARG NEXT_PUBLIC_STORAGE_TEMP_BUCKET
ARG NEXT_PUBLIC_STORAGE_ASSETS_BUCKET
ARG NEXT_PUBLIC_STORAGE_AVATARS_BUCKET
ARG NEXT_PUBLIC_STORAGE_UPLOADS_BUCKET

ENV NEXT_PUBLIC_API_ENDPOINT=$NEXT_PUBLIC_API_ENDPOINT
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL
ENV NEXT_PUBLIC_CDN_REMOVE_PREFIXES=$NEXT_PUBLIC_CDN_REMOVE_PREFIXES
ENV NEXT_PUBLIC_STORAGE_TEMP_BUCKET=$NEXT_PUBLIC_STORAGE_TEMP_BUCKET
ENV NEXT_PUBLIC_STORAGE_ASSETS_BUCKET=$NEXT_PUBLIC_STORAGE_ASSETS_BUCKET
ENV NEXT_PUBLIC_STORAGE_AVATARS_BUCKET=$NEXT_PUBLIC_STORAGE_AVATARS_BUCKET
ENV NEXT_PUBLIC_STORAGE_UPLOADS_BUCKET=$NEXT_PUBLIC_STORAGE_UPLOADS_BUCKET

RUN npm run build

# ----------------------------------------
# Production image, copy all the files and run next
FROM base AS release
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/node_modules/next/dist/compiled/jest-worker ./node_modules/next/dist/compiled/jest-worker

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
