# 🎹 Piano WhatsApp Channel

A beautiful, responsive web page for the Piano WhatsApp Channel community, built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Site

**Visit:** [https://starf-ish.github.io/](https://starf-ish.github.io/)

## ✨ Features

- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Beautiful UI**: Gradient backgrounds with glassmorphism effects
- **📊 Schedule Tracking**: Current practice schedule and targets
- **🏆 Progress Updates**: Latest achievements and work in progress
- **🍪 Cookie Banner**: GDPR-compliant cookie consent
- **⚡ Fast Loading**: Optimized Vite build with modern bundling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/starf-ish/starf-ish.github.io.git
cd starf-ish.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
starf-ish.github.io/
├── src/
│   ├── components/
│   │   └── CookieBanner.tsx    # Cookie consent component
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── public/
│   └── vite.svg               # Favicon
├── dist/                      # Build output
├── .github/
│   └── workflows/
│       └── deploy.yml         # Auto-deployment workflow
├── package.json
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
└── README.md
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and is configured for GitHub Pages deployment:

```typescript
export default defineConfig({
  base: '/',  // User Pages site (username.github.io)
  plugins: [react()],
})
```

### Tailwind CSS
Custom color palette using rose/pink theme with glassmorphism effects.

## 🚀 Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🎨 Design Features

- **Color Scheme**: Rose/pink gradient theme
- **Typography**: Clean, modern fonts with proper hierarchy
- **Layout**: Responsive grid system with mobile-first approach
- **Effects**: Glassmorphism cards with backdrop blur
- **Icons**: Lucide React icons for consistency
- **Animations**: Smooth hover transitions and progress bars

## 📊 Current Schedule

The site displays the current practice schedule:
- **35 followers target**: Etude Op 10 No 1 (yn)
- **40 followers target**: Nocturne Op 9 No 2 (hx)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 About

This page was created for the Piano WhatsApp Channel community to track practice schedules, celebrate achievements, and motivate members to keep practicing.

> 菜就多练 (Practice more if you're not good enough)

---

**Built with ❤️ by the Piano Channel Community**
