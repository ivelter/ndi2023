FROM node:latest

# Par défaut mais à voir avec 80
EXPOSE 3000

ENV NODE_ENV production

WORKDIR /app
COPY * ./

RUN npm ci && npm run build

# TODO: Potentiellement changer ce build pour qu'on puisse le 
# TODO: charger avec Apache ou Ngnix ou autre

ENTRYPOINT [ "npm", "start" ]