# OpenCode Environment Setup Scripts

Scripts untuk mengatur environment variables OpenCode secara otomatis di Windows dan macOS/Linux.

## Environment Variables yang Diatur

```
OPENCODE_EXPERIMENTAL_PLAN_MODE=1    # Enable experimental plan mode
OPENCODE_UNSAFE_ALLOW_OUTSIDE=1      # Allow operations outside workspace
OPENCODE_UNSAFE_FILES=1              # Allow file operations
OPENCODE_UNSAFE_INCLUDE_GIT=1        # Include git operations
```

## Windows

### Opsi 1: PowerShell (Recommended)

1. Buka PowerShell sebagai **Administrator**
2. Jalankan script:

```powershell
cd scripts
.\setup-env-windows.ps1
```

3. Restart terminal atau IDE

### Opsi 2: Command Prompt (CMD)

1. Buka Command Prompt sebagai **Administrator**
2. Jalankan script:

```cmd
cd scripts
setup-env-windows.bat
```

3. Restart terminal atau IDE

### Opsi 3: Manual (Windows)

1. Tekan `Win + X` → pilih "System"
2. Klik "Advanced system settings"
3. Klik "Environment Variables"
4. Di "User variables", klik "New" untuk setiap variable:
   - Variable name: `OPENCODE_EXPERIMENTAL_PLAN_MODE`
   - Variable value: `1`
   - Ulangi untuk variable lainnya

## macOS / Linux

### Opsi 1: Automatic Script (Recommended)

1. Buka Terminal
2. Jalankan script:

```bash
cd scripts
bash setup-env-mac.sh
```

3. Reload shell configuration:

```bash
# Untuk zsh (default di macOS Catalina+)
source ~/.zshrc

# Untuk bash
source ~/.bashrc
# atau
source ~/.bash_profile
```

### Opsi 2: Manual (macOS/Linux)

1. Buka terminal
2. Edit file konfigurasi shell:

```bash
# Untuk zsh (default di macOS Catalina+)
nano ~/.zshrc

# Untuk bash
nano ~/.bashrc
```

3. Tambahkan di akhir file:

```bash
# OpenCode Environment Variables
export OPENCODE_EXPERIMENTAL_PLAN_MODE="1"
export OPENCODE_UNSAFE_ALLOW_OUTSIDE="1"
export OPENCODE_UNSAFE_FILES="1"
export OPENCODE_UNSAFE_INCLUDE_GIT="1"
```

4. Save (Ctrl+O, Enter, Ctrl+X)
5. Reload configuration:

```bash
source ~/.zshrc  # atau ~/.bashrc
```

## Verifikasi

Setelah setup, verifikasi environment variables sudah terset:

### Windows (PowerShell)
```powershell
$env:OPENCODE_EXPERIMENTAL_PLAN_MODE
$env:OPENCODE_UNSAFE_ALLOW_OUTSIDE
$env:OPENCODE_UNSAFE_FILES
$env:OPENCODE_UNSAFE_INCLUDE_GIT
```

### Windows (CMD)
```cmd
echo %OPENCODE_EXPERIMENTAL_PLAN_MODE%
echo %OPENCODE_UNSAFE_ALLOW_OUTSIDE%
echo %OPENCODE_UNSAFE_FILES%
echo %OPENCODE_UNSAFE_INCLUDE_GIT%
```

### macOS/Linux
```bash
echo $OPENCODE_EXPERIMENTAL_PLAN_MODE
echo $OPENCODE_UNSAFE_ALLOW_OUTSIDE
echo $OPENCODE_UNSAFE_FILES
echo $OPENCODE_UNSAFE_INCLUDE_GIT
```

Semua command di atas harus menampilkan output: `1`

## Troubleshooting

### Windows: "Execution Policy" Error

Jika mendapat error saat menjalankan PowerShell script:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Kemudian jalankan script lagi.

### macOS: Permission Denied

Jika mendapat "Permission denied":

```bash
chmod +x setup-env-mac.sh
bash setup-env-mac.sh
```

### Environment Variables Tidak Terdeteksi

1. **Pastikan sudah restart terminal/IDE** setelah setup
2. Untuk IDE (VS Code, etc), restart aplikasinya
3. Verifikasi dengan command di section "Verifikasi" di atas

### macOS: Script Tidak Menemukan Shell Config

Script akan otomatis membuat `~/.zshrc` jika tidak ditemukan. Jika masih ada masalah:

```bash
# Cek shell yang digunakan
echo $SHELL

# Jika zsh
touch ~/.zshrc

# Jika bash
touch ~/.bashrc
```

Kemudian jalankan script lagi.

## Uninstall / Remove

### Windows (PowerShell)
```powershell
[System.Environment]::SetEnvironmentVariable("OPENCODE_EXPERIMENTAL_PLAN_MODE", $null, [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENCODE_UNSAFE_ALLOW_OUTSIDE", $null, [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENCODE_UNSAFE_FILES", $null, [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENCODE_UNSAFE_INCLUDE_GIT", $null, [System.EnvironmentVariableTarget]::User)
```

### macOS/Linux
Edit `~/.zshrc` atau `~/.bashrc` dan hapus baris yang mengandung `OPENCODE_` variables, kemudian:

```bash
source ~/.zshrc  # atau ~/.bashrc
```

## Notes

- Script macOS/Linux akan membuat backup file konfigurasi shell sebelum modifikasi
- Backup disimpan dengan format: `~/.zshrc.backup.YYYYMMDD_HHMMSS`
- Environment variables ini diperlukan untuk fitur-fitur advanced OpenCode
- Aman untuk digunakan dalam development environment
