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
  Eye,
  Flame,
} from 'lucide-react';
import { salmonSpeciesImages } from '@/config/images';

export default function SockeyeSalmon() {
  const species = {
    commonName: 'Нерка',
    scientificName: 'Oncorhynchus nerka',
    englishName: 'Sockeye Salmon / Red Salmon',
    icon: '🔴',
    description: 'Самое красное и яркое мясо среди всех лососевых. Король вкуса',
  };

  const lifecycle = [
    {
      stage: 'Икра (4-6 месяцев)',
      description: 'Самки откладывают 2000-4500 икринок в гравий озер и рек. Инкубация длится 120-180 дней при низкой температуре.',
      icon: '🥚',
    },
    {
      stage: 'Мальки в озере (1-3 года)',
      description: 'Уникальная особенность: молодь проводит 1-3 года в пресноводных озерах, питаясь планктоном.',
      icon: '🐠',
    },
    {
      stage: 'Океанская фаза (2-3 года)',
      description: 'Мигрируют в океан, активно питаясь крилем и креветками, что придает мясу ярко-красный цвет.',
      icon: '🌊',
    },
    {
      stage: 'Нерестовая миграция',
      description: 'Тело становится ярко-красным, голова зеленой. Проходят сотни километров обратно в родное озеро.',
      icon: '⬆️',
    },
    {
      stage: 'Нерест и гибель',
      description: 'Нерестятся в притоках озер осенью. После нереста погибают, обогащая экосистему.',
      icon: '🌿',
    },
  ];

  const habitat = [
    {
      title: 'Океан',
      region: 'Северная Пацифика, Берингово море',
      description: 'Проводят 2-3 года в холодных океанских водах, питаясь крилем',
      icon: MapPin,
    },
    {
      title: 'Нерестовые озера',
      region: 'Камчатка, Аляска, Британская Колумбия',
      description: 'Уникальная особенность: нерестятся в озерах и их притоках, не в реках',
      icon: Droplets,
    },
  ];

  const diet = [
    {
      phase: 'В озере (молодь)',
      foods: ['Зоопланктон (дафнии, циклопы)', 'Личинки насекомых', 'Мелкие ракообразные', 'Водоросли'],
    },
    {
      phase: 'В океане',
      foods: ['Криль и каланоиды (80%) — источник красного цвета', 'Мелкие креветки', 'Амфиподы', 'Молодь рыб'],
    },
    {
      phase: 'В реке',
      foods: ['Не питается', 'Расходует накопленный жир', 'Вся энергия на нерест'],
    },
  ];

  const healthBenefits = {
    children: [
      {
        icon: Brain,
        title: 'Умственное развитие',
        benefit: 'Омега-3 (DHA) — 2.3-3.0 г на 100 г',
        description: 'Максимальное содержание DHA среди лососевых. Улучшает IQ, память, внимание',
      },
      {
        icon: Eye,
        title: 'Зрение',
        benefit: 'Астаксантин — мощный антиоксидант',
        description: 'Защищает сетчатку глаза, улучшает остроту зрения, профилактика близорукости',
      },
      {
        icon: Baby,
        title: 'Рост и развитие',
        benefit: 'Полноценный белок — 21 г на 100 г',
        description: 'Все незаменимые аминокислоты для роста мышц и органов',
      },
    ],
    adults: [
      {
        icon: Heart,
        title: 'Супер-защита сердца',
        benefit: 'Рекордное содержание Омега-3',
        description: 'Снижает триглицериды на 25-30%, давление на 5-8 мм рт.ст. Профилактика аритмии',
      },
      {
        icon: Flame,
        title: 'Анти-старение',
        benefit: 'Астаксантин — в 6000 раз сильнее витамина C',
        description: 'Мощнейший антиоксидант, защищает клетки от старения, улучшает кожу',
      },
      {
        icon: Brain,
        title: 'Нейропротекция',
        benefit: 'Защита мозга от деменции',
        description: 'Регулярное употребление снижает риск Альцгеймера на 50-60%',
      },
    ],
  };

  const funFacts = [
    {
      emoji: '🎨',
      title: 'Самая красная рыба',
      fact: 'Нерка имеет самое яркое красное мясо среди всех лососей благодаря каротиноидам из криля. Цвет интенсивнее, чем у кеты и горбуши.',
    },
    {
      emoji: '👁️',
      title: 'Sockeye — "воспаленный глаз"',
      fact: 'Английское название происходит от слова "suk-kegh" (красная рыба). Во время нереста глаза действительно краснеют и выпирают.',
    },
    {
      emoji: '🏞️',
      title: 'Озерный лосось',
      fact: 'Единственный тихоокеанский лосось, чья молодь обязательно проводит 1-3 года в пресноводных озерах перед миграцией в океан.',
    },
    {
      emoji: '🦐',
      title: 'Диета из криля',
      fact: 'Питается почти исключительно крилем в океане. Каротиноиды из криля накапливаются в мышцах, придавая красный цвет.',
    },
    {
      emoji: '🎭',
      title: 'Два подвида',
      fact: 'Есть проходная форма (идет в океан) и жилая форма "кокани" (всю жизнь в озере). Кокани мельче — до 30 см.',
    },
    {
      emoji: '💰',
      title: 'Премиальная рыба',
      fact: 'Самая дорогая промысловая красная рыба после чавычи. Ценится за ярко-красное мясо и высокое содержание жира.',
    },
  ];

  const caviarSpecs = {
    size: '4-5 мм (средняя)',
    color: 'Темно-красная, почти бордовая',
    taste: 'Насыщенный, с легкой горчинкой. Упругая оболочка',
    price: 'Премиум-сегмент, дороже горбуши',
    nutrition: {
      protein: '32.0 г на 100 г',
      omega3: '7.2 г на 100 г (рекорд!)',
      calories: '259 ккал на 100 г',
      vitamins: 'A, D, E, B12, астаксантин',
    },
  };

  return (
    <>
      <Seo
        title="Нерка (Sockeye Salmon) — полная энциклопедия вида"
        description="Всё о нерке: жизненный цикл, среда обитания, питание, польза для детей и взрослых. Почему нерка — самая красная рыба."
        path="/species/nerka"
        ogImage="/og/salmon-info.png"
      />

      

      <Hero
        subtitle="Oncorhynchus nerka"
        title={`${species.icon} ${species.commonName}`}
        description={species.description}
        backgroundImage={salmonSpeciesImages.nerka[0].urlLarge}
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
              <p className="text-xl font-bold text-gold">4-5 лет</p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 text-ocean mx-auto mb-2" />
              <p className="text-sm text-foreground-muted mb-1">Вес взрослой особи</p>
              <p className="text-xl font-bold text-gold">2-7 кг</p>
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
            От икринки до нереста за 4-5 лет
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Уникальная озерная фаза развития молоди
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
            Где живет нерка
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
            src={salmonSpeciesImages.nerka[1].urlLarge}
            alt="Нерка в естественной среде"
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
            Чем питается нерка
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
            Почему нерка полезна
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
            Удивительная нерка
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Факты, которые вы не знали об этой яркой рыбе
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
          <Badge variant="gold" className="mb-4">Икра нерки</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Характеристики икры
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Темно-красная икра с рекордным содержанием Омега-3
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
