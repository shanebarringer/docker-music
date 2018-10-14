FROM node:latest
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install knex -g
COPY . .

EXPOSE 3001

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]



