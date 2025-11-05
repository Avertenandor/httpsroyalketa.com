import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const siteUrl = 'https://royalketa.com';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/hatchery-tour', priority: '0.9', changefreq: 'weekly' },
  { path: '/science', priority: '0.8', changefreq: 'monthly' },
  { path: '/salmon-info', priority: '0.8', changefreq: 'monthly' },
  { path: '/caviar', priority: '0.8', changefreq: 'weekly' },
  { path: '/investment', priority: '0.9', changefreq: 'weekly' },
  { path: '/tokenization', priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contacts', priority: '0.9', changefreq: 'monthly' },
  { path: '/partners', priority: '0.7', changefreq: 'monthly' },
  { path: '/crabbing', priority: '0.8', changefreq: 'monthly' },
  { path: '/salmon-info', priority: '0.7', changefreq: 'monthly' },
  { path: '/sturgeon-info', priority: '0.7', changefreq: 'monthly' },
  { path: '/mercury/', priority: '0.8', changefreq: 'monthly' },
  { path: '/legal', priority: '0.5', changefreq: 'yearly' },
  // Salmon species
  { path: '/species/keta', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/pink-salmon', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/nerka', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/chavycha', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/kizhuch', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/sima', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/semga', priority: '0.6', changefreq: 'monthly' },
  // Sturgeon species
  { path: '/species/beluga', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/kaluga', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/russian-sturgeon', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/siberian-sturgeon', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/sevruga', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/sterlet', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/amur-sturgeon', priority: '0.6', changefreq: 'monthly' },
  { path: '/species/sakhalin-sturgeon', priority: '0.6', changefreq: 'monthly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');
console.log(`✅ Sitemap generated at ${outputPath}`);
console.log(`📝 Total URLs: ${routes.length}`);
