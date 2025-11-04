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
  Shield,
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function ChumSalmon() {
  const species = {
    commonName: 'Кета',
    scientificName: 'Oncorhynchus keta',
    englishName: 'Chum Salmon / Dog Salmon',
    icon: '👑',
    description: 'Самый популярный и ценный вид красной икры. Король среди лососевых',
  };

  const lifecycle = [
    {
      stage: 'Икра (3-5 месяцев)',
      description: 'Самки откладывают 2000-4000 крупных икринок (5-7 мм) в гравий на глубине 30-40 см. Инкубация длится 90-150 дней.',
      icon: '🥚',
    },
    {
      stage: 'Мальки (3-6 месяцев)',
      description: 'Вылупляются весной, проводят 1-3 месяца в пресной воде, активно питаясь насекомыми и планктоном.',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (3-7 лет)',
      description: 'Мигрируют в открытый океан, проводя там от 3 до 7 лет. Могут вырастать до 15 кг.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'Проходят до 4000 км вверх по рекам. Меняют окраску на тигровые полосы (черно-красные).',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'Нерестятся осенью (сентябрь-декабрь), после чего погибают, становясь пищей для молоди.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Северная Пацифика и Берингово море',
      description: 'Широкий ареал от Кореи до Аляски. Предпочитают холодные воды (7-12°C)',
      icon: MapPin,
    },
    {
      title: 'Нерестовые реки',
      region: 'Сахалин, Камчатка, Амур, Хоккайдо',
      description: 'Крупные реки с сильным течением. Проходят дальше всех лососевых в верховья',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В океане',
      foods: ['Рыба (сельдь, мойва, корюшка) — 60%', 'Кальмары и осьминоги', 'Крупный криль и креветки', 'Молодь других лососей'],
    },
    {
      phase: 'В реке',
      foods: ['Не питается', 'Расходует жировые запасы', 'Вся энергия направлена на нерест'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Развитие интеллекта',
        benefit: 'Омега-3 (DHA) — 2.0-2.8 г на 100 г',
        description: 'Улучшает когнитивные способности, память, внимание. Критично для развития мозга до 3 лет',
      },
      {
        icon: Baby,
        title: 'Крепкие кости и зубы',
        benefit: 'Витамин D — 685 МЕ на 100 г',
        description: 'Обеспечивает правильное формирование скелета, профилактика рахита',
      },
      {
        icon: Shield,
        title: 'Сильный иммунитет',
        benefit: 'Селен (46 мкг), цинк, витамины A, E',
        description: 'Укрепляют иммунную систему, снижают риск инфекций и аллергий',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Здоровье сердца',
        benefit: 'Снижение холестерина на 15-20%',
        description: 'Омега-3 разжижают кровь, укрепляют сосуды, снижают давление. Профилактика инфарктов',
      },
      {
        icon: Brain,
        title: 'Защита от Альцгеймера',
        benefit: 'Риск деменции снижается на 47%',
        description: 'DHA защищает нейроны от повреждения, улучшает память и внимание после 50 лет',
      },
      {
        icon: TrendingUp,
        title: 'Контроль веса',
        benefit: 'Высокобелковая диета — 126 ккал/100 г',
        description: '20 г белка на 100 г насыщают надолго, ускоряют метаболизм на 25-30%',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '🗺️',
      title: 'Рекордная миграция',
      fact: 'Кета может пройти до 4000 км вверх по рекам (рекорд — река Юкон на Аляске). Это самая длинная миграция среди лососевых.',
    },
    {
      emoji: '🎨',
      title: 'Тигровые полосы',
      fact: 'При заходе в реки самцы приобретают черно-красные вертикальные полосы, похожие на тигриные. Отсюда английское название "Dog Salmon".',
    },
    {
      emoji: '👑',
      title: 'Королевская икра',
      fact: 'Икра кеты — самая крупная (5-7 мм) и дорогая среди красной икры. Ценится за нежный сливочный вкус и эффектный внешний вид.',
    },
    {
      emoji: '💪',
      title: 'Огромные зубы',
      fact: 'У самцов во время нереста вырастают клыки длиной до 2 см. За это кету называют "Dog Salmon" (лосось-собака).',
    },
    {
      emoji: '🌡️',
      title: 'Холодолюбивая',
      fact: 'Предпочитает самые холодные воды среди лососевых (7-12°C). Может нереститься даже при температуре воды 0°C.',
    },
    {
      emoji: '📅',
      title: 'Долгожитель',
      fact: 'Живет до 7 лет — один из самых долгоживущих тихоокеанских лососей. Это позволяет набрать максимальный вес.',
    },
  ];

  const caviarSpecs = {
    size: '5-7 мм (крупная)',
    color: 'Ярко-оранжевая, насыщенная',
    taste: 'Нежный сливочный вкус, икринки лопаются на языке. Без горечи',
    price: 'Премиум-сегмент, самая дорогая красная икра',
    nutrition: {
      protein: '31.6 г на 100 г',
      omega3: '6.8 г на 100 г',
      calories: '251 ккал на 100 г',
      vitamins: 'A, D, E, B12, фолиевая кислота, холин',
    },
  };

  return (
    <>
      <Seo
        title="Кета (Chum Salmon) — полная энциклопедия вида"
        description="Всё о кете: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Почему икра кеты самая ценная."
        path="/species/keta"
        ogImage="/og/salmon-info.png"
      />

      <Breadcrumbs />

      <Hero
        subtitle="Oncorhynchus keta"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.keta[0].urlLarge}
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
              <p className="text-xl font-bold text-gold">3-7 лет</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Вес взрослой особи</p>
              <p className="text-xl font-bold text-gold">4-15 кг</p>
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
            От икринки до нереста за 3-7 лет
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Один из самых долгоживущих тихоокеанских лососей
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
            Где живет кета
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
            src={salmonSpeciesImages.keta[1].urlLarge}
            alt="Кета в естественной среде"
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
            Чем питается кета
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
            Почему кета полезна
          </h2>
        </motion.div>

        {/* For Children */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-ocean mb-8 flex items-center gap-3">
            <Baby className="w-8 h-8" />
            Для детей (с 10 месяцев)
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
            Удивительная кета
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Факты, которые вы не знали об этой королевской рыбе
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
          <Badge variant="gold" className="mb-4">Икра кеты</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Самая крупная и ценная красная икра с премиальным вкусом
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
