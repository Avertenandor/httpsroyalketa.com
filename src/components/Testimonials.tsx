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

export function Testimonials() {
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

  return (
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Отзывы</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Что говорят наши клиенты
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Нам доверяют инвесторы, семьи и деловые партнёры по всему региону
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-gold/30 mb-4" />

                <p className="text-foreground-muted mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-ocean flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground-muted">
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
