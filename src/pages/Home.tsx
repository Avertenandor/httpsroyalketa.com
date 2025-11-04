import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { ImageShowcase } from '@/components/ImageShowcase';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { Partners } from '@/components/Partners';
import { IndustryPartners } from '@/components/IndustryPartners';
import { ShareButtons } from '@/components/ShareButtons';
import { organizationJsonLd } from '@/seo/ld/organization';
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
        ogImage="/og/home.svg"
        jsonLd={organizationJsonLd}
      />

      <Hero
        subtitle="От икринки к королевской"
        title="Где наука встречается с совершенством"
        description="Познакомьтесь с искусством разведения лосося на острове Сахалин. Семейные туры, премиальная икра и инвестиционные возможности в устойчивой аквакультуре."
        primaryCta={{ text: 'Забронировать семейный тур', href: '/hatchery-tour' }}
        secondaryCta={{ text: 'Презентация для инвесторов', href: '/investment' }}
      />

      {/* Three Pillars */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Наш фундамент</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Три столпа совершенства
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            ROYAL KETA сочетает передовую науку, образовательный опыт и премиальные продукты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* Image Showcase */}
      <ImageShowcase />

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
