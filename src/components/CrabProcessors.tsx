import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Globe, ExternalLink, Building2 } from 'lucide-react';

interface CrabProcessor {
  name: string;
  description: string;
  location: string;
  website?: string;
  websiteStatus: 'active' | 'no-site' | 'group';
  notes?: string;
  groupInfo?: string;
}

const processors: CrabProcessor[] = [
  {
    name: 'Гидрострой',
    description: 'Рыбоперерабатывающий комплекс «Крабозаводск»',
    location: 'о. Шикотан',
    website: 'https://gidrostroy.com',
    websiteStatus: 'active',
    notes: 'Современный комплекс переработки крабов и морепродуктов',
  },
  {
    name: 'Рыбокомбинат «Островной»',
    description: 'Промысел краба ловушками',
    location: 'Группа УК «Дальневосточный рыбак»',
    website: 'https://www.mcfef.com/companies-ostrovnoi/',
    websiteStatus: 'group',
    groupInfo: 'УК «Дальневосточный рыбак»',
    notes: 'Ведёт промысел крабовыми ловушками',
  },
  {
    name: 'ООО «Островной-Краб»',
    description: 'Краболовный флот',
    location: 'Группа УК «ДВ Рыбак»',
    website: 'https://www.mcfef.com/news_company/ostrovnoy_krab_news/',
    websiteStatus: 'group',
    groupInfo: 'УК «Дальневосточный рыбак»',
    notes: 'Специализация на вводе краболовов',
  },
  {
    name: 'Южно-Курильский рыбокомбинат (ЮКРК)',
    description: 'Широкий ассортимент морепродуктов и беспозвоночных',
    location: 'Южно-Курильск',
    website: 'https://ykrk.ru',
    websiteStatus: 'active',
    notes: 'Официальный сайт, полный цикл переработки',
  },
  {
    name: 'АО «Северо-Курильская база сейнерного флота»',
    description: 'Промысловый флот с крабовым направлением',
    location: 'Северо-Курильск',
    website: 'https://www.korabel.ru/catalogue/company/severo_kurilskaya_baza_seynernogo_flota.html',
    websiteStatus: 'group',
    groupInfo: 'Партнёр на salmonica.ru',
    notes: 'СК БСФ - отраслевой справочник',
  },
  {
    name: 'ООО «Краб»',
    description: 'Переработка и промысел ракообразных',
    location: 'Макаров',
    website: 'https://fish-sakh.ru/businesses/ooo-krab/',
    websiteStatus: 'no-site',
    notes: 'Карточка на АРСО, официального сайта нет',
  },
  {
    name: 'ООО «Монерон»',
    description: 'Переработка ракообразных и моллюсков',
    location: 'Южно-Сахалинск',
    website: 'https://fish-sakh.ru/businesses/ooo-moneron/',
    websiteStatus: 'no-site',
    notes: 'В ФГИС/РСХН: краб и конечности',
  },
];

export function CrabProcessors() {
  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="ocean" className="mb-4">Промысловые партнеры</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Крабовая промышленность Сахалина
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Ведущие предприятия по добыче и переработке камчатского краба на Сахалине и Курилах
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processors.map((processor, index) => (
          <motion.div
            key={processor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-ocean transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center">
                    {processor.websiteStatus === 'active' ? (
                      <Factory className="w-6 h-6 text-ocean" />
                    ) : processor.websiteStatus === 'group' ? (
                      <Building2 className="w-6 h-6 text-ocean" />
                    ) : (
                      <Factory className="w-6 h-6 text-ocean opacity-50" />
                    )}
                  </div>
                  {processor.websiteStatus === 'active' && (
                    <Badge variant="default" className="bg-ocean/20 text-ocean">
                      Официальный сайт
                    </Badge>
                  )}
                  {processor.websiteStatus === 'group' && (
                    <Badge variant="default" className="bg-gold/20 text-gold">
                      Группа компаний
                    </Badge>
                  )}
                  {processor.websiteStatus === 'no-site' && (
                    <Badge variant="outline" className="opacity-60">
                      Без сайта
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{processor.name}</CardTitle>
                <CardDescription>{processor.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground-muted">
                    <Globe className="w-4 h-4" />
                    <span>{processor.location}</span>
                  </div>

                  {processor.groupInfo && (
                    <div className="text-xs text-ocean bg-ocean/10 rounded px-2 py-1">
                      {processor.groupInfo}
                    </div>
                  )}

                  {processor.notes && (
                    <p className="text-xs text-foreground-muted italic">
                      {processor.notes}
                    </p>
                  )}

                  {processor.website && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full mt-2"
                    >
                      <a
                        href={processor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>
                          {processor.websiteStatus === 'no-site'
                            ? 'Профиль на АРСО'
                            : 'Посетить сайт'}
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-foreground-muted">
          * Информация собрана из открытых источников: АРСО, отраслевые справочники, сайты компаний
        </p>
      </motion.div>
    </section>
  );
}
