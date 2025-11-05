import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Investment() {
  const models = [
    {
      name: 'Модель А',
      title: 'Дивиденды Икрой',
      description: 'Получайте премиальную икру в качестве дивидендов, пока мы храним ваш депозит',
      features: ['Низкий порог входа', 'Материальные выплаты', 'Гибкие условия'],
    },
    {
      name: 'Модель Б',
      title: 'Икра + Крипто',
      description: 'Гибридная модель, сочетающая дивиденды икрой с криптовалютными доходами',
      features: ['Диверсифицированные доходы', 'Верификация блокчейн', 'Квартальные выплаты'],
    },
    {
      name: 'Модель В',
      title: 'Премиальные Доходы',
      description: 'Крупные инвестиции со скользящим графиком дивидендов и бонусной икрой',
      features: ['Высокая доходность', 'Приоритетный доступ', 'Эксклюзивные привилегии'],
    },
    {
      name: 'Модель Г',
      title: 'Полный Спектр',
      description: 'Комплексный пакет с опциональными инвестициями в осетра и автоматизацией',
      features: ['Максимальная гибкость', 'Расширенные опции', 'Индивидуальные условия'],
    },
  ];

  return (
    <>
      <Seo
        title="Инвестиционные Возможности"
        description="Прозрачные токенизированные инвестиции в устойчивую аквакультуру. Четыре модели от дивидендов икрой до полного спектра доходов."
        path="/investment"
        ogImage="/og/investment.png"
      />

      <Hero
        subtitle="Инвестируйте в Будущее"
        title="Токенизированные Инвестиции в Аквакультуру"
        description="Прозрачные, верифицируемые блокчейном инвестиционные возможности в устойчивое разведение лосося"
        primaryCta={{ text: 'Запросить Информацию', href: '#contact' }}
      />

      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <Badge variant="gold" className="mb-3 sm:mb-4">Инвестиционные Модели</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 leading-tight">
            Выберите Свой Путь
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
          {models.map((model) => (
            <Card key={model.name}>
              <CardHeader className="p-4 sm:p-6">
                <Badge variant="ocean" className="w-fit mb-2 text-xs sm:text-sm">{model.name}</Badge>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{model.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">{model.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-1.5 sm:space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

              {/* Investment Calculator Section */}
              <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background/50 to-background">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
                  <Badge variant="gold" className="mb-3 sm:mb-4">Калькулятор Инвестиций</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 leading-tight">
                    Рассчитайте Свой Доход
                  </h2>
                  <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto leading-relaxed">
                    Узнайте, сколько икры и дохода вы получите при различных моделях инвестирования
                  </p>
                </div>
        <InvestmentCalculator />
      </section>

              <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
                <div id="contact" className="premium-card p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
                    Готовы Инвестировать?
                  </h3>
                  <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 px-4 sm:px-0 leading-relaxed">
                    Запросите подробную информацию об инвестиционных моделях и условиях
                  </p>
                  <Button asChild variant="premium" size="lg" className="w-full sm:w-auto">
                    <a href="mailto:invest@royalketa.com">Связаться с Инвестиционной Командой</a>
                  </Button>
                </div>
              </section>
    </>
  );
}