FROM node:20.5.1-alpine3.18

WORKDIR /www

COPY . .

RUN npm install --force -g yarn
RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]