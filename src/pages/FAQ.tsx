import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqSections = [
    {
      category: 'Tours & Visits',
      questions: [
        {
          q: 'What should I wear for the hatchery tour?',
          a: 'Wear comfortable, weather-appropriate clothing and closed-toe shoes. We provide protective gear when necessary. During fishing sessions, waterproof boots are recommended.',
        },
        {
          q: 'Are children allowed on tours?',
          a: 'Absolutely! Our tours are family-friendly and educational for all ages. Children under 12 must be accompanied by an adult. We have special activities designed for young visitors.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 1-2 weeks in advance, especially during peak season (June-September). Corporate packages should be booked 3-4 weeks ahead.',
        },
        {
          q: 'What is included in the gift caviar jar?',
          a: 'Every guest receives a 100g jar of premium red caviar (Family package) or larger jars for Premium/Corporate packages. The caviar is freshly processed from our sustainable hatchery.',
        },
        {
          q: 'Can we fish and keep what we catch?',
          a: 'Fishing sessions are catch-and-release to maintain our sustainable breeding program. However, you will receive generous caviar gifts as part of your package.',
        },
      ],
    },
    {
      category: 'Caviar Products',
      questions: [
        {
          q: 'Do you ship caviar products?',
          a: 'Currently, we sell caviar primarily through our on-site store and wholesale partners. Shipping options are being developed. Contact us for wholesale inquiries.',
        },
        {
          q: 'What makes Royal Keta caviar premium?',
          a: 'Our caviar comes from sustainably bred Pacific salmon raised in pristine Sakhalin waters. We use advanced aquaculture techniques and strict quality control at every stage from roe to jar.',
        },
        {
          q: 'How should I store caviar?',
          a: 'Store unopened jars in the coldest part of your refrigerator (0-2°C). Once opened, consume within 3 days. Never freeze caviar as it damages the delicate roe structure.',
        },
      ],
    },
    {
      category: 'Investment Opportunities',
      questions: [
        {
          q: 'What are the minimum investment amounts?',
          a: 'Model A starts from ₽100,000, Model B from ₽500,000, Model C from ₽2,000,000, and Model D is customizable for larger investments. Contact our investment team for detailed terms.',
        },
        {
          q: 'How is the tokenization verified?',
          a: 'All investments are recorded on blockchain with transparent tracking. We provide regular reports on fish stocks, production, and returns. KYC/AML procedures are mandatory for all investors.',
        },
        {
          q: 'Can I visit the hatchery as an investor?',
          a: 'Yes! Investors receive priority access and exclusive tours. Larger investors (Models C/D) can schedule private consultations with our aquaculture team.',
        },
        {
          q: 'What are the risks?',
          a: 'Aquaculture investments carry natural risks including fish mortality, market price fluctuations, and seasonal variations. We maintain insurance and diversified operations to mitigate risks. See full disclosure in investment documentation.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          q: 'Where exactly is the hatchery located?',
          a: 'We are located in Nevelsky District, Sakhalin Oblast, Russia. Detailed directions are provided upon booking. The facility is approximately 2 hours from Yuzhno-Sakhalinsk.',
        },
        {
          q: 'Do you offer tours in English?',
          a: 'Tours are primarily conducted in Russian, but English-speaking guides can be arranged with advance notice (48 hours). Educational materials are available in both languages.',
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Cancellations made 7+ days before the tour receive a full refund. 3-6 days: 50% refund. Less than 3 days: no refund. Corporate packages have separate terms.',
        },
        {
          q: 'Is the hatchery open year-round?',
          a: 'Yes! While breeding cycles are seasonal, tours operate year-round. Different seasons offer unique educational experiences (spawning in fall, fry development in spring, release in summer).',
        },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="FAQ"
        description="Frequently asked questions about Royal Keta hatchery tours, caviar products, and investment opportunities. Get answers to all your questions."
        path="/faq"
        ogImage="/og/faq.svg"
      />

      <Hero
        subtitle="Help Center"
        title="Frequently Asked Questions"
        description="Everything you need to know about tours, caviar, and investments"
      />

      <section className="content-container py-20">
        <div className="max-w-4xl mx-auto">
          {faqSections.map((section, sectionIdx) => (
            <div key={section.category} className={sectionIdx > 0 ? 'mt-12' : ''}>
              <Badge variant="gold" className="mb-6">{section.category}</Badge>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${sectionIdx}-${idx}`}
                    className="premium-card px-6"
                  >
                    <AccordionTrigger className="text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-16 premium-card p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-foreground-muted mb-6">
              Our team is here to help. Reach out via email, Telegram, or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@royalketa.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                hello@royalketa.com
              </a>
              <span className="hidden sm:block text-foreground-muted">•</span>
              <a
                href="https://t.me/royalketa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                @royalketa
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
