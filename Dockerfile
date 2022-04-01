FROM node:16-buster-slim
WORKDIR /app
COPY package.json /app
RUN npm install yarn -g
RUN npm install pm2 -g
RUN yarn install
COPY . /app
CMD ["yarn", "start"]
