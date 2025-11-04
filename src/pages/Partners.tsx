import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Partners as PartnersSection } from '@/components/Partners';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Package, Shield, Clock } from 'lucide-react';

export default function PartnersPage() {
  const benefits = [
    {
      icon: Truck,
      title: 'Надежная доставка',
      description: 'Проверенные транспортные компании с опытом работы на Дальнем Востоке',
    },
    {
      icon: Package,
      title: 'Сохранность продукции',
      description: 'Специализированная упаковка и контроль температурного режима при транспортировке',
    },
    {
      icon: Shield,
      title: 'Страхование грузов',
      description: 'Все партнеры предоставляют страхование доставляемой продукции',
    },
    {
      icon: Clock,
      title: 'Отслеживание грузов',
      description: 'Возможность отслеживать местоположение вашего заказа в реальном времени',
    },
  ];

  return (
    <>
      <Seo
        title="Партнеры по логистике"
        description="Наши надежные партнеры по доставке продукции ROYAL KETA по всей территории России. Работаем с проверенными транспортными компаниями Дальнего Востока."
        path="/partners"
        ogImage="/og/partners.svg"
      />

      <Hero
        subtitle="Логистика и доставка"
        title="Наши партнеры"
        description="Мы сотрудничаем с ведущими транспортными компаниями для надежной доставки нашей продукции по всей России"
      />

      {/* Benefits Section */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="gold" className="mb-4">Преимущества</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
            Почему мы работаем с этими партнерами
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Все наши логистические партнеры отобраны по строгим критериям качества и надежности
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-6 text-center"
            >
              <benefit.icon className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gold mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners List */}
      <PartnersSection />

      {/* Delivery Info Section */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold mb-6 text-center">
            Как заказать доставку
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gold mb-3">
                1. Оформите заказ икры
              </h3>
              <p className="text-foreground-muted mb-4">
                Свяжитесь с нами для оформления заказа премиальной икры ROYAL KETA.
                Мы примем ваш заказ и подготовим продукцию к отправке.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-3">
                2. Выберите транспортную компанию
              </h3>
              <p className="text-foreground-muted mb-4">
                Выберите удобную для вас транспортную компанию из списка наших партнеров
                или предложите свой вариант доставки.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-3">
                3. Согласуйте условия
              </h3>
              <p className="text-foreground-muted mb-4">
                Свяжитесь напрямую с выбранной транспортной компанией для уточнения
                стоимости, сроков доставки и других условий.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gold mb-3">
                4. Отслеживайте доставку
              </h3>
              <p className="text-foreground-muted mb-4">
                Получите трек-номер для отслеживания вашего груза. Мы также будем
                на связи на всех этапах доставки.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/caviar">Посмотреть каталог икры</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="content-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-8 text-center bg-gradient-to-br from-gold/10 to-ocean/10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold gradient-gold mb-4">
            Нужна помощь с организацией доставки?
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mb-6">
            Наша команда поможет вам выбрать оптимальный вариант доставки и ответит на все вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="lg">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:hello@royalketa.com">hello@royalketa.com</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
