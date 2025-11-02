import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '@/seo/Seo';
import { Hero } from '@/components/Hero';
import { Badge } from '@/components/ui/badge';

export default function Legal() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to anchor if present in URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Seo
        title="Правовая Информация"
        description="Условия обслуживания, политика конфиденциальности и правовые раскрытия для хозяйства Роял Кета и инвестиционных услуг."
        path="/legal"
        ogImage="/og/legal.svg"
      />

      <Hero
        subtitle="Правовая Информация"
        title="Условия и Политики"
        description="Прозрачность и соответствие во всех наших операциях"
      />

      <section className="content-container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Terms of Service */}
          <div id="terms" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Условия Обслуживания</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Условия Обслуживания
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Последнее Обновление: Январь 2025
              </p>
              <p>
                Получая доступ и используя услуги Роял Кета, включая экскурсии по хозяйству, покупку продукции
                и инвестиционные возможности, вы соглашаетесь быть связанными данными Условиями Обслуживания.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">1. Турные Услуги</h3>
              <p>
                Экскурсии по хозяйству зависят от наличия мест и погодных условий. Мы оставляем за собой право
                перенести или отменить туры по соображениям безопасности. Полные политики возврата изложены в нашем
                подтверждении бронирования.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">2. Продажи Продукции</h3>
              <p>
                Вся икорная продукция продаётся в зависимости от наличия. Мы гарантируем качество и свежесть
                наших продуктов на момент продажи. Инструкции по хранению и обращению должны соблюдаться для
                поддержания качества продукции.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">3. Инвестиционные Услуги</h3>
              <p>
                Инвестиционные возможности доступны только квалифицированным инвесторам, прошедшим верификацию KYC/AML.
                Все инвестиции несут риск, и прошлая производительность не гарантирует будущие доходы.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">4. Ограничения Ответственности</h3>
              <p>
                Роял Кета поддерживает комплексное страхование и следует строгим протоколам безопасности. Посетители
                участвуют в турах на собственный риск и должны следовать всем инструкциям по безопасности, предоставляемым персоналом.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div id="privacy" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Политика Конфиденциальности</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Политика Конфиденциальности
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p>
                Роял Кета уважает вашу конфиденциальность и стремится защитить ваши персональные данные.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Информация, Которую Мы Собираем</h3>
              <p>
                Мы собираем информацию, которую вы предоставляете при бронировании туров, покупке продукции или запросах
                об инвестиционных возможностях. Это включает имя, контактные данные, платёжную информацию
                и предпочтения.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Как Мы Используем Ваши Данные</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Обработка бронирований и покупок</li>
                <li>Коммуникация о ваших резервациях или инвестициях</li>
                <li>Улучшение наших услуг</li>
                <li>Отправка маркетинговых сообщений (с вашего согласия)</li>
                <li>Соответствие правовым обязательствам (KYC/AML для инвесторов)</li>
              </ul>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Безопасность Данных</h3>
              <p>
                Мы применяем стандартные отраслевые меры безопасности для защиты вашей личной информации.
                Обработка платежей осуществляется через безопасные, зашифрованные каналы.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Ваши Права</h3>
              <p>
                У вас есть право доступа, исправления или удаления ваших персональных данных. Свяжитесь с нами по адресу
                privacy@royalketa.com для реализации этих прав.
              </p>
            </div>
          </div>

          {/* Investment Disclaimer */}
          <div id="disclaimer" className="scroll-mt-20">
            <Badge variant="gold" className="mb-4">Инвестиционное Предупреждение</Badge>
            <h2 className="text-3xl font-display font-bold text-gold mb-6">
              Раскрытие Инвестиционных Рисков
            </h2>
            <div className="space-y-4 text-foreground-muted">
              <p className="font-semibold text-foreground">
                ВАЖНО: Все инвестиции связаны с риском. Пожалуйста, внимательно прочитайте.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Ключевые Риски</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Биологический Риск:</strong> Смертность рыб из-за болезней, качества воды или экологических факторов</li>
                <li><strong>Рыночный Риск:</strong> Колебания цен на икру и лосось</li>
                <li><strong>Операционный Риск:</strong> Поломка оборудования, нарушения цепочки поставок</li>
                <li><strong>Регуляторный Риск:</strong> Изменения в регулировании аквакультуры или экологической политике</li>
                <li><strong>Сезонный Риск:</strong> Изменчивость успеха разведения в разные сезоны</li>
                <li><strong>Риск Ликвидности:</strong> Инвестиции могут иметь ограниченную ликвидность или периоды блокировки</li>
              </ul>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Не Финансовый Совет</h3>
              <p>
                Информация, предоставленная на этом сайте, не является финансовым, инвестиционным или правовым советом.
                Консультируйтесь с квалифицированными специалистами перед принятием инвестиционных решений.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Соответствие KYC/AML</h3>
              <p>
                Все инвесторы должны пройти верификацию "Знай Своего Клиента" (KYC) и Противодействие Отмыванию Денег (AML).
                Мы оставляем за собой право отклонить любую инвестицию, не соответствующую нашим стандартам соответствия.
              </p>

              <h3 className="text-xl font-display text-foreground mt-6 mb-3">Никаких Гарантий</h3>
              <p>
                Прошлая производительность не гарантирует будущие результаты. Прогнозируемые доходы являются оценками на основе
                текущих операций и рыночных условий, которые могут измениться.
              </p>
            </div>
          </div>

          {/* Contact for Legal Questions */}
          <div className="mt-12 premium-card p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-gold mb-4">
              Правовые Вопросы?
            </h3>
            <p className="text-foreground-muted mb-6">
              По правовым запросам, документам или вопросам соответствия
            </p>
            <a
              href="mailto:legal@royalketa.com"
              className="text-gold hover:text-gold-light transition-colors"
            >
              legal@royalketa.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}