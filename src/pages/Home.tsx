import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { ShareButtons } from '@/components/ShareButtons';
import { ParticlesCanvas } from '@/components/ParticlesCanvas';
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
      description: 'Передовые методы аквакультуры, основанные на исследованиях',
      href: '/science',
    },
    {
      icon: Fish,
      title: 'Семейные Туры',
      description: 'Образовательные программы для всех возрастов',
      href: '/hatchery-tour',
    },
    {
      icon: Award,
      title: 'Премиальная Икра',
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
      {/* Floating caviar roe particles effect */}
      <ParticlesCanvas count={40} />

      <Seo
        title="От Икры до Королевства"
        description="Премиальное лососёвое хозяйство и производство икры на Сахалине. Семейные экскурсии, вкус совершенства, инвестиции в будущее."
        path="/"
        ogImage="/og/home.svg"
        jsonLd={organizationJsonLd}
      />

      <Hero
        subtitle="От Икры до Королевства"
        title="Где Наука Встречается с Совершенством"
        description="Откройте для себя искусство разведения лосося на острове Сахалин. Семейные экскурсии, премиальная икра и инвестиционные возможности в устойчивой аквакультуре."
        primaryCta={{ text: 'Записаться на Семейный Тур', href: '/hatchery-tour' }}
        secondaryCta={{ text: 'Инвесторам', href: '/investment' }}
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
          <Badge variant="gold" className="mb-4">Наша Основа</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Три Столпа Совершенства
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Роял Кета сочетает передовую науку, образовательные программы и премиальную продукцию
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
                    <Link to={pillar.href}>Узнать Больше →</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Breeding Cycle */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 text-center"
        >
          <Badge variant="ocean" className="mb-4">Жизненный Цикл</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Икра → Мальки → Смолты → Море
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Наблюдайте полный жизненный цикл тихоокеанского лосося. От тщательного отбора икры до выпуска здоровых смолтов в океан.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/science">Изучить Нашу Науку</Link>
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
            Икра в Подарок Каждому Гостю
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Каждый семейный тур включает в себя подарочную баночку нашей премиальной красной икры. Почувствуйте разницу, которую создаёт устойчивое разведение.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/hatchery-tour">Забронировать Экскурсию</Link>
          </Button>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Investment Calculator */}
      <InvestmentCalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* Share Section */}
      <section className="content-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <ShareButtons title="Роял Кета — От Икры до Королевства" />
        </motion.div>
      </section>
    </>
  );
}