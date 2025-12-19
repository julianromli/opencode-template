# OpenCode Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/julianromli/opencode-template.svg?style=social&label=Star)](https://github.com/julianromli/opencode-template)

> Template project untuk OpenCode - Platform pengembangan AI yang powerful dan fleksibel

## 📖 Deskripsi

OpenCode Template adalah template project yang menyediakan struktur dasar untuk pengembangan aplikasi dengan OpenCode. Template ini dirancang untuk memberikan starting point yang solid dengan konfigurasi yang sudah dioptimalkan dan dokumentasi yang lengkap.

## ✨ Fitur

- 🚀 **Struktur Project yang Terorganisir** - Layout folder yang clean dan maintainable
- 🔧 **Konfigurasi yang Sudah Dioptimalkan** - Settings default yang siap pakai
- 📚 **Dokumentasi Lengkap** - Panduan lengkap untuk pengembangan
- 🛡️ **Best Practices** - Mengikuti standar industri untuk keamanan dan performa
- 🔄 **Easy Deployment** - Siap untuk deployment ke berbagai platform

## 🏗️ Struktur Project

```
opencode/
├── agent/                  # Agent definitions dan konfigurasi
├── opencode-docs/         # Dokumentasi OpenCode
├── superpowers/           # Superpowers extensions
├── .gitignore            # Git ignore rules
├── opencode.json         # Konfigurasi OpenCode
├── package.json          # Dependencies dan scripts
└── README.md            # Dokumentasi project
```

## 🚀 Quick Start

1. **Clone repository**
   ```bash
   git clone https://github.com/julianromli/opencode-template.git
   cd opencode-template
   ```

2. **Install dependencies**
   ```bash
   # Menggunakan npm
   npm install
   
   # Menggunakan bun (recommended)
   bun install
   ```

3. **Konfigurasi environment**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Edit konfigurasi sesuai kebutuhan
   nano .env
   ```

4. **Jalankan project**
   ```bash
   npm run dev
   # atau
   bun run dev
   ```

## 📦 Dependencies

### Main Dependencies
- **OpenCode** - Platform AI development
- **Bun** - Fast JavaScript runtime dan package manager

### Development Dependencies
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run typecheck
```

### Contributing

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📋 Requirements

- Node.js >= 18.0.0
- npm >= 8.0.0 atau bun >= 1.0.0
- Git >= 2.30.0

## 🔧 Konfigurasi

### OpenCode Configuration

File `opencode.json` berisi konfigurasi utama OpenCode:

```json
{
  "name": "opencode-template",
  "version": "1.0.0",
  "description": "Template project untuk OpenCode",
  "main": "index.js",
  "scripts": {
    "dev": "opencode dev",
    "build": "opencode build",
    "start": "opencode start"
  }
}
```

### Environment Variables

Buat file `.env` di root directory:

```env
# OpenCode Configuration
OPENCODE_ENV=development
OPENCODE_PORT=3000

# Database (jika diperlukan)
DATABASE_URL=your_database_url_here

# API Keys
OPENAI_API_KEY=your_openai_api_key_here
```

## 📖 Dokumentasi Lengkap

- [OpenCode Documentation](https://opencode.ai/docs)
- [API Reference](docs/api-reference.md)
- [Deployment Guide](docs/deployment.md)
- [Troubleshooting](docs/troubleshooting.md)

## 🐛 Troubleshooting

Jika mengalami masalah, silakan cek:

1. [Troubleshooting Guide](TROUBLESHOOTING.md)
2. [Common Issues](docs/common-issues.md)
3. [FAQ](docs/faq.md)

## 📄 License

Distributed under the MIT License. Lihat [LICENSE](LICENSE) untuk informasi lebih lanjut.

## 👨‍💻 Author

**Faiz Intifada**

[![Threads](https://img.shields.io/badge/Threads-@faizntfd-1DA1F2?style=flat&logo=threads&logoColor=white)](https://www.threads.com/@faizntfd)
[![GitHub](https://img.shields.io/badge/GitHub-julianromli-181717?style=flat&logo=github&logoColor=white)](https://github.com/julianromli)

## 🤝 Support

Jika project ini bermanfaat, berikan ⭐️ di repository ini!

Untuk support dan pertanyaan:
- Buka [Issues](https://github.com/julianromli/opencode-template/issues)
- Ikuti [@faizntfd](https://www.threads.com/@faizntfd) untuk update terbaru

---

Dibuat dengan ❤️ menggunakan OpenCode Template