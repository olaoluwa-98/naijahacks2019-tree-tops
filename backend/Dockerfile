FROM node:12-alpine
RUN mkdir /www
WORKDIR /www
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]