import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

export default function Caviar() {
  const products = [
    {
      name: 'Красная Икра - Классик',
      weight: '250г',
      description: 'Премиальная икра тихоокеанского лосося, деликатный вкус',
    },
    {
      name: 'Красная Икра - Подарочный Набор',
      weight: '500г',
      description: 'Роскошная упаковка, идеально для подарка',
    },
    {
      name: 'Дегустационный Набор',
      weight: '3x100г',
      description: 'Откройте для себя полный спектр вкуса',
    },
  ];

  return (
    <>
      <Seo
        title="Премиальная Икра"
        description="Премиальная красная икра Роял Кета. Устойчивое производство, изысканный вкус. Доступна для оптовых заказов."
        path="/caviar"
        ogImage="/og/caviar.svg"
      />

      <Hero
        subtitle="Царская Кета Икра"
        title="Совершенство в Каждой Баночке"
        description="Премиальная красная икра из устойчиво разводимого тихоокеанского лосося"
      />

      <section className="content-container py-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-4">Наша Продукция</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Коллекция Икры
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <Award className="h-10 w-10 text-gold mb-3" />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.weight}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground-muted">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Оптовые Запросы
          </h3>
          <p className="text-foreground-muted mb-6">
            Свяжитесь с нами для получения оптовых цен и наличия
          </p>
          <a
            href="mailto:hello@royalketa.com"
            className="text-gold hover:text-gold-light transition-colors"
          >
            hello@royalketa.com
          </a>
        </div>
      </section>
    </>
  );
}