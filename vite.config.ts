import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { existsSync, readdirSync, rmSync } from 'fs';
import { join } from 'path';

// Custom plugin to exclude static HTML files from public copy
const excludeStaticHTML = () => {
  return {
    name: 'exclude-static-html',
    writeBundle() {
      // After build, remove static HTML files from dist that were copied from public
      // These files are for SEO bots only and shouldn't be in production build
      const staticDirs = [
        'hatchery-tour',
        'science',
        'caviar',
        'investment',
        'tokenization',
        'pricing',
        'gallery',
        'blog',
        'faq',
        'about',
        'contacts',
        'partners',
        'crabbing',
        'salmon-info',
        'sturgeon-info',
        'legal',
        'mercury',
      ];

      staticDirs.forEach((dir) => {
        const htmlPath = join('dist', dir, 'index.html');
        if (existsSync(htmlPath)) {
          rmSync(htmlPath);
          // Remove empty directory
          try {
            const dirPath = join('dist', dir);
            if (existsSync(dirPath) && readdirSync(dirPath).length === 0) {
              rmSync(dirPath, { recursive: true });
            }
          } catch (e) {
            // Ignore errors
          }
        }
      });
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), excludeStaticHTML()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // For GitHub Pages deployment - set this to your repo name
  // Example: base: '/repository-name/'
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'map-vendor': ['leaflet', 'react-leaflet'],
        },
      },
    },
  },
});
