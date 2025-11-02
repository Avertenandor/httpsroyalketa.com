import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 30, className = '' }: FloatingParticlesProps) {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'rgba(207, 174, 88, 0.4)',   // Gold
      'rgba(229, 213, 150, 0.3)',  // Gold light
      'rgba(184, 152, 66, 0.4)',   // Gold dark
      'rgba(255, 140, 0, 0.3)',    // Orange (roe color)
      'rgba(255, 160, 50, 0.25)',  // Light orange
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2, // 2-8px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * -20, // Start at different times
      opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -100, -200, -300, -400, -500],
            x: [
              0,
              Math.sin(particle.id) * 30,
              Math.cos(particle.id) * 30,
              Math.sin(particle.id * 2) * 30,
              0,
              Math.cos(particle.id * 3) * 30,
            ],
            opacity: [
              particle.opacity,
              particle.opacity * 1.2,
              particle.opacity,
              particle.opacity * 0.8,
              particle.opacity,
              0,
            ],
            scale: [1, 1.2, 1, 0.8, 1.1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
