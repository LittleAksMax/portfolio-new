FROM node:26-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install --global yarn@1.22.22 \
	&& yarn install --frozen-lockfile --ignore-scripts
COPY . .
RUN yarn build

FROM nginxinc/nginx-unprivileged:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 8080