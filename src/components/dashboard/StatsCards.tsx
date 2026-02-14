import { TrendingUp, TrendingDown, BarChart3, Home, Percent, Target } from "lucide-react";
import type { CityMarketData } from "@/data/mockMarketData";

interface StatsCardsProps {
  data: CityMarketData;
}

function StatCard({ label, value, suffix, icon: Icon, trend, trendValue }: {
  label: string;
  value: string;
  suffix?: string;
  icon: React.ElementType;
  trend?: "up" | "down";
  trendValue?: string;
}) {
  return (
    <div className="glass-panel rounded-xl p-5 shadow-card animate-slide-up group hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trend === "up" ? "text-primary" : "text-destructive"}`}>
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>
      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className="text-2xl font-bold font-display text-foreground">
        {value}
        {suffix && <span className="text-sm text-muted-foreground ml-1">{suffix}</span>}
      </p>
    </div>
  );
}

export default function StatsCards({ data }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard
        label="Avg Price"
        value={`₹${data.avg_price_sqft.toLocaleString()}`}
        suffix="/sqft"
        icon={Home}
        trend="up"
        trendValue={`${data.growth_yoy}%`}
      />
      <StatCard
        label="YoY Growth"
        value={`${data.growth_yoy}%`}
        icon={TrendingUp}
        trend={data.growth_yoy > 0 ? "up" : "down"}
        trendValue="YoY"
      />
      <StatCard
        label="Demand Score"
        value={`${data.demand_score}`}
        suffix="/100"
        icon={BarChart3}
        trend={data.demand_score > 75 ? "up" : "down"}
        trendValue={data.demand_score > 75 ? "High" : "Moderate"}
      />
      <StatCard
        label="Rental Yield"
        value={`${data.rental_yield}%`}
        icon={Percent}
      />
      <StatCard
        label="Top Locality"
        value={data.top_locality}
        icon={Target}
      />
      <StatCard
        label="Investment Score"
        value={`${data.investment_score}`}
        suffix="/100"
        icon={BarChart3}
        trend={data.investment_score > 80 ? "up" : "down"}
        trendValue={data.investment_score > 85 ? "Premium" : "Good"}
      />
    </div>
  );
}
