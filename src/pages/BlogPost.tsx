import { useParams, Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, fetch post data based on slug
  const post = {
    title: 'Breeding Season 2025: Record Numbers',
    category: 'Science Updates',
    date: '2025-01-15',
    readTime: '5 min',
    content: `
      <p>Our latest breeding cycle has exceeded all expectations, with survival rates reaching 15% above our previous records. This remarkable achievement is the result of several key innovations in our aquaculture methodology.</p>

      <h2>Advanced Temperature Control</h2>
      <p>We've implemented a new precision temperature management system that maintains optimal conditions throughout the incubation period. This technology allows us to respond dynamically to environmental changes while minimizing stress on developing eggs.</p>

      <h2>Optimized Feeding Protocols</h2>
      <p>Our nutrition team developed a custom feed blend specifically tailored to the genetic characteristics of our salmon stock. The results have been extraordinary, with faster growth rates and improved health markers across all life stages.</p>

      <h2>Genetic Diversity Program</h2>
      <p>We continue to prioritize genetic diversity in our breeding program, carefully selecting broodstock to maintain healthy genetic variation. This approach ensures the long-term sustainability of our operations and the resilience of our salmon populations.</p>

      <h2>Looking Ahead</h2>
      <p>As we move into 2025, we're excited to expand our breeding capacity while maintaining the high standards that make Royal Keta caviar exceptional. We invite investors and partners to join us in this journey of sustainable aquaculture excellence.</p>
    `,
  };

  return (
    <>
      <Seo
        title={post.title}
        description="Latest breeding season update from Royal Keta hatchery"
        path={`/blog/${slug}`}
        ogImage="/og/blog.svg"
        type="article"
      />

      <div className="content-container py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
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
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} read</span>
            </div>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-p:text-foreground-muted prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold text-gold mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Aquaculture', 'Breeding', 'Sustainability', 'Science'].map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-12 premium-card p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-foreground-muted mb-6">
              Book a tour to see our breeding operations in action
            </p>
            <Button asChild variant="premium" size="lg">
              <Link to="/hatchery-tour">Book Tour</Link>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}
