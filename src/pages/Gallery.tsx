import { useState } from 'react';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type Category = 'all' | 'science' | 'family' | 'caviar';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Placeholder gallery items
  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Roe Selection Process', category: 'science', thumbnail: '🥚', description: 'Careful selection of premium genetic stock' },
    { id: 2, title: 'Family Tour Group', category: 'family', thumbnail: '👨‍👩‍👧‍👦', description: 'Families learning about salmon breeding' },
    { id: 3, title: 'Premium Red Caviar', category: 'caviar', thumbnail: '🫙', description: 'Freshly processed keta caviar' },
    { id: 4, title: 'Incubation Facility', category: 'science', thumbnail: '🔬', description: 'State-of-the-art incubation chambers' },
    { id: 5, title: 'Children Feeding Fish', category: 'family', thumbnail: '🐟', description: 'Interactive feeding experience' },
    { id: 6, title: 'Caviar Tasting', category: 'caviar', thumbnail: '🍽️', description: 'Guests enjoying premium caviar' },
    { id: 7, title: 'Smolt Release', category: 'science', thumbnail: '🌊', description: 'Healthy smolts entering the ocean' },
    { id: 8, title: 'Tour Guide Explaining', category: 'family', thumbnail: '👨‍🏫', description: 'Expert guides sharing knowledge' },
    { id: 9, title: 'Gift Caviar Jars', category: 'caviar', thumbnail: '🎁', description: 'Beautifully packaged gift sets' },
    { id: 10, title: 'Fry Development', category: 'science', thumbnail: '🐠', description: 'Young salmon in development tanks' },
    { id: 11, title: 'Fishing Session', category: 'family', thumbnail: '🎣', description: 'Catch and release experience' },
    { id: 12, title: 'Caviar Production', category: 'caviar', thumbnail: '⚙️', description: 'Processing facility overview' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { value: 'all' as Category, label: 'All Photos' },
    { value: 'science' as Category, label: 'Science' },
    { value: 'family' as Category, label: 'Family Tours' },
    { value: 'caviar' as Category, label: 'Caviar' },
  ];

  return (
    <>
      <Seo
        title="Gallery"
        description="Photo gallery of Royal Keta hatchery: breeding process, family tours, and premium caviar production."
        path="/gallery"
        ogImage="/og/gallery.svg"
      />

      <Hero
        subtitle="Visual Stories"
        title="Gallery"
        description="Explore our hatchery through photos of science, family experiences, and premium products"
      />

      <section className="content-container py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? 'premium' : 'outline'}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="premium-card overflow-hidden cursor-pointer group hover:shadow-glow-gold transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-background-secondary flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                {item.thumbnail}
              </div>
              {/* Info */}
              <div className="p-4">
                <Badge variant="ocean" className="mb-2 text-xs">
                  {item.category}
                </Badge>
                <h3 className="font-display font-semibold text-gold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-muted">No photos in this category yet.</p>
          </div>
        )}

        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gold mb-4">
            Real Photos Coming Soon
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            We're preparing a comprehensive photo gallery showcasing our breeding process,
            family tour experiences, and premium caviar products. Check back soon for high-quality imagery.
          </p>
          <p className="text-sm text-foreground-muted">
            Note: Current placeholders will be replaced with professional photography.
          </p>
        </div>
      </section>
    </>
  );
}
