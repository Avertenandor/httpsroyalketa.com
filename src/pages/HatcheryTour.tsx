import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Gift, Fish } from 'lucide-react';

export default function HatcheryTour() {
  const packages = [
    {
      name: 'Семейный',
      price: '₽ 5,000',
      duration: '2 часа',
      people: '2-4',
      features: ['Экскурсия с гидом', 'Кормление рыб', 'Дегустация икры', 'Подарочная баночка'],
    },
    {
      name: 'Премиум',
      price: '₽ 10,000',
      duration: '3 часа',
      people: '2-6',
      features: ['Расширенная экскурсия', 'Персональный гид', 'Рыбалка', 'Премиальный подарок'],
      highlighted: true,
    },
    {
      name: 'Корпоративный',
      price: 'По договору',
      duration: 'Гибкий',
      people: '10+',
      features: ['Тимбилдинг', 'Индивидуальная программа', 'Организация питания', 'Корпоративные подарки'],
    },
  ];

  return (
    <>
      <Seo
        title="Экскурсии по Хозяйству"
        description="Познакомьтесь с разведением лосося вблизи. Семейные экскурсии с дегустацией икры и подарками. Забронируйте визит в Роял Кета."
        path="/hatchery-tour"
        ogImage="/og/hatchery-tour.svg"
      />

      <Hero
        subtitle="Познакомьтесь с Наукой"
        title="Семейные Экскурсии по Хозяйству"
        description="Покормите рыб, изучите производство, попробуйте премиальную икру. Образовательное приключение для всей семьи."
        primaryCta={{ text: 'Забронировать', href: '#booking' }}
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Что Вас Ждёт</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Особенности Тура
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Fish, title: 'Кормление Рыб', desc: 'Взаимодействие с лососем на всех стадиях' },
            { icon: Users, title: 'Эксперт-Гид', desc: 'Обучение от наших учёных-аквакультурологов' },
            { icon: Gift, title: 'Икра в Подарок', desc: 'Домой с премиальной красной икрой' },
            { icon: Clock, title: 'Гибкое Время', desc: 'Утренние и дневные сеансы' },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="h-10 w-10 text-gold mb-3" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-gold mb-8 text-center">
            Выберите Ваш Пакет
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={pkg.highlighted ? 'ring-2 ring-gold' : ''}>
                <CardHeader>
                  {pkg.highlighted && <Badge variant="gold" className="w-fit mb-2">Популярный</Badge>}
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-gold my-4">{pkg.price}</div>
                  <CardDescription>
                    {pkg.duration} • {pkg.people} человек
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.highlighted ? 'premium' : 'default'}>
                    Выбрать Пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div id="booking" className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Готовы к Посещению?
          </h3>
          <p className="text-foreground-muted mb-6">
            Свяжитесь с нами для бронирования тура или запроса индивидуального корпоративного пакета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <a href="mailto:hello@royalketa.com">Написать на Email</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://t.me/royalketa" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}