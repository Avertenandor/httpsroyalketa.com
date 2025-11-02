import { useState } from 'react';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type Category = 'all' | 'science' | 'family' | 'caviar';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Placeholder gallery items
  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Процесс Отбора Икры', category: 'science', thumbnail: '🥚', description: 'Тщательный отбор премиального генетического материала' },
    { id: 2, title: 'Семейная Группа Тура', category: 'family', thumbnail: '👨‍👩‍👧‍👦', description: 'Семьи изучают разведение лосося' },
    { id: 3, title: 'Премиальная Красная Икра', category: 'caviar', thumbnail: '🫙', description: 'Свежеприготовленная икра кеты' },
    { id: 4, title: 'Инкубационное Оборудование', category: 'science', thumbnail: '🔬', description: 'Современные инкубационные камеры' },
    { id: 5, title: 'Дети Кормят Рыб', category: 'family', thumbnail: '🐟', description: 'Интерактивное кормление' },
    { id: 6, title: 'Дегустация Икры', category: 'caviar', thumbnail: '🍽️', description: 'Гости наслаждаются премиальной икрой' },
    { id: 7, title: 'Выпуск Смолтов', category: 'science', thumbnail: '🌊', description: 'Здоровые смолты попадают в океан' },
    { id: 8, title: 'Гид Объясняет', category: 'family', thumbnail: '👨‍🏫', description: 'Эксперт-гиды делятся знаниями' },
    { id: 9, title: 'Подарочные Банки Икры', category: 'caviar', thumbnail: '🎁', description: 'Красиво упакованные подарочные наборы' },
    { id: 10, title: 'Развитие Мальков', category: 'science', thumbnail: '🐠', description: 'Молодой лосось в развитийных ёмкостях' },
    { id: 11, title: 'Рыболовная Сессия', category: 'family', thumbnail: '🎣', description: 'Поймал-отпустил' },
    { id: 12, title: 'Производство Икры', category: 'caviar', thumbnail: '⚙️', description: 'Обзор производственного цеха' },
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
        ogImage="/og/gallery.svg"
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
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-background-secondary flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                {item.thumbnail}
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
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Настоящие Фото Скоро
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Мы готовим обширную фотогалерею, демонстрирующую наш процесс разведения,
            семейные туры и премиальную икорную продукцию. Загляните сюда вскоре за качественными изображениями.
          </p>
          <p className="text-sm text-foreground-muted">
            Примечание: Текущие заглушки будут заменены профессиональной фотографией.
          </p>
        </div>
      </section>
    </>
  );
}