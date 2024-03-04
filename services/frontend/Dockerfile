FROM node:14.15.5-alpine3.10
ENV CI=true
 
WORKDIR /app
COPY package.json .
RUN npm install 
RUN npm update
RUN npm install ts-node-dev@latest
RUN npm install ts-node@latest
COPY . .
 
CMD ["npm", "run", "start"]