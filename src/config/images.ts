/**
 * Image Configuration for Royal Keta
 *
 * All images from Unsplash and Pexels are free for commercial use.
 * License: Unsplash License & Pexels License (no attribution required)
 */

export interface ImageSource {
  id: string;
  url: string;
  urlLarge: string; // For hero backgrounds
  urlMedium: string; // For cards
  urlSmall: string; // For thumbnails
  alt: string;
  photographer?: string;
  source: 'unsplash' | 'pexels';
}

/**
 * Hero Background Images - Dark Ocean & Night Aesthetic
 */
export const heroBackgrounds: ImageSource[] = [
  {
    id: 'ocean-night-moon',
    url: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80',
    alt: 'Ночной океан с серебристой дорогой Луны',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'ocean-dark-golden',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Тёмные океанские волны с золотистыми отблесками',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'ocean-sunset-waves',
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
    alt: 'Сумеречные волны океана с жёсткой фактурой',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'ocean-storm-waves',
    url: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&q=80',
    alt: 'Штормовые валы тёмного океана',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'fishing-boat-night',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    alt: 'Рыбацкий борт с прожекторами ночной лов',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'boat-spotlight',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    alt: 'Лодка в свете прожекторов ночью',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
];

/**
 * Product/Caviar Images - Premium Food Photography
 */
export const caviarProductImages: ImageSource[] = [
  {
    id: 'gunkan-salmon-roe',
    url: 'https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gunkan с лососем и икрой крупным планом',
    photographer: 'Pexels',
    source: 'pexels',
  },
  {
    id: 'caviar-macro-tray',
    url: 'https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Макро икра кеты в лотке',
    photographer: 'Pexels',
    source: 'pexels',
  },
  {
    id: 'ikura-don-yolk',
    url: 'https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Икра с желтком ikura-don тёплые тона',
    photographer: 'Pexels',
    source: 'pexels',
  },
  {
    id: 'poke-salmon-roe',
    url: 'https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Поке с лососем и икрой живой цвет',
    photographer: 'Pexels',
    source: 'pexels',
  },
  {
    id: 'caviar-tin-macro',
    url: 'https://images.unsplash.com/photo-1608947969511-71bcf90dc4d1?w=1200&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1608947969511-71bcf90dc4d1?w=1600&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1608947969511-71bcf90dc4d1?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1608947969511-71bcf90dc4d1?w=800&q=80',
    alt: 'Икра в жестяной банке макро строгий вид',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
  {
    id: 'sushi-assortment',
    url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1600&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
    alt: 'Суши-ассорти с сашими тёплый ресторанный свет',
    photographer: 'Unsplash',
    source: 'unsplash',
  },
];

/**
 * Process/Kitchen Images - Behind the Scenes
 */
export const processImages: ImageSource[] = [
  {
    id: 'salmon-fillet-knife',
    url: 'https://images.pexels.com/photos/3296281/pexels-photo-3296281.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/3296281/pexels-photo-3296281.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/3296281/pexels-photo-3296281.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/3296281/pexels-photo-3296281.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Филе лосося на чёрной поверхности рука с ножом',
    photographer: 'Pexels',
    source: 'pexels',
  },
  {
    id: 'salmon-fillet-overhead',
    url: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Филе лосося вид сверху композиция',
    photographer: 'Pexels',
    source: 'pexels',
  },
];

/**
 * Get random hero background
 */
export function getRandomHeroBackground(): ImageSource {
  return heroBackgrounds[Math.floor(Math.random() * heroBackgrounds.length)];
}

/**
 * Get hero background by ID
 */
export function getHeroBackgroundById(id: string): ImageSource | undefined {
  return heroBackgrounds.find((img) => img.id === id);
}
