# OpenCode Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/julianromli/opencode-template.svg?style=social&label=Star)](https://github.com/julianromli/opencode-template)

> Template project for OpenCode - A powerful and flexible AI development platform

## 📖 Description

OpenCode Template is a project template that provides a foundational structure for developing applications with OpenCode. This template is designed to give you a solid starting point with optimized configurations and comprehensive documentation.

## ✨ Features

- 🚀 **Well-Organized Project Structure** - Clean and maintainable folder layout
- 🔧 **Optimized Configuration** - Ready-to-use default settings
- 📚 **Comprehensive Documentation** - Complete development guide
- 🛡️ **Best Practices** - Following industry standards for security and performance
- 🔄 **Easy Deployment** - Ready for deployment to various platforms

## 🏗️ Project Structure

```
opencode/
├── agent/                  # Agent definitions and configuration
├── opencode-docs/         # OpenCode documentation
├── superpowers/           # Superpowers extensions
├── .gitignore            # Git ignore rules
├── opencode.json         # OpenCode configuration
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/julianromli/opencode-template.git
   cd opencode-template
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using bun (recommended)
   bun install
   ```

3. **Configure environment**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Edit configuration as needed
   nano .env
   ```

4. **Run the project**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

## 📦 Dependencies

### Main Dependencies
- **OpenCode** - AI development platform
- **Bun** - Fast JavaScript runtime and package manager

### Development Dependencies
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run typecheck
```

### Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Requirements

- Node.js >= 18.0.0
- npm >= 8.0.0 or bun >= 1.0.0
- Git >= 2.30.0

## 🔧 Configuration

### OpenCode Configuration

The `opencode.json` file contains the main OpenCode configuration:

```json
{
  "name": "opencode-template",
  "version": "1.0.0",
  "description": "Template project for OpenCode",
  "main": "index.js",
  "scripts": {
    "dev": "opencode dev",
    "build": "opencode build",
    "start": "opencode start"
  }
}
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# OpenCode Configuration
OPENCODE_ENV=development
OPENCODE_PORT=3000

# Database (if needed)
DATABASE_URL=your_database_url_here

# API Keys
OPENAI_API_KEY=your_openai_api_key_here
```

## 📖 Documentation

- [OpenCode Documentation](https://opencode.ai/docs)
- [API Reference](docs/api-reference.md)
- [Deployment Guide](docs/deployment.md)
- [Troubleshooting](docs/troubleshooting.md)

## 🐛 Troubleshooting

If you encounter any issues, please check:

1. [Troubleshooting Guide](TROUBLESHOOTING.md)
2. [Common Issues](docs/common-issues.md)
3. [FAQ](docs/faq.md)

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## 👨‍💻 Author

**Faiz Intifada**

[![Threads](https://img.shields.io/badge/Threads-@faizntfd-1DA1F2?style=flat&logo=threads&logoColor=white)](https://www.threads.com/@faizntfd)
[![GitHub](https://img.shields.io/badge/GitHub-julianromli-181717?style=flat&logo=github&logoColor=white)](https://github.com/julianromli)

## 🤝 Support

If you find this project helpful, please give it a ⭐️ on this repository!

For support and questions:
- Open an [Issue](https://github.com/julianromli/opencode-template/issues)
- Follow [@faizntfd](https://www.threads.com/@faizntfd) for the latest updates

---

Built with ❤️ using OpenCode Template