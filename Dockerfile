FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose port 8080 to the outside world
EXPOSE 3000

CMD ["npm", "run", "start"]

