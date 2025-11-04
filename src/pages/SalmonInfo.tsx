import { Hero } from '@/components/Hero';
import { Seo } from '@/seo/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Fish, Heart, Baby, Brain, Shield, ArrowRight } from 'lucide-react';
import { aboutImages, caviarProductImages, salmonSpeciesImages } from '@/config/images';

export default function SalmonInfo() {
  const salmonSpecies = [
    {
      name: 'Кета (Chum Salmon)',
      latinName: 'Oncorhynchus keta',
      caviarSize: 'Крупная (5-7 мм)',
      caviarColor: 'Ярко-оранжевая',
      taste: 'Нежный сливочный вкус, лопается на языке',
      popularity: 'Самая популярная и ценная',
      icon: '👑',
      slug: 'keta',
      image: salmonSpeciesImages.keta[0],
    },
    {
      name: 'Горбуша (Pink Salmon)',
      latinName: 'Oncorhynchus gorbuscha',
      caviarSize: 'Средняя (4-5 мм)',
      caviarColor: 'Светло-оранжевая',
      taste: 'Легкий, нежный вкус, мягкая оболочка',
      popularity: 'Самая доступная по цене',
      icon: '🐟',
      slug: 'pink-salmon',
      image: salmonSpeciesImages.gorbuscha[0],
    },
    {
      name: 'Нерка (Sockeye Salmon)',
      latinName: 'Oncorhynchus nerka',
      caviarSize: 'Мелкая (3-4 мм)',
      caviarColor: 'Темно-красная',
      taste: 'Насыщенный, пикантный вкус',
      popularity: 'Редкая, премиум сегмент',
      icon: '💎',
      slug: 'nerka',
      image: salmonSpeciesImages.nerka[0],
    },
    {
      name: 'Чавыча (King Salmon)',
      latinName: 'Oncorhynchus tshawytscha',
      caviarSize: 'Крупнейшая (7-8 мм)',
      caviarColor: 'Темно-красная',
      taste: 'Интенсивный, маслянистый',
      popularity: 'Самая редкая и дорогая',
      icon: '👑💎',
      slug: 'chavycha',
      image: salmonSpeciesImages.chavycha[0],
    },
    {
      name: 'Кижуч (Coho Salmon)',
      latinName: 'Oncorhynchus kisutch',
      caviarSize: 'Средняя (4-5 мм)',
      caviarColor: 'Красно-оранжевая',
      taste: 'Деликатный, с легкой горчинкой',
      popularity: 'Средний премиум сегмент',
      icon: '🌟',
      slug: 'kizhuch',
      image: salmonSpeciesImages.kizhuch[0],
    },
    {
      name: 'Сима (Cherry Salmon)',
      latinName: 'Oncorhynchus masou',
      caviarSize: 'Мелкая (3-4 мм)',
      caviarColor: 'Оранжевая',
      taste: 'Нежный, сладковатый',
      popularity: 'Редкая, азиатский вид',
      icon: '🌸',
      slug: 'sima',
      image: salmonSpeciesImages.sima[0],
    },
  ];

  const healthBenefits = [
    {
      icon: Brain,
      title: 'Развитие мозга',
      description: 'Омега-3 жирные кислоты (DHA и EPA) критически важны для развития мозга и когнитивных функций у детей',
      color: 'text-ocean',
    },
    {
      icon: Baby,
      title: 'Рост и развитие',
      description: 'Полноценный белок (до 32%) с всеми незаменимыми аминокислотами для роста детского организма',
      color: 'text-gold',
    },
    {
      icon: Shield,
      title: 'Иммунитет',
      description: 'Витамины A, D, E, B12 и минералы (йод, селен, фосфор) укрепляют иммунную систему',
      color: 'text-ocean',
    },
    {
      icon: Heart,
      title: 'Здоровье сердца',
      description: 'Омега-3 улучшают работу сердечно-сосудистой системы с раннего возраста',
      color: 'text-gold',
    },
  ];

  const consumptionTips = [
    {
      title: 'Классическая подача',
      description: 'На тосте из белого хлеба с маслом. Икра — сверху, без перемешивания. Температура подачи: 0-2°C.',
    },
    {
      title: 'Блины и оладьи',
      description: 'Традиционный русский способ. Теплые блины, сметана и красная икра. Идеально для завтрака.',
    },
    {
      title: 'Канапе и тарталетки',
      description: 'Для праздничного стола. Сливочный сыр + огурец + икра. Порционная подача для гостей.',
    },
    {
      title: 'С перепелиными яйцами',
      description: 'Половинка яйца с майонезом или авокадо, сверху икра. Элегантная закуска.',
    },
    {
      title: 'Для детей (с 3 лет)',
      description: 'Начинать с 1 чайной ложки. Смешивать с творогом или добавлять в омлет. Не чаще 2-3 раз в неделю.',
    },
  ];

  return (
    <>
      <Seo
        title="Лососевые рыбы и красная икра | Виды, польза, применение"
        description="Полное руководство по семейству лососевых: кета, горбуша, нерка, чавыча, кижуч. Виды красной икры, отличия, польза для детей и способы употребления."
        path="/salmon-info"
        ogImage="/og/salmon-info.png"
      />

      <Breadcrumbs />

      <Hero
        subtitle="Энциклопедия"
        title="Лососевые рыбы и красная икра"
        description="Всё о семействе тихоокеанских лососей, видах красной икры, их отличиях и пользе для здоровья"
        backgroundImage={aboutImages[0].urlLarge}
        backgroundOverlay="dark"
      />

      {/* Family Overview */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Badge variant="ocean" className="mb-4">Семейство Salmonidae</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-6">
            Тихоокеанские лососи
          </h2>
          <div className="glass-card p-8 space-y-4 text-foreground-muted leading-relaxed">
            <p>
              <strong className="text-gold">Семейство Лососевые (Salmonidae)</strong> — одно из самых ценных
              промысловых семейств рыб. Тихоокеанские лососи рода <em>Oncorhynchus</em> обитают в северной
              части Тихого океана и нерестятся в реках Дальнего Востока, включая Сахалин и Курильские острова.
            </p>
            <p>
              Все тихоокеанские лососи — <strong>анадромные рыбы</strong>: они рождаются в пресной воде,
              мигрируют в океан для роста и возвращаются в родные реки для нереста. После нереста лососи
              погибают, а их икра даёт жизнь новому поколению.
            </p>
            <p>
              <strong className="text-ocean">Красная икра</strong> — это неоплодотворённая икра лососевых рыб.
              Каждый вид имеет уникальные характеристики: размер икринок, цвет, вкус и текстуру оболочки.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Species Cards */}
      <section className="content-container py-20 bg-gradient-to-b from-background to-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Виды и их икра</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Шесть видов тихоокеанских лососей
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Каждый вид обладает уникальными характеристиками икры и занимает свою нишу на рынке
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salmonSpecies.map((species, index) => (
            <motion.div
              key={species.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card overflow-hidden group cursor-pointer hover:shadow-glow-gold transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={species.image.urlMedium}
                  alt={species.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-5xl">{species.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">
                  {species.name}
                </h3>
                <p className="text-sm italic text-foreground-muted mb-4">{species.latinName}</p>

                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span className="text-foreground-muted">Размер икры:</span>
                    <span className="text-foreground font-semibold">{species.caviarSize}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/30 pb-2">
                    <span className="text-foreground-muted">Цвет:</span>
                    <span className="text-foreground font-semibold">{species.caviarColor}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-foreground-muted block mb-1">Вкус:</span>
                    <p className="text-foreground text-sm">{species.taste}</p>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs">{species.popularity}</Badge>
                  </div>
                </div>

                {/* Link button */}
                <Link
                  to={`/species/${species.slug}`}
                  className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gold/10 hover:bg-gold/20 transition-colors text-gold group/link"
                >
                  <span className="text-sm font-semibold">Подробнее о виде</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 text-center"
        >
          <p className="text-foreground-muted mb-4">
            <strong className="text-gold">Royal Keta</strong> специализируется на икре кеты —
            золотом стандарте красной икры с оптимальным балансом размера, вкуса и цены.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/caviar">Наша икра кеты</Link>
          </Button>
        </motion.div>
      </section>

      {/* Health Benefits for Children */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Польза для здоровья</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Почему красная икра полезна для детей
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Красная икра — суперфуд для растущего организма, признанный педиатрами всего мира
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {healthBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex gap-6"
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-background to-background/50 flex items-center justify-center ${benefit.color}`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8"
        >
          <h3 className="text-2xl font-display font-bold text-gold mb-4 flex items-center gap-3">
            <Baby className="w-8 h-8 text-ocean" />
            Рекомендации педиатров
          </h3>
          <div className="space-y-3 text-foreground-muted">
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>С какого возраста:</strong> Вводить в рацион с 3 лет, начиная с 1 чайной ложки</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Частота употребления:</strong> 2-3 раза в неделю, не более 30-50 г за раз</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Аллергия:</strong> Красная икра — аллергенный продукт. Первый раз давать утром, следить за реакцией</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Качество:</strong> Только свежая икра без консервантов. Проверяйте сертификаты ГОСТ и срок годности</p>
            </div>
            <div className="flex gap-3">
              <span className="text-ocean font-bold">⚠</span>
              <p><strong>Противопоказания:</strong> Болезни почек, склонность к отёкам, гипертония у родителей</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Consumption Tips */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Гастрономия</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Как правильно употреблять красную икру
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Традиционные и современные способы подачи для максимального удовольствия
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {consumptionTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-display font-bold text-gold mb-3">
                {tip.title}
              </h4>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8"
        >
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            ⚡ Важные правила хранения и подачи
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground-muted">
            <div>
              <h4 className="text-ocean font-semibold mb-2">Хранение</h4>
              <ul className="space-y-1 text-sm">
                <li>• Температура: -4 до -6°C (зона свежести)</li>
                <li>• Открытую банку хранить не более 3 дней</li>
                <li>• Не замораживать повторно</li>
                <li>• Переложить в стеклянную посуду</li>
              </ul>
            </div>
            <div>
              <h4 className="text-ocean font-semibold mb-2">Подача</h4>
              <ul className="space-y-1 text-sm">
                <li>• Достать за 10 минут до подачи</li>
                <li>• Идеальная температура: 0-2°C</li>
                <li>• Использовать перламутровую ложку</li>
                <li>• Не смешивать с сильными специями</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Image */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[500px]"
        >
          <img
            src={caviarProductImages[1].urlLarge}
            alt="Премиальная красная икра крупным планом"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <Badge variant="gold" className="mb-4">Royal Keta Premium</Badge>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-gold mb-4">
              Икра кеты — золотой стандарт
            </h3>
            <p className="text-foreground-muted mb-6 max-w-2xl">
              Крупные икринки с нежным сливочным вкусом, добытые в экологически чистых водах Сахалина
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="premium" size="lg">
                <Link to="/caviar">Купить икру кеты</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/science">Наши технологии</Link>
              </Button>
            </div>
          </div>
        </motion.div>
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
            Хотите узнать больше?
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Посетите наш завод, увидьте процесс производства икры своими глазами и попробуйте
            свежайший продукт прямо с линии. Экскурсии для всей семьи!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/hatchery-tour">Забронировать экскурсию</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/sturgeon-info">Узнать об осетровых</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
