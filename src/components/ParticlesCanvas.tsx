import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  speedMultiplier: number;
}

interface ParticlesCanvasProps {
  count?: number;
  className?: string;
}

export function ParticlesCanvas({ count = 50, className = '' }: ParticlesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Caviar roe colors (salmon roe)
    const colors = [
      'rgba(207, 174, 88, 0.6)',   // Gold
      'rgba(229, 213, 150, 0.5)',  // Gold light
      'rgba(184, 152, 66, 0.6)',   // Gold dark
      'rgba(255, 140, 0, 0.5)',    // Orange
      'rgba(255, 160, 50, 0.4)',   // Light orange
      'rgba(255, 100, 50, 0.5)',   // Deep orange
    ];

    // Initialize particles
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height, // Start below screen
      vx: (Math.random() - 0.5) * 0.5, // Horizontal drift
      vy: -(Math.random() * 0.5 + 0.3), // Upward movement
      size: Math.random() * 4 + 2, // 2-6px
      opacity: Math.random() * 0.4 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedMultiplier: Math.random() * 0.5 + 0.75, // 0.75-1.25x speed
    }));

    let animationFrameId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.y += particle.vy * particle.speedMultiplier;
        particle.x += particle.vx * particle.speedMultiplier;

        // Add wave motion
        particle.x += Math.sin(particle.y * 0.01) * 0.5;

        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add highlight (makes it look like a sphere/roe)
        ctx.globalAlpha = particle.opacity * 0.6;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(
          particle.x - particle.size * 0.3,
          particle.y - particle.size * 0.3,
          particle.size * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
