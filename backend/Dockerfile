FROM node:12-alpine
RUN mkdir /www
WORKDIR /www
COPY package.json /www/
COPY package-lock.json /www/
RUN npm install
COPY . /www/
CMD ["npm", "start"]