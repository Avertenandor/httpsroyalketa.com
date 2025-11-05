import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { heroBackgrounds } from '@/config/images';

export default function Agreements() {
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Договор №${i + 1}`,
    text:
      'Договор на доработке у юриста для полного и всестороннего соответствия текущему законодательству.',
  }));

  return (
    <>
      <Seo
        title="Договоры"
        description="Комплект договоров и юридических документов. На текущем этапе — заглушки, проходит юридическая доработка."
        path="/agreements"
        ogImage="/og/legal.svg"
      />

      <Hero
        subtitle="Юридические документы"
        title="Договоры"
        description="Комплект договоров готовится к публикации после юридической экспертизы."
        backgroundImage={heroBackgrounds[5]?.urlLarge || heroBackgrounds[0].urlLarge}
        backgroundOverlay="dark"
      />

      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="ocean" className="mb-3 sm:mb-4">Статус</Badge>
          <p className="text-sm sm:text-base text-foreground-muted max-w-3xl mx-auto">
            Все образцы договоров проходят финальную юридическую проверку. После завершения экспертизы
            на этой странице будут опубликованы актуальные версии.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((it) => (
            <Card key={it.id}>
              <CardHeader>
                <CardTitle>{it.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  {it.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}


