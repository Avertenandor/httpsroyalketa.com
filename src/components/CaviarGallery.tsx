import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  photographer?: string;
  description: string;
}

// Unsplash images - free to use, no attribution required for commercial use
// These are curated high-quality red caviar images
const galleryImages: GalleryImage[] = [
  {
    id: 'caviar-1',
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    alt: 'Премиальная красная икра крупным планом',
    photographer: 'Caroline Attwood',
    description: 'Красная икра лосося премиум качества',
  },
  {
    id: 'caviar-2',
    url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80',
    alt: 'Икра в стеклянной банке',
    photographer: 'Mariana Medvedeva',
    description: 'Свежая икра в традиционной упаковке',
  },
  {
    id: 'caviar-3',
    url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
    alt: 'Морепродукты и икра',
    photographer: 'Toa Heftiba',
    description: 'Икра как деликатес премиум класса',
  },
  {
    id: 'caviar-4',
    url: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80',
    alt: 'Красная икра на ложке',
    photographer: 'Kelsey Curtis',
    description: 'Жемчужины океана - каждая икринка идеальна',
  },
  {
    id: 'caviar-5',
    url: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80',
    alt: 'Лосось и икра',
    photographer: 'Caroline Attwood',
    description: 'От лосося до икры - полный цикл качества',
  },
  {
    id: 'caviar-6',
    url: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80',
    alt: 'Блюдо с икрой',
    photographer: 'Jakub Kapusnak',
    description: 'Кулинарное совершенство с нашей икрой',
  },
];

export function CaviarGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Фотогалерея</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Красота нашей икры
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Каждая икринка — произведение природы и нашего мастерства
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-gold font-semibold">{image.description}</p>
                {image.photographer && (
                  <p className="text-xs text-foreground-muted mt-1">
                    Фото: {image.photographer}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url.replace('w=800', 'w=1600')}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-glow-gold"
            />
            <div className="mt-4 text-center">
              <p className="text-gold text-xl font-semibold">{selectedImage.description}</p>
              {selectedImage.photographer && (
                <p className="text-foreground-muted mt-2">
                  Фотограф: {selectedImage.photographer}
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background rounded-full text-gold text-2xl"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-foreground-muted"
      >
        <p>
          Фотографии предоставлены бесплатно сервисом{' '}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-gold transition-colors"
          >
            Unsplash
          </a>
        </p>
      </motion.div>
    </section>
  );
}
