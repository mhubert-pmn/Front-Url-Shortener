# Pull the base image
FROM node:latest

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the package* files to ./
COPY package*.json ./

# Install dependencies
RUN npm install

# Add app
COPY . ./

# Definition of the port to be listened
EXPOSE 3000

# Start app
CMD ["npm", "start"]