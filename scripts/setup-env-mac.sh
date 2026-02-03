#!/bin/bash
# OpenCode Environment Variables Setup Script for macOS/Linux
# Run with: bash setup-env-mac.sh

echo "Setting up OpenCode environment variables..."

# Define environment variables
declare -A env_vars=(
    ["OPENCODE_EXPERIMENTAL_PLAN_MODE"]="1"
    ["OPENCODE_UNSAFE_ALLOW_OUTSIDE"]="1"
    ["OPENCODE_UNSAFE_FILES"]="1"
    ["OPENCODE_UNSAFE_INCLUDE_GIT"]="1"
)

# Detect shell configuration file
if [ -f "$HOME/.zshrc" ]; then
    SHELL_CONFIG="$HOME/.zshrc"
    SHELL_NAME="zsh"
elif [ -f "$HOME/.bashrc" ]; then
    SHELL_CONFIG="$HOME/.bashrc"
    SHELL_NAME="bash"
elif [ -f "$HOME/.bash_profile" ]; then
    SHELL_CONFIG="$HOME/.bash_profile"
    SHELL_NAME="bash"
else
    echo "Warning: Could not detect shell configuration file"
    echo "Creating ~/.zshrc..."
    SHELL_CONFIG="$HOME/.zshrc"
    SHELL_NAME="zsh"
    touch "$SHELL_CONFIG"
fi

echo "Using shell configuration: $SHELL_CONFIG ($SHELL_NAME)"
echo ""

# Backup existing config
cp "$SHELL_CONFIG" "${SHELL_CONFIG}.backup.$(date +%Y%m%d_%H%M%S)"
echo "Backup created: ${SHELL_CONFIG}.backup.$(date +%Y%m%d_%H%M%S)"

# Add OpenCode section marker
if ! grep -q "# OpenCode Environment Variables" "$SHELL_CONFIG"; then
    echo "" >> "$SHELL_CONFIG"
    echo "# OpenCode Environment Variables" >> "$SHELL_CONFIG"
fi

# Add or update environment variables
for key in "${!env_vars[@]}"; do
    value="${env_vars[$key]}"
    
    # Remove existing entry if present
    sed -i.tmp "/export $key=/d" "$SHELL_CONFIG"
    rm -f "${SHELL_CONFIG}.tmp"
    
    # Add new entry
    echo "export $key=\"$value\"" >> "$SHELL_CONFIG"
    
    # Set for current session
    export "$key"="$value"
    
    echo "✓ Set $key = $value"
done

echo ""
echo "Environment variables set successfully!"
echo ""
echo "To apply changes, run one of the following:"
echo "  source $SHELL_CONFIG"
echo "  OR restart your terminal"
echo ""

# Verify
echo "Verifying environment variables:"
for key in "${!env_vars[@]}"; do
    value="${!key}"
    echo "  $key = $value"
done
