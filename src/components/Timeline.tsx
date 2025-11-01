import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-ocean to-gold opacity-30" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex-1 relative"
            >
              {/* Icon Circle */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-ocean flex items-center justify-center text-4xl shadow-glow-gold">
                {step.icon || step.number}
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <h3 className="text-xl font-display font-bold text-gold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex gap-4"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-ocean flex items-center justify-center text-2xl shadow-glow-gold">
              {step.icon || step.number}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-display font-bold text-gold mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
