FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Giving user write permissions
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

USER node

COPY --chown=node:node . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]