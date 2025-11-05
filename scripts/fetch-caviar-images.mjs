/**
 * Fetch unique caviar images (red/black), convert to WebP/JPG and place into public/img/caviar
 * Runs automatically before build to avoid 404 on GitHub Pages.
 */
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { fetch } from 'undici';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const targets = [
  // RED
  { url: 'https://unsplash.com/photos/_eyJJf8Bwrc/download?force=true', out: 'public/img/caviar/red/hero.webp', fmt: 'webp' },
  { url: 'https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/red/card-1.webp', fmt: 'webp' },
  { url: 'https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/red/card-2.webp', fmt: 'webp' },
  { url: 'https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/red/card-3.webp', fmt: 'webp' },
  { url: 'https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/red/recipe-1.webp', fmt: 'webp' },
  // BLACK
  { url: 'https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/black/hero.webp', fmt: 'webp' },
  { url: 'https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?cs=srgb&fm=jpg', out: 'public/img/caviar/black/card-1.webp', fmt: 'webp' },
  { url: 'https://unsplash.com/photos/yNI8fxTUUrs/download?force=true', out: 'public/img/caviar/black/card-2.webp', fmt: 'webp' },
  { url: 'https://unsplash.com/photos/mwFc2qcty_E/download?force=true', out: 'public/img/caviar/black/card-3.webp', fmt: 'webp' },
  { url: 'https://unsplash.com/photos/BT6AXIbfIYo/download?force=true', out: 'public/img/caviar/black/premium-1.webp', fmt: 'webp' },
  // SCIENCE specific
  { url: 'https://images.pexels.com/photos/1615180/pexels-photo-1615180.jpeg?cs=srgb&fm=jpg', out: 'public/img/science/smolt-release.webp', fmt: 'webp' },
  // Sakhalin UUS airport (placeholder until local photo)
  { url: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?cs=srgb&fm=jpg', out: 'public/img/sakhalin/uus-airport.webp', fmt: 'webp' },
  // Lighthouses & bays illustration
  { url: 'https://images.pexels.com/photos/258190/pexels-photo-258190.jpeg?cs=srgb&fm=jpg', out: 'public/img/sakhalin/lighthouse-bay.webp', fmt: 'webp' },
  // Satellite style illustration (temporary until CC-BY satellite of Sakhalin)
  { url: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg?cs=srgb&fm=jpg', out: 'public/img/sakhalin/satellite.webp', fmt: 'webp' },
];

async function downloadToBuffer(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function ensureDir(path) {
  mkdirSync(dirname(join(root, path)), { recursive: true });
}

async function processItem(item) {
  const outPath = join(root, item.out);
  if (existsSync(outPath)) return; // idempotent
  ensureDir(item.out);
  const buf = await downloadToBuffer(item.url);
  const img = sharp(buf).resize({ width: 1920, withoutEnlargement: true });
  const outBuf = item.fmt === 'webp'
    ? await img.webp({ quality: 82 }).toBuffer()
    : await img.jpeg({ quality: 85 }).toBuffer();
  writeFileSync(outPath, outBuf);
}

async function createOg() {
  const pairs = [
    { src: 'public/img/caviar/red/hero.webp', out: 'public/img/caviar/red/og.jpg' },
    { src: 'public/img/caviar/black/hero.webp', out: 'public/img/caviar/black/og.jpg' },
  ];
  for (const { src, out } of pairs) {
    const inPath = join(root, src);
    const outPath = join(root, out);
    if (!existsSync(inPath) || existsSync(outPath)) continue;
    const outBuf = await sharp(inPath).resize({ width: 1200 }).jpeg({ quality: 85 }).toBuffer();
    ensureDir(out);
    writeFileSync(outPath, outBuf);
  }
}

async function main() {
  console.log('🔻 Fetch caviar images...');
  for (const t of targets) {
    try {
      await processItem(t);
      console.log('  ✓', t.out);
    } catch (e) {
      console.warn('  ⚠️  skip', t.out, '-', e.message);
    }
  }
  await createOg();
  console.log('✅ Caviar assets ready');
}

main().catch((e) => {
  console.error('❌ fetch-caviar-images failed:', e);
  process.exit(1);
});


