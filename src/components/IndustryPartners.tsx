import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Factory, ExternalLink, Globe } from 'lucide-react';

interface IndustryPartner {
  name: string;
  description: string;
  location: string;
  website?: string;
  profile?: string;
  type: 'processing' | 'production' | 'holding';
  products?: string[];
}

export function IndustryPartners() {
  const partners: IndustryPartner[] = [
    {
      name: 'Южно-Курильский рыбокомбинат (ЮКРК)',
      description: 'Крупнейший рыбоперерабатывающий комплекс Курильских островов',
      location: 'Южно-Курильск',
      website: 'https://ykrk.ru',
      type: 'processing',
      products: ['Переработка', 'Консервы', 'Заморозка'],
    },
    {
      name: 'Рыбокомбинат «Островной»',
      description: 'Современный рыбоперерабатывающий комплекс полного цикла',
      location: 'Сахалинская область',
      website: 'https://fishisland.ru',
      type: 'processing',
      products: ['Переработка', 'Охлаждённая продукция', 'Консервы'],
    },
    {
      name: 'ГК «Гидрострой»',
      description: 'Холдинг с береговыми комплексами «Ясный», «Крабозаводск», консервный завод им. Кирова',
      location: 'Сахалинская область',
      website: 'https://gidrostroy.com',
      type: 'holding',
      products: ['Краб', 'Консервы', 'Переработка морепродуктов'],
    },
    {
      name: 'АО «СК БСФ»',
      description: 'Северо-Курильская база сейнерного флота',
      location: 'Северо-Курильск',
      website: 'http://skbsf.ru',
      type: 'production',
      products: ['Добыча', 'Переработка', 'Сейнерный промысел'],
    },
    {
      name: 'ООО «Континент»',
      description: 'Рыбопромысловая компания на острове Итуруп',
      location: 'о. Итуруп',
      website: 'https://kontinent.fish',
      type: 'production',
      products: ['Промысел', 'Переработка', 'Экспорт'],
    },
    {
      name: 'ООО «Алаид»',
      description: 'Рыбопромышленная компания с производством на Сахалине',
      location: 'Северо-Курильск',
      website: 'https://alaidvl.ru',
      type: 'production',
      products: ['Добыча', 'Переработка', 'Заморозка'],
    },
    {
      name: 'Бренд «Курильский берег»',
      description: 'Консервный комплекс им. Кирова, премиальные рыбные консервы',
      location: 'Сахалинская область',
      website: 'https://kurilskiybereg.ru',
      type: 'processing',
      products: ['Консервы', 'Премиальная продукция', 'Бренд'],
    },
    {
      name: 'ООО «Океанпродукт»',
      description: 'Переработка и реализация морепродуктов',
      location: 'Южно-Сахалинск',
      website: 'https://okeanproduct.ru',
      type: 'processing',
      products: ['Переработка', 'Оптовая торговля', 'Морепродукты'],
    },
    {
      name: 'ООО «Янтарное»',
      description: 'Рыбопереработка и производство продукции из морепродуктов',
      location: 'Южно-Сахалинск',
      website: 'https://www.yantarnoe.com',
      type: 'processing',
      products: ['Переработка', 'Копчение', 'Консервы'],
    },
    {
      name: 'ООО «СахГолдФиш»',
      description: 'Добыча и переработка морских биоресурсов',
      location: 'Сахалинская область',
      profile: 'https://sakhgoldfish.fishery.ru',
      type: 'production',
      products: ['Промысел', 'Переработка', 'Экспорт'],
    },
    {
      name: 'ЗАО «Курильский рыбак»',
      description: 'Рыбодобывающее и перерабатывающее предприятие',
      location: 'Курильские острова',
      profile: 'https://fish-sakh.ru/businesses/gidrostroy/zao-kurilskiy-ryibak/',
      type: 'production',
      products: ['Добыча', 'Переработка'],
    },
    {
      name: 'ООО «ПО Сахалинрыбаксоюз»',
      description: 'Производственное объединение рыбодобывающих предприятий',
      location: 'Сахалинская область',
      profile: 'https://www.varpe.org/participant/east/ooo-proizvodstvennoe-obedinenie-sakhalinrybaksoyuz/',
      type: 'holding',
      products: ['Координация', 'Объединение производителей'],
    },
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'processing': return 'Переработка';
      case 'production': return 'Производство';
      case 'holding': return 'Холдинг';
      default: return type;
    }
  };

  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="ocean" className="mb-4">Рыбопромышленные партнеры</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Крупные рыбзаводы Сахалинской области
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Мы сотрудничаем с ведущими рыбоперерабатывающими предприятиями региона для обмена опытом и развития отрасли
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="h-full hover:shadow-glow-ocean transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Factory className="w-10 h-10 text-ocean" />
                  <Badge variant="outline" className="text-xs">
                    {getTypeLabel(partner.type)}
                  </Badge>
                </div>
                <CardTitle className="text-ocean text-lg">{partner.name}</CardTitle>
                <CardDescription className="text-sm">{partner.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span>{partner.location}</span>
                </div>

                {partner.products && (
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2">Специализация:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.products.map((product) => (
                        <Badge key={product} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {(partner.website || partner.profile) && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full text-ocean hover:text-ocean-light"
                  >
                    <a
                      href={partner.website || partner.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {partner.website ? 'Сайт компании' : 'Профиль компании'}
                      <ExternalLink className="w-4 h-4" />
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
        className="mt-12 premium-card p-6 text-center bg-gradient-to-br from-ocean/5 to-gold/5"
      >
        <p className="text-foreground-muted mb-4">
          ROYAL KETA — часть рыбопромышленного сообщества Сахалинской области
        </p>
        <p className="text-sm text-foreground-muted">
          Полный реестр предприятий: <a
            href="https://fish-sakh.ru/businesses/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-ocean-light transition-colors underline"
          >
            Ассоциация рыбопромышленных предприятий Сахалинской области (АРСО)
          </a>
        </p>
      </motion.div>
    </section>
  );
}
