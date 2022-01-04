FROM node:17

RUN npm install -g npm@8.2.0
RUN npm install -g yarn
RUN yarn --frozen-lockfile
RUN yarn build

EXPOSE 3000
ENTRYPOINT yarn start:prod