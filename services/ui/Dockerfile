# pull official base image
FROM node:16.13.0-alpine

# set working directory
RUN mkdir -p /app/ui
WORKDIR /app/ui

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/ui/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000

# start app
CMD ["npm", "start"]
