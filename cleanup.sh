#!/bin/bash


nvm use node


echo "🧹 Deep cleaning project..."

# Stop all running processes
echo "Stopping processes..."
pkill -f "next"

# Remove all caches and build artifacts
echo "Removing caches and builds..."
rm -rf apps/web/.next
rm -rf apps/web/node_modules/.cache
rm -rf .turbo
rm -rf node_modules/.cache
find . -name ".next" -type d -exec rm -rf {} +
find . -name ".turbo" -type d -exec rm -rf {} +

# Clear npm/yarn caches
echo "Clearing package manager caches..."
yarn cache clean

# Remove node_modules and reinstall
echo "Reinstalling dependencies..."
rm -rf node_modules
rm -rf apps/web/node_modules
yarn install --force

# Start fresh
echo "Starting development server..."
cd apps/web && yarn dev 