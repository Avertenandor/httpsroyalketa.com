/**
 * Image Configuration for Royal Keta
 *
 * All images from premium stock sources, optimized for web delivery.
 */

// NOTE: Для изображений икры используйте манифест из @/data/caviar.images.ts
// Этот файл содержит только общие изображения (hero backgrounds, process, etc.)

export interface ImageSource {
  id: string;
  url: string;
  urlLarge: string; // For hero backgrounds
  urlMedium: string; // For cards
  urlSmall: string; // For thumbnails
  alt: string;
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
  },
  {
    id: 'ocean-dark-golden',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Тёмные океанские волны с золотистыми отблесками',
  },
  {
    id: 'ocean-sunset-waves',
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
    alt: 'Сумеречные волны океана с жёсткой фактурой',
  },
  {
    id: 'ocean-storm-waves',
    url: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&q=80',
    alt: 'Штормовые валы тёмного океана',
  },
  {
    id: 'fishing-boat-night',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    alt: 'Рыбацкий борт с прожекторами ночной лов',
  },
  {
    id: 'boat-spotlight',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    alt: 'Лодка в свете прожекторов ночью',
  },
];

/**
 * Product/Caviar Images - Premium Food Photography
 * Уникальные изображения без повторов (используем манифест из caviar.images.ts)
 */
import { CAVIAR } from '@/data/caviar.images';

export const caviarProductImages: ImageSource[] = [
  {
    id: 'red-caviar-card-1',
    url: CAVIAR.red.cards[0],
    urlLarge: CAVIAR.red.cards[0],
    urlMedium: CAVIAR.red.cards[0],
    urlSmall: CAVIAR.red.cards[0],
    alt: CAVIAR.red.alt.cards[0],
  },
  {
    id: 'red-caviar-card-2',
    url: CAVIAR.red.cards[1],
    urlLarge: CAVIAR.red.cards[1],
    urlMedium: CAVIAR.red.cards[1],
    urlSmall: CAVIAR.red.cards[1],
    alt: CAVIAR.red.alt.cards[1],
  },
  {
    id: 'red-caviar-card-3',
    url: CAVIAR.red.cards[2],
    urlLarge: CAVIAR.red.cards[2],
    urlMedium: CAVIAR.red.cards[2],
    urlSmall: CAVIAR.red.cards[2],
    alt: CAVIAR.red.alt.cards[2],
  },
  {
    id: 'black-caviar-card-1',
    url: CAVIAR.black.cards[0],
    urlLarge: CAVIAR.black.cards[0],
    urlMedium: CAVIAR.black.cards[0],
    urlSmall: CAVIAR.black.cards[0],
    alt: CAVIAR.black.alt.cards[0],
  },
  {
    id: 'black-caviar-card-2',
    url: CAVIAR.black.cards[1],
    urlLarge: CAVIAR.black.cards[1],
    urlMedium: CAVIAR.black.cards[1],
    urlSmall: CAVIAR.black.cards[1],
    alt: CAVIAR.black.alt.cards[1],
  },
  {
    id: 'black-caviar-card-3',
    url: CAVIAR.black.cards[2],
    urlLarge: CAVIAR.black.cards[2],
    urlMedium: CAVIAR.black.cards[2],
    urlSmall: CAVIAR.black.cards[2],
    alt: CAVIAR.black.alt.cards[2],
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
  },
  {
    id: 'salmon-fillet-overhead',
    url: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlLarge: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1600',
    urlMedium: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Филе лосося вид сверху композиция',
  },
];

/**
 * About Company Images - Fresh Salmon & Fishing Boats
 */
export const aboutImages: ImageSource[] = [
  {
    id: 'fresh-salmon-boat',
    url: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=800&q=80',
    alt: 'Свежий лосось на борту промыслового судна — экспорт морепродуктов',
  },
  {
    id: 'fishing-boat-shore',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Рыбацкий бот на берегу — графичный кадр',
  },
  {
    id: 'calm-river-surface',
    url: 'https://images.pexels.com/photos/19981727/pexels-photo-19981727.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/19981727/pexels-photo-19981727.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/19981727/pexels-photo-19981727.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/19981727/pexels-photo-19981727.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Тихая речная поверхность — фоновая текстура для секции ценностей',
  },
];

/**
 * Production/Processing Images - Industrial & Quality Control
 */
export const productionImages: ImageSource[] = [
  {
    id: 'processing-line',
    url: 'https://images.unsplash.com/photo-1565611054726-635c199e7e0b?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1565611054726-635c199e7e0b?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1565611054726-635c199e7e0b?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1565611054726-635c199e7e0b?w=800&q=80',
    alt: 'Линия переработки — индустриальная фактура производства',
  },
  {
    id: 'operator-machine',
    url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80',
    alt: 'Оператор у машины — цифровой контроль процесса',
  },
  {
    id: 'quality-control',
    url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    alt: 'Контроль качества на пищевом производстве',
  },
];

/**
 * Quality & Certificates Images
 */
export const qualityImages: ImageSource[] = [
  {
    id: 'supervisor-tablet',
    url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
    alt: 'Супервайзер с планшетом на пищевом заводе',
  },
  {
    id: 'approved-stamp',
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    alt: 'Печать approved на документе — сертификаты соответствие',
  },
  {
    id: 'certificate-frame',
    url: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80',
    alt: 'Диплом/сертификат в раме — иллюстративный блок',
  },
];

/**
 * Product Assortment Images - Black Caviar & Sushi
 */
export const assortmentImages: ImageSource[] = [
  {
    id: 'black-caviar-tin',
    url: 'https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Чёрная икра в банке — строгий натюрморт макросъёмка',
  },
  {
    id: 'black-caviar-light',
    url: 'https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Чёрная икра — вариант со светлым освещением',
  },
  {
    id: 'sushi-caviar-closeup',
    url: 'https://images.pexels.com/photos/3296898/pexels-photo-3296898.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/3296898/pexels-photo-3296898.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/3296898/pexels-photo-3296898.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/3296898/pexels-photo-3296898.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Суши с икрой — фуд-стилистика тёплый свет',
  },
  {
    id: 'rolls-caviar-serving',
    url: 'https://images.pexels.com/photos/17584430/pexels-photo-17584430.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/17584430/pexels-photo-17584430.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/17584430/pexels-photo-17584430.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/17584430/pexels-photo-17584430.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Подача роллов с икрой — акцентный визуал для карточек',
  },
];

/**
 * Sustainability Images - Nature, Rivers, Spawning
 */
export const sustainabilityImages: ImageSource[] = [
  {
    id: 'salmon-jumping',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Прыжок нерестующих лососей — устойчивое рыболовство',
  },
  {
    id: 'clear-coastal-water',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Кристально чистая береговая вода камни водоросли',
  },
  {
    id: 'forest-stream',
    url: 'https://images.pexels.com/photos/12565489/pexels-photo-12565489.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/12565489/pexels-photo-12565489.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/12565489/pexels-photo-12565489.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/12565489/pexels-photo-12565489.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Лесной ручей — зелёный спокойный фон природа',
  },
];

/**
 * Logistics Images - Ports, Trucks, Cold Chain
 */
export const logisticsImages: ImageSource[] = [
  {
    id: 'container-port-night',
    url: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80',
    alt: 'Контейнерный порт ночью — экспорт морепродуктов мощный акцент',
  },
  {
    id: 'delivery-truck-urban',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    alt: 'Грузовик — чистый городской кадр доставка',
  },
  {
    id: 'freight-highway',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    alt: 'Фрахт/магистраль — контраст к морской палитре',
  },
];

/**
 * Partners/B2B Images - Handshakes, Ports
 */
export const partnersB2BImages: ImageSource[] = [
  {
    id: 'handshake-dark-room',
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    alt: 'Рукопожатие в тёмном интерьере — сигнал доверие B2B партнёрство',
  },
  {
    id: 'port-cranes-night',
    url: 'https://images.unsplash.com/photo-1573933123147-fa6e85d3cf8a?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1573933123147-fa6e85d3cf8a?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1573933123147-fa6e85d3cf8a?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1573933123147-fa6e85d3cf8a?w=800&q=80',
    alt: 'Порт/краны ночью — масштаб экспорт международное сотрудничество',
  },
  {
    id: 'business-handshake-closeup',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    alt: 'Крупный план рукопожатия — деловой контекст',
  },
];

/**
 * Tourism/Hatchery Tour Images - Family Activities
 */
export const tourismImages: ImageSource[] = [
  {
    id: 'father-son-fishing',
    url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    alt: 'Отец с ребёнком на рыбалке — семейный формат образовательный тур',
  },
  {
    id: 'school-field-trip',
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    alt: 'Школьники на выезде/экскурсии в природу',
  },
  {
    id: 'family-seaside-sunset',
    url: 'https://images.pexels.com/photos/19622888/pexels-photo-19622888.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/19622888/pexels-photo-19622888.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/19622888/pexels-photo-19622888.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/19622888/pexels-photo-19622888.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Семья у моря на закате',
  },
];

/**
 * Contacts Images - Lighthouses
 */
export const contactsImages: ImageSource[] = [
  {
    id: 'lighthouse-night-water',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Маяк ночью над водой — идеально для шапки контакты',
  },
  {
    id: 'pier-lighthouse-minimal',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Пирс и маяк — минималистичный тёмный кадр',
  },
  {
    id: 'lighthouse-starry-night',
    url: 'https://images.pexels.com/photos/29080289/pexels-photo-29080289.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/29080289/pexels-photo-29080289.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/29080289/pexels-photo-29080289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/29080289/pexels-photo-29080289.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Маяк со звёздным небом — вариант для подвала',
  },
];

/**
 * Blog/News Images - Universal Headers
 */
export const blogImages: ImageSource[] = [
  {
    id: 'foggy-waterfront-night',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    alt: 'Туманная набережная ночью — портовая атмосфера',
  },
  {
    id: 'night-water-calm',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Ночная гладь воды — нейтральный фон под заголовки',
  },
];

/**
 * FAQ Images - Question Marks
 */
export const faqImages: ImageSource[] = [
  {
    id: 'neon-question-mark',
    url: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=1920&q=80',
    urlLarge: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=1920&q=80',
    urlMedium: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=1200&q=80',
    urlSmall: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&q=80',
    alt: 'Неоновый вопрос — тёмный фон FAQ',
  },
  {
    id: 'illuminated-question-marks',
    url: 'https://images.pexels.com/photos/12920835/pexels-photo-12920835.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlLarge: 'https://images.pexels.com/photos/12920835/pexels-photo-12920835.jpeg?auto=compress&cs=tinysrgb&w=1920',
    urlMedium: 'https://images.pexels.com/photos/12920835/pexels-photo-12920835.jpeg?auto=compress&cs=tinysrgb&w=1200',
    urlSmall: 'https://images.pexels.com/photos/12920835/pexels-photo-12920835.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Абстрактные светящиеся вопросительные знаки',
  },
];

/**
 * Salmon Species Images - Individual Fish Species
 */
export const salmonSpeciesImages: Record<string, ImageSource[]> = {
  // Кета (Chum Salmon)
  keta: [
    {
      id: 'chum-salmon-underwater',
      url: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80',
      alt: 'Кета в естественной среде обитания',
    },
    {
      id: 'chum-salmon-spawning',
      url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
      alt: 'Кета в период нереста',
    },
  ],
  // Горбуша (Pink Salmon)
  gorbuscha: [
    {
      id: 'pink-salmon-swimming',
      url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&q=80',
      alt: 'Горбуша плывущая в реке',
    },
    {
      id: 'pink-salmon-market',
      url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
      alt: 'Свежая горбуша на рынке',
    },
  ],
  // Нерка (Sockeye Salmon)
  nerka: [
    {
      id: 'sockeye-salmon-red',
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      alt: 'Нерка с характерной красной окраской',
    },
    {
      id: 'sockeye-salmon-river',
      url: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800&q=80',
      alt: 'Нерка в горной реке',
    },
  ],
  // Чавыча (King Salmon)
  chavycha: [
    {
      id: 'king-salmon-large',
      url: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=800&q=80',
      alt: 'Крупная чавыча - король лососей',
    },
    {
      id: 'king-salmon-fillet',
      url: 'https://images.unsplash.com/photo-1580459781994-ce6d1798f47b?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1580459781994-ce6d1798f47b?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1580459781994-ce6d1798f47b?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1580459781994-ce6d1798f47b?w=800&q=80',
      alt: 'Премиальное филе чавычи',
    },
  ],
  // Кижуч (Coho Salmon)
  kizhuch: [
    {
      id: 'coho-salmon-silver',
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      alt: 'Кижуч с серебристой чешуей',
    },
    {
      id: 'coho-salmon-swimming',
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
      alt: 'Кижуч в океанских водах',
    },
  ],
  // Сима (Cherry Salmon)
  sima: [
    {
      id: 'cherry-salmon-asia',
      url: 'https://images.unsplash.com/photo-1524704797642-f273da85b9b3?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1524704797642-f273da85b9b3?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1524704797642-f273da85b9b3?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1524704797642-f273da85b9b3?w=800&q=80',
      alt: 'Сима - редкий азиатский вид',
    },
    {
      id: 'cherry-salmon-river',
      url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1920&q=80',
      urlLarge: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1920&q=80',
      urlMedium: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=1200&q=80',
      urlSmall: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&q=80',
      alt: 'Сима в чистой горной реке',
    },
  ],
};

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
