import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

interface PageMeta {
  path: string;
  title: string;
  description: string;
  ogImage: string;
}

const pages: PageMeta[] = [
  {
    path: '/',
    title: 'From Roe to Royal',
    description: 'Premium salmon hatchery and caviar production on Sakhalin Island. Sustainable breeding, family tours, and investment opportunities.',
    ogImage: '/og/home.png',
  },
  {
    path: '/hatchery-tour',
    title: 'Family Hatchery Tour',
    description: 'Educational family tours at our premium salmon hatchery on Sakhalin Island. Witness the complete lifecycle from egg to adult fish.',
    ogImage: '/og/hatchery-tour.png',
  },
  {
    path: '/science',
    title: 'Our Science',
    description: 'Cutting-edge aquaculture science and sustainable breeding practices. Research-backed methods for premium salmon production.',
    ogImage: '/og/science.png',
  },
  {
    path: '/caviar',
    title: 'Premium Caviar',
    description: 'Premium red caviar from sustainably farmed Pacific salmon. Wholesale orders available for discerning buyers.',
    ogImage: '/og/caviar.png',
  },
  {
    path: '/investment',
    title: 'Investment Opportunities',
    description: 'Tokenized investment opportunities in sustainable aquaculture. Transparent returns from premium salmon farming.',
    ogImage: '/og/investment.png',
  },
  {
    path: '/tokenization',
    title: 'Tokenization Platform',
    description: 'Blockchain-based tokenization for transparent aquaculture investments. Modern finance meets sustainable fishing.',
    ogImage: '/og/tokenization.png',
  },
  {
    path: '/pricing',
    title: 'Pricing & Products',
    description: 'Transparent pricing for premium caviar, hatchery tours, and investment opportunities at Royal Keta.',
    ogImage: '/og/pricing.png',
  },
  {
    path: '/gallery',
    title: 'Photo Gallery',
    description: 'Explore our premium salmon hatchery through stunning photography. Behind the scenes at Royal Keta.',
    ogImage: '/og/gallery.png',
  },
  {
    path: '/blog',
    title: 'Blog & News',
    description: 'Latest news, insights, and updates from Royal Keta salmon hatchery and caviar production.',
    ogImage: '/og/blog.png',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Common questions about our salmon hatchery, caviar products, tours, and investment opportunities.',
    ogImage: '/og/faq.png',
  },
  {
    path: '/about',
    title: 'About Royal Keta',
    description: 'Our mission, values, and team behind the premium salmon hatchery on Sakhalin Island.',
    ogImage: '/og/about.png',
  },
  {
    path: '/contacts',
    title: 'Contact Us',
    description: 'Get in touch with Royal Keta for caviar orders, tour bookings, or investment inquiries.',
    ogImage: '/og/contacts.png',
  },
  {
    path: '/partners',
    title: 'Our Partners',
    description: 'Logistics and industry partners supporting Royal Keta premium salmon production and distribution.',
    ogImage: '/og/partners.png',
  },
  {
    path: '/crabbing',
    title: 'Crabbing Experience',
    description: 'Unique crabbing tours on Sakhalin Island. Catch king crabs and enjoy fresh seafood.',
    ogImage: '/og/crabbing.png',
  },
  {
    path: '/salmon-info',
    title: 'About Salmon Species',
    description: 'Complete guide to Pacific salmon species, lifecycle, and sustainable farming practices.',
    ogImage: '/og/salmon-info.png',
  },
  {
    path: '/sturgeon-info',
    title: 'About Sturgeon & Black Caviar',
    description: 'Learn about sturgeon species, black caviar production, and conservation efforts.',
    ogImage: '/og/sturgeon-info.png',
  },
  {
    path: '/legal',
    title: 'Legal Information',
    description: 'Terms of service, privacy policy, and legal information for Royal Keta.',
    ogImage: '/og/legal.png',
  },
  {
    path: '/mercury',
    title: 'Меркурий — электронные ВСД для икры и рыбы',
    description: 'Royal Keta оформляет электронные ветеринарные сопроводительные документы (эВСД) в системе «Меркурий» на каждую партию икры и рыбной продукции. Что это, как работает цепочка, FAQ и нормативная база.',
    ogImage: '/og/mercury.jpg',
  },
];

function generateHTML(page: PageMeta): string {
  const fullTitle = page.path === '/' ? `${page.title} | Royal Keta` : `${page.title} | Royal Keta`;
  const ogImageUrl = `https://royalketa.com${page.ogImage}`;
  const canonicalUrl = `https://royalketa.com${page.path}`;

  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0B0F14" />

  <!-- Basic Meta Tags -->
  <title>${fullTitle}</title>
  <meta name="description" content="${page.description}" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Open Graph - для Facebook, VK, Telegram -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Royal Keta" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta property="og:image:secure_url" content="${ogImageUrl}" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${fullTitle}" />
  <meta property="og:locale" content="ru_RU" />

  <!-- Twitter Card - также используется Telegram -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@royalketa" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${page.description}" />
  <meta name="twitter:image" content="${ogImageUrl}" />
  <meta name="twitter:image:alt" content="${fullTitle}" />

  <!-- VK-специфичные теги -->
  <meta property="vk:image" content="${ogImageUrl}" />

  <!-- Telegram-специфичные теги -->
  <meta property="telegram:channel" content="@royalketa" />

  <!-- GitHub Pages SPA redirect handler -->
  <script>
    (function() {
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
  <!-- Static HTML for SEO bots only - actual app loads via SPA routing -->
  <!-- These files are NOT copied to dist - they're for pre-rendering bots only -->
</head>
<body>
  <div id="root"></div>
</body>
</html>
`;
}

function main() {
  console.log('🏗️  Generating static HTML pages with OG meta tags...\n');

  for (const page of pages) {
    const html = generateHTML(page);

    // Determine output path
    // IMPORTANT: Don't overwrite root index.html - Vite needs it for build
    // Only generate static pages for subdirectories in public/
    let outputPath: string;
    if (page.path === '/') {
      // Skip root - Vite will handle index.html
      console.log(`⏭️  Skipping root index.html (handled by Vite)`);
      continue;
    } else {
      const dir = join(process.cwd(), 'public', page.path.substring(1));
      mkdirSync(dir, { recursive: true });
      outputPath = join(dir, 'index.html');
    }

    writeFileSync(outputPath, html, 'utf-8');
    console.log(`✅ Generated: ${outputPath}`);
  }

  console.log(`\n🎉 Total pages generated: ${pages.length - 1} (root skipped)`);
  console.log('📝 Note: These files will be served to social media bots for OG preview cards.');
  console.log('📝 Root index.html is handled by Vite during build.');
}

main();
