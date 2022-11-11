FROM node
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run prestart:prod
ENTRYPOINT [ "npm","run","start:prod" ]