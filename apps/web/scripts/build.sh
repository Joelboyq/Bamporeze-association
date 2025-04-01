#!/bin/bash

echo "🏗️ Building for production..."

# Clean previous build
rm -rf .next
rm -rf public/static

# Install dependencies
yarn install --frozen-lockfile

# Build the application
NODE_ENV=production yarn build

# Ensure static files are properly copied
mkdir -p public/static
cp -r .next/static/* public/static/

# Set proper permissions
chmod -R 755 public/static
chmod -R 755 .next

echo "✅ Build complete!" 