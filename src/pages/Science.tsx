import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  processImages,
  productionImages,
  // sustainabilityImages,
  qualityImages,
} from '@/config/images';
import { Beaker, Microscope, Cpu, Activity, Droplets, ShieldCheck, BookOpen, FlaskRound, Sparkles, Radar } from 'lucide-react';

export default function Science() {
  return (
    <>
      <Seo
        title="Наша Наука"
        description="Передовая методология аквакультуры: от отбора икры до выпуска смолтов. Изучите наши практики устойчивого разведения лосося."
        path="/science"
        ogImage="/og/science.png"
      />

      <Hero
        subtitle="Исследования и Инновации"
        title="Наука аквакультуры: от икринки до океана"
        description="Показываем, как мы объединяем генетику, биобезопасность, питание, цифровые датчики и экологию, чтобы выращивать идеального лосося устойчиво и прозрачно."
        backgroundImage={productionImages[0].urlLarge}
        backgroundOverlay="dark"
      />

      {/* Overview */}

      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="ocean" className="mb-3 sm:mb-4">Почему это важно</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">
            Современная аквакультура — это прикладная наука
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-3xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
            Мы выращиваем лосося, управляя десятками переменных — от кислорода и корма до
            микробиотики воды и генетического разнообразия. Наука позволяет делать это
            устойчиво, предсказуемо и вкусно для потребителя.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Что мы измеряем</CardTitle>
              <CardDescription>Кислород, pH, температуру, мутность, скорость потока, состав корма, поведение рыбы</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground-muted">
              Мы применяем непрерывный мониторинг и IoT‑датчики, чтобы держать параметры в
              идеальном «зелёном коридоре». Алгоритмы раннего предупреждения сигналят о
              рисках задолго до того, как они проявятся визуально.
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Что получает потребитель</CardTitle>
              <CardDescription>Вкус, безопасность, прозрачность, стабильность качества</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground-muted">
              Мы подтверждаем происхождение партии, соблюдаем «холодовую цепь» и оформляем
              электронные ВСД в «Меркурии». Это делает продукт предсказуемым, проверяемым и
              соответствующим лучшим практикам отрасли.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Наши направления</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">
            Исследовательские столпы
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: Beaker, title: 'Генетика и селекция', desc: 'Сбалансированная селекция — устойчивый рост без потери вкуса и выносливости.' },
            { icon: Microscope, title: 'Био‑безопасность', desc: 'Профилактика превыше лечения: санитарные окна, карантин, протоколы дезинфекции.' },
            { icon: Droplets, title: 'Качество воды', desc: 'Кислород > 85%, стабильный pH, низкая мутность, контроль азота.' },
            { icon: Activity, title: 'Питание и здоровье', desc: 'Функциональные корма, иммуномодуляторы и стресс‑менеджмент.' },
            { icon: Cpu, title: 'IoT и аналитика', desc: 'Сенсоры + ML анализ аномалий для предсказуемости и эффективности.' },
            { icon: ShieldCheck, title: 'Трассируемость', desc: 'Документооборот, эВСД «Меркурий», аудит цепочки поставок.' },
          ].map((x) => (
            <Card key={x.title} className="h-full">
              <CardHeader>
                <x.icon className="w-7 h-7 text-ocean mb-2" />
                <CardTitle>{x.title}</CardTitle>
                <CardDescription>{x.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Процесс</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">Цикл разведения</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { stage: 'Отбор икры', desc: 'Премиальный генетический материал и санитарные протоколы', img: productionImages[0].urlMedium },
            { stage: 'Инкубация', desc: 'Температурные кривые, кислород и бережный стресс‑контроль', img: processImages[0].urlMedium },
            { stage: 'Выращивание', desc: 'Питание, вода, поведенческий мониторинг и биобезопасность', img: processImages[1].urlMedium },
            { stage: 'Выпуск смолтов', desc: 'Здоровые смолты уходят в естественную среду', img: '/img/science/smolt-release.webp' },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                  <img src={item.img} alt={item.stage} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="text-sm text-foreground-muted">Шаг {idx + 1}</div>
                <CardTitle>{item.stage}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Innovations highlight */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="premium-card p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Badge variant="ocean" className="mb-3">Инновации</Badge>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-3">AI‑аналитика, датчики и «умная» вода</h3>
              <p className="text-sm sm:text-base text-foreground-muted mb-3 leading-relaxed">
                Мы используем датчики растворённого кислорода, турбидности, температуры и расхода воды,
                а также компьютерное зрение для анализа поведения рыбы. Модели предсказывают всплески
                стресса и предлагают корректировки по аэрации и режимам кормления.
              </p>
              <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
                <li>ML‑выявление аномалий (ранний стресс, болезни)</li>
                <li>Оптимизация конверсии корма (FCR) и темпов роста</li>
                <li>Автоматические алерты и протоколы вмешательства</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="outline"><Link to="/mercury">Трассируемость и «Меркурий»</Link></Button>
                <Button asChild variant="premium"><Link to="/hatchery-tour">Экскурсия на завод</Link></Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img src={qualityImages[0].urlLarge} alt={qualityImages[0].alt} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/70 border border-white/10 text-xs">
                <Radar className="w-4 h-4 text-ocean" />
                Сенсоры и контроль качества
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Публикации и данные</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">Что мы открыто показываем</h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto">
            Мы готовим тематические записки — от селекции до качества воды. Вот краткий дайджест.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: BookOpen, title: 'Селекция и выносливость', desc: 'Метод балансировки роста/иммунитета для лосося в холодной воде.' },
            { icon: FlaskRound, title: 'Микробиология воды', desc: 'Связь мути, аммония и поведения рыбы при смене корма.' },
            { icon: Sparkles, title: 'Сенсоры и FCR', desc: 'Как ML помогает снижать конверсию корма без потери темпов роста.' },
          ].map((it) => (
            <Card key={it.title}>
              <CardHeader>
                <it.icon className="w-6 h-6 text-ocean mb-2" />
                <CardTitle>{it.title}</CardTitle>
                <CardDescription>{it.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Team & CTA */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="premium-card p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-3">Команда и открытые двери</h3>
          <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 max-w-3xl mx-auto">
            Нашу лабораторию ведут специалисты по аквакультуре, биологии и автоматизации. Мы готовы
            делиться опытом — приезжайте на экскурсию, задавайте вопросы и смотрите, как рождается
            премиальная рыба.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="premium" size="lg" className="w-full sm:w-auto"><Link to="/hatchery-tour">Забронировать экскурсию</Link></Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto"><Link to="/caviar">Перейти к продукту</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}