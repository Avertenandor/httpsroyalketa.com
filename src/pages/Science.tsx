import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Science() {
  return (
    <>
      <Seo
        title="Our Science"
        description="Advanced aquaculture methodology: from roe selection to smolt release. Learn about our sustainable salmon breeding practices."
        path="/science"
        ogImage="/og/science.jpg"
      />

      <Hero
        subtitle="Research & Innovation"
        title="The Science Behind Excellence"
        description="Our methodology combines traditional knowledge with modern aquaculture techniques"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="ocean" className="mb-4">The Process</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Breeding Cycle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stage: '1. Roe Selection', desc: 'Careful selection of premium genetic stock' },
            { stage: '2. Incubation', desc: 'Controlled temperature and oxygen levels' },
            { stage: '3. Feeding', desc: 'Nutritionally optimized diet for growth' },
            { stage: '4. Release', desc: 'Healthy smolts released into natural waters' },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="text-4xl font-bold text-gold mb-2">{idx + 1}</div>
                <CardTitle>{item.stage}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 premium-card p-8">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">Our Team</h3>
          <p className="text-foreground-muted">
            Led by experienced aquaculture scientists and fishery specialists with decades of combined expertise in salmon breeding and conservation.
          </p>
        </div>
      </section>
    </>
  );
}
