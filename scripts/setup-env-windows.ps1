# OpenCode Environment Variables Setup Script for Windows
# Run this script as Administrator in PowerShell

Write-Host "Setting up OpenCode environment variables..." -ForegroundColor Green

# Define environment variables
$envVars = @{
    "OPENCODE_EXPERIMENTAL_PLAN_MODE" = "1"
    "OPENCODE_UNSAFE_ALLOW_OUTSIDE" = "1"
    "OPENCODE_UNSAFE_FILES" = "1"
    "OPENCODE_UNSAFE_INCLUDE_GIT" = "1"
}

# Set environment variables for current user
foreach ($key in $envVars.Keys) {
    $value = $envVars[$key]
    
    Write-Host "Setting $key = $value" -ForegroundColor Yellow
    
    # Set for current session
    [System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::Process)
    
    # Set permanently for current user
    [System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::User)
}

Write-Host "`nEnvironment variables set successfully!" -ForegroundColor Green
Write-Host "Please restart your terminal or IDE for changes to take effect." -ForegroundColor Cyan

# Verify
Write-Host "`nVerifying environment variables:" -ForegroundColor Yellow
foreach ($key in $envVars.Keys) {
    $value = [System.Environment]::GetEnvironmentVariable($key, [System.EnvironmentVariableTarget]::User)
    Write-Host "$key = $value" -ForegroundColor White
}
