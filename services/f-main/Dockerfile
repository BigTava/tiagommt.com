FROM node:20.12-buster

# Set working directory
RUN mkdir -p /app
WORKDIR /app

# Add `node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

# Install and cache app dependencies
RUN npm ci && \
    mkdir node_modules/.cache && \ 
    chmod -R 777 node_modules/.cache

# Start app
CMD ["npm", "start"]