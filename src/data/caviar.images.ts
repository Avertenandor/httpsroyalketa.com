/**
 * Манифест уникальных изображений икры
 * Каждый файл используется ровно в одном месте
 */

export const CAVIAR = {
  red: {
    hero: '/img/caviar/red/hero.webp',
    cards: [
      '/img/caviar/red/card-1.webp',
      '/img/caviar/red/card-2.webp',
      '/img/caviar/red/card-3.webp',
    ],
    recipe: '/img/caviar/red/recipe-1.webp',
    og: '/img/caviar/red/og.jpg',
    alt: {
      hero: 'Красная икра в жестяной банке (макро)',
      cards: [
        'Икра лосося в контейнере, макро',
        'Гункан с икрой лосося',
        'Подача с лососем и икрой',
      ],
      recipe: 'Ikura-don — миска с красной икрой и желтком',
    },
  },
  black: {
    hero: '/img/caviar/black/hero.webp',
    cards: [
      '/img/caviar/black/card-1.webp',
      '/img/caviar/black/card-2.webp',
      '/img/caviar/black/card-3.webp',
    ],
    premium: '/img/caviar/black/premium-1.webp',
    og: '/img/caviar/black/og.jpg',
    alt: {
      hero: 'Чёрная икра в банке, макро',
      cards: [
        'Чёрная икра (кластер зёрен), макро',
        'Чёрная икра — забор ложкой',
        'Суши-ассорти с чёрной икрой',
      ],
      premium: 'Тёмная фактура — премиальный фон',
    },
  },
} as const;

