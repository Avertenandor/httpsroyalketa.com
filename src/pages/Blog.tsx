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
      title: 'Breeding Season 2025: Record Numbers',
      excerpt: 'Our latest breeding cycle shows exceptional results with 15% increase in survival rates. Learn about the techniques that made this possible.',
      date: '2025-01-15',
      readTime: '5 min',
      category: 'Science Updates',
    },
    {
      slug: 'family-tour-highlights',
      title: 'Family Tour Highlights: December 2024',
      excerpt: 'Recap of memorable moments from our December family tours, including special holiday caviar tasting events.',
      date: '2024-12-28',
      readTime: '3 min',
      category: 'Tours',
    },
    {
      slug: 'sustainable-aquaculture',
      title: 'Sustainable Aquaculture Practices',
      excerpt: 'Deep dive into our environmental commitment and how we maintain ecological balance while operating at scale.',
      date: '2024-12-10',
      readTime: '7 min',
      category: 'Sustainability',
    },
    {
      slug: 'caviar-quality-control',
      title: 'How We Ensure Caviar Quality',
      excerpt: 'From roe to jar: the rigorous quality control process that makes Royal Keta caviar exceptional.',
      date: '2024-11-20',
      readTime: '6 min',
      category: 'Production',
    },
    {
      slug: 'investment-model-update',
      title: 'Investment Models Q4 Update',
      excerpt: 'Transparency report on Q4 returns across all investment models, plus upcoming opportunities for 2025.',
      date: '2024-11-05',
      readTime: '8 min',
      category: 'Investment',
    },
    {
      slug: 'winter-operations',
      title: 'Winter Operations at the Hatchery',
      excerpt: 'How we maintain optimal conditions for salmon breeding during harsh Sakhalin winters.',
      date: '2024-10-15',
      readTime: '4 min',
      category: 'Operations',
    },
  ];

  return (
    <>
      <Seo
        title="Blog"
        description="Latest news, updates, and insights from Royal Keta hatchery. Learn about breeding techniques, tour highlights, and investment updates."
        path="/blog"
        ogImage="/og/blog.svg"
      />

      <Hero
        subtitle="News & Insights"
        title="Royal Keta Blog"
        description="Stories from the hatchery, breeding updates, and industry insights"
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
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Stay Updated
          </h3>
          <p className="text-foreground-muted mb-6">
            Subscribe to our newsletter for monthly updates on breeding seasons, tour events, and investment opportunities.
          </p>
          <Button asChild variant="premium" size="lg">
            <a href="mailto:hello@royalketa.com?subject=Newsletter Subscription">
              Subscribe via Email
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
