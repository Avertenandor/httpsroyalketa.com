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
  Zap,
  Trophy,
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function KingSalmon() {
  const species = {
    commonName: 'Чавыча',
    scientificName: 'Oncorhynchus tshawytscha',
    englishName: 'King Salmon / Chinook Salmon',
    icon: '👑',
    description: 'Король лососей. Самый крупный, жирный и ценный вид',
  };

  const lifecycle = [
    {
      stage: 'Икра (3-5 месяцев)',
      description: 'Самки откладывают 3000-14000 крупных икринок (6-7 мм). Инкубация длится 90-150 дней в зависимости от температуры.',
      icon: '🥚',
    },
    {
      stage: 'Мальки (3-12 месяцев)',
      description: 'Проводят от 3 месяцев до года в пресной воде. Ранние расы уходят в море сразу, поздние зимуют в реке.',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (3-7 лет)',
      description: 'Самая длинная океанская фаза среди лососей. Могут вырастать до 60 кг, хотя средний вес 7-15 кг.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'Проходят до 4000 км вверх по крупным рекам (Юкон, Колумбия). Мигрируют с весны до осени.',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'Нерестятся в основных руслах крупных рек. После нереста погибают.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Северная Пацифика от Калифорнии до Чукотки',
      description: 'Широчайший ареал. Мигрируют на тысячи километров в открытом океане',
      icon: MapPin,
    },
    {
      title: 'Нерестовые реки',
      region: 'Крупные реки: Юкон, Колумбия, Амур, Камчатка',
      description: 'Нерестятся в основных руслах больших рек, в отличие от других лососей',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В океане',
      foods: ['Рыба (сельдь, анчоусы, минтай) — 80%', 'Кальмары', 'Креветки и криль', 'Осьминоги'],
    },
    {
      phase: 'В реке',
      foods: ['Не питается', 'Расходует огромные жировые запасы', 'Может провести в реке до 6 месяцев без еды'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Максимум Омега-3',
        benefit: 'Омега-3 (DHA+EPA) — 2.5-3.5 г на 100 г',
        description: 'Рекордное содержание среди лососевых. Критично для развития мозга и нервной системы',
      },
      {
        icon: Baby,
        title: 'Полноценный белок',
        benefit: 'Белок — 22 г на 100 г',
        description: 'Все незаменимые аминокислоты для роста и развития. Легко усваивается',
      },
      {
        icon: Trophy,
        title: 'Витамины и минералы',
        benefit: 'Витамин D (860 МЕ), B12, селен',
        description: 'Полный комплекс для здоровья костей, крови и иммунитета',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Супер-защита сердца',
        benefit: 'Снижение риска инфаркта на 35-40%',
        description: 'Максимальное содержание Омега-3 защищает сердце, сосуды, снижает давление',
      },
      {
        icon: Brain,
        title: 'Защита мозга',
        benefit: 'Профилактика деменции и Альцгеймера',
        description: 'DHA защищает нейроны от повреждения, улучшает память и когнитивные функции',
      },
      {
        icon: Zap,
        title: 'Энергия и сила',
        benefit: 'Высокое содержание жира (11-15%)',
        description: 'Насыщенное мясо дает долгое чувство сытости и энергию',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '👑',
      title: 'Король лососей',
      fact: 'Чавыча — крупнейший тихоокеанский лосось. Рекорд: 57 кг и 150 см длины (река Кенай, Аляска, 1985 год).',
    },
    {
      emoji: '🥩',
      title: 'Белое мясо',
      fact: 'Около 5-10% особей имеют белое или бледно-розовое мясо вместо красного. Это генетическая особенность, не влияющая на вкус.',
    },
    {
      emoji: '💰',
      title: 'Самая дорогая',
      fact: 'Чавыча — самая дорогая промысловая красная рыба. Цена может достигать $40-60 за кг в розницу.',
    },
    {
      emoji: '🏃',
      title: 'Два типа миграций',
      fact: 'Есть "весенняя" раса (нерест летом) и "осенняя" раса (нерест зимой). Весенняя проходит дальше в верховья.',
    },
    {
      emoji: '⚓',
      title: 'Сила миграции',
      fact: 'Может преодолевать мощнейшие пороги и водопады высотой до 3 метров. Самый сильный прыгун среди лососей.',
    },
    {
      emoji: '🌍',
      title: 'Акклиматизация',
      fact: 'Успешно акклиматизирована в Новой Зеландии и Чили. Теперь там есть коммерческий промысел.',
    },
  ];

  const caviarSpecs = {
    size: '6-7 мм (самая крупная)',
    color: 'Оранжево-красная, яркая',
    taste: 'Насыщенный, маслянистый, деликатный. Икринки крупные и упругие',
    price: 'Эксклюзив, редкая и дорогая икра',
    nutrition: {
      protein: '31.5 г на 100 г',
      omega3: '7.5 г на 100 г (максимум!)',
      calories: '264 ккал на 100 г',
      vitamins: 'A, D, E, B12, фолиевая кислота, астаксантин',
    },
  };

  return (
    <>
      <Seo
        title="Чавыча (King Salmon) — полная энциклопедия вида"
        description="Всё о чавыче: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Почему чавыча — король лососей."
        path="/species/chavycha"
        ogImage="/og/salmon-info.png"
      />

      <Breadcrumbs />

      <Hero
        subtitle="Oncorhynchus tshawytscha"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.chavycha[0].urlLarge}
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
              <p className="text-xl font-bold text-gold">7-30 кг</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Ареал обитания</p>
              <p className="text-xl font-bold text-gold">Северная Пацифика</p>
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
            От икринки до нереста за 3-7 лет
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Самая длинная океанская фаза позволяет вырасти до гигантских размеров
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
            Где живет чавыча
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
            src={salmonSpeciesImages.chavycha[1].urlLarge}
            alt="Чавыча в естественной среде"
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
            Чем питается чавыча
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
            Почему чавыча полезна
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
            Удивительная чавыча
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
          <Badge variant="gold" className="mb-4">Икра чавычи</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Самая крупная и редкая красная икра с максимальным содержанием Омега-3
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
