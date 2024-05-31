FROM node:20

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

COPY packages packages

RUN yarn install

ENV API_PORT=8080

EXPOSE 8080

CMD [ "yarn", "workspace", "@my-garden/api", "start" ]