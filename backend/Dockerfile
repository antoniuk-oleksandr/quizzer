FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@10.14.0
RUN pnpm install

COPY . .

RUN npx prisma generate

# Build your TS code
RUN pnpm run build

FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/generated ./generated

EXPOSE 8080

CMD ["node", "dist/main"]
