import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

type InvestmentModel = 'A' | 'B' | 'C' | 'D';

interface ModelDetails {
  name: string;
  minInvestment: number;
  caviarReturn: number; // kg per year per 100k invested
  cryptoReturn?: number; // % APY
  description: string;
}

const models: Record<InvestmentModel, ModelDetails> = {
  A: {
    name: 'Икорные дивиденды',
    minInvestment: 100000,
    caviarReturn: 2.5,
    description: 'Получайте премиальную икру в виде дивидендов',
  },
  B: {
    name: 'Икра + Крипто',
    minInvestment: 500000,
    caviarReturn: 2.0,
    cryptoReturn: 8,
    description: 'Гибридные доходы: икра + криптовалюта',
  },
  C: {
    name: 'Премиальные доходы',
    minInvestment: 2000000,
    caviarReturn: 3.5,
    cryptoReturn: 12,
    description: 'Повышенные доходы для крупных инвестиций',
  },
  D: {
    name: 'Полный спектр',
    minInvestment: 5000000,
    caviarReturn: 5.0,
    cryptoReturn: 15,
    description: 'Максимальная прибыль с эксклюзивными привилегиями',
  },
};

export function InvestmentCalculator() {
  const [selectedModel, setSelectedModel] = useState<InvestmentModel>('B');
  const [investment, setInvestment] = useState<number>(500000);

  const model = models[selectedModel];
  const caviarAmount = (investment / 100000) * model.caviarReturn;
  const caviarValue = caviarAmount * 25000; // ₽25,000 per kg (estimated)
  const cryptoValue = model.cryptoReturn
    ? (investment * model.cryptoReturn) / 100
    : 0;
  const totalAnnualReturn = caviarValue + cryptoValue;
  const roi = (totalAnnualReturn / investment) * 100;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Выберите ваши инвестиции</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Model Selection */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 block">
                  Инвестиционная модель
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {(Object.keys(models) as InvestmentModel[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedModel(key);
                        if (investment < models[key].minInvestment) {
                          setInvestment(models[key].minInvestment);
                        }
                      }}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedModel === key
                          ? 'border-gold bg-gold/10'
                          : 'border-border hover:border-gold/50'
                      }`}
                    >
                      <div className="text-sm sm:text-base font-bold text-gold mb-1">Модель {key}</div>
                      <div className="text-xs sm:text-sm text-foreground-muted">
                        {models[key].name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3 block">
                  Сумма инвестиций (₽)
                </label>
                <input
                  type="range"
                  min={model.minInvestment}
                  max={10000000}
                  step={100000}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between mt-2 text-xs sm:text-sm text-foreground-muted">
                  <span>₽ {model.minInvestment.toLocaleString()}</span>
                  <span className="font-bold text-gold">
                    ₽ {investment.toLocaleString()}
                  </span>
                  <span>₽ 10M</span>
                </div>
              </div>

              {/* Quick Amounts */}
              <div className="flex gap-2 flex-wrap">
                {[100000, 500000, 1000000, 2000000, 5000000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    disabled={amount < model.minInvestment}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs transition-all ${
                      investment === amount
                        ? 'bg-gold text-background'
                        : 'bg-border hover:bg-gold/20 disabled:opacity-30 disabled:cursor-not-allowed'
                    }`}
                  >
                    ₽ {(amount / 1000).toFixed(0)}K
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-gradient-to-br from-gold/5 to-ocean/5">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Ожидаемая годовая доходность</CardTitle>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {model.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Caviar Returns */}
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-sm text-foreground-muted mb-1">
                  Икорные дивиденды
                </div>
                <div className="text-2xl font-bold text-gold mb-1">
                  {caviarAmount.toFixed(1)} kg
                </div>
                <div className="text-sm text-foreground-muted">
                  ≈ ₽ {caviarValue.toLocaleString()}
                </div>
              </div>

              {/* Crypto Returns */}
              {model.cryptoReturn && (
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-sm text-foreground-muted mb-1">
                    Доход в криптовалюте ({model.cryptoReturn}% годовых)
                  </div>
                  <div className="text-2xl font-bold text-ocean">
                    ₽ {cryptoValue.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-gold/10 to-ocean/10 border-2 border-gold/20">
                <div className="text-sm text-foreground-muted mb-2">
                  Общая годовая доходность
                </div>
                <div className="text-3xl font-display font-bold gradient-gold mb-2">
                  ₽ {totalAnnualReturn.toLocaleString()}
                </div>
                <div className="text-sm text-gold">
                  ROI: {roi.toFixed(2)}% в год
                </div>
              </div>

              {/* CTA */}
              <Button asChild variant="premium" size="lg" className="w-full">
                <Link to="/investment">Подробности инвестиций</Link>
              </Button>

              <p className="text-xs text-foreground-muted text-center">
                * Расчёты основаны на текущих рыночных условиях. Фактическая доходность может отличаться.
                Полная информация в инвестиционной документации.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
