import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Truck, Mail, ExternalLink, MapPin } from 'lucide-react';

interface Partner {
  name: string;
  description: string;
  services: string[];
  website?: string;
  email?: string;
  coverage: string;
  logo?: string;
}

export function Partners() {
  const partners: Partner[] = [
    {
      name: 'Привоз',
      description: 'Надежная транспортная компания по доставке и отправке грузов на Дальнем Востоке',
      services: ['Доставка грузов', 'Складское хранение', 'Экспресс-доставка'],
      website: 'https://privozdv.ru',
      coverage: 'Магадан, Южно-Сахалинск, Петропавловск-Камчатский',
    },
    {
      name: 'Глобал Логистик',
      description: 'Перевозка грузов по всей территории Российской Федерации с гарантией качества',
      services: ['Межрегиональные перевозки', 'Логистические решения', 'Доставка по РФ'],
      website: 'https://глобал-логистик.рф',
      coverage: 'Вся территория РФ, специализация на Дальнем Востоке',
    },
    {
      name: 'Фургон Сервис',
      description: 'Профессиональная транспортная компания с многолетним опытом работы на Сахалине',
      services: ['Грузоперевозки', 'Экспедирование', 'Доставка по расписанию'],
      email: 'delt65@mail.ru',
      coverage: 'Сахалинская область, межрегиональные маршруты',
    },
    {
      name: 'Logos',
      description: 'Транспортная компания с надежными решениями для доставки продукции',
      services: ['Логистика', 'Транспортировка', 'Складские услуги'],
      email: 'tklogos@yandex.ru',
      coverage: 'Дальневосточный регион, Сахалинская область',
    },
  ];

  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Наши партнеры</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Логистика и доставка по РФ
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Мы работаем с проверенными транспортными компаниями для надежной доставки нашей продукции по всей России
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Truck className="w-10 h-10 text-gold" />
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light transition-colors"
                      aria-label={`Посетить сайт ${partner.name}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-gold">{partner.name}</CardTitle>
                <CardDescription>{partner.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Услуги:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-foreground-muted">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{partner.coverage}</span>
                </div>

                {partner.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-foreground-muted" />
                    <a
                      href={`mailto:${partner.email}`}
                      className="text-sm text-gold hover:text-gold-light transition-colors"
                    >
                      {partner.email}
                    </a>
                  </div>
                )}

                {partner.website && (
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Посетить сайт →
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 premium-card p-6 text-center"
      >
        <p className="text-foreground-muted mb-4">
          Все наши партнеры имеют многолетний опыт работы на Дальнем Востоке и гарантируют сохранность продукции при транспортировке
        </p>
        <p className="text-sm text-foreground-muted">
          <strong className="text-gold">Важно:</strong> Условия доставки и стоимость уточняйте напрямую у транспортных компаний
        </p>
      </motion.div>
    </section>
  );
}
