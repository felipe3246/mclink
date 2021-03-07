FROM node:12.18.3-alpine3.12 AS builder
WORKDIR /opt/web
COPY package.json ./
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN npm build

FROM nginx:1.18.0-alpine
COPY --from=builder /opt/web/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443