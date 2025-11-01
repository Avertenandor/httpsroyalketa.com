import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    {
      name: 'Family',
      price: '₽ 5,000',
      duration: '2 hours',
      people: '2-4 people',
      features: [
        { name: 'Guided hatchery tour', included: true },
        { name: 'Feed the fish experience', included: true },
        { name: 'Caviar tasting (50g)', included: true },
        { name: 'Gift jar (100g)', included: true },
        { name: 'Educational materials', included: true },
        { name: 'Private guide', included: false },
        { name: 'Fishing session', included: false },
        { name: 'Premium gift package', included: false },
        { name: 'Lunch included', included: false },
        { name: 'Photography service', included: false },
      ],
    },
    {
      name: 'Premium',
      price: '₽ 10,000',
      duration: '3-4 hours',
      people: '2-6 people',
      featured: true,
      features: [
        { name: 'Guided hatchery tour', included: true },
        { name: 'Feed the fish experience', included: true },
        { name: 'Caviar tasting (100g)', included: true },
        { name: 'Gift jar (250g)', included: true },
        { name: 'Educational materials', included: true },
        { name: 'Private guide', included: true },
        { name: 'Fishing session (1 hour)', included: true },
        { name: 'Premium gift package', included: true },
        { name: 'Lunch included', included: true },
        { name: 'Photography service', included: false },
      ],
    },
    {
      name: 'Corporate',
      price: 'Custom',
      duration: 'Flexible',
      people: '10+ people',
      features: [
        { name: 'Guided hatchery tour', included: true },
        { name: 'Feed the fish experience', included: true },
        { name: 'Caviar tasting (unlimited)', included: true },
        { name: 'Gift jar (500g each)', included: true },
        { name: 'Educational materials', included: true },
        { name: 'Private guide', included: true },
        { name: 'Fishing session (flexible)', included: true },
        { name: 'Premium gift package', included: true },
        { name: 'Lunch & catering', included: true },
        { name: 'Photography service', included: true },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Pricing"
        description="Royal Keta tour packages and pricing. Family, Premium, and Corporate options. Compare features and book your visit."
        path="/pricing"
        ogImage="/og/pricing.jpg"
      />

      <Hero
        subtitle="Tour Packages"
        title="Choose Your Experience"
        description="Transparent pricing for unforgettable hatchery visits"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Compare Packages</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            All-Inclusive Packages
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Every package includes caviar tasting and gift jars. No hidden fees.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full premium-card">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 font-display text-xl text-gold">Features</th>
                {packages.map((pkg) => (
                  <th key={pkg.name} className="p-6">
                    <div className="text-center">
                      {pkg.featured && (
                        <Badge variant="gold" className="mb-2">Most Popular</Badge>
                      )}
                      <div className="text-2xl font-display font-bold text-gold mb-1">
                        {pkg.name}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-foreground-muted">
                        {pkg.duration}
                      </div>
                      <div className="text-sm text-foreground-muted mb-4">
                        {pkg.people}
                      </div>
                      <Button
                        asChild
                        variant={pkg.featured ? 'premium' : 'default'}
                        className="w-full"
                      >
                        <Link to="/hatchery-tour">Select</Link>
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packages[0].features.map((_, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-foreground">
                    {packages[0].features[idx].name}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="p-4 text-center">
                      {pkg.features[idx].included ? (
                        <Check className="h-5 w-5 text-gold mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-foreground-muted mx-auto opacity-30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="premium-card p-6">
              {pkg.featured && (
                <Badge variant="gold" className="mb-3">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-display font-bold text-gold mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-foreground mb-2">
                {pkg.price}
              </div>
              <div className="text-sm text-foreground-muted mb-1">
                {pkg.duration}
              </div>
              <div className="text-sm text-foreground-muted mb-6">
                {pkg.people}
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-foreground-muted opacity-30 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-foreground-muted line-through'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={pkg.featured ? 'premium' : 'default'}
                className="w-full"
              >
                <Link to="/hatchery-tour">Select Package</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Custom Corporate Packages
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Planning a team building event or corporate retreat? We offer fully customizable packages
            for groups of 10 or more, including catering, extended fishing sessions, and exclusive access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:hello@royalketa.com">Request Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
