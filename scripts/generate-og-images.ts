import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface OGImage {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
}

const pages: OGImage[] = [
  { slug: 'home', title: 'From Roe to Royal', subtitle: 'Premium Salmon Hatchery & Caviar', icon: '🏠' },
  { slug: 'hatchery-tour', title: 'Hatchery Tours', subtitle: 'Family Experiences & Caviar Tasting', icon: '🎣' },
  { slug: 'science', title: 'Our Science', subtitle: 'Advanced Aquaculture Methodology', icon: '🔬' },
  { slug: 'caviar', title: 'Premium Caviar', subtitle: 'Excellence in Every Jar', icon: '🫙' },
  { slug: 'investment', title: 'Investment Opportunities', subtitle: 'Models A/B/C/D Returns', icon: '📈' },
  { slug: 'tokenization', title: 'Tokenization & Franchise', subtitle: 'Blockchain-Verified Returns', icon: '⛓️' },
  { slug: 'pricing', title: 'Tour Pricing', subtitle: 'Family, Premium & Corporate Packages', icon: '💰' },
  { slug: 'gallery', title: 'Photo Gallery', subtitle: 'Science, Family Tours & Caviar Production', icon: '📸' },
  { slug: 'blog', title: 'News & Insights', subtitle: 'Updates from Royal Keta Hatchery', icon: '📰' },
  { slug: 'faq', title: 'FAQ', subtitle: 'Frequently Asked Questions', icon: '❓' },
  { slug: 'about', title: 'About Royal Keta', subtitle: 'Our Mission, Team & Values', icon: 'ℹ️' },
  { slug: 'contacts', title: 'Contact Us', subtitle: 'Visit Us on Sakhalin Island', icon: '📍' },
  { slug: 'legal', title: 'Legal Information', subtitle: 'Terms, Privacy & Disclosures', icon: '⚖️' },
];

function generateSVG(page: OGImage): string {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B0F14;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F1922;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#E5D596;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#CFAE58;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#B89842;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Decorative patterns -->
  <circle cx="1000" cy="100" r="150" fill="#CFAE58" opacity="0.05"/>
  <circle cx="200" cy="530" r="120" fill="#1E90A0" opacity="0.05"/>
  <circle cx="1100" cy="500" r="100" fill="#CFAE58" opacity="0.03"/>

  <!-- Wave pattern -->
  <path d="M 0 400 Q 300 350 600 400 T 1200 400 L 1200 630 L 0 630 Z" fill="#1E90A0" opacity="0.05"/>

  <!-- Border -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="url(#goldGradient)" stroke-width="2" rx="8"/>

  <!-- Icon circle -->
  <circle cx="150" cy="200" r="70" fill="#CFAE58" opacity="0.2"/>
  <text x="150" y="230" font-size="80" text-anchor="middle" fill="#CFAE58">${page.icon}</text>

  <!-- Logo (crown) -->
  <g transform="translate(100, 70)">
    <path d="M 30 20 L 40 35 L 35 35 Z M 50 15 L 60 35 L 45 35 Z M 65 20 L 75 35 L 70 35 Z M 30 35 L 75 35 L 73 45 L 32 45 Z"
          fill="url(#goldGradient)" filter="url(#glow)"/>
    <circle cx="40" cy="25" r="3" fill="#4FD1C5"/>
    <circle cx="52" cy="20" r="4" fill="#4FD1C5"/>
    <circle cx="65" cy="25" r="3" fill="#4FD1C5"/>
  </g>

  <!-- Title -->
  <text x="280" y="180" font-family="Georgia, serif" font-size="72" font-weight="bold"
        fill="url(#goldGradient)" filter="url(#glow)">${page.title}</text>

  <!-- Subtitle -->
  <text x="280" y="230" font-family="Arial, sans-serif" font-size="36"
        fill="#D6DEE6" opacity="0.9">${page.subtitle}</text>

  <!-- Brand name -->
  <text x="280" y="300" font-family="Georgia, serif" font-size="28" font-weight="bold"
        fill="#CFAE58" letter-spacing="3">ROYAL KETA</text>

  <!-- Location -->
  <text x="280" y="340" font-family="Arial, sans-serif" font-size="24"
        fill="#8B95A1">Nevelsky District, Sakhalin</text>

  <!-- Website -->
  <text x="100" y="570" font-family="Arial, sans-serif" font-size="28"
        fill="#4FD1C5" opacity="0.8">royalketa.com</text>

  <!-- Decorative fish silhouette -->
  <g transform="translate(950, 480)" opacity="0.15">
    <ellipse cx="0" cy="0" rx="80" ry="30" fill="#CFAE58"/>
    <path d="M 80 0 L 110 -15 L 120 0 L 110 15 Z" fill="#CFAE58"/>
    <path d="M -20 -30 L 0 -40 L 20 -30 Z" fill="#CFAE58"/>
  </g>
</svg>`;
}

// Generate all OG images
const outputDir = resolve(__dirname, '../public/og');

try {
  mkdirSync(outputDir, { recursive: true });
} catch (e) {
  // Directory exists
}

pages.forEach((page) => {
  const svg = generateSVG(page);
  const outputPath = resolve(outputDir, `${page.slug}.svg`);
  writeFileSync(outputPath, svg, 'utf-8');
  console.log(`✅ Generated: ${page.slug}.svg`);
});

console.log(`\n🎨 Total OG images generated: ${pages.length}`);
console.log('📝 Note: SVG files created. For production, convert to PNG (1200x630) using imagemagick or online tools.');
