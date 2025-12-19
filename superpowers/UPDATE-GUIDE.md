# Superpowers Update Guide

## Quick Update (Recommended)

### Linux/Mac:
```bash
~/.config/opencode/superpowers/update-plugin.sh
```

### Windows:
```cmd
C:\Users\faiz\.config\opencode\superpowers\update-plugin.bat
```

## Manual Update

1. **Pull latest changes:**
   ```bash
   cd ~/.config/opencode/superpowers
   git pull origin main
   ```

2. **Update plugin:**
   ```bash
   cp .opencode/plugin/superpowers.js ~/.config/opencode/plugin/superpowers.js
   ```

3. **Fix import path:**
   ```bash
   sed -i 's|from '\''../../lib/skills-core.js'\''|from '\''../superpowers/lib/skills-core.js'\''|g' ~/.config/opencode/plugin/superpowers.js
   ```

4. **Restart OpenCode:**
   ```bash
   opencode
   ```

## Why This Fix is Needed

The plugin file needs to be copied to `~/.config/opencode/plugin/` because that's where OpenCode looks for plugins. However, the import path in the original file points to `../../lib/skills-core.js` which doesn't work from the plugin directory. We need to fix this to point to `../superpowers/lib/skills-core.js`.

## Troubleshooting

If you get import errors after update:
1. Check that the import path in `~/.config/opencode/plugin/superpowers.js` line 13 points to `../superpowers/lib/skills-core.js`
2. Run the update script again
3. Restart OpenCode completely