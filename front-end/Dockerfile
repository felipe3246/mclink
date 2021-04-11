FROM node:12.18.3-alpine3.12 as build
WORKDIR /app
COPY package.json ./
ENV PATH="./node_modules/.bin:$PATH"
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./

RUN npm run build

FROM nginx:1.19.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]