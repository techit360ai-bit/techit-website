export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  credits: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const tiers: PricingTier[] = [
  {
    name: "Explorer",
    price: "Free",
    credits: "5 credits/month",
    description: "Explore the platform and discover startup opportunities.",
    features: ["5 credits per month", "Hangout feed access", "Problem discovery", "Basic dashboard"],
    cta: "Start Exploring",
  },
  {
    name: "Builder",
    price: "$9",
    period: "/month",
    credits: "50 credits/month",
    description: "Validate ideas and build with AI-powered tools.",
    features: ["50 credits per month", "Matching engine", "Unicorn analysis", "Market intelligence", "Workspace tools"],
    cta: "Start Building",
  },
  {
    name: "Founder Pro",
    price: "$29",
    period: "/month",
    credits: "150 credits/month",
    description: "Full startup execution and investor readiness.",
    features: ["150 credits per month", "Full incubation pipeline", "App scaffold generation", "8 document workflows", "IP protection", "Investor pack"],
    cta: "Build With TechIT",
    highlighted: true,
  },
  {
    name: "Investor",
    price: "$79",
    period: "/month",
    credits: "500 credits/month",
    description: "Access execution signals and verified deal flow.",
    features: ["500 credits per month", "Deal flow access", "EVI-I signals", "Watchlist alerts", "Investor pack access", "Build Log viewer"],
    cta: "Explore Deal Flow",
  },
  {
    name: "Enterprise",
    price: "Custom",
    credits: "Unlimited",
    description: "For universities, accelerators, incubators, and governments.",
    features: ["Cohort dashboards", "Organisation workspaces", "Custom integrations", "Dedicated support", "Custom deployment"],
    cta: "Talk to Us",
  },
];

export const creditPacks = [
  { credits: 50, price: 10 },
  { credits: 150, price: 25 },
  { credits: 500, price: 75 },
  { credits: 1500, price: 200 },
  { credits: 5000, price: 600 },
];
