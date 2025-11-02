import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
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
      title: 'Science',
      description: 'Advanced aquaculture techniques backed by research',
      href: '/science',
    },
    {
      icon: Fish,
      title: 'Family Tours',
      description: 'Educational experiences for all ages',
      href: '/hatchery-tour',
    },
    {
      icon: Award,
      title: 'Premium Caviar',
      description: 'Excellence in every jar',
      href: '/caviar',
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      description: 'Transparent tokenized opportunities',
      href: '/investment',
    },
  ];

  return (
    <>
      <Seo
        title="From Roe to Royal"
        description="Premium salmon hatchery and caviar production on Sakhalin Island. Experience family tours, taste excellence, invest in the future."
        path="/"
        ogImage="/og/home.svg"
        jsonLd={organizationJsonLd}
      />

      <Hero
        subtitle="From Roe to Royal"
        title="Where Science Meets Excellence"
        description="Experience the art of salmon breeding on Sakhalin Island. Family tours, premium caviar, and investment opportunities in sustainable aquaculture."
        primaryCta={{ text: 'Book Family Tour', href: '/hatchery-tour' }}
        secondaryCta={{ text: 'Investor Deck', href: '/investment' }}
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
          <Badge variant="gold" className="mb-4">Our Foundation</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Three Pillars of Excellence
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Royal Keta combines cutting-edge science, educational experiences, and premium products
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
                    <Link to={pillar.href}>Learn More →</Link>
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
          <Badge variant="ocean" className="mb-4">The Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Roe → Fry → Smolt → Sea
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Witness the complete life cycle of Pacific salmon. From careful selection of roe to the release of healthy smolts into the ocean.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/science">Explore Our Science</Link>
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
            Gift Caviar for Every Guest
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Every family tour includes a complimentary jar of our premium red caviar. Taste the difference that sustainable breeding makes.
          </p>
          <Button asChild variant="premium" size="lg">
            <Link to="/hatchery-tour">Book Your Experience</Link>
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
          <ShareButtons title="Royal Keta — From Roe to Royal" />
        </motion.div>
      </section>
    </>
  );
}
