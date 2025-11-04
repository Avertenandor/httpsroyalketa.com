import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { aboutImages } from '@/config/images';

export default function About() {
  return (
    <>
      <Seo
        title="О Нас"
        description="Роял Кета: пионеры устойчивого разведения лосося на острове Сахалин. Наша миссия, команда и партнёры."
        path="/about"
        ogImage="/og/about.png"
      />

      <Hero
        subtitle="Наша История"
        title="Совершенство Через Инновации"
        description="Сочетаем традиционные знания с современными технологиями для создания устойчивой аквакультуры"
        backgroundImage={aboutImages[0].urlLarge}
        backgroundOverlay="dark"
      />

      <section className="content-container py-20">
        <div className="max-w-3xl mx-auto prose-content">
          <Badge variant="gold" className="mb-6">Наша Миссия</Badge>
          <h2 className="text-3xl font-display font-bold text-gold mb-6">
            Устойчивое Разведение Лосося
          </h2>
          <p className="text-foreground-muted mb-6">
            Роял Кета была основана с видением: создать самое устойчивое и научно 
            продвинутое лососёвое хозяйство в России. Расположенные на острове Сахалин, 
            мы сочетаем традиционные рыболовецкие знания с передовыми техниками аквакультуры.
          </p>
          <p className="text-foreground-muted mb-6">
            Наша команда опытных учёных и специалистов по рыбному хозяйству неустанно 
            работает для обеспечения здоровья и качества наших лососёвых запасов, 
            поддерживая при этом высочайшие стандарты экологической ответственности.
          </p>

          <div className="mt-12 premium-card p-8">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">Наши Ценности</h3>
            <ul className="space-y-3">
              {[
                'Научное Совершенство',
                'Экологическая Устойчивость',
                'Прозрачность',
                'Образование Сообщества',
                'Качественная Продукция',
              ].map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}