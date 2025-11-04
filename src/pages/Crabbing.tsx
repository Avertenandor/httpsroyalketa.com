import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { CrabProcessors } from '@/components/CrabProcessors';
import { CrabTours } from '@/components/CrabTours';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Waves, Anchor, Ship, AlertCircle } from 'lucide-react';

export default function Crabbing() {
  const facts = [
    {
      icon: Ship,
      title: 'Камчатский краб',
      description: 'Самый ценный вид — вес до 7 кг, размах клешней до 1.5 метров',
    },
    {
      icon: Anchor,
      title: 'Промысловые зоны',
      description: 'Воды вокруг Сахалина и Курильских островов — одни из самых богатых',
    },
    {
      icon: Waves,
      title: 'Устойчивый промысел',
      description: 'Строгие квоты и сезоны ловли для сохранения популяции',
    },
  ];

  return (
    <>
      <Seo
        title="Крабалка на Сахалине"
        description="Промысловые предприятия и туристические туры по ловле камчатского краба. Крабалка зимой и летом на Сахалине и Курилах."
        path="/crabbing"
        ogImage="/og/crabbing.svg"
      />

      <Hero
        subtitle="Крабалка на Сахалине"
        title="Камчатский краб — сокровище дальневосточных морей"
        description="Познакомьтесь с крабовой индустрией Сахалина: от промысловых предприятий до захватывающих туристических туров. Поймайте краба своими руками!"
      />

      {/* Introduction section */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="ocean" className="mb-4">О крабе</Badge>
              <h2 className="text-3xl font-display font-bold text-gold mb-4">
                Король дальневосточных морей
              </h2>
              <p className="text-foreground-muted mb-4">
                Камчатский краб (Paralithodes camtschaticus) — один из самых ценных морепродуктов в мире.
                Воды вокруг Сахалина и Курильских островов создают идеальные условия для его обитания.
              </p>
              <p className="text-foreground-muted">
                Сахалинская область — один из ключевых регионов по добыче краба в России.
                Здесь работают крупные перерабатывающие заводы, современные краболовные флоты,
                а также действуют уникальные туристические программы «крабалки» для гостей острова.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-ocean/20 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-ocean" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold mb-1">{fact.title}</h4>
                      <p className="text-sm text-foreground-muted">{fact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Industrial partners */}
      <CrabProcessors />

      {/* Tourist tours */}
      <CrabTours />

      {/* Disclaimer */}
      <section className="content-container py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 border-l-4 border-ocean"
        >
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-ocean flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gold mb-2">Важная информация</h4>
              <p className="text-sm text-foreground-muted mb-2">
                <strong>Для промысловых компаний:</strong> Информация собрана из открытых источников
                (АРСО, отраслевые справочники, официальные сайты). Если вы представитель компании
                и хотите обновить информацию — свяжитесь с нами.
              </p>
              <p className="text-sm text-foreground-muted">
                <strong>Для туристов:</strong> Все туры организуются лицензированными операторами
                с соблюдением правил любительского рыболовства. Уточняйте актуальные нормы вылова
                и сезоны у организаторов.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
