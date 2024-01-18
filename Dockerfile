FROM node:16-alpine3.14

RUN npm install --silent
RUN NODE_OPTIONS="--max-old-space-size=2500" npm run build --silent
RUN npm install -g serve
CMD serve -s -p 3000 build
