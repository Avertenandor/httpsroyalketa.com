import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { Fish, Award, Users, TrendingUp } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export function Statistics() {
  const stats: Stat[] = [
    {
      icon: Fish,
      value: 500000,
      suffix: '+',
      label: 'Smolts Released Annually',
      decimals: 0,
    },
    {
      icon: Award,
      value: 95,
      suffix: '%',
      label: 'Survival Rate',
      decimals: 0,
    },
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Happy Visitors',
      decimals: 0,
    },
    {
      icon: TrendingUp,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
      decimals: 0,
    },
  ];

  return (
    <section className="content-container py-20">
      <div className="premium-card p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-gold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Building sustainable aquaculture excellence on Sakhalin Island
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  duration={2.5}
                />
              </div>
              <p className="text-sm md:text-base text-foreground-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
