FROM alpine:latest

ENV PORT=${PORT}

RUN if [ "$PORT" = "" ]; \
    then export PORT=8080; \
    fi 

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apk update && apk upgrade && apk add git
RUN apk add --update nodejs npm
RUN npm install --global yarn
RUN yarn install --frozen-lockfile
RUN yarn global add @vue/cli
RUN yarn install
RUN npx browserslist@latest --update-db
EXPOSE ${PORT}
CMD yarn serve --mode production --port ${PORT}