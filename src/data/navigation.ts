export const mainNav = [
  { label: "Product", href: "/#product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Demo", href: "/demo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Team", href: "/team" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Developers", href: "/developers" },
  { label: "Resources", href: "/resources" },
] as const;

export const footerNav = {
  product: [
    { label: "Product Overview", href: "/#product" },
    { label: "Live Demo", href: "/demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  solutions: [
    { label: "Founders", href: "/solutions#founders" },
    { label: "Builders", href: "/solutions#builders" },
    { label: "Investors", href: "/solutions#investors" },
    { label: "Organisations", href: "/solutions#organisations" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  developers: [
    { label: "Developer Platform", href: "/developers" },
    { label: "API", href: "/developers#api" },
    { label: "SDK", href: "/developers#sdk" },
    { label: "MCP", href: "/developers#mcp" },
    { label: "Documentation", href: "/developers#docs" },
  ],
  resources: [
    { label: "Help Centre", href: "/resources" },
    { label: "FAQs", href: "/resources#faq" },
    { label: "Product Updates", href: "/resources#updates" },
    { label: "TechIT Insights", href: "/resources#insights" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
  ],
};

// WhatsApp community group — primary "Join Private Beta" destination.
export const whatsappGroupUrl = "https://chat.whatsapp.com/IZ3V4xXEBl6IiRWZ7tpGc4";

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/19484791/", icon: "linkedin" },
  { label: "WhatsApp", href: whatsappGroupUrl, icon: "whatsapp" },
];

export const company = {
  name: "TechIT Network",
  tagline: "The AI Operating System for Building Startups.",
  supportingTagline: "Build. Validate. Execute. Raise.",
  email: "anthony@techitnetwork.com",
  phone: "09038721513",
  location: "Otukpo, Nigeria",
  website: "https://www.techit.network",
  partner: "Otukpo Tech Academy",
  whatsappGroupUrl,
  linkedin: "https://www.linkedin.com/company/19484791/",
};
