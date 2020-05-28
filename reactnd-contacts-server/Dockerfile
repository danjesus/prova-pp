FROM node:13.14.0-alpine
WORKDIR /app
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install --silent
RUN npm install -g nodemon --silent
COPY . /app

# used for http
EXPOSE 5001

# used for https
EXPOSE 5002

CMD ["npm", "start"]
