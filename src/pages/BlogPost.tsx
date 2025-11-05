import { useParams, Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, fetch post data based on slug
  const post = slug === 'microplastics-ocean-pollution'
    ? {
        title: 'Микропластик и мусорные острова: что мы можем сделать',
        category: 'Океан и Экология',
        date: '2025-11-05',
        readTime: '8 мин',
        content: `
          <p><strong>Микропластик</strong> — это фрагменты пластика меньше 5 мм. Такое определение использует <a href="https://marinedebris.noaa.gov/what-are-microplastics" target="_blank" rel="noopener">NOAA Marine Debris Program</a>. Источники — износ шин, синтетические волокна, фрагментация упаковки, косметика прошлых лет.</p>

          <h2>Масштаб проблемы</h2>
          <p>По оценке в журнале <em>Science</em> (Jambeck et al., 2015), в 2010 году в океан попало <strong>4,8–12,7 млн тонн</strong> пластиковых отходов с суши (<a href="https://www.science.org/doi/10.1126/science.1260352" target="_blank" rel="noopener">doi:10.1126/science.1260352</a>). Отчёт <a href="https://www.unep.org/resources/report/pollution-solution-global-assessment-marine-litter-and-plastic-pollution" target="_blank" rel="noopener">UNEP «From Pollution to Solution» (2021)</a> подтверждает растущие объёмы и указывает на риски для экосистем и питания человека.</p>

          <h2>Мусорные пятна океанов</h2>
          <p>Самое известное — <strong>Большое тихоокеанское мусорное пятно</strong>. По данным <a href="https://theoceancleanup.com/great-pacific-garbage-patch/" target="_blank" rel="noopener">The Ocean Cleanup</a>, оно состоит в основном из мелких фрагментов и сетей. Пятна формируются океаническими гирями и концентрируют плавающий пластик.</p>

          <h2>Наш вклад в решение</h2>
          <ul>
            <li><strong>Фильтрация и «нулевой сброс пластика»</strong> на хозяйстве: сетки‑ловушки, отсутствие одноразовой пленки на критических участках, сортировка и контроль выдачи расходников.</li>
            <li><strong>Текстиль без микроволокон</strong>: рабочая форма и салфетки — с низким ворсом или из натуральных волокон; отдельные циклы стирки с фильтрами.</li>
            <li><strong>Обучение гостей</strong>: на турах рассказываем о микропластике и бережном отношении к воде; доступна памятка с простыми шагами снижения нагрузки.</li>
            <li><strong>Трассируемость и аудит</strong>: электронные ВСД, учёт упаковки и обратная логистика.</li>
          </ul>

          <h2>Что может сделать каждый</h2>
          <ul>
            <li>Стирать синтетику реже и при более низких температурах; использовать мешки‑фильтры.</li>
            <li>Сократить одноразовый пластик; сортировать отходы.</li>
            <li>Поддерживать проекты очистки и научные программы мониторинга.</li>
          </ul>

          <blockquote>Выражаем благодарность научному сообществу за самоотверженную работу: авторам исследований (<em>Science</em>), экспертам <em>NOAA</em>, аналитикам <em>UNEP</em>, командам гражданской науки и инженерам, создающим решения для очистки океанов.</blockquote>
        `,
      }
    : {
        title: 'Сезон Разведения 2025: Рекордные Числа',
        category: 'Научные Обновления',
        date: '2025-01-15',
        readTime: '5 мин',
        content: `
          <p>Наш последний цикл разведения превзошёл все ожидания, показатели выживаемости достигли уровня на 15% выше наших предыдущих рекордов. Это стало возможно благодаря ряду инноваций.</p>
          <h2>Передовое управление температурой</h2>
          <p>Прецизионное управление температурой поддерживает оптимальные условия на всём цикле инкубации.</p>
          <h2>Оптимизированные протоколы кормления</h2>
          <p>Индивидуальная кормовая смесь, адаптированная к генетическим характеристикам стада.</p>
          <h2>Генетическое разнообразие</h2>
          <p>Поддерживаем здоровое генетическое разнообразие племенного стада — фундамент устойчивости.</p>
        `,
      };

  return (
    <>
      <Seo
        title={post.title}
        description="Последние обновления сезона разведения от хозяйства Роял Кета"
        path={`/blog/${slug}`}
        ogImage="/og/blog.png"
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