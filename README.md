# 👑 Royal Keta — Premium Salmon Hatchery Website

**From Roe to Royal** — Experience the science, taste the excellence, invest in the future.

[![Production Ready](https://img.shields.io/badge/status-production--ready-success)](https://github.com)
[![React 18](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)

---

## 🎯 Project Overview

Premium static website for **Royal Keta** — a salmon hatchery and caviar production facility on Sakhalin Island, Russia.

### Features

- 🏛️ **13 Complete Pages**: Home, Tours, Science, Caviar, Investment, Tokenization, Pricing, Gallery, Blog, FAQ, About, Contacts, Legal
- 🎨 **Premium Dark Theme**: Glass-morphism design with gold accents (#CFAE58)
- 📱 **Fully Responsive**: Mobile-first design with smooth animations
- 🗺️ **Interactive Map**: Leaflet integration on Contacts page
- 📊 **SEO Optimized**: Per-page meta tags, OG images, JSON-LD schemas, sitemap.xml
- ⚡ **Fast Performance**: Code splitting, lazy loading, optimized builds
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 + TypeScript + Vite |
| **Styling** | TailwindCSS v3 + shadcn/ui components |
| **Routing** | React Router v7 |
| **Animations** | Framer Motion |
| **Maps** | Leaflet |
| **SEO** | react-helmet-async + JSON-LD |
| **Icons** | lucide-react |
| **Deploy** | GitHub Pages + GitHub Actions |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check:types

# Linting
npm run lint

# Generate sitemap
npm run generate:sitemap
```

---

## 📁 Project Structure

```
royalketa.com/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui primitives (Button, Card, Badge, etc.)
│   │   ├── Header.tsx       # Sticky navigation with mobile menu
│   │   ├── Footer.tsx       # Multi-column footer with social links
│   │   ├── Hero.tsx         # Animated hero section with parallax
│   │   ├── Timeline.tsx     # Breeding cycle timeline component
│   │   ├── Marquee.tsx      # Scrolling partners/logos component
│   │   └── LeafletMap.tsx   # Interactive map with custom markers
│   ├── pages/               # 13 page components (Home, HatcheryTour, etc.)
│   ├── layouts/             # DefaultLayout wrapper
│   ├── seo/                 # SEO components and JSON-LD schemas
│   ├── lib/                 # Utility functions (cn, formatDate, etc.)
│   ├── styles/              # Global styles and Tailwind config
│   ├── router.tsx           # Route configuration
│   ├── App.tsx              # App root
│   └── main.tsx             # Entry point
├── public/
│   ├── og/                  # OG images (1200×630) for all pages
│   ├── favicon.svg          # SVG favicon with crown emoji
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # Search engine directives
│   └── sitemap.xml          # Auto-generated sitemap (13 URLs)
├── scripts/
│   └── generate-sitemap.ts  # Sitemap generation script
└── .github/workflows/
    └── deploy.yml           # Auto-deploy to GitHub Pages
```

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, pillars, breeding cycle, investment teaser |
| **Hatchery Tour** | `/hatchery-tour` | 3 packages (Family/Premium/Corporate), booking |
| **Science** | `/science` | 4-stage breeding methodology |
| **Caviar** | `/caviar` | Product catalog with wholesale inquiry |
| **Investment** | `/investment` | Models A/B/C/D breakdown |
| **Tokenization** | `/tokenization` | Blockchain integration, franchise opportunities |
| **Pricing** | `/pricing` | Comparison table of all packages |
| **Gallery** | `/gallery` | Photo grid with category filters |
| **Blog** | `/blog` | News and updates (+ dynamic `/blog/:slug`) |
| **FAQ** | `/faq` | 20+ Q&A with Accordion UI |
| **About** | `/about` | Mission, values, company story |
| **Contacts** | `/contacts` | Contact info + interactive Leaflet map |
| **Legal** | `/legal` | Terms, Privacy Policy, Investment Disclaimer |

---

## 🎨 Design System

### Colors

```css
--background:     #0B0F14  /* Deep dark blue-black */
--foreground:     #D6DEE6  /* Light grey-blue */
--gold:           #CFAE58  /* Premium gold accent */
--ocean:          #1E90A0  /* Teal-blue */
```

### Typography

- **Display**: Playfair Display (serif with high contrast)
- **Body**: Inter (geometric sans-serif)

### Components

- **Glass-morphism cards** with backdrop-blur
- **Soft shadows** and gold glow effects
- **Smooth transitions** with Framer Motion
- **prefers-reduced-motion** support

---

## 🔧 Configuration

### GitHub Pages

Update `vite.config.ts` base path:

```ts
base: '/repository-name/'  // or '/' for custom domain
```

### Environment

All routes work without server-side rendering (SPA mode).

---

## 🚢 Deployment

### Automatic (via GitHub Actions)

Push to `main` branch triggers auto-deploy to GitHub Pages.

### Manual

```bash
npm run build
# Upload dist/ folder to your hosting
```

---

## 📝 TODO (Future Enhancements)

- [ ] Real OG images (currently placeholders)
- [ ] Professional photography (breeding process, families, caviar)
- [ ] Formspree forms integration (tour booking, investment inquiries)
- [ ] PhotoSwipe gallery lightbox
- [ ] Additional JSON-LD schemas (FAQPage, Product, Event)
- [ ] i18n support (EN/RU) with i18next
- [ ] Blog content management
- [ ] Video integration for breeding cycle
- [ ] Analytics integration

---

## 📊 Project Stats

- **13 Pages** (all routes functional)
- **15+ Components** (including shadcn/ui primitives)
- **3 Specialized Components** (Timeline, Marquee, LeafletMap)
- **13 OG Images** (placeholder)
- **Auto-generated Sitemap** (13 URLs)
- **Build Size**: ~625KB total (gzipped)
- **Code Split**: React, UI, Map vendors separated

---

## 📧 Contact

- **Email**: hello@royalketa.com
- **Location**: Nevelsky District, Sakhalin Oblast, Russia
- **Telegram**: [@royalketa](https://t.me/royalketa)

---

## 📄 License

© 2025 Royal Keta. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and TailwindCSS**
