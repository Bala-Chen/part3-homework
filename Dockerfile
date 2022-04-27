FROM alpine:3.15
ENV NODE_VERSION 16.14.2
COPY package.json app.js package-lock.json /app/ 
COPY controller /app/controller
COPY public /app/public
COPY module /app/module
COPY views /app/views
COPY . .
WORKDIR /app 
RUN apk add --update npm
EXPOSE 3500
CMD node app.js 
