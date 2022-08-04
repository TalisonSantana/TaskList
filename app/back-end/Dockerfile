FROM node:16-alpine

WORKDIR /app/back

COPY package.json /app/back

RUN npm install

EXPOSE 3001

COPY . /app/back

CMD ["npm", "start"]