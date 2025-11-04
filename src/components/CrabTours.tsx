import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Anchor, Waves, Snowflake, Sun, ExternalLink, Clock } from 'lucide-react';

interface CrabTour {
  operator: string;
  tourName: string;
  description: string;
  seasons: ('winter' | 'summer')[];
  duration?: string;
  website: string;
  highlights: string[];
}

const tours: CrabTour[] = [
  {
    operator: 'SakhTravel',
    tourName: 'Крабалка на Сахалине',
    description: 'Профессиональная организация крабалки - зимняя и летняя программы',
    seasons: ['winter', 'summer'],
    duration: '4-8 часов',
    website: 'https://sakhtravel.com/rybalka-sahalin/krabalka',
    highlights: [
      'Зимняя крабалка со льда',
      'Летняя крабалка с катера',
      'Опытные инструкторы',
      'Все оборудование включено',
    ],
  },
  {
    operator: 'ПроСахалин',
    tourName: 'Крабалка',
    description: 'Незабываемый опыт ловли камчатского краба',
    seasons: ['winter', 'summer'],
    duration: 'Полный день',
    website: 'https://prosakh.ru/nashi-tury/krabalka/',
    highlights: [
      'Поймай своего краба',
      'Фото с трофеями',
      'Горячий обед на природе',
      'Трансфер включен',
    ],
  },
  {
    operator: 'СахТерра',
    tourName: 'Крабалка зимняя',
    description: 'Зимняя ловля краба через лунки во льду',
    seasons: ['winter'],
    duration: '6-8 часов',
    website: 'https://posahalinu.ru/morskaya-rybalka-na-sahaline/krabalka-zimnyaya',
    highlights: [
      'Подлёдная ловля',
      'Тёплая экипировка',
      'Горячий чай и уха',
      'Профессиональные гиды',
    ],
  },
  {
    operator: 'Сахалин и Курилы',
    tourName: 'Рыбалка на краба',
    description: 'Морская рыбалка с соблюдением норм вылова',
    seasons: ['summer'],
    duration: 'От 4 часов',
    website: 'https://sakhalintours.ru/rybalka-na-kraba',
    highlights: [
      'Соблюдение норм вылова',
      'Безопасность на воде',
      'Лицензированные суда',
      'Примечания по законодательству',
    ],
  },
  {
    operator: 'Dream Sakhalin',
    tourName: 'Крабалка — охота на краба',
    description: 'Экскурсия-приключение длительностью 8 часов',
    seasons: ['winter', 'summer'],
    duration: '8 часов',
    website: 'https://dream-sakhalin.com/excursions/36177-krabalka-okhota-na-kraba',
    highlights: [
      'Полный день на крабалке',
      'Профессиональное снаряжение',
      'Обед на природе',
      'Сертификат участника',
    ],
  },
];

export function CrabTours() {
  return (
    <section className="content-container py-20 bg-gradient-to-b from-background to-ocean/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Туристические туры</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Крабалка для туристов
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Поймайте камчатского краба своими руками! Зимние и летние туры с опытными гидами
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tours.map((tour, index) => (
          <motion.div
            key={tour.operator}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Anchor className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex gap-1">
                    {tour.seasons.includes('winter') && (
                      <Badge variant="default" className="bg-blue-500/20 text-blue-300">
                        <Snowflake className="w-3 h-3 mr-1" />
                        Зима
                      </Badge>
                    )}
                    {tour.seasons.includes('summer') && (
                      <Badge variant="default" className="bg-orange-500/20 text-orange-300">
                        <Sun className="w-3 h-3 mr-1" />
                        Лето
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-sm text-ocean font-semibold">{tour.operator}</span>
                </div>
                <CardTitle className="text-xl">{tour.tourName}</CardTitle>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {tour.duration && (
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>Длительность: {tour.duration}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Waves className="w-4 h-4 text-ocean mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-muted">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="premium"
                    size="sm"
                    className="w-full mt-4"
                  >
                    <a
                      href={tour.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Подробнее и бронирование</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Info section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="premium-card p-8 text-center"
      >
        <h3 className="text-2xl font-display font-bold text-gold mb-4">
          Что нужно знать о крабалке
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
          <div>
            <div className="w-12 h-12 rounded-full bg-ocean/20 flex items-center justify-center mb-3">
              <Snowflake className="w-6 h-6 text-ocean" />
            </div>
            <h4 className="font-semibold text-gold mb-2">Зимняя крабалка</h4>
            <p className="text-sm text-foreground-muted">
              С декабря по март. Ловля краба через лунки во льду с использованием специальных ловушек.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Sun className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-semibold text-gold mb-2">Летняя крабалка</h4>
            <p className="text-sm text-foreground-muted">
              С мая по октябрь. Ловля с катера или с берега. Более комфортные условия и живописные виды.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-3">
              <Waves className="w-6 h-6 text-ocean" />
            </div>
            <h4 className="font-semibold text-gold mb-2">Нормы вылова</h4>
            <p className="text-sm text-foreground-muted">
              Соблюдайте правила любительского рыболовства. Операторы предоставляют всю информацию по лимитам.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
