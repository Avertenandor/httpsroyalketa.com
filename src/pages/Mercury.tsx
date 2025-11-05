import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MercuryBadge } from '@/components/MercuryBadge';
import { Shield, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mercury() {
  return (
    <>
      <Seo
        title="Меркурий — электронные ВСД для икры и рыбы | Royal Keta"
        description="Royal Keta оформляет электронные ветеринарные сопроводительные документы (эВСД) в системе «Меркурий» на каждую партию икры и рыбной продукции. Что это, как работает цепочка, FAQ и нормативная база."
        path="/mercury/"
        ogImage="/og/mercury.jpg"
      />
      
      <Hero
        subtitle="Система сертификации"
        title="Меркурий — электронные ВСД для икры и рыбы"
        description="Электронные ветеринарные сопроводительные документы на каждую партию продукции"
        backgroundOverlay="dark"
      />

      <section className="content-container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <MercuryBadge className="text-base px-6 py-3" />
          </motion.div>

          {/* Что это и зачем */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Badge variant="gold" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              О системе
            </Badge>
            <h2 className="text-3xl font-display font-bold text-gold">
              Что это и зачем
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed">
              «Меркурий» — государственная система электронной ветеринарной сертификации и прослеживаемости.
              Для икры и рыбной продукции мы оформляем электронные ветеринарные сопроводительные документы
              (эВСД) на каждом этапе цепочки поставки.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-2">
                    Производство/фасовка
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    Оформляем эВСД на выработку партии.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-2">
                    Отгрузка/транспортировка
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    Оформляем эВСД на перемещение к получателю.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-2">
                    Приёмка получателем
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    Получатель гасит входящий эВСД и ставит партию на учёт.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Что покрывает эВСД */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gold">
              Что покрывает эВСД
            </h2>
            <ul className="space-y-3 text-foreground-muted list-disc list-inside">
              <li>
                Икра лососёвых и осетровых (красная/чёрная), в т.ч. пастеризованная и консервированная.
              </li>
              <li>
                Заменители икры, изготовленные из икринок рыбы.
              </li>
              <li>
                Рыбная продукция и полуфабрикаты, если подпадают под перечень поднадзорных товаров.
              </li>
            </ul>
          </motion.section>

          {/* Наши обязательства */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gold">
              Наши обязательства
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>ЭВСД заводится на каждую выработанную/отгружаемую партию.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Гарантируем корректность сведений: наименование, объём, дата, условия хранения, изготовитель.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Перед поставкой согласуем реквизиты площадки получателя для корректного гашения эВСД.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  По запросу предоставляем реквизиты эВСД партии и образец документа.
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 glass-card border border-gold/20 rounded-lg">
              <p className="text-foreground-muted">
                Пример эВСД (обезличенный):{' '}
                <a
                  href="/docs/sample-evsd.pdf"
                  download
                  className="text-gold hover:text-gold-light underline"
                >
                  скачать PDF
                </a>
              </p>
            </div>
          </motion.section>

          {/* Как покупателю проверить */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gold">
              Как покупателю проверить
            </h2>
            <ul className="space-y-3 text-foreground-muted">
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Запросите у менеджера номер эВСД и реквизиты партии (дата, масса, фасовка).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Сверьте эти реквизиты в сопроводительных документах к отгрузке.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  У розничных получателей — убедитесь, что входящий эВСД погашен при приёмке.
                </span>
              </li>
            </ul>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gold">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-3">
                    Нужен ли эВСД для розничной продажи покупателю?
                  </h3>
                  <p className="text-foreground-muted">
                    Нет, новый эВСД на каждого конечного покупателя не оформляется; ключевая точка —
                    гашение входящего эВСД при приёмке товара магазином.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-3">
                    Как быстро гасится эВСД?
                  </h3>
                  <p className="text-foreground-muted">
                    Как правило — в день фактического поступления партии.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-gold mb-3">
                    Что указать при переупаковке?
                  </h3>
                  <p className="text-foreground-muted">
                    Оформляется операция переработки/переупаковки с новой маркировкой и привязкой к исходному эВСД.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Нормативная база */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-gold">
              Нормативная база
            </h2>
            <ul className="space-y-3 text-foreground-muted list-disc list-inside">
              <li>
                Федеральная система «Меркурий» (Россельхознадзор) — электронная ветеринарная сертификация.
              </li>
              <li>
                ТР ЕАЭС 040/2016 «О безопасности рыбы и рыбной продукции» — санитарные требования.
              </li>
            </ul>
            <div className="mt-6 p-4 glass-card border border-white/10 rounded-lg">
              <p className="text-sm text-foreground-muted">
                Справка носит информационный характер и описывает порядок оформления эВСД для продукции Royal Keta.
              </p>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}

