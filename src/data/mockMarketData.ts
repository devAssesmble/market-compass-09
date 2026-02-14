export interface CityMarketData {
  city_name: string;
  avg_price_sqft: number;
  growth_yoy: number;
  demand_score: number;
  rental_yield: number;
  top_locality: string;
  investment_score: number;
}

export interface LocalityData {
  locality_name: string;
  avg_price_sqft: number;
  growth_percentage: number;
  status: "HOT" | "RISING" | "STABLE";
  demand_level: "LOW" | "MEDIUM" | "HIGH" | "VERY_HIGH";
}

export interface PriceTrend {
  month: string;
  price?: number;
  forecast?: number;
}

export interface TrendingSearch {
  search_query: string;
  search_count: number;
}

export interface BargainIndex {
  avg_asking_price: number;
  avg_offer_price: number;
  gap_percentage: number;
  success_rate: number;
}

export interface MarketNews {
  news_title: string;
  news_description: string;
  news_type: "INFRA" | "POLICY" | "IT" | "METRO" | "PROJECT" | "GENERAL";
  created_at: string;
}

export const CITIES = ["Hyderabad", "Mumbai", "Bangalore", "Pune", "Chennai", "Delhi NCR", "Gurgaon", "Noida"];

export const cityMarketData: Record<string, CityMarketData> = {
  Hyderabad: { city_name: "Hyderabad", avg_price_sqft: 7850, growth_yoy: 9.2, demand_score: 87, rental_yield: 3.8, top_locality: "Kokapet", investment_score: 91 },
  Mumbai: { city_name: "Mumbai", avg_price_sqft: 22500, growth_yoy: 5.1, demand_score: 78, rental_yield: 2.5, top_locality: "Thane West", investment_score: 74 },
  Bangalore: { city_name: "Bangalore", avg_price_sqft: 9200, growth_yoy: 8.4, demand_score: 85, rental_yield: 3.5, top_locality: "Whitefield", investment_score: 88 },
  Pune: { city_name: "Pune", avg_price_sqft: 7200, growth_yoy: 7.6, demand_score: 80, rental_yield: 3.9, top_locality: "Hinjewadi", investment_score: 83 },
  Chennai: { city_name: "Chennai", avg_price_sqft: 6800, growth_yoy: 6.3, demand_score: 72, rental_yield: 3.2, top_locality: "OMR", investment_score: 76 },
  "Delhi NCR": { city_name: "Delhi NCR", avg_price_sqft: 12500, growth_yoy: 4.8, demand_score: 75, rental_yield: 2.8, top_locality: "Dwarka Expressway", investment_score: 72 },
  Gurgaon: { city_name: "Gurgaon", avg_price_sqft: 11800, growth_yoy: 10.5, demand_score: 90, rental_yield: 3.1, top_locality: "Golf Course Road", investment_score: 93 },
  Noida: { city_name: "Noida", avg_price_sqft: 6500, growth_yoy: 8.9, demand_score: 82, rental_yield: 3.6, top_locality: "Sector 150", investment_score: 85 },
};

export const priceTrends: Record<string, PriceTrend[]> = {
  Hyderabad: [
    { month: "Jan", price: 6800 }, { month: "Feb", price: 6950 }, { month: "Mar", price: 7100 },
    { month: "Apr", price: 7050 }, { month: "May", price: 7250 }, { month: "Jun", price: 7400 },
    { month: "Jul", price: 7350 }, { month: "Aug", price: 7500 }, { month: "Sep", price: 7600 },
    { month: "Oct", price: 7700 }, { month: "Nov", price: 7800 }, { month: "Dec", price: 7850 },
    { month: "Jan'26", price: 7850, forecast: 8100 }, { month: "Feb'26", forecast: 8250 },
    { month: "Mar'26", forecast: 8400 }, { month: "Apr'26", forecast: 8500 },
  ],
  Mumbai: [
    { month: "Jan", price: 20500 }, { month: "Feb", price: 20800 }, { month: "Mar", price: 21000 },
    { month: "Apr", price: 21200 }, { month: "May", price: 21100 }, { month: "Jun", price: 21400 },
    { month: "Jul", price: 21600 }, { month: "Aug", price: 21800 }, { month: "Sep", price: 22000 },
    { month: "Oct", price: 22100 }, { month: "Nov", price: 22300 }, { month: "Dec", price: 22500 },
    { month: "Jan'26", price: 22500, forecast: 22800 }, { month: "Feb'26", forecast: 23000 },
    { month: "Mar'26", forecast: 23200 }, { month: "Apr'26", forecast: 23400 },
  ],
  Bangalore: [
    { month: "Jan", price: 8000 }, { month: "Feb", price: 8150 }, { month: "Mar", price: 8300 },
    { month: "Apr", price: 8250 }, { month: "May", price: 8500 }, { month: "Jun", price: 8600 },
    { month: "Jul", price: 8700 }, { month: "Aug", price: 8800 }, { month: "Sep", price: 8900 },
    { month: "Oct", price: 9000 }, { month: "Nov", price: 9100 }, { month: "Dec", price: 9200 },
    { month: "Jan'26", price: 9200, forecast: 9500 }, { month: "Feb'26", forecast: 9700 },
    { month: "Mar'26", forecast: 9900 }, { month: "Apr'26", forecast: 10050 },
  ],
};

export const localitiesData: Record<string, LocalityData[]> = {
  Hyderabad: [
    { locality_name: "Kokapet", avg_price_sqft: 9500, growth_percentage: 14.2, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Financial District", avg_price_sqft: 8800, growth_percentage: 11.5, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Gachibowli", avg_price_sqft: 8200, growth_percentage: 9.8, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Kondapur", avg_price_sqft: 7600, growth_percentage: 8.1, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Madhapur", avg_price_sqft: 7900, growth_percentage: 7.5, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Narsingi", avg_price_sqft: 7200, growth_percentage: 12.3, status: "HOT", demand_level: "HIGH" },
    { locality_name: "Tellapur", avg_price_sqft: 6500, growth_percentage: 10.9, status: "RISING", demand_level: "MEDIUM" },
    { locality_name: "Miyapur", avg_price_sqft: 5800, growth_percentage: 6.4, status: "STABLE", demand_level: "MEDIUM" },
  ],
  Mumbai: [
    { locality_name: "Thane West", avg_price_sqft: 15000, growth_percentage: 8.2, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Powai", avg_price_sqft: 25000, growth_percentage: 5.1, status: "STABLE", demand_level: "HIGH" },
    { locality_name: "Andheri East", avg_price_sqft: 20000, growth_percentage: 6.3, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Navi Mumbai", avg_price_sqft: 12000, growth_percentage: 9.5, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Goregaon", avg_price_sqft: 18000, growth_percentage: 4.8, status: "STABLE", demand_level: "MEDIUM" },
  ],
  Bangalore: [
    { locality_name: "Whitefield", avg_price_sqft: 8500, growth_percentage: 11.2, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Electronic City", avg_price_sqft: 6200, growth_percentage: 9.8, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Sarjapur Road", avg_price_sqft: 7800, growth_percentage: 10.5, status: "HOT", demand_level: "VERY_HIGH" },
    { locality_name: "Hebbal", avg_price_sqft: 9200, growth_percentage: 7.6, status: "RISING", demand_level: "HIGH" },
    { locality_name: "Marathahalli", avg_price_sqft: 7200, growth_percentage: 6.9, status: "STABLE", demand_level: "MEDIUM" },
  ],
};

export const bargainData: Record<string, BargainIndex> = {
  Hyderabad: { avg_asking_price: 8200000, avg_offer_price: 7600000, gap_percentage: 7.3, success_rate: 68.5 },
  Mumbai: { avg_asking_price: 25000000, avg_offer_price: 23500000, gap_percentage: 6.0, success_rate: 55.2 },
  Bangalore: { avg_asking_price: 9500000, avg_offer_price: 8900000, gap_percentage: 6.3, success_rate: 62.8 },
  Pune: { avg_asking_price: 7500000, avg_offer_price: 7000000, gap_percentage: 6.7, success_rate: 71.3 },
  Chennai: { avg_asking_price: 7000000, avg_offer_price: 6600000, gap_percentage: 5.7, success_rate: 65.0 },
  "Delhi NCR": { avg_asking_price: 13000000, avg_offer_price: 12200000, gap_percentage: 6.2, success_rate: 58.4 },
  Gurgaon: { avg_asking_price: 12500000, avg_offer_price: 11600000, gap_percentage: 7.2, success_rate: 60.1 },
  Noida: { avg_asking_price: 6800000, avg_offer_price: 6300000, gap_percentage: 7.4, success_rate: 72.5 },
};

export const trendingSearches: Record<string, TrendingSearch[]> = {
  Hyderabad: [
    { search_query: "3 BHK Kokapet", search_count: 1250 },
    { search_query: "Gated community Gachibowli", search_count: 980 },
    { search_query: "Villa Financial District", search_count: 870 },
    { search_query: "Under 80L Kondapur", search_count: 750 },
    { search_query: "New launch Narsingi", search_count: 680 },
    { search_query: "Rental 2BHK Madhapur", search_count: 620 },
    { search_query: "Plot Tellapur", search_count: 540 },
    { search_query: "Luxury apartment Jubilee Hills", search_count: 490 },
  ],
  Mumbai: [
    { search_query: "2 BHK Thane", search_count: 2100 },
    { search_query: "Sea view Worli", search_count: 1500 },
    { search_query: "Affordable Navi Mumbai", search_count: 1350 },
    { search_query: "Penthouse Bandra", search_count: 890 },
    { search_query: "New project Goregaon", search_count: 780 },
  ],
  Bangalore: [
    { search_query: "3 BHK Whitefield", search_count: 1800 },
    { search_query: "Villa Sarjapur", search_count: 1200 },
    { search_query: "Under 1Cr Electronic City", search_count: 1050 },
    { search_query: "Luxury Hebbal", search_count: 920 },
    { search_query: "Plot Devanahalli", search_count: 780 },
  ],
};

export const marketNews: Record<string, MarketNews[]> = {
  Hyderabad: [
    { news_title: "Pharma City Phase 2 land acquisition completed", news_description: "The Telangana govt has completed land acquisition for Phase 2 of Hyderabad Pharma City, expected to boost realty in southern corridor.", news_type: "INFRA", created_at: "2026-02-12" },
    { news_title: "Metro expansion to Kokapet approved", news_description: "HMRL announces metro line extension to Kokapet and Financial District. Property prices expected to surge 15-20% in the corridor.", news_type: "METRO", created_at: "2026-02-10" },
    { news_title: "Amazon new campus in Gachibowli", news_description: "Amazon plans a 50-acre campus in Gachibowli, creating 25,000+ jobs. Rental demand in the area is already rising.", news_type: "IT", created_at: "2026-02-08" },
    { news_title: "RERA mandates price transparency", news_description: "Telangana RERA now requires builders to display per-sqft pricing. This move is expected to reduce bargaining gaps.", news_type: "POLICY", created_at: "2026-02-05" },
    { news_title: "Prestige Group launches ₹4000Cr township", news_description: "Prestige Group announces a mega integrated township project near ORR, featuring 5000+ residential units.", news_type: "PROJECT", created_at: "2026-02-02" },
  ],
  Mumbai: [
    { news_title: "Mumbai Trans Harbour Link opens to traffic", news_description: "MTHL connecting Mumbai to Navi Mumbai cuts travel time to 20 mins. Navi Mumbai property prices surging.", news_type: "INFRA", created_at: "2026-02-11" },
    { news_title: "BMC approves coastal road phase 2", news_description: "Western suburbs set to benefit from coastal road extension. Property values along the route expected to appreciate.", news_type: "INFRA", created_at: "2026-02-09" },
    { news_title: "Stamp duty reduction proposed", news_description: "Maharashtra govt considering 1% stamp duty reduction for women buyers to boost affordable housing segment.", news_type: "POLICY", created_at: "2026-02-06" },
  ],
  Bangalore: [
    { news_title: "Suburban rail project gets ₹15,000Cr boost", news_description: "Karnataka govt accelerates suburban rail. Whitefield, Electronic City to get direct connectivity. Major realty impact expected.", news_type: "METRO", created_at: "2026-02-13" },
    { news_title: "IT corridor Phase 3 announced", news_description: "New IT SEZ along Sarjapur Road approved. 200+ companies expected to set up operations within 3 years.", news_type: "IT", created_at: "2026-02-07" },
    { news_title: "Bangalore airport expansion complete", news_description: "Terminal 2 now operational, boosting North Bangalore realty. Devanahalli prices up 12% in last quarter.", news_type: "INFRA", created_at: "2026-02-04" },
  ],
};

export function getAISummary(city: string): string {
  const data = cityMarketData[city];
  if (!data) return "No market data available for this city.";
  
  const sentiment = data.demand_score > 80 ? "investors and end-users alike" : "budget-conscious buyers looking for value";
  const trend = data.growth_yoy > 8 ? "strong upward momentum" : data.growth_yoy > 5 ? "steady growth" : "moderate but stable growth";
  
  return `${city} real estate market is demonstrating ${trend} with ${data.growth_yoy}% YoY appreciation. The average price stands at ₹${data.avg_price_sqft.toLocaleString()}/sqft with a demand score of ${data.demand_score}/100, indicating robust buyer activity. ${data.top_locality} leads as the top-performing locality with exceptional investor interest. Current rental yield of ${data.rental_yield}% makes this market attractive for ${sentiment}. The investment score of ${data.investment_score}/100 positions ${city} as a ${data.investment_score > 85 ? "premium tier" : data.investment_score > 70 ? "high potential" : "value"} investment destination. CMNHousing AI recommends monitoring upcoming infrastructure projects for maximum returns.`;
}

// Default fallback for cities without detailed data
export function getPriceTrend(city: string): PriceTrend[] {
  return priceTrends[city] || priceTrends["Hyderabad"];
}

export function getLocalities(city: string): LocalityData[] {
  return localitiesData[city] || localitiesData["Hyderabad"];
}

export function getTrendingSearches(city: string): TrendingSearch[] {
  return trendingSearches[city] || trendingSearches["Hyderabad"];
}

export function getMarketNews(city: string): MarketNews[] {
  return marketNews[city] || marketNews["Hyderabad"];
}
