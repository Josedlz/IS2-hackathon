FROM node:16.13.2-alpine3.15
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "dev"]


# FROM node:16.13.2-alpine3.15 as production
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . /app
# RUN npm run build
# # RUN npm start

# # EXPOSE 3000
# # CMD ["npm", "start"]

# # RUN npm run build
# RUN npm install -g serve
# # CMD serve -s build 3000
# CMD ["npm", "serve", "-s", "build", "--port 4000"]
