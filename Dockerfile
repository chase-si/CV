FROM node:20.14.0
ENV NODE_ENV=production
WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "yarn.lock", "./"]
RUN npm install --production && mv node_modules ../
COPY . .
EXPOSE 3013
RUN npm run build
CMD ["npm", "start"]
