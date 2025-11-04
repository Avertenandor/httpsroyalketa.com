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
  { slug: 'partners', title: 'Logistics Partners', subtitle: 'Reliable Delivery Across Russia', icon: '🚚' },
  { slug: 'crabbing', title: 'Crabbing on Sakhalin', subtitle: 'King Crab Fishing & Tours', icon: '🦀' },
  { slug: 'salmon-info', title: 'Salmon & Red Caviar', subtitle: 'Pacific Salmon Species Guide', icon: '🐟' },
  { slug: 'sturgeon-info', title: 'Sturgeon & Black Caviar', subtitle: 'Premium Caviar Encyclopedia', icon: '🐠' },
  { slug: 'mercury', title: 'Mercury eVSD System', subtitle: 'Electronic Veterinary Certification', icon: '✓' },
  { slug: 'legal', title: 'Legal Information', subtitle: 'Terms, Privacy & Disclosures', icon: '⚖️' },
];

function generateSVG(page: OGImage): string {
  // Generate caviar particles for background
  const particles = Array.from({ length: 30 }, (_, i) => {
    const x = Math.random() * 1200;
    const y = Math.random() * 630;
    const r = 2 + Math.random() * 4;
    const opacity = 0.1 + Math.random() * 0.15;
    return { x, y, r, opacity };
  });

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B0F14;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0F1619;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F1922;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#E5D596;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#CFAE58;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#B89842;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="oceanGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#4FD1C5;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#1E90A0;stop-opacity:0.05" />
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Decorative ocean gradients -->
  <ellipse cx="1000" cy="150" rx="300" ry="200" fill="url(#oceanGradient)" opacity="0.4"/>
  <ellipse cx="200" cy="530" rx="250" ry="180" fill="url(#oceanGradient)" opacity="0.3"/>

  <!-- Wave patterns -->
  <path d="M 0 400 Q 300 350 600 400 T 1200 400 L 1200 630 L 0 630 Z" fill="#1E90A0" opacity="0.08"/>
  <path d="M 0 450 Q 250 420 500 450 T 1000 450 T 1200 450 L 1200 630 L 0 630 Z" fill="#4FD1C5" opacity="0.05"/>

  <!-- Caviar roe particles -->
  ${particles.map(p => `<circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="#CFAE58" opacity="${p.opacity}"/>`).join('\n  ')}

  <!-- Border with glow -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="url(#goldGradient)" stroke-width="3" rx="12" filter="url(#softGlow)"/>

  <!-- Icon circle with premium background -->
  <circle cx="150" cy="200" r="75" fill="#CFAE58" opacity="0.15" filter="url(#softGlow)"/>
  <circle cx="150" cy="200" r="70" fill="#CFAE58" opacity="0.25"/>
  <text x="150" y="235" font-size="90" text-anchor="middle" fill="#CFAE58" filter="url(#glow)">${page.icon}</text>

  <!-- Premium logo (crown) with enhanced styling -->
  <g transform="translate(100, 70)">
    <path d="M 30 20 L 40 35 L 35 35 Z M 50 15 L 60 35 L 45 35 Z M 65 20 L 75 35 L 70 35 Z M 30 35 L 75 35 L 73 45 L 32 45 Z"
          fill="url(#goldGradient)" filter="url(#glow)" stroke="#B89842" stroke-width="0.5"/>
    <circle cx="40" cy="25" r="3" fill="#4FD1C5" filter="url(#glow)"/>
    <circle cx="52" cy="20" r="4" fill="#4FD1C5" filter="url(#glow)"/>
    <circle cx="65" cy="25" r="3" fill="#4FD1C5" filter="url(#glow)"/>
  </g>

  <!-- Title with shadow -->
  <text x="280" y="180" font-family="Georgia, serif" font-size="72" font-weight="bold"
        fill="url(#goldGradient)" filter="url(#shadow)">${page.title}</text>

  <!-- Subtitle with subtle glow -->
  <text x="280" y="230" font-family="Arial, sans-serif" font-size="36"
        fill="#D6DEE6" opacity="0.95" filter="url(#softGlow)">${page.subtitle}</text>

  <!-- Brand name with letter spacing -->
  <text x="280" y="300" font-family="Georgia, serif" font-size="32" font-weight="bold"
        fill="#CFAE58" letter-spacing="4" filter="url(#glow)">ROYAL KETA</text>

  <!-- Russian tagline -->
  <text x="280" y="340" font-family="Arial, sans-serif" font-size="22" font-style="italic"
        fill="#8B95A1" opacity="0.8">От икринки к королевской</text>

  <!-- Location -->
  <text x="280" y="380" font-family="Arial, sans-serif" font-size="20"
        fill="#8B95A1" opacity="0.7">Невельский район, Сахалин</text>

  <!-- Website with glow -->
  <text x="100" y="570" font-family="Arial, sans-serif" font-size="30" font-weight="bold"
        fill="#4FD1C5" filter="url(#glow)">royalketa.com</text>

  <!-- Enhanced decorative salmon silhouette -->
  <g transform="translate(950, 480)" opacity="0.2" filter="url(#softGlow)">
    <ellipse cx="0" cy="0" rx="90" ry="35" fill="#CFAE58"/>
    <path d="M 90 0 L 120 -18 L 130 0 L 120 18 Z" fill="#CFAE58"/>
    <path d="M -25 -35 L 0 -45 L 25 -35 Z" fill="#CFAE58"/>
    <ellipse cx="-50" cy="0" rx="15" ry="12" fill="#0B0F14"/>
  </g>

  <!-- Additional decorative caviar clusters -->
  <g opacity="0.2">
    <circle cx="1050" cy="120" r="6" fill="#CFAE58"/>
    <circle cx="1065" cy="115" r="5" fill="#CFAE58"/>
    <circle cx="1058" cy="130" r="4" fill="#CFAE58"/>
    <circle cx="150" cy="500" r="5" fill="#4FD1C5"/>
    <circle cx="165" cy="508" r="4" fill="#4FD1C5"/>
    <circle cx="140" cy="512" r="5" fill="#4FD1C5"/>
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
