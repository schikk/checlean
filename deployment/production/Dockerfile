FROM nginx:alpine

WORKDIR /app


RUN apk update && apk add --update "nodejs=12.15.0-r1" nodejs-npm
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --production

COPY . /app
RUN npm run build -- --prod

COPY ./deployment/production/nginx.conf /etc/nginx/conf.d/default.conf
