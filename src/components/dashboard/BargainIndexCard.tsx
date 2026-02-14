import { ArrowDownRight, ArrowUpRight, Handshake, BarChart3 } from "lucide-react";
import type { BargainIndex } from "@/data/mockMarketData";

interface BargainIndexCardProps {
  data: BargainIndex;
  city: string;
}

export default function BargainIndexCard({ data, city }: BargainIndexCardProps) {
  const formatPrice = (v: number) => {
    if (v >= 10000000) return `₹${(v / 10000000).toFixed(1)} Cr`;
    if (v >= 100000) return `₹${(v / 100000).toFixed(1)} L`;
    return `₹${v.toLocaleString()}`;
  };

  return (
    <div className="glass-panel rounded-xl p-6 shadow-card">
      <div className="flex items-center gap-2 mb-1">
        <Handshake className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-display font-semibold text-foreground">Bargain Market Index</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{city} — Negotiation analytics</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Avg Asking</p>
          <p className="text-xl font-bold font-display text-foreground">{formatPrice(data.avg_asking_price)}</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Avg Offer</p>
          <p className="text-xl font-bold font-display text-primary">{formatPrice(data.avg_offer_price)}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3 bg-muted/20 rounded-lg p-3">
          <ArrowDownRight className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground">Price Gap</p>
            <p className="text-lg font-bold text-accent">{data.gap_percentage}%</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-muted/20 rounded-lg p-3">
          <BarChart3 className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <p className="text-lg font-bold text-primary">{data.success_rate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
