# FROM node:13.12.0-alpine


# WORKDIR /app

# COPY package*.json ./


# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html


# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM node:alpine
 
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3002