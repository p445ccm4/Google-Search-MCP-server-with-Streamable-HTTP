# Stage 1: Build Stage (for installing dependencies and building the application)
FROM node:22-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Copy the rest of the application code
COPY . .

# Install project dependencies
RUN npm install

# Build the application (if applicable, e.g., for a frontend framework)
RUN npm run build

# Stage 2: Production Stage (for a smaller, optimized final image)
FROM node:22-slim AS production

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist 
COPY --from=build /app/package.json /app/package-lock.json ./

# Expose the port your application listens on
EXPOSE 3030

CMD ["npm", "run", "start"]