import type { CityMarketData } from "@/data/mockMarketData";

interface InvestmentGaugeProps {
  data: CityMarketData;
}

export default function InvestmentGauge({ data }: InvestmentGaugeProps) {
  const score = data.investment_score;
  const angle = (score / 100) * 180;
  const label = score > 85 ? "Premium" : score > 70 ? "High Potential" : score > 50 ? "Moderate" : "Low";
  const labelColor = score > 85 ? "text-primary" : score > 70 ? "text-accent" : "text-muted-foreground";

  return (
    <div className="glass-panel rounded-xl p-6 shadow-card flex flex-col items-center">
      <h3 className="text-lg font-display font-semibold text-foreground mb-4">Investment Score</h3>
      
      <div className="relative w-48 h-24 mb-4">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 10 95 A 90 90 0 0 1 190 95"
            fill="none"
            stroke="hsl(220, 14%, 18%)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Value arc */}
          <path
            d="M 10 95 A 90 90 0 0 1 190 95"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${(angle / 180) * 283} 283`}
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(0, 72%, 51%)" />
              <stop offset="50%" stopColor="hsl(43, 90%, 55%)" />
              <stop offset="100%" stopColor="hsl(160, 60%, 45%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <span className="text-3xl font-bold font-display text-foreground">{score}</span>
          <span className="text-xs text-muted-foreground">/100</span>
        </div>
      </div>

      <span className={`text-sm font-semibold ${labelColor}`}>{label}</span>
      <p className="text-xs text-muted-foreground mt-1 text-center">
        Based on growth, demand, rental yield & infrastructure
      </p>
    </div>
  );
}
