#!/bin/bash

echo "🔄 Updating Superpowers plugin..."

# Navigate to superpowers directory
cd ~/.config/opencode/superpowers

# Pull latest changes
echo "📥 Fetching latest changes..."
git pull origin main

# Update plugin file
echo "🔧 Updating plugin file..."
cp .opencode/plugin/superpowers.js ~/.config/opencode/plugin/superpowers.js

# Fix import path if needed
echo "🔗 Fixing import path..."
sed -i 's|from '\''../../lib/skills-core.js'\''|from '\''../superpowers/lib/skills-core.js'\''|g' ~/.config/opencode/plugin/superpowers.js

# Fix superpowers skills directory path
echo "🔧 Fixing skills directory path..."
sed -i 's|path.resolve(__dirname, '\''../../skills'\'')|path.resolve(__dirname, '\''../superpowers/skills'\'')|g' ~/.config/opencode/plugin/superpowers.js

# Kill any running opencode processes
echo "🛑 Stopping opencode..."
pkill -f opencode 2>/dev/null || true

echo "✅ Update complete! Run 'opencode' to restart."