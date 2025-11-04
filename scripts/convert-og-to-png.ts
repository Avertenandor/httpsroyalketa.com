import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = resolve(__dirname, '../public/og');
const outputDir = inputDir; // Same directory

async function convertSVGtoPNG() {
  const files = readdirSync(inputDir).filter(f => f.endsWith('.svg'));

  console.log(`🎨 Converting ${files.length} SVG files to PNG...`);

  for (const file of files) {
    const inputPath = resolve(inputDir, file);
    const outputPath = resolve(outputDir, file.replace('.svg', '.png'));

    try {
      const svgBuffer = readFileSync(inputPath);

      await sharp(svgBuffer)
        .resize(1200, 630, {
          fit: 'contain',
          background: { r: 11, g: 15, b: 20, alpha: 1 } // #0B0F14
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✅ Converted: ${file} → ${file.replace('.svg', '.png')}`);
    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error.message);
    }
  }

  console.log(`\n🎉 Conversion complete! ${files.length} PNG files generated.`);
}

convertSVGtoPNG();
