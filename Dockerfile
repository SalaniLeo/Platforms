FROM node:22-alpine AS external-website

ENV ANALYTICS="https://analytics.salanileo.dev/api/user/entered"

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

USER node:node

EXPOSE 3000

CMD ["node","build/index.js"]