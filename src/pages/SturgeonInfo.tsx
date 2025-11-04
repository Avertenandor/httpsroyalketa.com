import { Hero } from '@/components/Hero';
import { Seo } from '@/seo/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Crown, Baby, Brain, Shield, Droplets } from 'lucide-react';
import { assortmentImages } from '@/config/images';

export default function SturgeonInfo() {
  const sturgeonSpecies = [
    {
      name: 'Белуга (Beluga)',
      latinName: 'Huso huso',
      caviarSize: 'Крупнейшая (3.0-3.5 мм)',
      caviarColor: 'Серо-черная, перламутровая',
      taste: 'Маслянистый, ореховый, сливочный',
      popularity: 'Самая дорогая в мире',
      icon: '👑💎',
      rarity: 'Критически редкая',
    },
    {
      name: 'Калуга (Kaluga)',
      latinName: 'Huso dauricus',
      caviarSize: 'Крупная (2.8-3.2 мм)',
      caviarColor: 'Темно-серая, почти черная',
      taste: 'Близка к белужьей, маслянистая',
      popularity: 'Дальневосточная альтернатива белуге',
      icon: '👑',
      rarity: 'Редкая',
    },
    {
      name: 'Русский осетр (Russian Sturgeon)',
      latinName: 'Acipenser gueldenstaedtii',
      caviarSize: 'Средняя (2.5-3.0 мм)',
      caviarColor: 'Черно-коричневая',
      taste: 'Насыщенный, йодистый, морской',
      popularity: 'Классическая черная икра',
      icon: '💎',
      rarity: 'Редкая',
    },
    {
      name: 'Сибирский осетр (Siberian Sturgeon)',
      latinName: 'Acipenser baerii',
      caviarSize: 'Средняя (2.5-2.8 мм)',
      caviarColor: 'Черно-коричневая',
      taste: 'Деликатный, ореховый',
      popularity: 'Популярна в аквакультуре',
      icon: '🌟',
      rarity: 'Доступная',
    },
    {
      name: 'Севрюга (Sevruga)',
      latinName: 'Acipenser stellatus',
      caviarSize: 'Мелкая (2.0-2.5 мм)',
      caviarColor: 'Черная, глянцевая',
      taste: 'Упругая, интенсивный вкус',
      popularity: 'Традиционная каспийская',
      icon: '⚫',
      rarity: 'Редкая',
    },
    {
      name: 'Стерлядь (Sterlet)',
      latinName: 'Acipenser ruthenus',
      caviarSize: 'Мелкая (1.5-2.0 мм)',
      caviarColor: 'Темно-серая',
      taste: 'Нежный, деликатный',
      popularity: 'Царская рыба',
      icon: '👑',
      rarity: 'Редкая',
    },
  ];

  const healthBenefits = [
    {
      icon: Brain,
      title: 'Развитие интеллекта',
      description: 'Рекордное содержание Омега-3 (до 7 г на 100 г) способствует развитию нейронных связей и улучшает память у детей',
      color: 'text-gold',
    },
    {
      icon: Baby,
      title: 'Полноценное питание',
      description: 'Содержит все 20 аминокислот, включая 8 незаменимых. Белок усваивается на 98%, идеален для растущего организма',
      color: 'text-ocean',
    },
    {
      icon: Shield,
      title: 'Мощный иммунитет',
      description: 'Витамины A, D, E, B12, селен, йод и цинк укрепляют защитные функции и помогают противостоять инфекциям',
      color: 'text-gold',
    },
    {
      icon: Droplets,
      title: 'Здоровье кожи и зрения',
      description: 'Витамин A и жирные кислоты необходимы для здоровья кожи, слизистых оболочек и остроты зрения',
      color: 'text-ocean',
    },
  ];

  const consumptionTips = [
    {
      title: 'Классическая русская подача',
      description: 'Перламутровая ложка, хрустальная икорница на льду, блины и шампанское. Температура 0-2°C.',
    },
    {
      title: 'Haute cuisine',
      description: 'На устрицах, с крем-фреш и шнитт-луком. Гарнир к стейку тунца или тартару из лосося.',
    },
    {
      title: 'Минималистично',
      description: 'На тосте с несоленым маслом. Ничего лишнего — только вкус икры и хлеба.',
    },
    {
      title: 'С яйцами',
      description: 'Яйца пашот или вареные перепелиные яйца с ложкой икры сверху. Завтрак миллионера.',
    },
    {
      title: 'Для детей (с 5 лет)',
      description: 'Начинать с 0.5 чайной ложки. Черная икра богаче по составу, но дороже. 1-2 раза в неделю достаточно.',
    },
  ];

  const comparisonData = [
    { aspect: 'Цена за 100г', red: '2,000-5,000 ₽', black: '15,000-100,000 ₽+' },
    { aspect: 'Размер икринок', red: '3-7 мм', black: '1.5-3.5 мм' },
    { aspect: 'Цвет', red: 'Оранжевый-красный', black: 'Серый-черный' },
    { aspect: 'Омега-3 (на 100г)', red: '6-7 г', black: '6-8 г' },
    { aspect: 'Белок (на 100г)', red: '24-30 г', black: '28-32 г' },
    { aspect: 'Доступность', red: 'Широкая', black: 'Ограниченная' },
    { aspect: 'Возраст рыбы до икры', red: '3-5 лет', black: '8-18 лет' },
  ];

  return (
    <>
      <Seo
        title="Осетровые рыбы и черная икра | Виды, отличия, польза"
        description="Полное руководство по семейству осетровых: белуга, калуга, осетр, севрюга, стерлядь. Виды черной икры, сравнение с красной, польза для детей."
        path="/sturgeon-info"
        ogImage="/og/sturgeon-info.svg"
      />

      <Breadcrumbs />

      <Hero
        subtitle="Энциклопедия"
        title="Осетровые рыбы и черная икра"
        description="Всё о древнейшем семействе рыб планеты, видах черной икры и их непревзойденной пищевой ценности"
        backgroundImage={assortmentImages[0].urlLarge}
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
          <Badge variant="gold" className="mb-4">Семейство Acipenseridae</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-6">
            Осетровые — живые ископаемые
          </h2>
          <div className="glass-card p-8 space-y-4 text-foreground-muted leading-relaxed">
            <p>
              <strong className="text-gold">Семейство Осетровые (Acipenseridae)</strong> — одно из древнейших
              семейств рыб на Земле. Осетры появились более <strong>200 миллионов лет назад</strong> и пережили
              динозавров. Сегодня это одни из самых ценных и охраняемых рыб планеты.
            </p>
            <p>
              Осетровые обитают в бассейнах Каспийского, Черного, Азовского морей, а также в реках Сибири
              и Дальнего Востока. Это <strong>анадромные рыбы</strong>: живут в море, нерестятся в реках.
              Некоторые виды полностью пресноводные.
            </p>
            <p>
              <strong className="text-gold">Черная икра</strong> — икра осетровых рыб, которая веками считалась
              «царским деликатесом» и символом роскоши. Из-за перелова большинство видов осетровых находятся
              под угрозой исчезновения, поэтому промысел строго ограничен. Сегодня качественная черная икра
              производится на <strong className="text-ocean">аквакультурных фермах</strong>.
            </p>
            <div className="bg-gold/10 border-l-4 border-gold p-4 rounded">
              <p className="text-sm">
                <strong className="text-gold">⚠️ Важно:</strong> Промысел диких осетровых в России запрещён
                с 2007 года. Вся легальная черная икра производится на лицензированных рыбоводных предприятиях.
              </p>
            </div>
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
            Шесть основных видов осетровых
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            От белуги — самой дорогой икры в мире — до доступной икры сибирского осетра
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sturgeonSpecies.map((species, index) => (
            <motion.div
              key={species.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-6 hover:shadow-glow-gold transition-all duration-300"
            >
              <div className="text-4xl mb-3">{species.icon}</div>
              <h3 className="text-xl font-display font-bold text-gold mb-2">
                {species.name}
              </h3>
              <p className="text-sm italic text-foreground-muted mb-4">{species.latinName}</p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-foreground-muted">Размер икры:</span>
                  <span className="text-foreground font-semibold">{species.caviarSize}</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-foreground-muted">Цвет:</span>
                  <span className="text-foreground font-semibold">{species.caviarColor}</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-foreground-muted">Редкость:</span>
                  <Badge variant="outline" className="text-xs">{species.rarity}</Badge>
                </div>
                <div className="pt-2">
                  <span className="text-foreground-muted block mb-1">Вкус:</span>
                  <p className="text-foreground text-sm">{species.taste}</p>
                </div>
                <div className="pt-2 text-xs text-foreground-muted italic">
                  {species.popularity}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison: Red vs Black Caviar */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Сравнение</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Красная икра vs Черная икра
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Два деликатеса — две философии. Что выбрать?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left p-4 text-gold font-display">Характеристика</th>
                  <th className="text-left p-4 text-ocean font-display">Красная икра</th>
                  <th className="text-left p-4 text-gold font-display">Черная икра</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.aspect} className={index % 2 === 0 ? 'bg-background/30' : ''}>
                    <td className="p-4 font-semibold text-foreground">{row.aspect}</td>
                    <td className="p-4 text-foreground-muted">{row.red}</td>
                    <td className="p-4 text-foreground-muted">{row.black}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-background/50 mt-4">
            <h4 className="font-display font-bold text-gold mb-3">Вывод</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground-muted">
              <div>
                <strong className="text-ocean block mb-2">Красная икра — лучший выбор для:</strong>
                <ul className="space-y-1">
                  <li>• Регулярного употребления</li>
                  <li>• Детского питания (доступнее)</li>
                  <li>• Большой компании</li>
                  <li>• Традиционных русских блюд</li>
                </ul>
              </div>
              <div>
                <strong className="text-gold block mb-2">Черная икра — лучший выбор для:</strong>
                <ul className="space-y-1">
                  <li>• Особых случаев и праздников</li>
                  <li>• Гурманов и ценителей</li>
                  <li>• Премиальных подарков</li>
                  <li>• Haute cuisine</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Health Benefits for Children */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="ocean" className="mb-4">Польза для здоровья</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Почему черная икра полезна для детей
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Один из самых питательных продуктов на планете для растущего организма
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
            Рекомендации педиатров для черной икры
          </h3>
          <div className="space-y-3 text-foreground-muted">
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>С какого возраста:</strong> С 5 лет (позже красной из-за более высокой концентрации соли и жира)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Частота употребления:</strong> 1-2 раза в неделю, не более 20-30 г за раз (меньше чем красной)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Первое знакомство:</strong> Начинать с 0.5 чайной ложки, следить за реакцией организма</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold">✓</span>
              <p><strong>Качество превыше всего:</strong> Только аквакультурная икра с сертификатом ГОСТ, никакого браконьерства</p>
            </div>
            <div className="flex gap-3">
              <span className="text-ocean font-bold">⚠</span>
              <p><strong>Противопоказания:</strong> Болезни почек, отёки, гипертония, индивидуальная непереносимость</p>
            </div>
            <div className="flex gap-3">
              <span className="text-ocean font-bold">💡</span>
              <p><strong>Совет:</strong> Из-за высокой цены черной икры для детского питания разумнее использовать красную икру кеты</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Consumption Tips */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Гастрономия</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Как правильно употреблять черную икру
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Ритуалы и традиции подачи царского деликатеса
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
          <h3 className="text-2xl font-display font-bold text-gold mb-4 flex items-center gap-3">
            <Crown className="w-8 h-8 text-gold" />
            Правила этикета черной икры
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-foreground-muted">
            <div>
              <h4 className="text-ocean font-semibold mb-2">Хранение и подача</h4>
              <ul className="space-y-1 text-sm">
                <li>• Хранить при -2 до -4°C</li>
                <li>• Открытую банку съесть в течение 24 часов</li>
                <li>• Подавать в икорнице на колотом льду</li>
                <li>• Идеальная температура подачи: 0°C</li>
              </ul>
            </div>
            <div>
              <h4 className="text-ocean font-semibold mb-2">Сервировка</h4>
              <ul className="space-y-1 text-sm">
                <li>• Только перламутровая или золотая ложка</li>
                <li>• Металл портит вкус икры</li>
                <li>• Шампанское брют или замороженная водка</li>
                <li>• Минимум дополнений — вкус икры главный</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Image */}
      <section className="content-container py-20 bg-gradient-to-b from-background to-background/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[500px]"
        >
          <img
            src={assortmentImages[1].urlLarge}
            alt="Черная икра премиум качества"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <Badge variant="gold" className="mb-4">Для ценителей</Badge>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-gold mb-4">
              Наша специализация — красная икра кеты
            </h3>
            <p className="text-foreground-muted mb-6 max-w-2xl">
              Хотя черная икра — символ роскоши, наша миссия — сделать премиальную икру кеты
              доступной для каждой семьи. Качество класса люкс по разумной цене.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="premium" size="lg">
                <Link to="/caviar">Наша красная икра</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/salmon-info">Узнать о лососевых</Link>
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
          <Award className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Откройте для себя мир икры
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Посетите наш завод и узнайте, как выращивают кету, производят икру и поддерживают
            экосистему Сахалина. Экскурсия включает дегустацию свежей икры!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/hatchery-tour">Забронировать экскурсию</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/science">Наука аквакультуры</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
