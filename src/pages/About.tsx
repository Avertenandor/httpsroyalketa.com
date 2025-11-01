import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Royal Keta: pioneering sustainable salmon breeding on Sakhalin Island. Our mission, team, and partners."
        path="/about"
        ogImage="/og/about.svg"
      />

      <Hero
        subtitle="Our Story"
        title="Excellence Through Innovation"
        description="Combining traditional knowledge with modern technology to create sustainable aquaculture"
      />

      <section className="content-container py-20">
        <div className="max-w-3xl mx-auto prose-content">
          <Badge variant="gold" className="mb-6">Our Mission</Badge>
          <h2 className="text-3xl font-display font-bold text-gold mb-6">
            Sustainable Salmon Breeding
          </h2>
          <p className="text-foreground-muted mb-6">
            Royal Keta was founded with a vision: to create the most sustainable and scientifically
            advanced salmon hatchery in Russia. Located on Sakhalin Island, we combine traditional
            fishing knowledge with cutting-edge aquaculture techniques.
          </p>
          <p className="text-foreground-muted mb-6">
            Our team of experienced scientists and fishery specialists works tirelessly to ensure
            the health and quality of our salmon stocks, while maintaining the highest standards of
            environmental responsibility.
          </p>

          <div className="mt-12 premium-card p-8">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">Our Values</h3>
            <ul className="space-y-3">
              {[
                'Scientific Excellence',
                'Environmental Sustainability',
                'Transparency',
                'Community Education',
                'Quality Products',
              ].map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
