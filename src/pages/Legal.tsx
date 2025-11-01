import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';

export default function Legal() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to anchor if present in URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Seo
        title="Legal Information"
        description="Terms of service, privacy policy, and legal disclosures for Royal Keta hatchery and investment services."
        path="/legal"
        ogImage="/og/legal.svg"
      />

      <Hero
        subtitle="Legal Information"
        title="Terms & Policies"
        description="Transparency and compliance in all our operations"
      />

      <section className="content-container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Terms of Service */}
          <div id="terms" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Terms of Service</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Terms of Service
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Last Updated: January 2025
              </p>
              <p>
                By accessing and using Royal Keta services, including hatchery tours, product purchases,
                and investment opportunities, you agree to be bound by these Terms of Service.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">1. Tour Services</h3>
              <p>
                Hatchery tours are subject to availability and weather conditions. We reserve the right
                to reschedule or cancel tours for safety reasons. Full refund policies are outlined in our
                booking confirmation.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">2. Product Sales</h3>
              <p>
                All caviar products are sold subject to availability. We guarantee the quality and freshness
                of our products at the time of sale. Storage and handling instructions must be followed to
                maintain product quality.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">3. Investment Services</h3>
              <p>
                Investment opportunities are available only to qualified investors who have completed KYC/AML
                verification. All investments carry risk, and past performance does not guarantee future returns.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">4. Liability Limitations</h3>
              <p>
                Royal Keta maintains comprehensive insurance and follows strict safety protocols. Visitors
                participate in tours at their own risk and must follow all safety instructions provided by staff.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div id="privacy" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Privacy Policy</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Royal Keta respects your privacy and is committed to protecting your personal data.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Information We Collect</h3>
              <p>
                We collect information you provide when booking tours, purchasing products, or inquiring
                about investment opportunities. This includes name, contact details, payment information,
                and preferences.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">How We Use Your Data</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Processing bookings and purchases</li>
                <li>Communicating about your reservations or investments</li>
                <li>Improving our services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations (KYC/AML for investors)</li>
              </ul>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information.
                Payment processing is handled through secure, encrypted channels.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal data. Contact us at
                privacy@royalketa.com to exercise these rights.
              </p>
            </div>
          </div>

          {/* Investment Disclaimer */}
          <div id="disclaimer" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Investment Disclaimer</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Investment Risk Disclosure
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p className="font-semibold text-foreground">
                IMPORTANT: All investments involve risk. Please read carefully.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Key Risks</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Biological Risk:</strong> Fish mortality due to disease, water quality, or environmental factors</li>
                <li><strong>Market Risk:</strong> Fluctuations in caviar and salmon market prices</li>
                <li><strong>Operational Risk:</strong> Equipment failure, supply chain disruptions</li>
                <li><strong>Regulatory Risk:</strong> Changes in aquaculture regulations or environmental policies</li>
                <li><strong>Seasonal Risk:</strong> Variability in breeding success across different seasons</li>
                <li><strong>Liquidity Risk:</strong> Investments may have limited liquidity or lock-up periods</li>
              </ul>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Not Financial Advice</h3>
              <p>
                Information provided on this website does not constitute financial, investment, or legal advice.
                Consult with qualified professionals before making investment decisions.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">KYC/AML Compliance</h3>
              <p>
                All investors must complete Know Your Customer (KYC) and Anti-Money Laundering (AML) verification.
                We reserve the right to reject any investment that does not meet our compliance standards.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">No Guarantees</h3>
              <p>
                Past performance does not guarantee future results. Projected returns are estimates based on
                current operations and market conditions, which may change.
              </p>
            </div>
          </div>

          {/* Contact for Legal Questions */}
          <div className="mt-12 premium-card p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              Legal Questions?
            </h3>
            <p className="text-foreground-muted mb-6">
              For legal inquiries, document requests, or compliance questions
            </p>
            <a
              href="mailto:legal@royalketa.com"
              className="text-gold hover:text-gold-light transition-colors"
            >
              legal@royalketa.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
