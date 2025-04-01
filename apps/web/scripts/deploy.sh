#!/bin/bash

echo "🚀 Starting production deployment..."

# Clean up
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies
yarn install --frozen-lockfile

# Build the application
NODE_ENV=production yarn build

# Ensure proper permissions
chmod -R 755 .next/static

# Start the server
NODE_ENV=production yarn start 