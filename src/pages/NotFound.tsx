import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Seo } from '@/seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Страница Не Найдена"
        description="Страница, которую вы ищете, не существует."
        path="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="content-container text-center">
          <div className="text-8xl font-bold gradient-gold mb-4">404</div>
          <h1 className="text-4xl font-display font-bold text-gold mb-4">
            Страница Не Найдена
          </h1>
          <p className="text-foreground-muted mb-8 max-w-md mx-auto">
            Страница, которую вы ищете, уплыла. Давайте вернём вас в знакомые воды.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/">Вернуться Домой</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Связаться с Нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}