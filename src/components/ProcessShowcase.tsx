import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChefHat, Leaf, Award, Eye } from 'lucide-react';
import { processImages } from '@/config/images';

export function ProcessShowcase() {
  const features = [
    {
      icon: ChefHat,
      title: 'Мастерство',
      description: 'Опытные специалисты с многолетним стажем',
    },
    {
      icon: Leaf,
      title: 'Свежесть',
      description: 'От завода до упаковки — в тот же день',
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Строгий контроль на каждом этапе',
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      description: 'Увидьте весь процесс на экскурсии',
    },
  ];

  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="ocean" className="mb-4">Наш процесс</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          От океана до вашего стола
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Каждый этап производства выполняется с максимальной тщательностью и вниманием к деталям
        </p>
      </motion.div>

      {/* Main process images grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        {processImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <img
              src={image.urlLarge}
              alt={image.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-lg font-semibold text-gold mb-2">
                {index === 0 ? 'Профессиональная подготовка' : 'Мастерство в каждом движении'}
              </p>
              <p className="text-sm text-foreground-muted">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-ocean/20 flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-ocean" />
            </div>
            <h4 className="font-semibold text-gold mb-2">{feature.title}</h4>
            <p className="text-sm text-foreground-muted">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card p-8 text-center"
      >
        <h3 className="text-2xl font-display font-bold text-gold mb-4">
          Хотите увидеть процесс своими глазами?
        </h3>
        <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
          Посетите наш завод и узнайте, как из маленькой икринки рождается премиальный продукт.
          Экскурсия включает дегустацию и подарочную баночку икры.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="premium" size="lg">
            <Link to="/hatchery-tour">Забронировать экскурсию</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/science">Узнать о науке</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
