import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Seo } from '@/seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="content-container text-center">
          <div className="text-8xl font-bold gradient-gold mb-4">404</div>
          <h1 className="text-4xl font-display font-bold text-gold mb-4">
            Page Not Found
          </h1>
          <p className="text-foreground-muted mb-8 max-w-md mx-auto">
            The page you're looking for has swum away. Let's get you back to familiar waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
