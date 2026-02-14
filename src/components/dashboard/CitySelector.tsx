import { CITIES } from "@/data/mockMarketData";

interface CitySelectorProps {
  selected: string;
  onSelect: (city: string) => void;
}

export default function CitySelector({ selected, onSelect }: CitySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CITIES.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selected === city
              ? "bg-primary text-primary-foreground shadow-glow"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
