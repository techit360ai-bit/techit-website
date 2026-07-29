export interface RoadmapItem {
  title: string;
  status: "In Development" | "Planned" | "Exploring";
}

export const roadmap = {
  now: [
    { title: "Private beta", status: "In Development" },
    { title: "Startup workspace", status: "In Development" },
    { title: "AI startup evaluation", status: "In Development" },
    { title: "Contextual Intelligence Layer", status: "In Development" },
    { title: "GSIS intelligence", status: "In Development" },
    { title: "Execution tracking", status: "In Development" },
    { title: "Investor readiness", status: "In Development" },
    { title: "Product integrations", status: "In Development" },
  ] satisfies RoadmapItem[],
  next: [
    { title: "Mobile experience", status: "Planned" },
    { title: "Marketplace", status: "Planned" },
    { title: "Plugin ecosystem", status: "Planned" },
    { title: "Expanded AI agents", status: "Planned" },
    { title: "Organisation dashboards", status: "Planned" },
    { title: "Developer SDK", status: "Planned" },
    { title: "MCP integrations", status: "Planned" },
    { title: "API access", status: "Planned" },
  ] satisfies RoadmapItem[],
  future: [
    { title: "AI voice workflows", status: "Exploring" },
    { title: "Advanced startup intelligence", status: "Exploring" },
    { title: "Investment marketplace", status: "Exploring" },
    { title: "Global ecosystem expansion", status: "Exploring" },
    { title: "Autonomous startup workflows", status: "Exploring" },
    { title: "Education infrastructure", status: "Exploring" },
  ] satisfies RoadmapItem[],
};
