FROM node:12-alpine
RUN npm install pm2 -g && mkdir /www
WORKDIR /www
COPY package*.json ./
RUN npm install
COPY . .
CMD ["pm2", "start", "npm", "--", "start"]