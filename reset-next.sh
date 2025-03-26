#!/bin/bash
echo "Stopping any running processes..."
pkill -f "next"
echo "Removing all caches and temporary files..."
rm -rf ./apps/web/.next
rm -rf ./apps/web/node_modules/.cache
rm -rf ./.turbo
find . -name ".next" -type d -exec rm -rf {} +
find . -name ".turbo" -type d -exec rm -rf {} +
echo "Re-installing dependencies..."
yarn install --force
echo "Starting with all validations disabled..."
cd apps/web && NEXT_SKIP_METADATA_VALIDATION=1 DISABLE_ESLINT_PLUGIN=1 NODE_OPTIONS="--max-old-space-size=4096" yarn dev 