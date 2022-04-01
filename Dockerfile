FROM node:16-buster-slim
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN npm install pm2 -g
RUN yarn install
COPY . /app
CMD ["yarn", "start"]
