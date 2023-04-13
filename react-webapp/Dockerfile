FROM node:14

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN yarn install

# add app
COPY . .

# Expose the port
EXPOSE 3000

# start app
CMD ["yarn", "start"]





