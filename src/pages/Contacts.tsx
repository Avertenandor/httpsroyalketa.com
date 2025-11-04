import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LeafletMap } from '@/components/LeafletMap';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { contactsImages } from '@/config/images';

export default function Contacts() {
  return (
    <>
      <Seo
        title="Контакты"
        description="Свяжитесь с Роял Кета. Посетите нас в Невельском районе Сахалина. Email, телефон, Telegram, WhatsApp."
        path="/contacts"
        ogImage="/og/contacts.svg"
      />

      <Hero
        subtitle="Свяжитесь с Нами"
        title="Контакты"
        description="Мы готовы ответить на ваши вопросы о турах, икре и инвестиционных возможностях"
        backgroundImage={contactsImages[0].urlLarge}
        backgroundOverlay="dark"
      />

      <section className="content-container py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-gold mb-6">
              Контактная Информация
            </h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">Местоположение</CardTitle>
                      <p className="text-sm text-foreground-muted">
                        Невельский район, Сахалинская область, Россия
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">Email</CardTitle>
                      <a
                        href="mailto:hello@royalketa.com"
                        className="text-sm text-foreground-muted hover:text-gold transition-colors"
                      >
                        hello@royalketa.com
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">Телефон</CardTitle>
                      <a
                        href="tel:+79999999999"
                        className="text-sm text-foreground-muted hover:text-gold transition-colors"
                      >
                        +7 (999) 999-99-99
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Send className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">Telegram</CardTitle>
                      <a
                        href="https://t.me/royalketa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground-muted hover:text-gold transition-colors"
                      >
                        @royalketa
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">WhatsApp</CardTitle>
                      <a
                        href="https://wa.me/79999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground-muted hover:text-gold transition-colors"
                      >
                        +7 (999) 999-99-99
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-gold mb-6">
              Время Работы
            </h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Понедельник - Пятница</span>
                    <span className="text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Суббота</span>
                    <span className="text-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Воскресенье</span>
                    <span className="text-foreground">Закрыто</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h4 className="font-display font-semibold text-gold mb-4">Местоположение</h4>
              <div className="premium-card overflow-hidden">
                <LeafletMap
                  center={[46.6833, 141.8667]}
                  zoom={12}
                  markerText="Хозяйство Роял Кета"
                  className="h-80 rounded-lg"
                />
              </div>
              <div className="mt-4 text-sm text-foreground-muted text-center">
                <a
                  href="https://yandex.ru/maps/?ll=141.8667,46.6833&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Открыть в Яндекс Картах →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}