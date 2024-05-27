FROM node:latest

WORKDIR /amit/menu
COPY package.json .
RUN npm install
COPY . .
CMD npm start