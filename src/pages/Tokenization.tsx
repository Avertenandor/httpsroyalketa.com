import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, FileCheck } from 'lucide-react';

export default function Tokenization() {
  const benefits = [
    {
      icon: Shield,
      title: 'Прозрачность Блокчейна',
      description: 'Каждая инвестиция отслеживается в блокчейне с неизменными записями и отчётами в реальном времени',
    },
    {
      icon: TrendingUp,
      title: 'Масштабируемые Доходы',
      description: 'От дивидендов икрой до криптоплатежей, множество вариантов доходов для разных инвесторских профилей',
    },
    {
      icon: Users,
      title: 'Долевое Владение',
      description: 'Низкие барьеры входа через токенизированные доли в операциях хозяйства',
    },
    {
      icon: FileCheck,
      title: 'Полное Соответствие',
      description: 'Верификация KYC/AML, регуляторное соответствие и правовая рамка для всех инвесторов',
    },
  ];

  const franchiseFeatures = [
    'Полный операционный справочник',
    'Племенное поголовье с генетикой Роял Кета',
    'Технологии и поставка оборудования',
    'Обучение команды по аквакультуре',
    'Поддержка маркетинга и брендинга',
    'Постоянные технические консультации',
  ];

  return (
    <>
      <Seo
        title="Токенизация и Франчайзинг"
        description="Платформа токенизированных инвестиций Роял Кета и франчайзинговые возможности. Верифицируемые блокчейном доходы и масштабируемая бизнес-модель аквакультуры."
        path="/tokenization"
        ogImage="/og/tokenization.png"
      />

      <Hero
        subtitle="От Кроликов к Рыбе"
        title="Токенизация и Франчайзинг"
        description="Строим будущее устойчивой аквакультуры через блокчейн-технологии и проверенные бизнес-модели"
        primaryCta={{ text: 'Запросить Whitepaper', href: '#contact' }}
        secondaryCta={{ text: 'Посмотреть Инвестиционные Модели', href: '/investment' }}
      />

      <section className="content-container py-20">
        {/* Origin Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <Badge variant="gold" className="mb-4">Путешествие</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-6">
            От Разведения Кроликов к Рыбоводству
          </h2>
          <div className="space-y-4 text-foreground-muted">
            <p>
              Модель токенизации Роял Кета возникла из успешного опыта в операциях по разведению кроликов.
              Мы осознали, что те же принципы прозрачных инвестиций, управления биологическими активами
              и структурированных доходов могут революционизировать аквакультуру.
            </p>
            <p>
              Применяя блокчейн-технологии к разведению лосося, мы создали инвестиционный инструмент, который
              сочетает осязаемые биологические активы с современной финансовой инфраструктурой. Инвесторы могут отслеживать
              свои активы в реальном времени, получать дивиденды в виде икры или криптовалюты и участвовать в
              действительно устойчивой системе производства продуктов питания.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="ocean" className="mb-4">Почему Токенизация</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              Преимущества
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-gold mb-3" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20 premium-card p-8 md:p-12">
          <Badge variant="gold" className="mb-4">Механизм</Badge>
          <h2 className="text-3xl font-display font-bold text-gold mb-8">
            Как Работает Токенизация
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold mb-3">1</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Целевые Инвестиции
              </h3>
              <p className="text-foreground-muted">
                Средства направляются на конкретные активы: приобретение земли, оборудование для разведения,
                обучение персонала или развитие инфраструктуры.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-3">2</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Отслеживание в Блокчейне
              </h3>
              <p className="text-foreground-muted">
                Каждая инвестиция создаёт блокчейн-токен, представляющий долевое владение.
                Отслеживайте свои активы и доходы в реальном времени.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-3">3</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Гибкие Доходы
              </h3>
              <p className="text-foreground-muted">
                Выбирайте свою структуру доходов: дивиденды икрой, криптовалютные платежи
                или гибридные модели, сочетающие оба варианта.
              </p>
            </div>
          </div>
        </div>

        {/* Franchise Opportunity */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="ocean" className="mb-4">Модель Расширения</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              Франчайзинг Роял Кета
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Повторите наш успех с комплексной поддержкой и проверенной методологией
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-display font-bold text-gold mb-6">
                Что Вы Получаете
              </h3>
              <ul className="space-y-3">
                {franchiseFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-display font-bold text-gold mb-6">
                Требования к Партнёрам
              </h3>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  <strong className="text-foreground">Минимальные Инвестиции:</strong> ₽10,000,000
                </p>
                <p>
                  <strong className="text-foreground">Местоположение:</strong> Доступ к чистому водному источнику
                  и подходящей земле для строительства хозяйства
                </p>
                <p>
                  <strong className="text-foreground">Обязательства:</strong> Минимально договор на 3 года
                  с ключевыми показателями эффективности
                </p>
                <p>
                  <strong className="text-foreground">Команда:</strong> Готовность нанимать и обучать
                  местных специалистов по аквакультуре
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="contact" className="premium-card p-8 md:p-12 text-center bg-gradient-to-br from-gold/10 to-ocean/10">
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-gold mb-6">
            Готовы Принять Участие?
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
            Независимо от того, заинтересованы ли вы в токенизированных инвестициях или франчайзинговом партнёрстве,
            наша команда готова предоставить подробную информацию и документацию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:invest@royalketa.com">Запросить Франчайзинговый Пакет</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/investment">Посмотреть Инвестиционные Модели</Link>
            </Button>
          </div>
          <p className="text-sm text-foreground-muted mt-6">
            Все инвестиции подлежат верификации KYC/AML и статусу аккредитованного инвестора
          </p>
        </div>
      </section>
    </>
  );
}