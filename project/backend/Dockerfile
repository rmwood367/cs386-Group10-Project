# 1. Use a base image with Node.js
FROM node:16

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your application files
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Define the command to start your application
CMD ["node", "server.js"]
