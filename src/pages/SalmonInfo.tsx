import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fish, MapPin, Clock, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { salmonSpecies } from '@/config/fishSpecies';
import { SPECIES } from '@/data/species';
import { CAVIAR } from '@/data/caviar.images';

export default function SalmonInfo() {
  return (
    <>
      <Seo
        title="Лососевые рыбы и красная икра | Виды, польза, применение"
        description="Полное руководство по семейству лососевых: кета, горбуша, нерка, чавыча, кижуч, сима, сёмга. Виды красной икры, отличия, польза для детей и способы употребления."
        path="/salmon-info"
        ogImage="/og/salmon.jpg"
      />
      
      <Hero
        subtitle="Энциклопедия"
        title="Лососевые рыбы и красная икра"
        description="Всё о семействе тихоокеанских лососей, видах красной икры, их отличиях и пользе для здоровья"
        backgroundImage="/img/species/salmon/hero-salmon.webp"
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
            Лососевые — короли морей и рек
          </h2>
          <div className="glass-card p-8 space-y-4 text-foreground-muted leading-relaxed">
            <p>
              <strong className="text-gold">Семейство Лососевые (Salmonidae)</strong> — одно из самых ценных
              семейств рыб для человека. Лососи обитают в холодных водах Северного полушария и являются
              важнейшими промысловыми видами. Красная икра лососевых — один из самых популярных деликатесов
              в мире.
            </p>
            <p>
              Различают <strong>тихоокеанских лососей</strong> (род Oncorhynchus) — кета, горбуша, нерка,
              чавыча, кижуч, сима — и <strong>атлантического лосося</strong> (род Salmo) — сёмга, форель.
              Все они — <strong>анадромные рыбы</strong>: рождаются в пресной воде, растут в море,
              возвращаются в реки для нереста.
            </p>
            <p>
              <strong className="text-gold">Красная икра</strong> — это икра лососевых рыб. Самая крупная
              и ценная — икра кеты и чавычи. Каждый вид имеет уникальный вкус, размер икринок и пищевую
              ценность.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Species Cards Grid */}
      <section className="content-container py-20 bg-gradient-to-b from-background to-background/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Виды лососевых</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Все виды лососевых рыб
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Нажмите на карточку, чтобы узнать подробную информацию о каждом виде
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salmonSpecies.map((species, index) => (
            <motion.div
              key={species.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={species.route}>
                <Card className="premium-card h-full hover:shadow-glow-gold transition-all duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={
                        species.id === 'sima' ? SPECIES.sima.card :
                        species.id === 'semga' ? SPECIES.semga.card :
                        species.id === 'keta' ? SPECIES.keta.card :
                        species.id === 'nerka' ? SPECIES.nerka.card :
                        species.id === 'gorbusha' ? SPECIES.gorbusha.card :
                        species.id === 'chavycha' ? SPECIES.chavycha.card :
                        species.id === 'kizhuch' ? SPECIES.kizhuch.card :
                        species.image
                      }
                      alt={
                        species.id === 'sima' ? SPECIES.sima.altCard :
                        species.id === 'semga' ? SPECIES.semga.altCard :
                        species.id === 'keta' ? SPECIES.keta.altCard :
                        species.id === 'nerka' ? SPECIES.nerka.altCard :
                        species.id === 'gorbusha' ? SPECIES.gorbusha.altCard :
                        species.id === 'chavycha' ? SPECIES.chavycha.altCard :
                        species.id === 'kizhuch' ? SPECIES.kizhuch.altCard :
                        `${species.commonName} (${species.scientificName})`
                      }
                      className="w-full h-48 sm:h-52 object-cover object-[50%_45%] group-hover:scale-110 transition-transform duration-300 rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={species.status === 'common' ? 'ocean' : species.status === 'rare' ? 'gold' : 'destructive'}
                        className="text-xs"
                      >
                        {species.status === 'common' ? 'Обычный' : species.status === 'rare' ? 'Редкий' : 'Под угрозой'}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-gold mb-2 group-hover:text-gold-light transition-colors">
                      {species.commonName}
                    </CardTitle>
                    <p className="text-sm italic text-foreground-muted mb-2">{species.scientificName}</p>
                    <CardDescription className="text-sm">{species.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted line-clamp-2">{species.habitat}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-foreground-muted">
                      <div className="flex items-center gap-1">
                        <Fish className="w-3 h-3 text-gold" />
                        <span>{species.maxSize}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-gold" />
                        <span>{species.maxWeight}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold" />
                        <span>{species.lifespan}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/30">
                      <Button variant="ghost" size="sm" className="w-full group-hover:text-gold">
                        Узнать больше →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
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
            Жизненный цикл лосося
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Нерест',
              description: 'Взрослые особи возвращаются в пресноводные реки для нереста. Самки откладывают икру в гнёзда (redds), которые они создают в гравийном дне.',
              icon: '🐟',
              image: '/img/species/salmon/icon-salmon.webp',
            },
            {
              title: 'Икра',
              description: 'Икринки развиваются в течение 2-5 месяцев. В этот период критически важны температура воды и уровень кислорода.',
              icon: '🥚',
              image: '/img/species/salmon/icon-ikura.webp',
            },
            {
              title: 'Мальки',
              description: 'После вылупления мальки остаются в пресной воде от нескольких недель до 2 лет, питаясь планктоном и мелкими водными организмами.',
              icon: '🐠',
            },
            {
              title: 'Смолты',
              description: 'Молодые лососи адаптируются к морской воде и мигрируют в океан. Это критический переходный период.',
              icon: '🌊',
            },
            {
              title: 'Взрослые особи',
              description: 'В океане лососи активно питаются и растут. Через 2-7 лет они возвращаются в родные реки для нереста.',
              icon: '🐟',
              image: '/img/species/salmon/icon-salmon.webp',
            },
            {
              title: 'Возвращение',
              description: 'Взрослые лососи используют магнитное поле и химические сигналы для поиска родной реки. Проходят тысячи километров.',
              icon: '🏞️',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-10 h-10 rounded-md object-cover mb-4"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="text-4xl mb-4">{item.icon}</div>
                  )}
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Badge variant="gold" className="mb-4">Наш подход</Badge>
              <h3 className="text-2xl font-display font-bold text-gold mb-4">
                Королевская Кета (Oncorhynchus keta)
              </h3>
              <p className="text-foreground-muted mb-4">
                В Royal Keta мы специализируемся на выращивании премиальной кеты. Это один из самых
                крупных видов тихоокеанского лосося с высоким содержанием жира и белка.
              </p>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Контролируемые условия выращивания</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Научно обоснованное питание</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Минимальное вмешательство в естественные процессы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Устойчивое разведение для сохранения вида</span>
                </li>
              </ul>
            </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={CAVIAR.red.recipe}
                    alt={CAVIAR.red.alt.recipe}
                    className="w-full h-64 object-cover object-[50%_45%]"
                    loading="lazy"
                    decoding="async"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <Badge variant="ocean" className="mb-4">Экологическая ответственность</Badge>
                <h3 className="text-2xl font-display font-bold text-gold mb-4">
                  Сохранение природы
                </h3>
                <p className="text-foreground-muted mb-4">
                  Мы понимаем важность сохранения природных популяций лосося. Наша деятельность направлена
                  на поддержание баланса экосистемы и обеспечение устойчивого будущего для этого
                  удивительного вида.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Устойчивое разведение</p>
                      <p className="text-sm text-foreground-muted">
                        Мы не истощаем природные ресурсы, выращивая рыбу в контролируемых условиях
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Защита экосистемы</p>
                      <p className="text-sm text-foreground-muted">
                        Наш подход минимизирует воздействие на природные популяции лососей
                      </p>
                    </div>
                  </div>
                </div>
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
            Изучите мир лососевых
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Посетите наш завод и узнайте, как выращивают лососей, производят икру и поддерживают
            экосистему Сахалина. Экскурсия включает дегустацию свежей икры!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/hatchery-tour">Забронировать экскурсию</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/caviar">Наша красная икра</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
