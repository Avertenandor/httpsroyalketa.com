import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Investment() {
  const models = [
    {
      name: 'Model A',
      title: 'Caviar Dividends',
      description: 'Receive premium caviar as dividends while we hold your deposit',
      features: ['Low entry barrier', 'Physical product returns', 'Flexible terms'],
    },
    {
      name: 'Model B',
      title: 'Caviar + Crypto',
      description: 'Hybrid model combining caviar dividends with cryptocurrency returns',
      features: ['Diversified returns', 'Blockchain verified', 'Quarterly payouts'],
    },
    {
      name: 'Model C',
      title: 'Premium Returns',
      description: 'Larger investment with sliding dividend schedule and bonus caviar',
      features: ['Higher ROI', 'Priority access', 'Exclusive perks'],
    },
    {
      name: 'Model D',
      title: 'Full Spectrum',
      description: 'Complete package with optional sturgeon investment and automation',
      features: ['Maximum flexibility', 'Advanced options', 'Custom terms'],
    },
  ];

  return (
    <>
      <Seo
        title="Investment Opportunities"
        description="Transparent tokenized investment in sustainable aquaculture. Four models from caviar dividends to full spectrum returns."
        path="/investment"
        ogImage="/og/investment.jpg"
      />

      <Hero
        subtitle="Invest in the Future"
        title="Tokenized Aquaculture Investment"
        description="Transparent, blockchain-verified investment opportunities in sustainable salmon breeding"
        primaryCta={{ text: 'Request Info', href: '#contact' }}
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Investment Models</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Choose Your Path
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {models.map((model) => (
            <Card key={model.name}>
              <CardHeader>
                <Badge variant="ocean" className="w-fit mb-2">{model.name}</Badge>
                <CardTitle>{model.title}</CardTitle>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="contact" className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Ready to Invest?
          </h3>
          <p className="text-foreground-muted mb-6">
            Request detailed information about investment models and terms
          </p>
          <Button asChild variant="premium" size="lg">
            <a href="mailto:invest@royalketa.com">Contact Investment Team</a>
          </Button>
        </div>
      </section>
    </>
  );
}
