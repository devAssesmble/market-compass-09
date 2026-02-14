import { Newspaper, Building2, Train, Cpu, Landmark, FolderOpen, Globe } from "lucide-react";
import type { MarketNews } from "@/data/mockMarketData";

interface MarketNewsFeedProps {
  data: MarketNews[];
  city: string;
}

const typeIcons: Record<string, React.ElementType> = {
  INFRA: Building2,
  POLICY: Landmark,
  IT: Cpu,
  METRO: Train,
  PROJECT: FolderOpen,
  GENERAL: Globe,
};

const typeBadge: Record<string, string> = {
  INFRA: "bg-chart-info/20 text-chart-info",
  POLICY: "bg-accent/20 text-accent",
  IT: "bg-primary/20 text-primary",
  METRO: "bg-chart-info/20 text-chart-info",
  PROJECT: "bg-chart-warning/20 text-chart-warning",
  GENERAL: "bg-muted text-muted-foreground",
};

export default function MarketNewsFeed({ data, city }: MarketNewsFeedProps) {
  return (
    <div className="glass-panel rounded-xl p-6 shadow-card">
      <div className="flex items-center gap-2 mb-1">
        <Newspaper className="w-5 h-5 text-chart-info" />
        <h3 className="text-lg font-display font-semibold text-foreground">Market News</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{city} — Latest updates impacting real estate</p>

      <div className="space-y-4">
        {data.map((news, i) => {
          const Icon = typeIcons[news.news_type] || Globe;
          return (
            <div key={i} className="flex gap-3 group">
              <div className="mt-1 p-1.5 rounded-lg bg-muted/50 shrink-0">
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{news.news_title}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${typeBadge[news.news_type]}`}>{news.news_type}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{news.news_description}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-1">{news.created_at}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
