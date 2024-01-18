# build environment
FROM node:16-alpine3.14

#Creating Directory and move the workdir
RUN mkdir -p /home/app
WORKDIR /home/app

ENV PATH /home/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent


# add app
COPY . ./
# build production mode
RUN NODE_OPTIONS="--max-old-space-size=2500" npm run build --silent

# add http server
RUN npm install -g serve

# start server
CMD serve -s -p 3000 build

# CMD vite preview --host 0.0.0.0 --port 3000 build
#
