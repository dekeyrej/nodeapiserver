FROM node:lts-alpine
EXPOSE 3000
WORKDIR /home/node/app
COPY . .
RUN npm install
CMD ["node", "index.js"]
