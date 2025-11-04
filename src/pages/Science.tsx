import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { productionImages } from '@/config/images';

export default function Science() {
  return (
    <>
      <Seo
        title="Наша Наука"
        description="Передовая методология аквакультуры: от отбора икры до выпуска смолтов. Изучите наши практики устойчивого разведения лосося."
        path="/science"
        ogImage="/og/science.svg"
      />

      <Hero
        subtitle="Исследования и Инновации"
        title="Наука за Совершенством"
        description="Наша методология сочетает традиционные знания с современными техниками аквакультуры"
        backgroundImage={productionImages[0].urlLarge}
        backgroundOverlay="dark"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="ocean" className="mb-4">Процесс</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Цикл Разведения
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stage: '1. Отбор Икры', desc: 'Тщательный отбор премиального генетического материала' },
            { stage: '2. Инкубация', desc: 'Контролируемая температура и уровень кислорода' },
            { stage: '3. Кормление', desc: 'Оптимизированное питание для роста' },
            { stage: '4. Выпуск', desc: 'Здоровые смолты выпускаются в естественные воды' },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="text-4xl font-bold text-gold mb-2">{idx + 1}</div>
                <CardTitle>{item.stage}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 premium-card p-8">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">Наша Команда</h3>
          <p className="text-foreground-muted">
            Возглавляется опытными учёными-аквакультурологами и специалистами по рыбному хозяйству с десятилетиями совместного опыта в разведении лосося и природоохранной деятельности.
          </p>
        </div>
      </section>
    </>
  );
}