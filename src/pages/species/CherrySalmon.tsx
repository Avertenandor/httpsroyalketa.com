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
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function CherrySalmon() {
  const species = {
    commonName: 'Сима',
    scientificName: 'Oncorhynchus masou',
    englishName: 'Cherry Salmon / Masu Salmon',
    icon: '🌸',
    description: 'Азиатская жемчужина. Эндемик западной части Тихого океана',
  };

  const lifecycle = [
    {
      stage: 'Икра (3-4 месяца)',
      description: 'Самки откладывают 1500-3000 икринок осенью. Инкубация длится всю зиму — 120-150 дней.',
      icon: '🥚',
    },
    {
      stage: 'Мальки (1-2 года)',
      description: 'Проводят 1-2 года в реках, питаясь насекомыми. Часть особей остается в реках навсегда (форма ямамэ).',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (1-2 года)',
      description: 'Не уходят далеко от берега, держатся в прибрежных водах. Набирают 2-5 кг веса.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'Возвращаются весной-летом, когда цветет сакура (отсюда название "cherry salmon").',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'Нерестятся летом и осенью. Самцы приобретают темные вертикальные полосы.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Японское, Охотское море, северо-запад Пацифики',
      description: 'Эндемик азиатских вод. Не встречается у берегов Америки',
      icon: MapPin,
    },
    {
      title: 'Нерестовые реки',
      region: 'Япония, Корея, Сахалин, Приморье, Хоккайдо',
      description: 'Малые и средние реки с чистой холодной водой и быстрым течением',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В реке (молодь)',
      foods: ['Водные насекомые (80%)', 'Летающие насекомые', 'Личинки ручейников', 'Мелкие ракообразные'],
    },
    {
      phase: 'В океане',
      foods: ['Мелкая рыба (анчоусы, молодь сельди)', 'Криль и амфиподы', 'Кальмары', 'Летающая рыба'],
    },
    {
      phase: 'В реке (взрослые)',
      foods: ['Не питается', 'Расходует накопленный жир', 'Может голодать 2-3 месяца'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Развитие мозга',
        benefit: 'Омега-3 (DHA) — 1.5-2.0 г на 100 г',
        description: 'Поддерживает формирование нервной системы и когнитивное развитие',
      },
      {
        icon: Baby,
        title: 'Легкое усвоение',
        benefit: 'Нежное мясо, низкое содержание жира',
        description: 'Идеально для первого прикорма. Хорошо переваривается детским организмом',
      },
      {
        icon: Heart,
        title: 'Сбалансированный состав',
        benefit: 'Белок 20 г, витамины D, B12, селен',
        description: 'Полный набор нутриентов для роста и развития без перегрузки',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Защита сердца',
        benefit: 'Омега-3 для сердечно-сосудистой системы',
        description: 'Снижает холестерин, укрепляет сосуды, нормализует давление',
      },
      {
        icon: Brain,
        title: 'Поддержка мозга',
        benefit: 'Улучшение памяти и концентрации',
        description: 'DHA защищает нейроны, поддерживает когнитивные функции',
      },
      {
        icon: TrendingUp,
        title: 'Диетическое мясо',
        benefit: 'Низкая калорийность — 140 ккал/100 г',
        description: 'Сбалансированное содержание жира (5-7%). Идеально для правильного питания',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '🌸',
      title: 'Лосось сакуры',
      fact: 'Название "cherry salmon" связано с тем, что нерестовая миграция совпадает с цветением сакуры весной-летом.',
    },
    {
      emoji: '🌏',
      title: 'Азиатский эндемик',
      fact: 'Единственный тихоокеанский лосось, обитающий только в Азии. Не встречается у берегов Северной Америки.',
    },
    {
      emoji: '🐟',
      title: 'Форма ямамэ',
      fact: 'Часть популяции остается в реках всю жизнь, не уходя в океан. Эта жилая форма называется ямамэ (yamame).',
    },
    {
      emoji: '📏',
      title: 'Самый мелкий',
      fact: 'Сима — самый мелкий вид среди основных тихоокеанских лососей. Средний вес 2-3 кг, максимум 5-6 кг.',
    },
    {
      emoji: '🎯',
      title: 'Весенний ход',
      fact: 'В отличие от большинства лососей, заходит в реки весной и летом, а не осенью. Нерестится в июле-октябре.',
    },
    {
      emoji: '💎',
      title: 'Деликатес в Японии',
      fact: 'В Японии считается премиальным деликатесом. Ценится за нежное розовое мясо и тонкий вкус.',
    },
  ];

  const caviarSpecs = {
    size: '3-4 мм (мелкая)',
    color: 'Ярко-оранжевая, мелкая',
    taste: 'Нежный, деликатный, без горечи. Мягкие икринки',
    price: 'Редкая, ограниченная доступность',
    nutrition: {
      protein: '30.5 г на 100 г',
      omega3: '5.8 г на 100 г',
      calories: '240 ккал на 100 г',
      vitamins: 'A, D, E, B12, фолиевая кислота',
    },
  };

  return (
    <>
      <Seo
        title="Сима (Cherry Salmon) — полная энциклопедия вида"
        description="Всё о симе: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Почему сима — азиатская жемчужина."
        path="/species/sima"
        ogImage="/og/salmon-info.png"
      />

      

      <Hero
        subtitle="Oncorhynchus masou"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.sima[0].urlLarge}
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
              <p className="text-xl font-bold text-gold">2-5 кг</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Ареал обитания</p>
              <p className="text-xl font-bold text-gold">Азиатская Пацифика</p>
            </div>
            <div>
              <Fish className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Статус популяции</p>
              <p className="text-xl font-bold text-gold">Уязвимый</p>
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
            Уникальная весенняя миграция в период цветения сакуры
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
            Где живет сима
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
            src={salmonSpeciesImages.sima[1].urlLarge}
            alt="Сима в естественной среде"
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
            Чем питается сима
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
            Почему сима полезна
          </h2>
        </motion.div>

        {/* For Children */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-ocean mb-8 flex items-center gap-3">
            <Baby className="w-8 h-8" />
            Для детей (с 8 месяцев)
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
            Удивительная сима
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Факты, которые вы не знали об этой азиатской жемчужине
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
          <Badge variant="gold" className="mb-4">Икра симы</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Мелкая нежная икра с деликатным вкусом — редкий деликатес
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
