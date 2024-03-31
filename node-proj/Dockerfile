# FROM node:10-alpine

# RUN mkdir -p /srv/node-proj
# WORKDIR /srv/node-proj

# COPY package.json /srv/node-proj
# COPY package-lock.json /srv/node-proj

# RUN npm install

# COPY . /srv/node-proj

# EXPOSE 3000

# CMD ["npm","start"]


FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3001