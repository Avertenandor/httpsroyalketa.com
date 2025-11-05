/**
 * Universal Fish Species Page Component
 * Reusable component for displaying fish species information
 */

import { useParams, Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Fish, MapPin, Clock, TrendingUp, Shield, Sparkles, Heart, Droplets } from 'lucide-react';
import { allFishSpecies } from '@/config/fishSpecies';
import { SPECIES, type SpeciesId } from '@/data/species';

interface FishSpeciesPageProps {
  speciesId?: string;
}

export default function FishSpeciesPage({ speciesId: propSpeciesId }: FishSpeciesPageProps = {}) {
  const { speciesId: urlSpeciesId } = useParams<{ speciesId: string }>();
  const speciesId = propSpeciesId || urlSpeciesId;
  
  // Extract ID from route path (e.g., '/species/keta' -> 'keta')
  const species = allFishSpecies.find((s) => {
    if (speciesId) {
      return s.id === speciesId || s.route.includes(speciesId);
    }
    return false;
  });

  if (!species) {
    return (
      <div className="content-container py-20 text-center">
        <h1 className="text-3xl font-display font-bold text-gold mb-4">Вид не найден</h1>
        <Button asChild variant="premium">
          <Link to="/salmon-info">Вернуться к лососевым</Link>
        </Button>
      </div>
    );
  }

  // Get hero image from SPECIES if available
  const speciesData = SPECIES[species.id as SpeciesId];
  const heroImage = speciesData?.hero || species.imageLarge;

  return (
    <>
      <Seo
        title={`${species.commonName} — ${species.scientificName} | Royal Keta`}
        description={`Подробная информация о ${species.commonName.toLowerCase()}: где обитает, чем питается, жизненный цикл, польза и ценность. ${species.description}`}
        path={species.route}
        ogImage={heroImage}
      />
      <Hero
        subtitle={species.category === 'salmon' ? 'Лососевые' : 'Осетровые'}
        title={species.commonName}
        description={species.description}
        backgroundImage={heroImage}
        backgroundOverlay="dark"
      />

      {/* Overview */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-6 mb-8 text-center">
            <Card className="glass-card">
              <CardContent className="p-6">
                <Fish className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-foreground-muted mb-1">Размер</p>
                <p className="text-xl font-bold text-gold">{species.maxSize}</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-foreground-muted mb-1">Вес</p>
                <p className="text-xl font-bold text-gold">{species.maxWeight}</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-foreground-muted mb-1">Продолжительность жизни</p>
                <p className="text-xl font-bold text-gold">{species.lifespan}</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-foreground-muted mb-1">Статус</p>
                <Badge
                  variant={species.status === 'common' ? 'ocean' : species.status === 'rare' ? 'gold' : 'destructive'}
                  className="mt-1"
                >
                  {species.status === 'common' ? 'Обычный' : species.status === 'rare' ? 'Редкий' : 'Под угрозой'}
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="premium-card p-8 space-y-6">
            <div>
              <Badge variant="gold" className="mb-4">Научная классификация</Badge>
              <h2 className="text-2xl font-display font-bold text-gold mb-4">
                {species.scientificName}
              </h2>
              <p className="text-foreground-muted leading-relaxed">{species.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-display font-bold text-gold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Среда обитания
                </h3>
                <p className="text-foreground-muted">{species.habitat}</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Происхождение
                </h3>
                <p className="text-foreground-muted">{species.origin}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value & Nutrition */}
      <section className="content-container py-20 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge variant="ocean" className="mb-4">Ценность и польза</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              Ценность и пищевая ценность
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-gold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Ценность
                </h3>
                <p className="text-foreground-muted leading-relaxed">{species.value}</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-gold mb-4 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Пищевая ценность
                </h3>
                <p className="text-foreground-muted leading-relaxed">{species.nutrition}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Interesting Facts */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Интересные факты</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
              Удивительные факты о {species.commonName.toLowerCase()}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {species.facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-foreground-muted leading-relaxed">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12 text-center"
        >
          <Fish className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Узнайте больше о {species.category === 'salmon' ? 'лососевых' : 'осетровых'}
          </h2>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Посетите наш завод и узнайте, как выращивают рыбу, производят икру и поддерживают
            экосистему Сахалина.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to={species.category === 'salmon' ? '/salmon-info' : '/sturgeon-info'}>
                {species.category === 'salmon' ? 'Все виды лососевых' : 'Все виды осетровых'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/hatchery-tour">Забронировать экскурсию</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

