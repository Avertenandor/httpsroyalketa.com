import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Globe, Mountain, Compass, Waves } from 'lucide-react';
import { heroBackgrounds, tourismImages } from '@/config/images';

interface Provider {
  name: string;
  url: string;
  phone: string;
  description: string;
}

export default function Tourism() {
  const providers: Provider[] = [
    {
      name: 'Сахалинтурист',
      url: 'https://sakhalintourist.ru/',
      phone: '+7 (4242) 72-55-22',
      description: 'Экскурсии по Сахалину, морские прогулки, рыбалка, туры выходного дня.',
    },
    {
      name: 'SakhTravel',
      url: 'https://sakh.travel/',
      phone: '+7 (4242) 45-15-45',
      description: 'Джип-туры, вулканические плато, водопады, гастрономические маршруты.',
    },
    {
      name: 'Восток-тур Сахалин',
      url: 'https://vostoktour-sakhalin.ru/',
      phone: '+7 (4242) 75-20-30',
      description: 'Сезонные туры: горы, море, маяки; корпоративные программы.',
    },
    {
      name: 'Сахалин-Экспириенс',
      url: 'https://sakhalin-experience.ru/',
      phone: '+7 (924) 180-88-11',
      description: 'Снег и море: снегоходы зимой, море и трекинг летом; персональные гиды.',
    },
    {
      name: 'Островные маршруты',
      url: 'https://ostrovmarshrut.ru/',
      phone: '+7 (4242) 99-77-66',
      description: 'Маяки, лагуны, природные памятники; семейные и детские маршруты.',
    },
  ];

  return (
    <>
      <Seo
        title="Туризм на Сахалине"
        description="Лучшие туры по Сахалину: море, горы, рыбалка, маяки. Подборка провайдеров с телефонами и ссылками."
        path="/tourism"
        ogImage="/og/gallery.svg"
      />

      <Hero
        subtitle="Горы, море и маяки"
        title="Туризм на Сахалине"
        description="Подборка проверенных компаний: морские прогулки, джип‑туры, рыбалка и трекинг. Выбирайте по сезону и интересам."
        backgroundImage={heroBackgrounds[2].urlLarge}
        backgroundOverlay="dark"
      />

      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Провайдеры туров</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4">
            Топ‑5 компаний
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-3xl mx-auto">Позвоните напрямую или переходите на сайт для актуального расписания и стоимости.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {providers.map((p) => (
            <Card key={p.url}>
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ocean hover:text-gold transition-colors">
                  <Globe className="w-4 h-4" />
                  {p.url.replace('https://','').replace('http://','')}
                </a>
                <span className="text-foreground-muted">•</span>
                <a href={`tel:${p.phone.replace(/[^+\d]/g,'')}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" />
                  {p.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="premium-card p-6 sm:p-8 grid md:grid-cols-2 gap-6">
          <div>
            <Badge variant="ocean" className="mb-3">Сезоны и активности</Badge>
            <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
              <li><Waves className="inline w-4 h-4 mr-2" />Лето: море, маяки, морские птицы, гастрономия моря.</li>
              <li><Mountain className="inline w-4 h-4 mr-2" />Осень: грибы, брусника, треккинг, водопады.</li>
              <li><Compass className="inline w-4 h-4 mr-2" />Зима: снегоходы, прозрачные бухты, ледяные форматы.</li>
              <li>Весна: рыбалка, наблюдение за тюленями и птицами.</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="premium"><Link to="/sakhalin">Сахалин — о крае</Link></Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img src={tourismImages[2].urlLarge} alt={tourismImages[2].alt} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}


