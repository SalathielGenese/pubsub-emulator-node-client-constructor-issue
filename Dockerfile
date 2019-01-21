FROM node:dubnium-alpine as BUILDER
COPY package.json yarn.loc[k] /app/
RUN yarn install --cwd /app/
COPY src/ /app/src/

FROM node:dubnium-alpine as APPLICATION
COPY --from=BUILDER /app/ /opt/app/
CMD [ "node", "src/index.js" ]
WORKDIR /opt/app/
