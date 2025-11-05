import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { caviarProductImages } from '@/config/images';

interface GalleryImage {
  id: string;
  url: string;
  urlLarge: string;
  alt: string;
  description: string;
}

// Convert config images to gallery format
const galleryImages: GalleryImage[] = caviarProductImages.map((img) => ({
  id: img.id,
  url: img.urlMedium,
  urlLarge: img.urlLarge,
  alt: img.alt,
  description: img.alt,
}));

export function CaviarGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <Badge variant="gold" className="mb-3 sm:mb-4">Фотогалерея</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
          Красота нашей икры
        </h2>
        <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
          Каждая икринка — произведение природы и нашего мастерства
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-gold font-semibold">{image.description}</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.urlLarge}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-glow-gold"
            />
            <div className="mt-3 md:mt-4 text-center">
              <p className="text-gold text-base md:text-xl font-semibold">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background rounded-full text-gold text-2xl border border-gold/20"
              aria-label="Закрыть"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
