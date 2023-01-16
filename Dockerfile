# pull official base image
FROM node:alpine

# set working directory
WORKDIR /front

# install app dependencies
COPY package*.json ./
RUN yarn install

# add app
COPY . .

# start app
CMD ["yarn", "start"]