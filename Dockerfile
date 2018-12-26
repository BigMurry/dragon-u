FROM keymetrics/pm2:10-jessie
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY pm2.config.js ./

ENV NODE_ENV production
RUN yarn install --production=true
COPY . ./
RUN yarn build
CMD ["pm2-runtime", "start", "pm2.config.js", "--env", "production"]
