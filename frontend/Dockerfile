# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files from frontend folder
COPY frontend/package*.json ./
RUN npm install

# Copy rest of frontend source code
COPY frontend/ ./

# Build for production
RUN npm run build

# Stage 2: Run the production build
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only production-ready files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the Next.js port
EXPOSE 3000

# Run the production server
CMD ["npm", "start"]