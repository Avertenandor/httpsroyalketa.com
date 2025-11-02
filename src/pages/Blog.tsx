import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      slug: 'breeding-season-2025',
      title: 'Сезон Разведения 2025: Рекордные Числа',
      excerpt: 'Наш последний цикл разведения показывает исключительные результаты с увеличением выживаемости на 15%. Изучите техники, которые это сделали возможным.',
      date: '2025-01-15',
      readTime: '5 мин',
      category: 'Научные Обновления',
    },
    {
      slug: 'family-tour-highlights',
      title: 'Моменты Семейных Туров: Декабрь 2024',
      excerpt: 'Обзор запоминающихся моментов наших декабрьских семейных туров, включая специальные праздничные дегустации икры.',
      date: '2024-12-28',
      readTime: '3 мин',
      category: 'Туры',
    },
    {
      slug: 'sustainable-aquaculture',
      title: 'Практики Устойчивой Аквакультуры',
      excerpt: 'Глубокое погружение в наши экологические обязательства и то, как мы поддерживаем экологический баланс при масштабных операциях.',
      date: '2024-12-10',
      readTime: '7 мин',
      category: 'Устойчивость',
    },
    {
      slug: 'caviar-quality-control',
      title: 'Как Мы Обеспечиваем Качество Икры',
      excerpt: 'От икры до банки: строгий процесс контроля качества, который делает икру Роял Кета исключительной.',
      date: '2024-11-20',
      readTime: '6 мин',
      category: 'Производство',
    },
    {
      slug: 'investment-model-update',
      title: 'Обновление Инвестиционных Моделей Q4',
      excerpt: 'Отчёт о прозрачности доходов Q4 по всем инвестиционным моделям, плюс предстоящие возможности на 2025.',
      date: '2024-11-05',
      readTime: '8 мин',
      category: 'Инвестиции',
    },
    {
      slug: 'winter-operations',
      title: 'Зимние Операции на Хозяйстве',
      excerpt: 'Как мы поддерживаем оптимальные условия для разведения лосося в суровые сахалинские зимы.',
      date: '2024-10-15',
      readTime: '4 мин',
      category: 'Операции',
    },
  ];

  return (
    <>
      <Seo
        title="Блог"
        description="Последние новости, обновления и взгляды из хозяйства Роял Кета. Изучайте техники разведения, моменты туров и инвестиционные обновления."
        path="/blog"
        ogImage="/og/blog.svg"
      />

      <Hero
        subtitle="Новости и Взгляды"
        title="Блог Роял Кета"
        description="Истории из хозяйства, обновления разведения и отраслевые взгляды"
      />

      <section className="content-container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <Badge variant="ocean" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <CardTitle className="text-xl mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-gold-light transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-4 text-sm text-foreground-muted mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('ru-RU', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={`/blog/${post.slug}`}>Читать Далее →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Оставайтесь в Курсе
          </h3>
          <p className="text-foreground-muted mb-6">
            Подпишитесь на нашу рассылку для ежемесячных обновлений о сезонах разведения, турных мероприятиях и инвестиционных возможностях.
          </p>
          <Button asChild variant="premium" size="lg">
            <a href="mailto:hello@royalketa.com?subject=Подписка на Рассылку">
              Подписаться через Email
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}