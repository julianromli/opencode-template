@echo off
echo 🔄 Updating Superpowers plugin...

REM Navigate to superpowers directory
cd /d C:\Users\faiz\.config\opencode\superpowers

REM Pull latest changes
echo 📥 Fetching latest changes...
git pull origin main

REM Update plugin file
echo 🔧 Updating plugin file...
copy ".opencode\plugin\superpowers.js" "C:\Users\faiz\.config\opencode\plugin\superpowers.js"

REM Fix import path using PowerShell
echo 🔗 Fixing import path...
powershell -Command "(Get-Content 'C:\Users\faiz\.config\opencode\plugin\superpowers.js') -replace 'from \\'../../lib/skills-core.js\\'', 'from \\'../superpowers/lib/skills-core.js\\'' | Set-Content 'C:\Users\faiz\.config\opencode\plugin\superpowers.js'"

REM Fix skills directory path
echo 🔧 Fixing skills directory path...
powershell -Command "(Get-Content 'C:\Users\faiz\.config\opencode\plugin\superpowers.js') -replace 'path\\.resolve\\(__dirname, \\'../../skills\\'\\)', 'path.resolve(__dirname, \\'../superpowers/skills\\')' | Set-Content 'C:\Users\faiz\.config\opencode\plugin\superpowers.js'"

echo ✅ Update complete! Run 'opencode' to restart.
pause