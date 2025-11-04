import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ParticlesCanvas } from '@/components/ParticlesCanvas';

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating caviar roe particles effect on all pages */}
      <ParticlesCanvas count={30} />

      <Header />
      <main id="main-content" className="flex-1 pt-16">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
