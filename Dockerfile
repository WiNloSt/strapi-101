FROM node:12 AS builder
WORKDIR /app/
# Install dependencies
COPY package.json yarn.lock /app/
RUN yarn
COPY ./ /app/
# build
ENV NODE_ENV=production
RUN yarn build

FROM node:12
WORKDIR /app/
COPY --from=builder /app/ /app/
# start app
ENV NODE_ENV=production
CMD yarn start
