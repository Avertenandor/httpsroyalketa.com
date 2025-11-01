import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

export default function Caviar() {
  const products = [
    {
      name: 'Red Caviar - Classic',
      weight: '250g',
      description: 'Premium Pacific salmon roe, delicate flavor',
    },
    {
      name: 'Red Caviar - Gift Set',
      weight: '500g',
      description: 'Luxury packaging, perfect for gifting',
    },
    {
      name: 'Tasting Set',
      weight: '3x100g',
      description: 'Experience the full flavor spectrum',
    },
  ];

  return (
    <>
      <Seo
        title="Premium Caviar"
        description="Royal Keta premium red caviar. Sustainably produced, exquisite taste. Available for wholesale orders."
        path="/caviar"
        ogImage="/og/caviar.jpg"
      />

      <Hero
        subtitle="Keta Royal Caviar"
        title="Excellence in Every Jar"
        description="Premium red caviar from sustainably bred Pacific salmon"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Caviar Collection
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <Award className="h-10 w-10 text-gold mb-3" />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.weight}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground-muted">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Wholesale Inquiries
          </h3>
          <p className="text-foreground-muted mb-6">
            Contact us for wholesale pricing and availability
          </p>
          <a
            href="mailto:hello@royalketa.com"
            className="text-gold hover:text-gold-light transition-colors"
          >
            hello@royalketa.com
          </a>
        </div>
      </section>
    </>
  );
}
