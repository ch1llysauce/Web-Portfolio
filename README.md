# Chilly — Software Developer Portfolio

<div align="center">

  <img src="public/favicon.svg" alt="Chilly Logo" width="120" />

  <h3>Personal Software Developer Portfolio & Progressive Web Application (PWA)</h3>

  <p>
    A high-performance, minimalist, and responsive developer portfolio built with modern web technologies.
  </p>

  <p>
    <a href="https://github.com/ch1llysauce"><img src="https://img.shields.io/badge/Author-Chilldon%20Paul%20Carreon-6366f1?style=for-the-badge" alt="Author" /></a>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
  </p>
</div>

---

## ✨ Features

- ⚡ **Blazing Fast SPA & Instant Transitions:** Built with React 19, React Router 7, and Vite 8 for smooth, zero-reload navigation.
- 📱 **Progressive Web App (PWA):** Installable on desktop and mobile devices with offline caching powered by `vite-plugin-pwa` and Workbox.
- 🌓 **Dynamic Theme Switching:** Seamless dark and light mode toggle with customized theme-aware screenshots and persistent state.
- 🖼️ **Adaptive Project Showcase:** True 16:9 widescreen framing with custom positional viewport alignment (`object-contain`, `object-top`, etc.) for web and mobile project screenshots.
- 📬 **Interactive Contact Matrix:** Direct integration with EmailJS for message delivery, along with interactive direct-action cards for Email, LinkedIn, and GitHub.
- 🧩 **Modular Bento Architecture:** Clean, grid-based highlights for education, location, availability, and technical proficiencies.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Lucide React Icons |
| **Routing** | React Router 7 |
| **Build & Tooling** | Vite 8, React Compiler, Babel Preset |
| **PWA & Offline** | Vite Plugin PWA, Workbox Service Worker |
| **Email Service** | EmailJS Browser SDK |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ch1llysauce/Web-Portfolio.git
   cd Web-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
portfolio/
├── public/               # Static assets, favicon, resume, icons
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, TechStack, ProjectGrid, Contact
│   │   └── ui/           # LogoMark, ProjectCard, LoadingScreen, Button, ThemeToggle
│   ├── context/          # ThemeContext (Dark/Light mode provider)
│   ├── data/             # Curated project data & metadata
│   ├── pages/            # Home, ProjectDetails, NotFound
│   ├── types/            # TypeScript interfaces & types
│   ├── App.tsx           # Main application routing
│   └── main.tsx          # React DOM entrypoint & PWA registration
├── index.html            # HTML shell with PWA meta tags
├── vite.config.ts        # Vite, Tailwind, & PWA configuration
└── package.json          # Project scripts and dependencies
```

---

## 👤 Author

**Chilldon Paul Carreon (Chilly)**
- **GitHub:** [@ch1llysauce](https://github.com/ch1llysauce)
- **LinkedIn:** [Chilldon Paul Carreon](https://www.linkedin.com/in/chilldon-paul-carreon/)
- **Email:** [chillrigel05@gmail.com](mailto:chillrigel05@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
