FROM node:18-alpine as build-stage
RUN apk update
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

# check files list
#RUN ls -a

RUN npm install
RUN npm run build
EXPOSE 4000
CMD [ "node", "dist/index.js" ]