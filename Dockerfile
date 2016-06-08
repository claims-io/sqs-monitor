FROM alpine

ENV NODE_ENV=production

RUN apk add --update nodejs

ADD dist/ /app
WORKDIR /app

CMD ["node", "/app/index.js"]
