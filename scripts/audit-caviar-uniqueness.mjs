/**
 * Аудит уникальности изображений икры
 * Проверяет, что каждый файл из /img/caviar используется ровно один раз
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { glob } from 'glob';

const CAVIAR_IMG_DIR = 'public/img/caviar';
const SRC_FILES = ['src/**/*.{tsx,ts,jsx,js}'];
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'];

async function main() {
  console.log('🔍 Аудит уникальности изображений икры...\n');

  // 1. Собираем все файлы изображений в /img/caviar
  const imageFiles = await glob(`${CAVIAR_IMG_DIR}/**/*.{webp,jpg,jpeg,png}`, {
    ignore: ['**/node_modules/**', '**/.git/**'],
  });

  if (imageFiles.length === 0) {
    console.warn('⚠️  Изображения икры не найдены в', CAVIAR_IMG_DIR);
    return;
  }

  console.log(`📁 Найдено ${imageFiles.length} изображений икры\n`);

  // 2. Собираем все исходные файлы
  const srcFiles = await glob(SRC_FILES, {
    ignore: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
  });

  if (srcFiles.length === 0) {
    console.error('❌ Исходные файлы не найдены');
    process.exit(1);
  }

  // 3. Читаем содержимое всех исходных файлов
  let allContent = '';
  for (const file of srcFiles) {
    try {
      allContent += readFileSync(file, 'utf8') + '\n';
    } catch (err) {
      console.warn(`⚠️  Не удалось прочитать ${file}: ${err.message}`);
    }
  }

  // 4. Проверяем использование каждого изображения
  const usage = new Map();
  const errors = [];
  const warnings = [];

  for (const imagePath of imageFiles) {
    // Путь относительно public для использования в коде
    const relativePath = imagePath.replace(/^public/, '');
    const normalizedPath = relativePath.replace(/\\/g, '/');

    // Экранируем специальные символы для regex
    const escapedPath = normalizedPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Ищем все вхождения этого пути
    const regex = new RegExp(escapedPath, 'g');
    const matches = allContent.match(regex) || [];
    const count = matches.length;

    usage.set(relativePath, count);

    if (count === 0) {
      warnings.push(`⚠️  ${relativePath} — не используется`);
    } else if (count > 1) {
      errors.push(`❌ ${relativePath} — используется ${count} раз(а)`);
    }
  }

  // 5. Выводим результаты
  console.log('📊 Результаты аудита:\n');

  if (errors.length > 0) {
    console.error('❌ Найдены повторы изображений икры:\n');
    errors.forEach((err) => console.error(`  ${err}`));
    console.error('\n');
    process.exit(1);
  }

  if (warnings.length > 0) {
    console.warn('⚠️  Неиспользуемые файлы:\n');
    warnings.forEach((warn) => console.warn(`  ${warn}`));
    console.warn('\n');
  }

  // Подсчитываем статистику
  const unique = [...usage.values()].filter((c) => c === 1).length;
  const unused = [...usage.values()].filter((c) => c === 0).length;

  console.log(`✅ Уникальные (используются 1 раз): ${unique}`);
  if (unused > 0) {
    console.log(`⚠️  Неиспользуемые: ${unused}`);
  }
  console.log(`\n✅ Аудит уникальности изображений икры пройден.`);
}

main().catch((err) => {
  console.error('❌ Ошибка при выполнении аудита:', err);
  process.exit(1);
});

