FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm ci

# Copy the rest of the code
COPY . .

# Build TypeScript
RUN npm run build

# Create data directory
RUN mkdir -p /app/data

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "dist/index.js"]