import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { heroBackgrounds, sustainabilityImages, aboutImages, tourismImages } from '@/config/images';

export default function Sakhalin() {
  return (
    <>
      <Seo
        title="Сахалин — остров, который любит гостей"
        description="Природные дары Сахалина: море и тайга, маяки и водопады, люди и традиции. Сдержанная гордость и открытость к гостям материка."
        path="/sakhalin"
        ogImage="/og/gallery.svg"
      />

      <Hero
        subtitle="Остров сильного ветра и тёплого сердца"
        title="Сахалин"
        description="Море, горы, тайга, рыба и люди — то, чем мы живём и чем делимся с уважением и радостью."
        backgroundImage={heroBackgrounds[3].urlLarge}
        backgroundOverlay="dark"
      />

      {/* Overview */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">О крае</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold">Море, горы и тайга</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img src={sustainabilityImages[1].urlLarge} alt={sustainabilityImages[1].alt} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="space-y-3 text-sm sm:text-base text-foreground-muted leading-relaxed">
            <p>Сахалин — крупнейший остров России. Здесь строгая красота океана встречается с мягкостью таёжных распадков. Маяки и бухты, водопады и мхи, краб и кета — природа щедра и сильна.</p>
            <p>Сезоны раскрывают остров по‑разному: летом — тропы к маякам и морским птицам, осенью — тёплая тайга и ягоды, зимой — прозрачные льды и снег, весной — рыба и голоса птиц. Лучший формат — уважительный, бережный туризм с вниманием к природе и людям.</p>
            <p>Нам дороги традиции гостеприимства. Мы рады материковым гостям, ценим открытый диалог и уважение к краю.</p>
          </div>
        </div>
      </section>
      {/* Lighthouses & Bays */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-3 text-sm sm:text-base text-foreground-muted leading-relaxed">
            <Badge variant="ocean" className="mb-2">Маяки и бухты</Badge>
            <p>Юг Сахалина — земля маяков и туманов. Здесь навигация всегда была искусством, а маяки — символом ответственности и технического мышления моряков.</p>
            <p>Берег изрезан множеством бухт, куда заходят штормы и морские птицы. Наблюдать за приливом и отливом особенно интересно на высоких точках, где виден контраст океана и скал.</p>
            <p>Маршруты к маякам требуют внимания к погоде и экипировке: непромокаемая куртка, треккинговая обувь, запас воды и перекуса. Сотовая связь может пропадать.</p>
            <p>По возможности, выбирайте организованные туры с морскими переходами и разрешениями. Это безопаснее и бережнее к природе.</p>
            <p>Бухты — место встреч рыбалки, наблюдения за птицами и неспешных пикников. Здесь легко почувствовать масштаб и тишину острова.</p>
            <p>Фотографам подойдут рассветы и сумерки: мягкий свет, туманные переходы, силуэты маяков и рельеф береговой линии.</p>
            <p>Экологический аспект — важнейший. Пожалуйста, не оставляйте следов: уносите мусор, не подходите близко к гнездовьям и лежбищам животных.</p>
            <p>Зимой маршруты меняются: прозрачные льды и снежные карнизы открывают другие ракурсы. Требуется опыт и сопровождение.</p>
            <p>Море непредсказуемо: оцените прогноз и ветер, чтобы прогулка оставила только хорошие впечатления.</p>
            <p>Лучший опыт — когда видно не только объект, но и ландшафт, историю и ответственность людей, которые поддерживают навигацию.</p>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img src="/img/sakhalin/lighthouse-bay.webp" alt="Береговая линия с маяком и бухтой" className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img src="/img/sakhalin/satellite.webp" alt="Спутниковый вид острова (иллюстрация)" className="w-full h-full object-cover object-center" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Island in three images */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { title: 'Море и маяки', desc: 'Бесконечные горизонты, штормовые валуны и тихие заливы, к которым ведут тропы и дорога маяков.', img: aboutImages[1].urlLarge, alt: aboutImages[1].alt },
            { title: 'Тайга и водопады', desc: 'Кедровый стланик, брусника, мхи и каскады — учебник природы под открытым небом.', img: sustainabilityImages[2].urlLarge, alt: sustainabilityImages[2].alt },
            { title: 'Люди и ремёсла', desc: 'Доброжелательность и гордость за дело: рыба, море, наука, гостеприимство.', img: aboutImages[0].urlLarge, alt: aboutImages[0].alt },
          ].map((b) => (
            <Card key={b.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <img src={b.img} alt={b.alt} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>{b.title}</CardTitle>
                <CardDescription>{b.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Practical info */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="premium-card p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Badge variant="ocean" className="mb-3">Как добраться</Badge>
              <p className="text-sm sm:text-base text-foreground-muted mb-3">Основной аэропорт — Южно‑Сахалинск (UUS). Круглый год выполняются прямые рейсы из крупных городов страны; сезонные направления расширяются в пиковые месяцы.</p>
              <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
                <li>Перелёт 8–9 часов из центральной части; разница во времени — до +8–9 часов.</li>
                <li>На острове доступен прокат авто, такси и трансферы от туркомпаний.</li>
                <li>Связь и оплата — как на материке; рекомендуется офлайн‑карта для треккинга.</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img src="/img/sakhalin/uus-airport.webp" alt="Аэропорт Южно‑Сахалинск (UUS) — терминал" className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Гостиницы</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold">Где остановиться</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[{
            name: 'Santa Resort Hotel', site: 'https://santaresort.ru/', addr: 'Южно‑Сахалинск, Санаторная аллея, 3',
          },{
            name: 'Mega Palace', site: 'https://megapalace.ru/', addr: 'Южно‑Сахалинск, пр. Победы, 73',
          },{
            name: 'Belka Hotel', site: 'https://belka-hotel.ru/', addr: 'Южно‑Сахалинск, ул. Калинина, 38',
          },{
            name: 'Гостиница «Гагарин»', site: 'https://gagarin-hotel.ru/', addr: 'Южно‑Сахалинск, ул. Ленинская, 280',
          }].map((h) => (
            <Card key={h.name}>
              <CardHeader>
                <CardTitle>{h.name}</CardTitle>
                <CardDescription>{h.addr}</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <a href={h.site} target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-gold transition-colors">{h.site.replace('https://','')}</a>
                <p className="text-xs text-foreground-muted mt-2">Телефон см. на официальном сайте</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="premium-card p-6 sm:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Badge variant="ocean" className="mb-3">Аренда авто</Badge>
              <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
                <li>Пункты на UUS и в городе; нужны права РФ и депозит.</li>
                <li>Зимняя резина и полный привод — рекомендуются поздней осенью и зимой.</li>
                <li>Парковки во дворах и у гостиниц; вне города — осторожно на грунтовках.</li>
              </ul>
            </div>
            <div>
              <Badge variant="ocean" className="mb-3">Такси и трансфер</Badge>
              <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
                <li>Из аэропорта до центра 15–25 минут по трафику.</li>
                <li>Доступны городские службы и частные трансферы от туркомпаний.</li>
              </ul>
            </div>
            <div>
              <Badge variant="ocean" className="mb-3">Общественный транспорт</Badge>
              <ul className="list-disc pl-5 text-sm sm:text-base text-foreground-muted space-y-1">
                <li>Городские автобусы и маршрутные такси; расписание уточняйте на остановках/в приложениях.</li>
                <li>Для поездок к природным объектам — удобнее тур/аренда авто.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Sights */}
      <section className="content-container pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Маршруты</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold">Идеи для путешествия</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[{
            t: 'Маяки и бухты', d: 'Пешие маршруты к маякам, смотровые на заливы, наблюдение за птицами.', i: tourismImages[1].urlLarge, a: tourismImages[1].alt,
          }, {
            t: 'Тайга и водопады', d: 'Каскады, мхи и кедровый стланик — бережные тропы без спешки.', i: sustainabilityImages[2].urlLarge, a: sustainabilityImages[2].alt,
          }, {
            t: 'Море и гастрономия', d: 'Рыба, краб и дальневосточные вкусы. Важно следовать сезонности и квотам.', i: aboutImages[0].urlLarge, a: aboutImages[0].alt,
          }].map((s) => (
            <Card key={s.t}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                <img src={s.i} alt={s.a} className="w-full h-full object-cover object-[50%_45%]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle>{s.t}</CardTitle>
                <CardDescription>{s.d}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="premium"><Link to="/tourism">Смотреть туры и контакты провайдеров</Link></Button>
        </div>
      </section>
    </>
  );
}


