import type { LocalityData } from "@/data/mockMarketData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface LocalityGrowthProps {
  data: LocalityData[];
  city: string;
}

const statusColors: Record<string, string> = {
  HOT: "hsl(0, 72%, 51%)",
  RISING: "hsl(43, 90%, 55%)",
  STABLE: "hsl(160, 60%, 45%)",
};

const statusBg: Record<string, string> = {
  HOT: "bg-destructive/20 text-destructive",
  RISING: "bg-accent/20 text-accent",
  STABLE: "bg-primary/20 text-primary",
};

export default function LocalityGrowth({ data, city }: LocalityGrowthProps) {
  const sorted = [...data].sort((a, b) => b.growth_percentage - a.growth_percentage);

  return (
    <div className="glass-panel rounded-xl p-6 shadow-card">
      <h3 className="text-lg font-display font-semibold text-foreground mb-1">Locality Growth Rankings</h3>
      <p className="text-xs text-muted-foreground mb-5">{city} — Top localities by YoY growth</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={sorted.slice(0, 6)} layout="vertical" margin={{ left: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" horizontal={false} />
            <XAxis type="number" stroke="hsl(215, 15%, 55%)" fontSize={11} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="locality_name" stroke="hsl(215, 15%, 55%)" fontSize={11} width={110} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", fontSize: "12px", color: "hsl(210, 20%, 92%)" }}
              formatter={(v: number) => [`${v}%`, "Growth"]}
            />
            <Bar dataKey="growth_percentage" radius={[0, 6, 6, 0]} barSize={20}>
              {sorted.slice(0, 6).map((entry, index) => (
                <Cell key={index} fill={statusColors[entry.status]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="space-y-2">
          {sorted.map((loc) => (
            <div key={loc.locality_name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div>
                <span className="text-sm font-medium text-foreground">{loc.locality_name}</span>
                <span className="text-xs text-muted-foreground ml-2">₹{loc.avg_price_sqft.toLocaleString()}/sqft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${statusBg[loc.status]}`}>{loc.status}</span>
                <span className="text-sm font-semibold text-primary">+{loc.growth_percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
