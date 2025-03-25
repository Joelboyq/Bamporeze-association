#!/bin/bash

# Find all TypeScript files that use the Dictionary type with getDictionary
find apps/web/src -name "*.tsx" -o -name "*.ts" | xargs grep -l "Dictionary.*getDictionary" | while read file; do
  # Replace the typed declaration with type assertion
  sed -i '' 's/const dictionary: Dictionary = getDictionary(locale)/const dictionary = getDictionary(locale) as any/g' "$file"
  echo "Fixed: $file"
done 