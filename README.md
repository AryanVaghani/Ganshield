<div align="center">

<img src="https://img.shields.io/badge/GanShield-Cyber%20Security%20Intelligence-00f0ff?style=for-the-badge&logo=shield&logoColor=white" alt="GanShield Banner"/>

# 🛡️ GanShield

### AI-Powered Intrusion Detection System Dashboard

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.34.0-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📌 Overview

**GanShield** is a modern, dark-themed **Cyber Security Intelligence** web application built with React and TypeScript. It features an AI-powered intrusion detection dashboard with real-time threat monitoring, beautiful animations, and a premium dark UI with neon accents.

> 🔐 Built for network security analysts who need fast, visual, and intelligent threat detection.

---

## ✨ Features

- 🌑 **Dark Mode UI** with cyan/neon accent palette
- 🎞️ **Smooth Animations** powered by Framer Motion
- 🔐 **Auth Flow** — Login & Sign-up with animated transitions
- 📊 **Analytics Dashboard** with real-time charts (Recharts)
- 🌐 **Landing Page** with hero section, feature grid, social proof & footer
- 💫 **Micro-animations** — Spinning Shield, Glowing Effects, Display Cards, Text Scramble
- ⚡ **Blazing Fast** — Vite dev server with HMR
- 📱 **Fully Responsive** layout

---

## 🧰 Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | React | `^19.2.0` |
| **Language** | TypeScript | `~5.9.3` |
| **Build Tool** | Vite | `^7.3.1` |
| **Styling** | TailwindCSS | `^4.1.18` |
| **Animations** | Framer Motion | `^12.34.0` |
| **Routing** | React Router DOM | `^7.13.0` |
| **Charts** | Recharts | `^3.7.0` |
| **Icons** | Lucide React | `^0.564.0` |
| **Utilities** | clsx + tailwind-merge | `^2.1.1` / `^3.5.0` |
| **Linting** | ESLint + TypeScript ESLint | `^9.39.1` / `^8.48.0` |

---

## 📁 Project Structure

```
ganshield/
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── AuthForm.tsx          # Login/Sign-up form
│   │   ├── Background.tsx        # Animated background
│   │   ├── DisplayCardsSection.tsx
│   │   ├── FeaturesGrid.tsx      # Feature cards grid
│   │   ├── Footer.tsx
│   │   ├── GridFloor.tsx         # 3D grid floor effect
│   │   ├── HeroSection.tsx       # Landing hero
│   │   ├── Navbar.tsx
│   │   ├── SocialProof.tsx
│   │   ├── SpinningShield.tsx    # Animated 3D shield
│   │   └── ui/                   # Low-level UI primitives
│   │       ├── display-cards.tsx
│   │       ├── flow-field-background.tsx
│   │       ├── glowing-effect.tsx
│   │       ├── material-design-3-ripple.tsx
│   │       └── text-scramble.tsx
│   ├── lib/
│   │   └── utils.ts              # Shared utility functions
│   ├── pages/
│   │   ├── AuthPage.tsx          # Auth page (login/signup)
│   │   ├── Dashboard.tsx         # Main analytics dashboard
│   │   └── LandingPage.tsx       # Public landing page
│   ├── App.tsx                   # Root component + routing
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── vite.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **npm** `>= 9.x` *(comes with Node.js)*
- **Git** — [Download](https://git-scm.com/)

> ⚠️ **Windows users:** If `npm` commands fail in PowerShell, run this once:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
> ```

---

### 🔧 Installation

**1. Clone the repository**

```bash
git clone https://github.com/AryanVaghani/Ganshield.git
cd Ganshield
```

**2. Install dependencies**

```bash
npm install
```

---

### 🖥️ Running the App

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Start local development server with HMR |
| **Build** | `npm run build` | Compile TypeScript + bundle for production |
| **Preview** | `npm run preview` | Preview the production build locally |
| **Lint** | `npm run lint` | Run ESLint checks |

---

## 🏗️ Production Build

```bash
npm run build
```

Output will be in the `dist/` folder. You can serve it with any static host (Vercel, Netlify, GitHub Pages, etc.)

To preview the build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

This project is ready to deploy on:

- **[Vercel](https://vercel.com)** — Just import the GitHub repo, no config needed
- **[Netlify](https://netlify.com)** — Connect repo and set build command to `npm run build`
- **[GitHub Pages](https://pages.github.com)** — Use `vite-plugin-gh-pages`

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **[Aryan Vaghani](https://github.com/AryanVaghani)**

⭐ Star this repo if you find it useful!

</div>
