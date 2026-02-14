import { useState } from "react";
import { Building2 } from "lucide-react";
import CitySelector from "@/components/dashboard/CitySelector";
import StatsCards from "@/components/dashboard/StatsCards";
import PriceTrendChart from "@/components/dashboard/PriceTrendChart";
import LocalityGrowth from "@/components/dashboard/LocalityGrowth";
import TrendingSearchesWidget from "@/components/dashboard/TrendingSearches";
import BargainIndexCard from "@/components/dashboard/BargainIndexCard";
import AISummary from "@/components/dashboard/AISummary";
import MarketNewsFeed from "@/components/dashboard/MarketNewsFeed";
import InvestmentGauge from "@/components/dashboard/InvestmentGauge";
import {
  cityMarketData,
  getPriceTrend,
  getLocalities,
  getTrendingSearches,
  bargainData,
  getAISummary,
  getMarketNews,
} from "@/data/mockMarketData";

const Index = () => {
  const [city, setCity] = useState("Hyderabad");

  const marketData = cityMarketData[city] || cityMarketData["Hyderabad"];
  const priceTrend = getPriceTrend(city);
  const localities = getLocalities(city);
  const trending = getTrendingSearches(city);
  const bargain = bargainData[city] || bargainData["Hyderabad"];
  const aiSummary = getAISummary(city);
  const news = getMarketNews(city);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">CMNHousing</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Market Intelligence Platform</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Live Market Data
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* City Selector */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Select City</h2>
          <CitySelector selected={city} onSelect={setCity} />
        </section>

        {/* AI Summary */}
        <AISummary summary={aiSummary} city={city} />

        {/* Stats Cards */}
        <StatsCards data={marketData} />

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <PriceTrendChart data={priceTrend} city={city} />
          </div>
          <InvestmentGauge data={marketData} />
        </div>

        {/* Locality Growth */}
        <LocalityGrowth data={localities} city={city} />

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrendingSearchesWidget data={trending} city={city} />
          <BargainIndexCard data={bargain} city={city} />
          <MarketNewsFeed data={news} city={city} />
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground">© 2026 CMNHousing Market Intelligence Platform. Data refreshed in real-time.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
