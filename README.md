# Gaurav Tiwari — Portfolio Website 🚀

A modern, interactive portfolio website built with React, TypeScript, Three.js, and GSAP — featuring 3D character rendering, smooth scroll animations, and a responsive design.

![Portfolio Preview](/screenshots/Gauravpf.png)

---

## ⚙️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **3D / WebGL** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | GSAP, ScrollTrigger, SplitText |
| **Styling** | Vanilla CSS, Inter (Google Fonts) |
| **Analytics** | Vercel Analytics |

---

## 🗂️ Project Structure

```
├── public/
│   ├── draco/          # Draco decoder for compressed 3D models
│   ├── images/         # Static images & project screenshots
│   ├── models/         # 3D character model & environment HDR
│   └── screenshots/    # Project showcase images
├── src/
│   ├── components/     # React components (Landing, About, Work, Career, etc.)
│   │   ├── Character/  # 3D character model loader
│   │   ├── styles/     # Component-specific CSS
│   │   └── utils/      # Animation utilities (GSAP effects, scroll triggers)
│   ├── context/        # React context (loading state)
│   ├── data/           # Static data files
│   ├── App.tsx         # Root component with lazy loading
│   └── index.css       # Global styles & CSS variables
├── index.html          # Entry point
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Portfolio-Website-gaurav.git
cd Portfolio-Website-gaurav

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This project is deployment-ready. The production build (`npm run build`) outputs to the `dist/` directory.

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

### Netlify

1. Push to GitHub
2. Import on [app.netlify.com](https://app.netlify.com)
3. Set **Build Command**: `npm run build` and **Publish Directory**: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add `"base": "/Portfolio-Website-gaurav/"` to `vite.config.ts`
3. Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"`
4. Run `npm run deploy`

---

## ⚠️ GSAP Plugin Notice

This project uses GSAP trial plugins (SplitText).
Trial plugins work in development but **cannot be used in production** without a GSAP Club license.

For official GSAP Club plugins, see: https://gsap.com/docs/v3/Installation/

---

## 🎨 Assets & Credits

- **Original template** by [Moncy Yohannan](https://moncy.dev) — adapted and customized for personal use
- Some 3D assets included are free for learning purposes
- The original custom 3D avatar from the live site is **not included** in this repository

---

## 📄 License

This project is licensed under the **Personal Portfolio License (PPL) v1.0**.
See the [LICENSE](./LICENSE) file for full details.
