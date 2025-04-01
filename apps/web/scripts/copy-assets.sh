#!/bin/bash

echo "📦 Copying assets..."

# Create necessary directories
mkdir -p public/_next
mkdir -p .next/static

# Copy static files
cp -r .next/static/* public/_next/static/

# Set proper permissions
chmod -R 755 public/_next

echo "✅ Assets copied successfully!" 