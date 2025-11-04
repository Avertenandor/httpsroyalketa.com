import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Туры', href: '/hatchery-tour' },
  { name: 'Наука', href: '/science' },
  { name: 'Икра', href: '/caviar' },
  { name: 'Инвестиции', href: '/investment' },
  { name: 'Цены', href: '/pricing' },
  { name: 'Галерея', href: '/gallery' },
  { name: 'Блог', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Контакты', href: '/contacts' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'glass-card border-b border-white/10 backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <a
        href="#main-content"
        className="skip-link"
      >
        Перейти к основному содержанию
      </a>
      <nav
        className="content-container flex items-center justify-between py-4"
        aria-label="Основная навигация"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-display font-bold text-gold hover:text-gold-light transition-colors"
          aria-label="ROYAL KETA - Главная"
        >
          <span className="text-2xl">👑</span>
          <span className="gradient-gold">ROYAL KETA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gold',
                location.pathname === item.href
                  ? 'text-gold'
                  : 'text-foreground-muted'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            variant="premium"
            size="sm"
          >
            <Link to="/hatchery-tour">Забронировать тур</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-foreground hover:text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Переключить меню"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-white/10">
          <div className="content-container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                  location.pathname === item.href
                    ? 'text-gold bg-gold/10'
                    : 'text-foreground-muted hover:text-gold hover:bg-gold/5'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="premium" className="w-full mt-4">
              <Link to="/hatchery-tour">Забронировать тур</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
