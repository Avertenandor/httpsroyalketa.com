import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, FileCheck } from 'lucide-react';

export default function Tokenization() {
  const benefits = [
    {
      icon: Shield,
      title: 'Blockchain Transparency',
      description: 'Every investment tracked on-chain with immutable records and real-time reporting',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Returns',
      description: 'From caviar dividends to crypto payments, multiple return options for different investor profiles',
    },
    {
      icon: Users,
      title: 'Fractional Ownership',
      description: 'Lower barriers to entry through tokenized shares in hatchery operations',
    },
    {
      icon: FileCheck,
      title: 'Full Compliance',
      description: 'KYC/AML verification, regulatory compliance, and legal framework for all investors',
    },
  ];

  const franchiseFeatures = [
    'Complete operational playbook',
    'Breeding stock from Royal Keta genetics',
    'Technology and equipment sourcing',
    'Training for aquaculture team',
    'Marketing and branding support',
    'Ongoing technical consultation',
  ];

  return (
    <>
      <Seo
        title="Tokenization & Franchise"
        description="Royal Keta tokenized investment platform and franchise opportunities. Blockchain-verified returns and scalable aquaculture business model."
        path="/tokenization"
        ogImage="/og/tokenization.svg"
      />

      <Hero
        subtitle="From Rabbit to Fish"
        title="Tokenization & Franchise"
        description="Building the future of sustainable aquaculture through blockchain technology and proven business models"
        primaryCta={{ text: 'Request Whitepaper', href: '#contact' }}
        secondaryCta={{ text: 'View Investment Models', href: '/investment' }}
      />

      <section className="content-container py-20">
        {/* Origin Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <Badge variant="gold" className="mb-4">The Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-6">
            From Rabbit Breeding to Fish Farming
          </h2>
          <div className="space-y-4 text-foreground-muted">
            <p>
              Royal Keta's tokenization model emerged from successful experience in rabbit breeding operations.
              We recognized that the same principles of transparent investment, biological asset management,
              and structured returns could revolutionize aquaculture.
            </p>
            <p>
              By applying blockchain technology to salmon breeding, we've created an investment vehicle that
              combines tangible biological assets with modern financial infrastructure. Investors can track
              their holdings in real-time, receive dividends in caviar or cryptocurrency, and participate in
              a truly sustainable food production system.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="ocean" className="mb-4">Why Tokenization</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              The Advantages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-gold mb-3" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20 premium-card p-8 md:p-12">
          <Badge variant="gold" className="mb-4">The Mechanism</Badge>
          <h2 className="text-3xl font-display font-bold text-gold mb-8">
            How Tokenization Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold mb-3">1</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Targeted Investment
              </h3>
              <p className="text-foreground-muted">
                Funds are allocated to specific assets: land acquisition, breeding equipment,
                staff training, or infrastructure development.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-3">2</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                On-Chain Tracking
              </h3>
              <p className="text-foreground-muted">
                Every investment creates a blockchain token representing fractional ownership.
                Track your holdings and returns in real-time.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-3">3</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Flexible Returns
              </h3>
              <p className="text-foreground-muted">
                Choose your return structure: caviar dividends, cryptocurrency payments,
                or hybrid models combining both.
              </p>
            </div>
          </div>
        </div>

        {/* Franchise Opportunity */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="ocean" className="mb-4">Expansion Model</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              Royal Keta Franchise
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Replicate our success with comprehensive support and proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-display font-bold text-gold mb-6">
                What You Receive
              </h3>
              <ul className="space-y-3">
                {franchiseFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-display font-bold text-gold mb-6">
                Partner Requirements
              </h3>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  <strong className="text-foreground">Minimum Investment:</strong> ₽10,000,000
                </p>
                <p>
                  <strong className="text-foreground">Location:</strong> Access to clean water source
                  and suitable land for hatchery construction
                </p>
                <p>
                  <strong className="text-foreground">Commitment:</strong> 3-year minimum partnership
                  with performance KPIs
                </p>
                <p>
                  <strong className="text-foreground">Team:</strong> Willingness to hire and train
                  local aquaculture specialists
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="contact" className="premium-card p-8 md:p-12 text-center bg-gradient-to-br from-gold/10 to-ocean/10">
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-gold mb-6">
            Ready to Participate?
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Whether you're interested in tokenized investment or franchise partnership,
            our team is ready to provide detailed information and documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:invest@royalketa.com">Request Franchise Package</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/investment">View Investment Models</Link>
            </Button>
          </div>
          <p className="text-sm text-foreground-muted mt-6">
            All investments subject to KYC/AML verification and accredited investor status
          </p>
        </div>
      </section>
    </>
  );
}
