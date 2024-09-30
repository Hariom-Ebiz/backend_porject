# Step 1: Specify the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /src

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the application code to the container
COPY . .

# Step 6: Expose the application port
EXPOSE 5000

# Step 7: Define the command to run the app
CMD ["npm","run","dev"]
