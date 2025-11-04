import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '/': 'Главная',
  '/hatchery-tour': 'Экскурсия на завод',
  '/science': 'Наша наука',
  '/caviar': 'Премиальная икра',
  '/investment': 'Инвестиции',
  '/tokenization': 'Токенизация',
  '/pricing': 'Цены',
  '/gallery': 'Галерея',
  '/blog': 'Блог',
  '/faq': 'FAQ',
  '/about': 'О нас',
  '/contacts': 'Контакты',
  '/partners': 'Партнеры',
  '/crabbing': 'Крабалка',
  '/legal': 'Правовая информация',
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', path: '/' },
  ];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[currentPath] || segment.replace(/-/g, ' ');
    breadcrumbs.push({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      path: currentPath,
    });
  });

  return (
    <nav aria-label="Хлебные крошки" className="content-container py-4">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isHome = index === 0;

          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-foreground-muted" />
              )}
              {isLast ? (
                <span className="text-gold font-medium flex items-center gap-1">
                  {isHome && <Home className="w-4 h-4" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-foreground-muted hover:text-gold transition-colors flex items-center gap-1"
                >
                  {isHome && <Home className="w-4 h-4" />}
                  {!isHome && crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
