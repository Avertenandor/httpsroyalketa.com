import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Science', href: '/science' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Hatchery Tour', href: '/hatchery-tour' },
    { name: 'Premium Caviar', href: '/caviar' },
    { name: 'Investment', href: '/investment' },
    { name: 'Pricing', href: '/pricing' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Legal', href: '/legal' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-display font-bold text-gold mb-4"
            >
              <span className="text-2xl">👑</span>
              <span className="gradient-gold">ROYAL KETA</span>
            </Link>
            <p className="text-foreground-muted mb-4 prose-content">
              Premium salmon hatchery and caviar production on Sakhalin Island.
              Experience the science, taste the excellence.
            </p>
            <div className="space-y-2 text-sm text-foreground-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Nevelsky District, Sakhalin</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:hello@royalketa.com" className="hover:text-gold transition-colors">
                  hello@royalketa.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+79999999999" className="hover:text-gold transition-colors">
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-gold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://t.me/royalketa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
          <p>&copy; {currentYear} Royal Keta. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal#privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal#terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
