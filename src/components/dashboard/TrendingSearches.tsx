import { Search, TrendingUp } from "lucide-react";
import type { TrendingSearch } from "@/data/mockMarketData";

interface TrendingSearchesProps {
  data: TrendingSearch[];
  city: string;
}

export default function TrendingSearches({ data, city }: TrendingSearchesProps) {
  const maxCount = Math.max(...data.map((d) => d.search_count));

  return (
    <div className="glass-panel rounded-xl p-6 shadow-card">
      <div className="flex items-center gap-2 mb-1">
        <Search className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-display font-semibold text-foreground">Trending Searches</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{city} — What buyers are searching</p>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={item.search_query} className="group">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-5">#{i + 1}</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item.search_query}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3" />
                {item.search_count.toLocaleString()}
              </div>
            </div>
            <div className="ml-7 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-accent/70 transition-all duration-500"
                style={{ width: `${(item.search_count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
