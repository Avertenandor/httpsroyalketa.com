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
      label: 'Смолтов выпущено ежегодно',
      decimals: 0,
    },
    {
      icon: Award,
      value: 95,
      suffix: '%',
      label: 'Показатель выживаемости',
      decimals: 0,
    },
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Довольных посетителей',
      decimals: 0,
    },
    {
      icon: TrendingUp,
      value: 15,
      suffix: '+',
      label: 'Лет совершенства',
      decimals: 0,
    },
  ];

  return (
    <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="premium-card p-6 sm:p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-gold mb-3 sm:mb-4 px-4 sm:px-0">
            Наше влияние в цифрах
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
            Создаём устойчивое превосходство в аквакультуре на острове Сахалин
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gold/10 mb-3 sm:mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-1 sm:mb-2">
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
