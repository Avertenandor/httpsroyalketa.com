import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 40,
  pauseOnHover = true,
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: reverse ? ['0%', '100%'] : ['0%', '-100%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <div className={cn('flex-shrink-0', className)}>
      {children}
    </div>
  );
}
