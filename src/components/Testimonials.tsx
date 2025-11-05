import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  const testimonials: Testimonial[] = [
    {
      name: 'Александр Петров',
      role: 'CEO',
      company: 'Pacific Ventures',
      content: 'Инвестиция в Royal Keta — одно из лучших решений. Прозрачность, профессионализм и стабильные дивиденды в виде премиальной икры. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Мария Соколова',
      role: 'Семья из 4 человек',
      content: 'Потрясающая экскурсия! Дети были в восторге от кормления рыб, а икра в подарок превзошла все ожидания. Обязательно вернемся снова!',
      rating: 5,
    },
    {
      name: 'Дмитрий Волков',
      role: 'Инвестор',
      company: 'Crypto Fund',
      content: 'Уникальное сочетание традиционного бизнеса и блокчейн технологий. Модель B идеальна для диверсификации портфеля. Отличная команда!',
      rating: 5,
    },
    {
      name: 'Елена Новикова',
      role: 'Ресторатор',
      content: 'Работаем с Royal Keta более 2 лет. Качество икры неизменно высокое, логистика отлажена. Наши гости в восторге от продукции!',
      rating: 5,
    },
    {
      name: 'Игорь Смирнов',
      role: 'Корпоративный клиент',
      company: 'TechCorp',
      content: 'Организовали корпоративный тур для команды из 30 человек. Профессиональный подход, интересная программа, отличный тимбилдинг!',
      rating: 5,
    },
    {
      name: 'Ольга Иванова',
      role: 'Инвестор Model C',
      content: 'Третий год получаю стабильные выплаты. Регулярные отчеты, визиты на производство, полная прозрачность. Планирую увеличить вложения.',
      rating: 5,
    },
  ];

export function Testimonials() {
  return (
    <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <Badge variant="gold" className="mb-3 sm:mb-4">Отзывы</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
          Что говорят наши клиенты
        </h2>
        <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
          Нам доверяют инвесторы, семьи и деловые партнёры по всему региону
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold/30 mb-3 sm:mb-4" />

                <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold to-ocean flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground-muted truncate">
                      {testimonial.role}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
