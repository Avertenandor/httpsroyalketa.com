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
    <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <Badge variant="ocean" className="mb-3 sm:mb-4">Наш процесс</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
          От океана до вашего стола
        </h2>
        <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
          Каждый этап производства выполняется с максимальной тщательностью и вниманием к деталям
        </p>
      </motion.div>

      {/* Main process images grid */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
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
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
              <p className="text-base sm:text-lg font-semibold text-gold mb-1 sm:mb-2">
                {index === 0 ? 'Профессиональная подготовка' : 'Мастерство в каждом движении'}
              </p>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-4 sm:p-6 text-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-ocean/20 flex items-center justify-center">
              <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-ocean" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-gold mb-1 sm:mb-2">{feature.title}</h4>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card p-6 sm:p-8 text-center"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
          Хотите увидеть процесс своими глазами?
        </h3>
        <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
          Посетите наш завод и узнайте, как из маленькой икринки рождается премиальный продукт.
          Экскурсия включает дегустацию и подарочную баночку икры.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Button asChild variant="premium" size="lg" className="w-full sm:w-auto">
            <Link to="/hatchery-tour">Забронировать экскурсию</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link to="/science">Узнать о науке</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
