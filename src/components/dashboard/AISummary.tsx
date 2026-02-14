import { Brain, Sparkles } from "lucide-react";

interface AISummaryProps {
  summary: string;
  city: string;
}

export default function AISummary({ summary, city }: AISummaryProps) {
  return (
    <div className="relative overflow-hidden rounded-xl p-6 shadow-card bg-gradient-hero border border-primary/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
              AI Market Intelligence
              <Sparkles className="w-4 h-4 text-accent animate-pulse-glow" />
            </h3>
            <p className="text-xs text-muted-foreground">{city} — Auto-generated insight</p>
          </div>
        </div>
        <p className="text-sm text-secondary-foreground leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}
