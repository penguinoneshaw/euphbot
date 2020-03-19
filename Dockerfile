FROM node:latest

RUN mkdir -p /usr/src/bot/src
WORKDIR /usr/src/bot

COPY package.json .
COPY ./src/* src/

RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]