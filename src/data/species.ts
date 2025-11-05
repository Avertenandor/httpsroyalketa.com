/**
 * Species Data Configuration
 * Единый источник правды для видов рыб
 */

export type SpeciesId = 'sima' | 'semga' | 'keta' | 'nerka' | 'gorbusha' | 'chavycha' | 'kizhuch';

export const SPECIES: Record<
  SpeciesId,
  {
    ru: string;
    latin: string;
    card: string;
    hero: string;
    altCard: string;
    altHero: string;
  }
> = {
  sima: {
    ru: 'Сима',
    latin: 'Oncorhynchus masou',
    card: '/img/fish/sima/card.webp',
    hero: '/img/fish/sima/hero.webp',
    altCard: 'Сима, иллюстрация (профиль)',
    altHero: 'Сима под водой (аквариум)',
  },
  semga: {
    ru: 'Сёмга',
    latin: 'Salmo salar',
    card: '/img/fish/semga/card.webp',
    hero: '/img/fish/semga/hero.webp',
    altCard: 'Сёмга, профиль',
    altHero: 'Сёмга, профиль',
  },
  keta: {
    ru: 'Кета',
    latin: 'Oncorhynchus keta',
    card: '/img/fish/keta/card.webp',
    hero: '/img/fish/keta/hero.webp',
    altCard: 'Кета, под водой',
    altHero: 'Кета (нерест), под водой',
  },
  nerka: {
    ru: 'Нерка',
    latin: 'Oncorhynchus nerka',
    card: '/img/fish/nerka/card.webp',
    hero: '/img/fish/nerka/hero.webp',
    altCard: 'Нерка, пара',
    altHero: 'Нерка, самец и самка',
  },
  gorbusha: {
    ru: 'Горбуша',
    latin: 'Oncorhynchus gorbuscha',
    card: '/img/fish/gorbusha/card.webp',
    hero: '/img/fish/gorbusha/hero.webp',
    altCard: 'Горбуша, под водой',
    altHero: 'Горбуша, под водой',
  },
  chavycha: {
    ru: 'Чавыча',
    latin: 'Oncorhynchus tshawytscha',
    card: '/img/fish/chinook/card.webp',
    hero: '/img/fish/chinook/card.webp',
    altCard: 'Чавыча (Oncorhynchus tshawytscha) прыжок на перекате',
    altHero: 'Чавыча (Oncorhynchus tshawytscha) прыжок на перекате',
  },
  kizhuch: {
    ru: 'Кижуч',
    latin: 'Oncorhynchus kisutch',
    card: '/img/fish/kizhuch/card.webp',
    hero: '/img/fish/kizhuch/card.webp',
    altCard: 'Кижуч (Oncorhynchus kisutch), нерестовая окраска',
    altHero: 'Кижуч (Oncorhynchus kisutch), нерестовая окраска',
  },
};

