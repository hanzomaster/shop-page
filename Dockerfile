FROM node:20.10.0-alpine
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .

RUN corepack enable
RUN pnpm i --frozen-lockfile

COPY . .
ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=production
RUN pnpm build

CMD ["pnpm", "start"]
EXPOSE 3000
