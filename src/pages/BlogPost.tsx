import { useParams, Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, fetch post data based on slug
  const post = {
    title: 'Сезон Разведения 2025: Рекордные Числа',
    category: 'Научные Обновления',
    date: '2025-01-15',
    readTime: '5 мин',
    content: `
      <p>Наш последний цикл разведения превзошёл все ожидания, показатели выживаемости достигли уровня на 15% выше наших предыдущих рекордов. Это замечательное достижение является результатом нескольких ключевых инноваций в нашей методологии аквакультуры.</p>

      <h2>Передовое Управление Температурой</h2>
      <p>Мы внедрили новую систему прецизионного управления температурой, которая поддерживает оптимальные условия на протяжении всего периода инкубации. Эта технология позволяет нам динамически реагировать на изменения окружающей среды, минимизируя стресс у развивающихся икринок.</p>

      <h2>Оптимизированные Протоколы Кормления</h2>
      <p>Наша команда по питанию разработала индивидуальную кормовую смесь, специально адаптированную к генетическим характеристикам нашего лососёвого поголовья. Результаты оказались необычайными, с более быстрыми темпами роста и улучшенными показателями здоровья на всех стадиях жизни.</p>

      <h2>Программа Генетического Разнообразия</h2>
      <p>Мы продолжаем приоритетно заниматься генетическим разнообразием в нашей программе разведения, тщательно отбирая племенное поголовье для поддержания здорового генетического разнообразия. Этот подход обеспечивает долгосрочную устойчивость наших операций и устойчивость наших лососёвых популяций.</p>

      <h2>Взгляд Вперёд</h2>
      <p>Переходя в 2025 год, мы рады расширить наши мощности по разведению, продолжая при этом поддерживать высокие стандарты, которые делают икру Роял Кета исключительной. Мы приглашаем инвесторов и партнёров присоединиться к нам в этом пути совершенства устойчивой аквакультуры.</p>
    `,
  };

  return (
    <>
      <Seo
        title={post.title}
        description="Последние обновления сезона разведения от хозяйства Роял Кета"
        path={`/blog/${slug}`}
        ogImage="/og/blog.svg"
        type="article"
      />

      <div className="content-container py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к Блогу
          </Link>
        </Button>

        <article className="max-w-3xl mx-auto">
          <Badge variant="ocean" className="mb-4">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-foreground-muted mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} чтения</span>
            </div>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-p:text-foreground-muted prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold text-gold mb-4">
              Связанные Темы
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Аквакультура', 'Разведение', 'Устойчивость', 'Наука'].map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-12 premium-card p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              Хотите Узнать Больше?
            </h3>
            <p className="text-foreground-muted mb-6">
              Забронируйте тур, чтобы увидеть наши операции по разведению в действии
            </p>
            <Button asChild variant="premium" size="lg">
              <Link to="/hatchery-tour">Забронировать Тур</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}