FROM node:alpine

RUN apk add --no-cache \
  chromium \ 
  ffmpeg

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"] 