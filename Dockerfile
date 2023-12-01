FROM node:latest

EXPOSE 3000

ENV NODE_ENV production

WORKDIR /app
COPY * ./

RUN npm ci && npm run build

ENTRYPOINT [ "npm", "start" ]