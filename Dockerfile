FROM node:20-alpine AS build
LABEL authors="Miguel Angel Ake Us"
WORKDIR /app/src
COPY package*.json ./
RUN --mount=type=secret,id=npm_token && \
    npm config set @akeus:registry https://npm.pkg.github.com && \
    npm config set //npm.pkg.github.com/:_authToken $(cat /run/secrets/npm_token) && \
    npm ci
COPY . ./
RUN npm run build

FROM node:20-alpine AS publish
LABEL authors="Miguel Angel Ake Us"
RUN addgroup -S akeusgroup && adduser -S akeususer -G akeusgroup
USER  akeususer
EXPOSE 4000
WORKDIR /app/dist
COPY --from=build /app/src/dist/miguel-ake-landing/ ./
CMD ["node", "server/server.mjs"]
