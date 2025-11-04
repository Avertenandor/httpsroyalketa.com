import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    {
      name: 'Семейный',
      price: '₽ 5,000',
      duration: '2 часа',
      people: '2-4 человека',
      features: [
        { name: 'Экскурсия с гидом', included: true },
        { name: 'Кормление рыб', included: true },
        { name: 'Дегустация икры (50г)', included: true },
        { name: 'Подарочная банка (100г)', included: true },
        { name: 'Образовательные материалы', included: true },
        { name: 'Персональный гид', included: false },
        { name: 'Рыболовная сессия', included: false },
        { name: 'Премиальный подарочный пакет', included: false },
        { name: 'Обед включён', included: false },
        { name: 'Фото-услуги', included: false },
      ],
    },
    {
      name: 'Премиум',
      price: '₽ 10,000',
      duration: '3-4 часа',
      people: '2-6 человек',
      featured: true,
      features: [
        { name: 'Экскурсия с гидом', included: true },
        { name: 'Кормление рыб', included: true },
        { name: 'Дегустация икры (100г)', included: true },
        { name: 'Подарочная банка (250г)', included: true },
        { name: 'Образовательные материалы', included: true },
        { name: 'Персональный гид', included: true },
        { name: 'Рыболовная сессия (1 час)', included: true },
        { name: 'Премиальный подарочный пакет', included: true },
        { name: 'Обед включён', included: true },
        { name: 'Фото-услуги', included: false },
      ],
    },
    {
      name: 'Корпоративный',
      price: 'По договору',
      duration: 'Гибкое',
      people: '10+ человек',
      features: [
        { name: 'Экскурсия с гидом', included: true },
        { name: 'Кормление рыб', included: true },
        { name: 'Дегустация икры (безлимитно)', included: true },
        { name: 'Подарочная банка (500г каждому)', included: true },
        { name: 'Образовательные материалы', included: true },
        { name: 'Персональный гид', included: true },
        { name: 'Рыболовная сессия (гибкая)', included: true },
        { name: 'Премиальный подарочный пакет', included: true },
        { name: 'Обед и кейтеринг', included: true },
        { name: 'Фото-услуги', included: true },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Тарифы"
        description="Пакеты туров и тарифы Роял Кета. Семейные, Премиум и Корпоративные варианты. Сравните возможности и забронируйте визит."
        path="/pricing"
        ogImage="/og/pricing.png"
      />

      <Hero
        subtitle="Турные Пакеты"
        title="Выберите Ваш Опыт"
        description="Прозрачное ценообразование для незабываемых посещений хозяйства"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Сравните Пакеты</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Всё Включено
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Каждый пакет включает дегустацию икры и подарочные банки. Никаких скрытых комиссий.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full premium-card">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 font-display text-xl text-gold">Возможности</th>
                {packages.map((pkg) => (
                  <th key={pkg.name} className="p-6">
                    <div className="text-center">
                      {pkg.featured && (
                        <Badge variant="gold" className="mb-2">Популярный</Badge>
                      )}
                      <div className="text-2xl font-display font-bold text-gold mb-1">
                        {pkg.name}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-foreground-muted">
                        {pkg.duration}
                      </div>
                      <div className="text-sm text-foreground-muted mb-4">
                        {pkg.people}
                      </div>
                      <Button
                        asChild
                        variant={pkg.featured ? 'premium' : 'default'}
                        className="w-full"
                      >
                        <Link to="/hatchery-tour">Выбрать</Link>
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packages[0].features.map((_, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-foreground">
                    {packages[0].features[idx].name}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.name} className="p-4 text-center">
                      {pkg.features[idx].included ? (
                        <Check className="h-5 w-5 text-gold mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-foreground-muted mx-auto opacity-30" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="premium-card p-6">
              {pkg.featured && (
                <Badge variant="gold" className="mb-3">Популярный</Badge>
              )}
              <h3 className="text-2xl font-display font-bold text-gold mb-2">
                {pkg.name}
              </h3>
              <div className="text-3xl font-bold text-foreground mb-2">
                {pkg.price}
              </div>
              <div className="text-sm text-foreground-muted mb-1">
                {pkg.duration}
              </div>
              <div className="text-sm text-foreground-muted mb-6">
                {pkg.people}
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-foreground-muted opacity-30 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-foreground-muted line-through'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={pkg.featured ? 'premium' : 'default'}
                className="w-full"
              >
                <Link to="/hatchery-tour">Выбрать Пакет</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Индивидуальные Корпоративные Пакеты
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Планируете тимбилдинг или корпоративный отдых? Мы предлагаем полностью настраиваемые 
            пакеты для групп от 10 человек, включая кейтеринг, расширенные рыболовные сессии и эксклюзивный доступ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:hello@royalketa.com">Запросить Расчёт</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Связаться с Нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}