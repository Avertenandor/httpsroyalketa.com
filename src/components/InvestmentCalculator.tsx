import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
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
    name: 'Caviar Dividends',
    minInvestment: 100000,
    caviarReturn: 2.5,
    description: 'Receive premium caviar as dividends',
  },
  B: {
    name: 'Caviar + Crypto',
    minInvestment: 500000,
    caviarReturn: 2.0,
    cryptoReturn: 8,
    description: 'Hybrid returns: caviar + cryptocurrency',
  },
  C: {
    name: 'Premium Returns',
    minInvestment: 2000000,
    caviarReturn: 3.5,
    cryptoReturn: 12,
    description: 'Enhanced returns for larger investments',
  },
  D: {
    name: 'Full Spectrum',
    minInvestment: 5000000,
    caviarReturn: 5.0,
    cryptoReturn: 15,
    description: 'Maximum returns with exclusive benefits',
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
    <section className="content-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <Badge variant="gold" className="mb-4">Calculate Returns</Badge>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">
          Investment Calculator
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Estimate your potential returns across different investment models
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Select Your Investment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Model Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Investment Model
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(models) as InvestmentModel[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedModel(key);
                        if (investment < models[key].minInvestment) {
                          setInvestment(models[key].minInvestment);
                        }
                      }}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedModel === key
                          ? 'border-gold bg-gold/10'
                          : 'border-border hover:border-gold/50'
                      }`}
                    >
                      <div className="font-bold text-gold mb-1">Model {key}</div>
                      <div className="text-xs text-foreground-muted">
                        {models[key].name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Investment Amount (₽)
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
                <div className="flex justify-between mt-2 text-sm text-foreground-muted">
                  <span>₽ {model.minInvestment.toLocaleString()}</span>
                  <span className="font-bold text-gold">
                    ₽ {investment.toLocaleString()}
                  </span>
                  <span>₽ 10,000,000</span>
                </div>
              </div>

              {/* Quick Amounts */}
              <div className="flex gap-2 flex-wrap">
                {[100000, 500000, 1000000, 2000000, 5000000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    disabled={amount < model.minInvestment}
                    className={`px-3 py-1 rounded-full text-xs transition-all ${
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
            <CardHeader>
              <CardTitle>Estimated Annual Returns</CardTitle>
              <p className="text-sm text-foreground-muted">
                {model.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Caviar Returns */}
              <div className="p-4 rounded-lg bg-background/50">
                <div className="text-sm text-foreground-muted mb-1">
                  Caviar Dividends
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
                    Cryptocurrency Returns ({model.cryptoReturn}% APY)
                  </div>
                  <div className="text-2xl font-bold text-ocean">
                    ₽ {cryptoValue.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-gold/10 to-ocean/10 border-2 border-gold/20">
                <div className="text-sm text-foreground-muted mb-2">
                  Total Annual Return
                </div>
                <div className="text-3xl font-display font-bold gradient-gold mb-2">
                  ₽ {totalAnnualReturn.toLocaleString()}
                </div>
                <div className="text-sm text-gold">
                  ROI: {roi.toFixed(2)}% per year
                </div>
              </div>

              {/* CTA */}
              <Button asChild variant="premium" size="lg" className="w-full">
                <Link to="/investment">View Full Investment Details</Link>
              </Button>

              <p className="text-xs text-foreground-muted text-center">
                * Estimates based on current market conditions. Actual returns may vary.
                See full disclosure in investment documentation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
