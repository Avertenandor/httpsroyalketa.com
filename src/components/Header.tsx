import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { name: 'Доставка', href: '/delivery' },
  { name: 'Цены', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Меркурий (эВСД)', href: '/mercury' },
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

  // Refs для управления таймерами hover delay
  const closeTimerRef = useRef<number | null>(null);
  const openTimerRef = useRef<number | null>(null);

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

  // Очистка таймеров при unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
    };
  }, []);

  /**
   * Обработчик открытия dropdown с задержкой 150ms
   * Предотвращает случайные открытия при быстром движении мыши
   */
  const handleDropdownEnter = (name: string) => {
    // Отменяем закрытие, если оно было запланировано
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    // Если уже открыто это меню - не делаем ничего
    if (openDropdown === name) return;

    // Задержка 150ms перед открытием
    openTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(name);
    }, 150);
  };

  /**
   * Обработчик закрытия dropdown с задержкой 400ms
   * Даёт пользователю время переместить мышь к пунктам меню
   */
  const handleDropdownLeave = () => {
    // Отменяем открытие, если оно было запланировано
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    // Задержка 400ms перед закрытием (best practice: 300-500ms)
    closeTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  /**
   * Отмена закрытия при наведении на dropdown
   * Позволяет свободно перемещаться внутри меню
   */
  const handleDropdownContentEnter = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

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
        className="content-container flex items-center justify-between py-2.5 sm:py-3 md:py-4"
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
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6">
          {navigation.map((item) =>
            isNavGroup(item) ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 text-xs xl:text-sm font-medium transition-all duration-200',
                    'hover:text-gold text-foreground-muted relative group',
                    openDropdown === item.name && 'text-gold'
                  )}
                  aria-expanded={openDropdown === item.name}
                  aria-haspopup="true"
                  aria-label={`${item.name} меню`}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      'w-3 h-3 transition-transform duration-200',
                      openDropdown === item.name && 'rotate-180'
                    )}
                  />
                  {/* Подчеркивание при hover */}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light',
                      'transition-all duration-200 ease-out',
                      openDropdown === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </button>

                {/* Dropdown Menu с анимацией */}
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className={cn(
                        'absolute top-full left-0 w-56',
                        'glass-card border border-white/10 rounded-xl shadow-2xl',
                        'py-2 z-50',
                        // КРИТИЧНО: pt-1 создаёт "safe area" между кнопкой и меню
                        'mt-1'
                      )}
                      onMouseEnter={handleDropdownContentEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Невидимый мост между кнопкой и dropdown (safe area) */}
                      <div className="absolute -top-2 left-0 right-0 h-2" />

                      {item.items.map((subItem, index) => (
                        <motion.div
                          key={subItem.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.05,
                            ease: 'easeOut'
                          }}
                        >
                          <Link
                            to={subItem.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm font-medium',
                              'transition-all duration-200 rounded-lg mx-2',
                              'hover:text-gold hover:bg-gold/10 hover:pl-5',
                              'focus:outline-none focus:ring-2 focus:ring-gold/50',
                              location.pathname === subItem.href
                                ? 'text-gold bg-gold/10'
                                : 'text-foreground-muted'
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-xs xl:text-sm font-medium transition-all duration-200 relative group',
                  'hover:text-gold',
                  location.pathname === item.href
                    ? 'text-gold'
                    : 'text-foreground-muted'
                )}
              >
                {item.name}
                {/* Подчеркивание для обычных ссылок */}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light',
                    'transition-all duration-200 ease-out',
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            )
          )}
          <Button asChild variant="premium" size="sm" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link to="/hatchery-tour">Забронировать</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            'lg:hidden rounded-md p-2 transition-colors duration-200',
            'text-foreground hover:text-gold hover:bg-gold/10'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Переключить меню"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass-card border-t border-white/10 overflow-hidden"
          >
            <div className="content-container py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navigation.map((item) =>
                isNavGroup(item) ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg',
                        'transition-all duration-200',
                        openDropdown === item.name
                          ? 'text-gold bg-gold/10'
                          : 'text-foreground-muted hover:text-gold hover:bg-gold/5'
                      )}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 py-1">
                            {item.items.map((subItem, index) => (
                              <motion.div
                                key={subItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className={cn(
                                    'block px-3 py-2 text-sm font-medium rounded-lg',
                                    'transition-all duration-200',
                                    location.pathname === subItem.href
                                      ? 'text-gold bg-gold/10'
                                      : 'text-foreground-muted hover:text-gold hover:bg-gold/5'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'block px-3 py-2.5 text-base font-medium rounded-lg',
                      'transition-all duration-200',
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
