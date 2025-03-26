#!/bin/bash

echo "🔧 Fixing metadata issues..."

# Stop the development server if it's running
pkill -f "next"

# Clear only Next.js cache
rm -rf apps/web/.next

# Remove the problematic config option
sed -i '' '/skipMetadataInputCheck/d' apps/web/next.config.js

# Start the development server with minimal flags
cd apps/web && NEXT_SKIP_METADATA_VALIDATION=1 yarn dev 