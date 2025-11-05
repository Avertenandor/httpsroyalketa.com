import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Heart } from 'lucide-react';

interface ShowcaseItem {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: 'Премиальное Качество',
    description: 'Каждая икринка тщательно отобрана и проверена нашими специалистами',
    imageUrl: '/img/species/salmon/hero-salmon.webp',
    icon: Award,
    link: '/caviar',
  },
  {
    title: 'Идеально для Подарка',
    description: 'Роскошная упаковка делает нашу икру идеальным подарком',
    imageUrl: '/img/species/salmon/ikura-don-1.jpg',
    icon: Heart,
    link: '/caviar',
  },
  {
    title: 'Превосходный Вкус',
    description: 'Нежный вкус и тающая текстура в каждой баночке',
    imageUrl: '/img/species/salmon/ikura-don-1.jpg',
    icon: Sparkles,
    link: '/caviar',
  },
];

export function ImageShowcase() {
  return (
    <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-3 sm:mb-4">Наша Икра</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
          Жемчужины океана
        </h2>
        <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
          Откройте для себя непревзойденное качество красной икры Royal Keta
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl bg-background/50"
          >
            {/* Background Image */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay - усилен для скрытия текста на изображениях */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
              {/* Дополнительный затемняющий слой для средней части */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-10">
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-gold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted mb-3 sm:mb-4 leading-relaxed">
                {item.description}
              </p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Link to={item.link}>
                  Узнать больше →
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Feature highlight with large image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12 md:mt-16 relative overflow-hidden rounded-xl sm:rounded-2xl"
      >
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <img
            src="/img/species/salmon/ikura-don-1.jpg"
            alt="Премиальная красная икра Royal Keta"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 md:via-background/60 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="content-container px-4 sm:px-6 md:px-8">
              <div className="max-w-2xl">
                <Badge variant="gold" className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm">Премиум Икра</Badge>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 md:mb-6 leading-tight">
                  От природы к вашему столу
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground-muted mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Наша икра проходит строгий контроль качества на каждом этапе —
                  от выращивания лосося до упаковки готового продукта.
                  Результат: икра премиум-класса с идеальным вкусом и текстурой.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <Button asChild variant="premium" size="lg" className="w-full sm:w-auto">
                    <Link to="/caviar">Наша продукция</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link to="/hatchery-tour">Экскурсия на завод</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
