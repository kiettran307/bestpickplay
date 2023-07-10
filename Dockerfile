FROM node:16.17.0-alpine3.15

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production
RUN mkdir -p /home/app
WORKDIR /home/app

COPY ./package*.json .
WORKDIR /home/app
RUN yarn --omit=optional

# need to install linux specific swc builds
COPY . .

RUN yarn build
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV PORT 3000


CMD [ "yarn", "start" ]