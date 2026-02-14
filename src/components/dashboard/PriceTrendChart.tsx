import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import type { PriceTrend } from "@/data/mockMarketData";

interface PriceTrendChartProps {
  data: PriceTrend[];
  city: string;
}

export default function PriceTrendChart({ data, city }: PriceTrendChartProps) {
  return (
    <div className="glass-panel rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground">Price Trend & Forecast</h3>
          <p className="text-xs text-muted-foreground mt-1">{city} — ₹/sqft over last 12 months + 4 month forecast</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-primary rounded-full inline-block" /> Actual</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-accent rounded-full inline-block opacity-60" style={{ borderBottom: '1px dashed' }} /> Forecast</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(43, 90%, 55%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(43, 90%, 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="month" stroke="hsl(215, 15%, 55%)" fontSize={11} tickLine={false} />
          <YAxis stroke="hsl(215, 15%, 55%)" fontSize={11} tickLine={false} tickFormatter={(v) => `₹${(v/1000).toFixed(1)}K`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220, 18%, 10%)",
              border: "1px solid hsl(220, 14%, 18%)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "hsl(210, 20%, 92%)",
            }}
            formatter={(value: number, name: string) => [`₹${value?.toLocaleString()}/sqft`, name === "price" ? "Actual Price" : "Forecast"]}
          />
          <Area type="monotone" dataKey="price" stroke="hsl(160, 60%, 45%)" fill="url(#priceGradient)" strokeWidth={2} dot={false} />
          <Area type="monotone" dataKey="forecast" stroke="hsl(43, 90%, 55%)" fill="url(#forecastGradient)" strokeWidth={2} strokeDasharray="6 3" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
