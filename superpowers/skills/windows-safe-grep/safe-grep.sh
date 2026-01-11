#!/bin/bash
# Windows-safe grep wrapper for OpenCode
# Usage: safe-grep "search_pattern" "windows_path_with_spaces"

SEARCH_PATTERN="$1"
TARGET_PATH="$2"

if [ -z "$TARGET_PATH" ]; then
    # If no path provided, use current directory with forward slashes
    TARGET_PATH="$(pwd)"
fi

# Convert backslashes to forward slashes for Windows paths
WIN_PATH=$(echo "$TARGET_PATH" | sed 's/\\/\//g')

# Use find + grep as a workaround since ripgrep may not be available
# This avoids the Windows path parsing issue in OpenCode's ripgrep tool
# Exclude .next directory for faster results
find "$WIN_PATH" -type f \( -name "*.ts" -o -name "*.js" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.md" \) -not -path "*/.next/*" -not -path "*/node_modules/*" -exec grep -H --line-number -E "$SEARCH_PATTERN" {} \;
