import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Gift, Fish } from 'lucide-react';

export default function HatcheryTour() {
  const packages = [
    {
      name: 'Family',
      price: '₽ 5,000',
      duration: '2 hours',
      people: '2-4',
      features: ['Guided tour', 'Feed the fish', 'Caviar tasting', 'Gift jar'],
    },
    {
      name: 'Premium',
      price: '₽ 10,000',
      duration: '3 hours',
      people: '2-6',
      features: ['Extended tour', 'Private guide', 'Fishing session', 'Premium gift'],
      highlighted: true,
    },
    {
      name: 'Corporate',
      price: 'Custom',
      duration: 'Flexible',
      people: '10+',
      features: ['Team building', 'Custom program', 'Catering available', 'Bulk gifts'],
    },
  ];

  return (
    <>
      <Seo
        title="Hatchery Tour"
        description="Experience salmon breeding up close. Family-friendly tours with caviar tasting and gift jars. Book your visit to Royal Keta hatchery."
        path="/hatchery-tour"
        ogImage="/og/hatchery-tour.svg"
      />

      <Hero
        subtitle="Experience the Science"
        title="Hatchery Family Tours"
        description="Feed the fish, explore the facilities, taste premium caviar. An educational adventure for the whole family."
        primaryCta={{ text: 'Book Now', href: '#booking' }}
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">What to Expect</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Tour Highlights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Fish, title: 'Feed the Fish', desc: 'Interact with salmon at all life stages' },
            { icon: Users, title: 'Expert Guide', desc: 'Learn from our aquaculture scientists' },
            { icon: Gift, title: 'Caviar Gift', desc: 'Take home premium red caviar' },
            { icon: Clock, title: 'Flexible Times', desc: 'Morning and afternoon slots' },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="h-10 w-10 text-gold mb-3" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-gold mb-8 text-center">
            Choose Your Package
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={pkg.highlighted ? 'ring-2 ring-gold' : ''}>
                <CardHeader>
                  {pkg.highlighted && <Badge variant="gold" className="w-fit mb-2">Most Popular</Badge>}
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-gold my-4">{pkg.price}</div>
                  <CardDescription>
                    {pkg.duration} • {pkg.people} people
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.highlighted ? 'premium' : 'default'}>
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="booking" className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Ready to Visit?
          </h3>
          <p className="text-foreground-muted mb-6">
            Contact us to book your tour or request a custom corporate package
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:hello@royalketa.com">Email Us</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://t.me/royalketa" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
