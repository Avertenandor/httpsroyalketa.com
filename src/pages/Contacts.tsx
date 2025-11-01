import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LeafletMap } from '@/components/LeafletMap';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contacts() {
  return (
    <>
      <Seo
        title="Contacts"
        description="Contact Royal Keta. Visit us in Nevelsky District, Sakhalin. Email, phone, Telegram, WhatsApp."
        path="/contacts"
        ogImage="/og/contacts.svg"
      />

      <Hero
        subtitle="Get in Touch"
        title="Contact Us"
        description="We're here to answer your questions about tours, caviar, and investment opportunities"
      />

      <section className="content-container py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-gold mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-1" />
                    <div>
                      <CardTitle className="text-base mb-1">Location</CardTitle>
                      <p className="text-sm text-foreground-muted">
                        Nevelsky District, Sakhalin Oblast, Russia
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
                      <CardTitle className="text-base mb-1">Phone</CardTitle>
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
              Business Hours
            </h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Monday - Friday</span>
                    <span className="text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Saturday</span>
                    <span className="text-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h4 className="font-display font-semibold text-gold mb-4">Location</h4>
              <div className="premium-card overflow-hidden">
                <LeafletMap
                  center={[46.6833, 141.8667]}
                  zoom={12}
                  markerText="Royal Keta Hatchery"
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
                  Open in Yandex Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
