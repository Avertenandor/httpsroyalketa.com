import { Hero } from '@/components/Hero';
import { Seo } from '@/seo/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function PinkSalmon() {
  const species = {
    commonName: 'Горбуша',
    scientificName: 'Oncorhynchus gorbuscha',
    englishName: 'Pink Salmon',
    icon: '🐟',
    description: 'Самый многочисленный и доступный вид тихоокеанских лососей',
  };

  const lifecycle = [
    {
      stage: 'Икра (3-4 месяца)',
      description: 'Самки откладывают 1200-1900 икринок в гравий. Инкубация длится 90-120 дней в зависимости от температуры воды.',
      icon: '🥚',
    },
    {
      stage: 'Мальки (2-3 месяца)',
      description: 'Вылупляются весной, сразу начинают миграцию в океан. В отличие от других лососей, не задерживаются в пресной воде.',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (18 месяцев)',
      description: 'Активно питаются планктоном и мелкой рыбой. Быстро растут, набирая 1.5-2.5 кг веса.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'В возрасте 2 лет возвращаются в родные реки. Самцы отращивают характерный горб на спине.',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'После нереста все особи погибают, обогащая экосистему реки питательными веществами.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Северная часть Тихого океана',
      description: 'От Японии до Калифорнии, включая Берингово, Охотское и Японское моря',
      icon: MapPin,
    },
    {
      title: 'Нерестовые реки',
      region: 'Сахалин, Курилы, Камчатка',
      description: 'Короткие прибрежные реки с быстрым течением и галечным дном',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В океане',
      foods: ['Криль и зоопланктон (70%)', 'Мелкая рыба (анчоусы, мойва)', 'Кальмары', 'Ракообразные'],
    },
    {
      phase: 'В реке',
      foods: ['Не питается', 'Живет за счет накопленных запасов', 'Все силы уходят на нерест'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Развитие мозга',
        benefit: 'Омега-3 (EPA и DHA) — 1.2-1.8 г на 100 г',
        description: 'Критически важны для формирования нервной системы, улучшают память и концентрацию',
      },
      {
        icon: Baby,
        title: 'Рост костей',
        benefit: 'Витамин D — 600 МЕ на 100 г',
        description: 'Обеспечивает усвоение кальция, профилактика рахита',
      },
      {
        icon: Heart,
        title: 'Иммунитет',
        benefit: 'Селен (40 мкг), цинк, витамины группы B',
        description: 'Укрепляют защитные функции организма, снижают частоту простуд',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Сердце и сосуды',
        benefit: 'Омега-3 снижает холестерин',
        description: 'Профилактика инфарктов, инсультов, атеросклероза. ВОЗ рекомендует 2-3 порции рыбы в неделю',
      },
      {
        icon: Brain,
        title: 'Когнитивные функции',
        benefit: 'Защита от деменции',
        description: 'Регулярное употребление снижает риск болезни Альцгеймера на 30-50%',
      },
      {
        icon: TrendingUp,
        title: 'Метаболизм',
        benefit: 'Низкокалорийный белок — 116 ккал/100 г',
        description: 'Идеально для похудения: насыщает, ускоряет обмен веществ, сохраняет мышцы',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '⚡',
      title: 'Самый быстрый жизненный цикл',
      fact: 'Горбуша живет всего 2 года — самый короткий цикл среди тихоокеанских лососей. Это делает ее запасы устойчивыми к перелову.',
    },
    {
      emoji: '🔄',
      title: 'Строго каждые 2 года',
      fact: 'Нерестится точно в год своего рождения. Есть "четные" и "нечетные" популяции, которые не скрещиваются между собой.',
    },
    {
      emoji: '🐪',
      title: 'Горб у самцов',
      fact: 'В период нереста самцы отращивают огромный горб на спине, достигающий 15 см высоты. Отсюда русское название "горбуша".',
    },
    {
      emoji: '📊',
      title: 'Самая массовая',
      fact: 'Составляет до 80% мирового вылова тихоокеанских лососей. Ежегодно добывается 500-700 тысяч тонн.',
    },
    {
      emoji: '🎯',
      title: 'Точная навигация',
      fact: 'Находит родную реку по запаху воды, запомненному в младенчестве. Может вернуться в тот же участок реки, где вылупилась.',
    },
    {
      emoji: '💎',
      title: 'Розовое мясо',
      fact: 'Цвет мяса (от розового до красного) зависит от количества каротиноидов из криля в рационе. Чем больше криля — тем краснее мясо.',
    },
  ];

  const caviarSpecs = {
    size: '4-5 мм (средняя)',
    color: 'Светло-оранжевая, почти персиковая',
    taste: 'Легкий, нежный, без горечи. Мягкая оболочка, легко лопается',
    price: 'Самая доступная по цене',
    nutrition: {
      protein: '31.5 г на 100 г',
      omega3: '6.2 г на 100 г',
      calories: '252 ккал на 100 г',
      vitamins: 'A, D, E, B12, фолиевая кислота',
    },
  };

  return (
    <>
      <Seo
        title="Горбуша (Pink Salmon) — полная энциклопедия вида"
        description="Всё о горбуше: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Интересные факты и характеристики икры горбуши."
        path="/species/pink-salmon"
        ogImage="/og/salmon-info.png"
      />

      <Breadcrumbs />

      <Hero
        subtitle="Oncorhynchus gorbuscha"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.gorbuscha[0].urlLarge}
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
              <p className="text-xl font-bold text-gold">2 года</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Вес взрослой особи</p>
              <p className="text-xl font-bold text-gold">1.5-2.5 кг</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Ареал обитания</p>
              <p className="text-xl font-bold text-gold">Северная Пацифика</p>
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
            От икринки до нереста за 2 года
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Самый короткий и быстрый цикл среди тихоокеанских лососей
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
            Где живет горбуша
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
            src={salmonSpeciesImages.gorbuscha[1].urlLarge}
            alt="Горбуша в естественной среде"
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
            Чем питается горбуша
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {diet.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
            Почему горбуша полезна
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
            Удивительная горбуша
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Факты, которые вы не знали об этой удивительной рыбе
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
          <Badge variant="gold" className="mb-4">Икра горбуши</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Самая доступная красная икра с отличными вкусовыми качествами
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
