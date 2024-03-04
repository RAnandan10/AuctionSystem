FROM node:alpine
ENV CI=true

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm update
RUN npm install ts-node-dev@latest
RUN npm install ts-node@latest
COPY . .

CMD ["npm", "run", "start"]