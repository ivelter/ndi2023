FROM node:latest as builder

EXPOSE 80

ENV NODE_ENV production

WORKDIR /app
COPY * /app

RUN npm ci && npm run build

FROM nginx:alpine-slim

# Pour copier les fichiers compilés
COPY --from=builder /app/out /var/www/html
COPY nginx/* /etc/nginx/