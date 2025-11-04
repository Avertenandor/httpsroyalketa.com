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
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200&q=80',
    icon: Award,
    link: '/caviar',
  },
  {
    title: 'Идеально для Подарка',
    description: 'Роскошная упаковка делает нашу икру идеальным подарком',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&q=80',
    icon: Heart,
    link: '/caviar',
  },
  {
    title: 'Превосходный Вкус',
    description: 'Нежный вкус и тающая текстура в каждой баночке',
    imageUrl: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1200&q=80',
    icon: Sparkles,
    link: '/caviar',
  },
];

export function ImageShowcase() {
  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Наша Икра</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Жемчужины океана
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Откройте для себя непревзойденное качество красной икры Royal Keta
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl"
          >
            {/* Background Image */}
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center backdrop-blur-sm">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-gold">
                  {item.title}
                </h3>
              </div>
              <p className="text-foreground-muted mb-4">
                {item.description}
              </p>
              <Button
                asChild
                variant="ghost"
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
        className="mt-16 relative overflow-hidden rounded-2xl"
      >
        <div className="relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=1600&q=80"
            alt="Премиальная красная икра Royal Keta"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="content-container">
              <div className="max-w-2xl">
                <Badge variant="gold" className="mb-4">Премиум Икра</Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
                  От природы к вашему столу
                </h2>
                <p className="text-lg text-foreground-muted mb-8">
                  Наша икра проходит строгий контроль качества на каждом этапе —
                  от выращивания лосося до упаковки готового продукта.
                  Результат: икра премиум-класса с идеальным вкусом и текстурой.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="premium" size="lg">
                    <Link to="/caviar">Наша продукция</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
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
