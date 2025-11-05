import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Truck, MapPin, Calendar, Thermometer, Package, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

export default function Delivery() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    zipCode: '',
    volume: '',
    packaging: '',
    timeWindow: '',
    consultation: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка формы
    window.location.href = `mailto:logistics@royalketa.com?subject=Запрос на температурную доставку&body=Город: ${formData.city}%0D%0AИндекс: ${formData.zipCode}%0D%0AОбъём: ${formData.volume}%0D%0AУпаковка: ${formData.packaging}%0D%0AОкно доставки: ${formData.timeWindow}%0D%0AКонсультация: ${formData.consultation ? 'Да' : 'Нет'}`;
  };

  const faqItems = [
    {
      question: 'Доставляете ли икру в Беларусь?',
      answer: 'Да. Консервная/не требующая охлаждения — СДЭК/Boxberry/Почта. Охлаждаемая/требует +2…+6 °C — через температурную логистику (по договору).',
    },
    {
      question: 'Нужна ли электронная декларация на посылку в РБ?',
      answer: 'Для ЕАЭС действует упрощённый режим: отдельная е-декларация Почты России не требуется.',
    },
    {
      question: 'Сроки в Минск?',
      answer: 'Типично от 2–5 рабочих дней СДЭК/Boxberry; Почта зависит от вида отправления и отделения. Точные сроки — в калькуляторах партнёров.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Доставка по РФ и в Беларусь"
        description="Доставляем премиальную икру по всей России и в Беларусь. СДЭК, Boxberry, Почта России. Температурная логистика для охлаждаемых продуктов."
        path="/delivery"
        ogImage="/og/delivery.png"
        jsonLd={faqJsonLd}
      />

      <Hero
        subtitle="Доставка"
        title="По всей России и в Беларусь"
        description="Партнёры, сроки и условия охлаждения"
        backgroundOverlay="dark"
      />

      {/* Main delivery partners section */}
      <section id="belarus" className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="ocean" className="mb-3 sm:mb-4">Наши партнёры</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
            Доставляем по всей РФ и в Беларусь
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
            Мы сотрудничаем с проверенными транспортными компаниями для быстрой и безопасной доставки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* СДЭК */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-ocean" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">СДЭК (ЕАЭС)</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Доставка по Беларуси через сеть ПВЗ и курьером. ЕАЭС — без внешнетаможенного оформления.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>ПВЗ и курьерская доставка</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Беларусь в зоне обслуживания</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Оплата онлайн, СМС-трек</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    <a href="https://cdek.city/services/delivery-eaeu/" target="_blank" rel="noopener noreferrer">
                      Проверить ПВЗ
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    <a href="https://cdekid.cdek.ru/belarus" target="_blank" rel="noopener noreferrer">
                      CDEK ID BY
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Boxberry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Package className="w-8 h-8 sm:w-10 sm:h-10 text-ocean" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">Boxberry → Европочта</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Самовывоз/курьер в РБ. Вложения — без скоропорта и без «холода».
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Пункты выдачи в Беларуси</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>Только продукты без холода</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Срок хранения ≥ 1 месяца</span>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                  <a href="https://u.boxberry.ru/" target="_blank" rel="noopener noreferrer">
                    Пункты выдачи в РБ
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Почта России */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-glow-gold transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-ocean" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">Почта России</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Резервный канал и отдалённые адреса. Для ЕАЭС отдельная е-декларация не требуется.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Посылка/EMS международная</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Упрощённый режим ЕАЭС</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-foreground-muted">
                  <CheckCircle2 className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
                  <span>Доступно для удалённых пунктов</span>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                  <a href="https://info.pochta.ru/support/parcels/posylka-mezhdunarodnaya" target="_blank" rel="noopener noreferrer">
                    Рассчитать тариф
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Temperature logistics section */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background/50 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-6 sm:p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ocean/20 flex items-center justify-center flex-shrink-0">
              <Thermometer className="w-6 h-6 sm:w-7 sm:h-7 text-ocean" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gold mb-3 sm:mb-4">
                Температурная логистика
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 leading-relaxed">
                Для товаров, требующих 0…+6 °C, используем температурную доставку по договору (СДЭКТЕРМО). Согласовываем индивидуально: город, окно доставки, объём, упаковка с хладоэлементами.
              </p>
              <Button asChild variant="premium" size="lg" className="w-full sm:w-auto">
                <a href="https://termo.cdek.ru/" target="_blank" rel="noopener noreferrer">
                  Узнать о СДЭКТЕРМО
                </a>
              </Button>
            </div>
          </div>

          {/* Request form */}
          <div className="mt-8 sm:mt-10 border-t border-white/10 pt-6 sm:pt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gold mb-4 sm:mb-6">
              Запрос температурной доставки
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Город
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Индекс
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Объём (кг)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Тип упаковки
                  </label>
                  <select
                    required
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Выберите...</option>
                    <option value="хладоэлементы">Хладоэлементы</option>
                    <option value="термоконтейнер">Термоконтейнер</option>
                    <option value="изотермический пакет">Изотермический пакет</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Желаемое окно доставки
                  </label>
                  <input
                    type="text"
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                    placeholder="Например: пн-пт, 10:00-18:00"
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consultation}
                      onChange={(e) => setFormData({ ...formData, consultation: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 bg-background/50 text-gold focus:ring-2 focus:ring-gold/50"
                    />
                    <span className="text-xs sm:text-sm text-foreground-muted">
                      Нужна консультация по маркировке/документам
                    </span>
                  </label>
                </div>
              </div>
              <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
                Отправить запрос
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Important information */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gold mb-6 sm:mb-8 px-4 sm:px-0">
            Важная информация
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">
                  Скоропорт (рыбная/икра, требующая холода)
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Не принимается Boxberry/Почта. Для таких отправок используется температурная логистика по договору.
                  <a href="https://boxberry.ru/about_us/news/events/5878" target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-ocean-light ml-1">
                    Правила Boxberry →
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-ocean flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">
                  Нештатные/дальние адреса
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Используем Почту России (сроки зависят от отделения).
                  <a href="https://info.pochta.ru/support/parcels/posylka-mezhdunarodnaya" target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-ocean-light ml-1">
                    Подробнее →
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">
                  FedEx/UPS
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Не используем (услуги в РФ/РБ приостановлены).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="content-container py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <Badge variant="gold" className="mb-3 sm:mb-4">FAQ</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold mb-3 sm:mb-4 px-4 sm:px-0">
            Частые вопросы
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted max-w-2xl mx-auto px-4 sm:px-6 md:px-0 leading-relaxed">
            Ответы на популярные вопросы о доставке в Беларусь
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-gold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

