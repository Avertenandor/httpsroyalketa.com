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

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Инвестиционные Модели</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Выберите Свой Путь
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {models.map((model) => (
            <Card key={model.name}>
              <CardHeader>
                <Badge variant="ocean" className="w-fit mb-2">{model.name}</Badge>
                <CardTitle>{model.title}</CardTitle>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Калькулятор Инвестиций</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Рассчитайте Свой Доход
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Узнайте, сколько икры и дохода вы получите при различных моделях инвестирования
          </p>
        </div>
        <InvestmentCalculator />
      </section>

      <section className="content-container py-20">
        <div id="contact" className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Готовы Инвестировать?
          </h3>
          <p className="text-foreground-muted mb-6">
            Запросите подробную информацию об инвестиционных моделях и условиях
          </p>
          <Button asChild variant="premium" size="lg">
            <a href="mailto:invest@royalketa.com">Связаться с Инвестиционной Командой</a>
          </Button>
        </div>
      </section>
    </>
  );
}