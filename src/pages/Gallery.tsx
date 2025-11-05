import { useState } from 'react';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { productionImages, processImages, sustainabilityImages } from '@/config/images';

type Category = 'all' | 'science' | 'family' | 'caviar';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  alt: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Реальные изображения вместо заглушек
  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Процесс отбора икры', category: 'science', image: productionImages[0].urlLarge, alt: productionImages[0].alt, description: 'Тщательный отбор генетического материала и биобезопасность' },
    { id: 2, title: 'Инкубация и контроль', category: 'science', image: processImages[0].urlLarge, alt: processImages[0].alt, description: 'Температура, кислород и бережный стресс‑контроль' },
    { id: 3, title: 'Производственный контроль', category: 'science', image: processImages[1].urlLarge, alt: processImages[1].alt, description: 'Стандарты HACCP и аудит параметров' },
    { id: 4, title: 'Семейные туры', category: 'family', image: sustainabilityImages[2].urlLarge, alt: sustainabilityImages[2].alt, description: 'Образовательные прогулки на природе' },
    { id: 5, title: 'Красная икра — макро', category: 'caviar', image: '/img/caviar/red/hero.webp', alt: 'Красная икра в банке — макро', description: 'Премиальная икра кеты насыщенного цвета' },
    { id: 6, title: 'Ikura-don — подача', category: 'caviar', image: '/img/caviar/red/recipe-1.webp', alt: 'Ikura-don — подача с желтком', description: 'Осмысленная подача и гастрономия' },
    { id: 7, title: 'Чёрная икра — макро', category: 'caviar', image: '/img/caviar/black/hero.webp', alt: 'Чёрная икра в банке — макро', description: 'Классический строгий кадр' },
    { id: 8, title: 'Чёрная икра — забор ложкой', category: 'caviar', image: '/img/caviar/black/card-2.webp', alt: 'Чёрная икра — забор ложкой', description: 'Контроль качества и консистенции' },
    { id: 9, title: 'Выпуск смолтов', category: 'science', image: sustainabilityImages[0].urlLarge, alt: sustainabilityImages[0].alt, description: 'Здоровые смолты уходят в естественную среду' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { value: 'all' as Category, label: 'Все Фото' },
    { value: 'science' as Category, label: 'Наука' },
    { value: 'family' as Category, label: 'Семейные Туры' },
    { value: 'caviar' as Category, label: 'Икра' },
  ];

  return (
    <>
      <Seo
        title="Галерея"
        description="Фотогалерея хозяйства Роял Кета: процесс разведения, семейные туры и производство премиальной икры."
        path="/gallery"
        ogImage="/og/gallery.png"
      />

      <Hero
        subtitle="Визуальные Истории"
        title="Галерея"
        description="Изучите наше хозяйство через фотографии науки, семейного опыта и премиальной продукции"
      />

      <section className="content-container py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? 'premium' : 'outline'}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="premium-card overflow-hidden cursor-pointer group hover:shadow-glow-gold transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              {/* Info */}
              <div className="p-4">
                <Badge variant="ocean" className="mb-2 text-xs">
                  {item.category}
                </Badge>
                <h3 className="font-display font-semibold text-gold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-muted">Пока нет фотографий в этой категории.</p>
          </div>
        )}

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">Хотите увидеть всё своими глазами?</h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">Забронируйте тур — покажем процесс, лаборатории и финальную продукцию.</p>
          <Button asChild variant="premium"><a href="/hatchery-tour">Забронировать тур</a></Button>
        </div>
      </section>
    </>
  );
}