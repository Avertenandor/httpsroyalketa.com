import { Hero } from '@/components/Hero';
import { Seo } from '@/seo/Seo';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Fish,
  Heart,
  Baby,
  Brain,
  Droplets,
  TrendingUp,
  MapPin,
  Clock,
  Utensils,
  Sparkles,
  Zap,
  Award,
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function CohoSalmon() {
  const species = {
    commonName: 'Кижуч',
    scientificName: 'Oncorhynchus kisutch',
    englishName: 'Coho Salmon / Silver Salmon',
    icon: '🥈',
    description: 'Серебряная пуля тихоокеанских лососей. Любимец спортивных рыбаков',
  };

  const lifecycle = [
    {
      stage: 'Икра (3-4 месяца)',
      description: 'Самки откладывают 2500-5000 икринок в мелких притоках. Инкубация длится 90-120 дней.',
      icon: '🥚',
    },
    {
      stage: 'Мальки (1-2 года)',
      description: 'Проводят 1-2 года в пресной воде, активно питаясь насекомыми. Дольше других лососей остаются в реках.',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (18 месяцев)',
      description: 'Быстро растут в океане, питаясь рыбой и кальмарами. Набирают 3-7 кг веса.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'Возвращаются в реки поздней осенью, сохраняя яркую серебристую окраску дольше других видов.',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'Нерестятся в мелких притоках с ноября по январь. Самцы приобретают яркую красную окраску.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Северная Пацифика, прибрежные воды',
      description: 'Держатся ближе к берегу, чем другие виды. Любят холодные прибрежные течения',
      icon: MapPin,
    },
    {
      title: 'Нерестовые реки',
      region: 'Малые и средние реки Камчатки, Сахалина, Аляски',
      description: 'Нерестятся в мелких притоках с чистой холодной водой',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В реке (молодь)',
      foods: ['Насекомые и их личинки (80%)', 'Мелкие ракообразные', 'Икра других лососей', 'Водные беспозвоночные'],
    },
    {
      phase: 'В океане',
      foods: ['Мелкая рыба (анчоусы, сельдь) — 70%', 'Кальмары', 'Криль и креветки', 'Молодь других рыб'],
    },
    {
      phase: 'В реке (взрослые)',
      foods: ['Не питается', 'Живет за счет накопленных запасов', 'Может провести 2-3 месяца без еды'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Развитие мозга и зрения',
        benefit: 'Омега-3 (DHA) — 1.8-2.3 г на 100 г',
        description: 'Поддерживает развитие мозга, нервной системы и зрения у детей',
      },
      {
        icon: Baby,
        title: 'Рост и энергия',
        benefit: 'Белок — 21.6 г на 100 г',
        description: 'Легкоусвояемый белок с полным набором аминокислот для роста',
      },
      {
        icon: Award,
        title: 'Иммунитет',
        benefit: 'Селен (44 мкг), витамины B12, D',
        description: 'Укрепляет иммунную систему, защищает от простуд и инфекций',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Здоровье сердца',
        benefit: 'Снижение холестерина и давления',
        description: 'Омега-3 защищают сердце и сосуды, снижают риск инфаркта на 30%',
      },
      {
        icon: Brain,
        title: 'Когнитивные функции',
        benefit: 'Улучшение памяти и концентрации',
        description: 'DHA поддерживает работу мозга, защищает от возрастных изменений',
      },
      {
        icon: Zap,
        title: 'Энергия и метаболизм',
        benefit: 'Сбалансированное содержание жира (7-9%)',
        description: 'Дает энергию, но не перегружает. Идеально для активного образа жизни',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '🥈',
      title: 'Серебряная пуля',
      fact: 'Кижуч называют "silver salmon" за ярко-серебристую окраску, которую он сохраняет дольше других лососей при заходе в реку.',
    },
    {
      emoji: '🎣',
      title: 'Любимец рыбаков',
      fact: 'Считается лучшей спортивной рыбой среди лососей. Очень агрессивный боец, совершает эффектные прыжки.',
    },
    {
      emoji: '🍂',
      title: 'Позднее время нереста',
      fact: 'Заходит в реки позже других — в октябре-ноябре, нерестится с ноября по январь. Единственный лосось, нерестящийся зимой.',
    },
    {
      emoji: '🎨',
      title: 'Яркая брачная окраска',
      fact: 'Самцы во время нереста приобретают ярко-красные бока и темно-зеленую голову. Одна из самых контрастных окрасок.',
    },
    {
      emoji: '🏠',
      title: 'Домосед в молодости',
      fact: 'Проводит в пресной воде 1-2 года — дольше всех, кроме нерки и чавычи. Это делает их устойчивыми к стрессу.',
    },
    {
      emoji: '🌊',
      title: 'Прибрежный житель',
      fact: 'Держится ближе к берегу, чем другие лососи. Редко уходит дальше 80 км от побережья.',
    },
  ];

  const caviarSpecs = {
    size: '4-5 мм (средняя)',
    color: 'Ярко-оранжевая, насыщенная',
    taste: 'Мягкий, нежный, слегка сладковатый. Икринки лопаются легко',
    price: 'Средний ценовой сегмент',
    nutrition: {
      protein: '31.5 г на 100 г',
      omega3: '6.5 г на 100 г',
      calories: '255 ккал на 100 г',
      vitamins: 'A, D, E, B12, фолиевая кислота',
    },
  };

  return (
    <>
      <Seo
        title="Кижуч (Coho Salmon) — полная энциклопедия вида"
        description="Всё о кижуче: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Почему кижуч — серебряная пуля."
        path="/species/kizhuch"
        ogImage="/og/salmon-info.png"
      />

      

      <Hero
        subtitle="Oncorhynchus kisutch"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.kizhuch[0].urlLarge}
        backgroundOverlay="dark"
      />

      {/* Quick Facts */}
      <section className="content-container py-12 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Clock className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Продолжительность жизни</p>
              <p className="text-xl font-bold text-gold">3-4 года</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Вес взрослой особи</p>
              <p className="text-xl font-bold text-gold">3-7 кг</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Ареал обитания</p>
              <p className="text-xl font-bold text-gold">Прибрежная Пацифика</p>
            </div>
            <div>
              <Fish className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Статус популяции</p>
              <p className="text-xl font-bold text-gold">Стабильный</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lifecycle */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Жизненный цикл</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            От икринки до нереста за 3-4 года
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Длительная речная фаза делает молодь устойчивой к стрессу
          </p>
        </motion.div>

        <div className="space-y-6">
          {lifecycle.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex items-start gap-6"
            >
              <div className="text-5xl flex-shrink-0">{stage.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-gold mb-2">
                  {stage.stage}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className="hidden md:block flex-shrink-0 w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Habitat */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Среда обитания</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Где живет кижуч
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {habitat.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8"
            >
              <place.icon className="w-12 h-12 text-ocean mb-4" />
              <h3 className="text-2xl font-display font-bold text-gold mb-2">
                {place.title}
              </h3>
              <p className="text-ocean font-semibold mb-3">{place.region}</p>
              <p className="text-foreground-muted leading-relaxed">
                {place.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-video"
        >
          <img
            src={salmonSpeciesImages.kizhuch[1].urlLarge}
            alt="Кижуч в естественной среде"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Diet */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Питание</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Чем питается кижуч
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {diet.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <Utensils className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-display font-bold text-gold mb-6">
                {phase.phase}
              </h3>
              <ul className="space-y-3">
                {phase.foods.map((food) => (
                  <li key={food} className="flex items-start gap-3 text-foreground-muted">
                    <span className="text-ocean mt-1">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section className="content-container py-20 bg-gradient-to-b from-background to-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Польза для здоровья</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Почему кижуч полезен
          </h2>
        </motion.div>

        {/* For Children */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-ocean mb-8 flex items-center gap-3">
            <Baby className="w-8 h-8" />
            Для детей (с 1 года)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {healthBenefits.children.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <benefit.icon className="w-10 h-10 text-gold mb-3" />
                <h4 className="text-lg font-display font-bold text-gold mb-2">
                  {benefit.title}
                </h4>
                <p className="text-ocean text-sm font-semibold mb-3">{benefit.benefit}</p>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* For Adults */}
        <div>
          <h3 className="text-2xl font-display font-bold text-ocean mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8" />
            Для взрослых
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {healthBenefits.adults.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <benefit.icon className="w-10 h-10 text-gold mb-3" />
                <h4 className="text-lg font-display font-bold text-gold mb-2">
                  {benefit.title}
                </h4>
                <p className="text-ocean text-sm font-semibold mb-3">{benefit.benefit}</p>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Интересные факты</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Удивительный кижуч
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Факты, которые вы не знали об этой серебристой рыбе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-6 hover:shadow-glow-ocean transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-lg font-display font-bold text-gold mb-3">
                {item.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.fact}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Caviar Specs */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Икра кижуча</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Ярко-оранжевая икра с нежным вкусом и высокой питательностью
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-8">
            <Sparkles className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-display font-bold text-gold mb-6">
              Внешний вид и вкус
            </h3>
            <div className="space-y-4 text-foreground-muted">
              <div>
                <span className="text-ocean font-semibold">Размер:</span> {caviarSpecs.size}
              </div>
              <div>
                <span className="text-ocean font-semibold">Цвет:</span> {caviarSpecs.color}
              </div>
              <div>
                <span className="text-ocean font-semibold">Вкус:</span> {caviarSpecs.taste}
              </div>
              <div>
                <span className="text-ocean font-semibold">Цена:</span> {caviarSpecs.price}
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <Heart className="w-10 h-10 text-ocean mb-4" />
            <h3 className="text-xl font-display font-bold text-gold mb-6">
              Пищевая ценность (100 г)
            </h3>
            <div className="space-y-4 text-foreground-muted">
              <div>
                <span className="text-ocean font-semibold">Белок:</span> {caviarSpecs.nutrition.protein}
              </div>
              <div>
                <span className="text-ocean font-semibold">Омега-3:</span> {caviarSpecs.nutrition.omega3}
              </div>
              <div>
                <span className="text-ocean font-semibold">Калории:</span> {caviarSpecs.nutrition.calories}
              </div>
              <div>
                <span className="text-ocean font-semibold">Витамины:</span> {caviarSpecs.nutrition.vitamins}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 text-center"
        >
          <Fish className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Узнайте больше о лососевых
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Изучите другие виды тихоокеанских лососей или посетите наш завод
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/salmon-info">Все виды лососевых</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/hatchery-tour">Экскурсия на завод</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
