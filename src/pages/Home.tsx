import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { ImageShowcase } from '@/components/ImageShowcase';
import { ProcessShowcase } from '@/components/ProcessShowcase';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { Partners } from '@/components/Partners';
import { IndustryPartners } from '@/components/IndustryPartners';
import { ShareButtons } from '@/components/ShareButtons';
import { MercuryBadge } from '@/components/MercuryBadge';
import { organizationJsonLd } from '@/seo/ld/organization';
import { heroBackgrounds } from '@/config/images';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Fish, Microscope, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const pillars = [
    {
      icon: Microscope,
      title: 'Наука',
      description: 'Передовые технологии аквакультуры, подтверждённые исследованиями',
      href: '/science',
    },
    {
      icon: Fish,
      title: 'Семейные туры',
      description: 'Образовательный опыт для всех возрастов',
      href: '/hatchery-tour',
    },
    {
      icon: Award,
      title: 'Премиальная икра',
      description: 'Совершенство в каждой баночке',
      href: '/caviar',
    },
    {
      icon: TrendingUp,
      title: 'Инвестиции',
      description: 'Прозрачные токенизированные возможности',
      href: '/investment',
    },
  ];

  return (
    <>
      <Seo
        title="От икринки к королевской"
        description="Премиальный рыбоводный завод и производство икры на острове Сахалин. Семейные туры, совершенство вкуса, инвестиции в будущее."
        path="/"
        ogImage="/og/home.png"
        jsonLd={organizationJsonLd}
      />

              <Hero
                subtitle="От икринки к королевской"
                title="Где наука встречается с совершенством"
                description="Познакомьтесь с искусством разведения лосося на острове Сахалин. Семейные туры, премиальная икра и инвестиционные возможности в устойчивой аквакультуре."
                primaryCta={{ text: 'Забронировать семейный тур', href: '/hatchery-tour' }}
                secondaryCta={{ text: 'Презентация для инвесторов', href: '/investment' }}
                backgroundImage={heroBackgrounds[1].urlLarge}
                backgroundOverlay="dark"
              />

              {/* Delivery Badge */}
              <section className="content-container py-6 sm:py-8">
                <div className="text-center">
                  <a
                    href="/delivery"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0,194,255,.15), rgba(0,255,163,.15))',
                      border: '1px solid rgba(255,255,255,.1)',
                    }}
                  >
                    <span>🚚</span>
                    <span>Доставляем по всей РФ и в Беларусь</span>
                  </a>
                </div>
              </section>

      {/* Three Pillars */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="gold" className="mb-3 sm:mb-4">Наш фундамент</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
            Три столпа совершенства
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
            ROYAL KETA сочетает передовую науку, образовательный опыт и премиальные продукты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-tilt hover:shadow-glow-gold cursor-pointer">
                <CardHeader>
                  <pillar.icon className="h-12 w-12 text-gold mb-4" />
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to={pillar.href}>Узнать больше →</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mercury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <MercuryBadge />
        </motion.div>
      </section>

      {/* Image Showcase */}
      <ImageShowcase />

      {/* Region Section */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="ocean" className="mb-3 sm:mb-4">Наш остров</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">Сахалин и Туризм</h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto">Окраина океана, доброжелательные люди и маршруты на любой вкус.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Сахалин — о крае</CardTitle>
              <CardDescription>Море, тайга и уважение к гостям материка</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full"><Link to="/sakhalin">Читать о Сахалине →</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Туризм на Сахалине</CardTitle>
              <CardDescription>Проверенные провайдеры и сезонные идеи</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full"><Link to="/tourism">Открыть подборку туров →</Link></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Showcase */}
      <ProcessShowcase />

      {/* Breeding Cycle */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 text-center"
        >
          <Badge variant="ocean" className="mb-4">Жизненный цикл</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Икринка → Малёк → Смолт → Море
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Понаблюдайте за полным жизненным циклом тихоокеанского лосося. От тщательного отбора икры до выпуска здоровых смолтов в океан.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/science">Изучите нашу науку</Link>
          </Button>
        </motion.div>
      </section>

      {/* Gift Caviar CTA */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 text-center bg-gradient-to-br from-gold/10 to-ocean/10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-gold mb-4">
            Подарок икры каждому гостю
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Каждый семейный тур включает в себя баночку нашей премиальной красной икры в подарок. Почувствуйте разницу, которую создаёт устойчивое разведение.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/hatchery-tour">Забронируйте свой визит</Link>
          </Button>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Investment Calculator */}
      <InvestmentCalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />

      {/* Industry Partners Section */}
      <IndustryPartners />

      {/* Share Section */}
      <section className="content-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <ShareButtons title="ROYAL KETA — От икринки к королевской" />
        </motion.div>
      </section>
    </>
  );
}
