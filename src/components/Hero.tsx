import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundPattern?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundPattern = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/20 to-transparent" />

          {/* Animated floating orbs with parallax */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-ocean/10 rounded-full blur-3xl"
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
            initial={{ y: 0, x: 0, scale: 1 }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Animated wave patterns */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
            initial={{ x: 0 }}
            animate={{ x: [-100, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z"
                fill="currentColor"
                className="text-ocean/30"
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="content-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              className="text-gold text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 gradient-gold text-shadow-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {primaryCta && (
                <Button asChild variant="premium" size="lg">
                  <Link to={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
