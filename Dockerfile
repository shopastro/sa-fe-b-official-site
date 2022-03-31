FROM node:16-buster-slim
WORKDIR /app
COPY . .
RUN npm install && npm start
