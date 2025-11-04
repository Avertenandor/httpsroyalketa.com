import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
}

interface NavGroup {
  name: string;
  items: NavItem[];
}

const navigation: (NavItem | NavGroup)[] = [
  { name: 'Главная', href: '/' },
  {
    name: 'Продукция',
    items: [
      { name: 'Премиальная икра', href: '/caviar' },
      { name: 'О лососевых', href: '/salmon-info' },
      { name: 'О осетровых', href: '/sturgeon-info' },
    ],
  },
  { name: 'Туры на завод', href: '/hatchery-tour' },
  {
    name: 'Компания',
    items: [
      { name: 'О нас', href: '/about' },
      { name: 'Наука', href: '/science' },
      { name: 'Галерея', href: '/gallery' },
      { name: 'Блог', href: '/blog' },
    ],
  },
  { name: 'Инвестиции', href: '/investment' },
  { name: 'Цены', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Контакты', href: '/contacts' },
];

function isNavGroup(item: NavItem | NavGroup): item is NavGroup {
  return 'items' in item;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
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
      <a href="#main-content" className="skip-link">
        Перейти к основному содержанию
      </a>
      <nav
        className="content-container flex items-center justify-between py-3 md:py-4"
        aria-label="Основная навигация"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg md:text-xl font-display font-bold text-gold hover:text-gold-light transition-colors flex-shrink-0"
          aria-label="ROYAL KETA - Главная"
        >
          <span className="text-xl md:text-2xl">👑</span>
          <span className="gradient-gold hidden sm:inline">ROYAL KETA</span>
          <span className="gradient-gold sm:hidden">RK</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navigation.map((item) =>
            isNavGroup(item) ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold text-foreground-muted"
                  aria-expanded={openDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 glass-card border border-white/10 rounded-lg shadow-lg py-2 z-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors hover:text-gold hover:bg-gold/5',
                          location.pathname === subItem.href
                            ? 'text-gold'
                            : 'text-foreground-muted'
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
          <Button asChild variant="premium" size="sm">
            <Link to="/hatchery-tour">Забронировать</Link>
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
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="content-container py-4 space-y-1">
            {navigation.map((item) =>
              isNavGroup(item) ? (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-md transition-colors',
                      'text-foreground-muted hover:text-gold hover:bg-gold/5'
                    )}
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.name && 'rotate-180'
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1 py-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={cn(
                            'block px-3 py-2 text-sm font-medium rounded-md transition-colors',
                            location.pathname === subItem.href
                              ? 'text-gold bg-gold/10'
                              : 'text-foreground-muted hover:text-gold hover:bg-gold/5'
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2.5 text-base font-medium rounded-md transition-colors',
                    location.pathname === item.href
                      ? 'text-gold bg-gold/10'
                      : 'text-foreground-muted hover:text-gold hover:bg-gold/5'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <Button asChild variant="premium" className="w-full mt-4">
              <Link to="/hatchery-tour">Забронировать тур</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
