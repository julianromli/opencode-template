@echo off
REM OpenCode Environment Variables Setup Script for Windows (CMD)
REM Run this script as Administrator

echo Setting up OpenCode environment variables...

REM Set environment variables permanently for current user
setx OPENCODE_EXPERIMENTAL_PLAN_MODE "1"
setx OPENCODE_UNSAFE_ALLOW_OUTSIDE "1"
setx OPENCODE_UNSAFE_FILES "1"
setx OPENCODE_UNSAFE_INCLUDE_GIT "1"

echo.
echo Environment variables set successfully!
echo Please restart your terminal or IDE for changes to take effect.
echo.

pause
