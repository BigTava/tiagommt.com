FROM node:16.13.0-alpine

# Set working directory
RUN mkdir -p /app
WORKDIR /app

# Add `node_modules/.bin` to $PATH
ENV PATH /app/f-core/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Start app
CMD ["npm", "start"]
