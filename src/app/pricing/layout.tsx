import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free to explore, pay as you build. Five plans from free to enterprise, credit packs, and an African-first payment stack.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "TechIT Network — Pricing",
    description: "Free to explore. Pay as you build. Plans, credits, and African-first payments.",
    url: "https://www.techit.network/pricing",
    type: "website",
  },
};

// Mirrors the FAQ content rendered on the pricing page, for rich results.
const pricingFaqs = [
  {
    q: "How do credits work?",
    a: "Credits power AI actions across the platform — evaluations, document generation, research, and agent runs. Each plan includes a monthly credit allowance, and you can top up any time with credit packs. Unused monthly credits do not roll over; purchased credit packs never expire.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time. Upgrades take effect immediately with a prorated charge; downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "What payment methods do you support in Africa?",
    a: "We support cards, bank transfers, and mobile money through African-first payment providers, alongside international cards. Local currency billing is available in supported markets.",
  },
  {
    q: "Is there a discount for teams or organisations?",
    a: "Yes. The Enterprise plan is built for universities, accelerators, incubators, and governments, with cohort dashboards and custom pricing. Talk to us for volume and annual arrangements.",
  },
  {
    q: "Do you offer a free plan?",
    a: "The Explorer plan is free forever and includes 5 credits per month — enough to explore the platform, browse the hangout feed, and run basic problem discovery.",
  },
];

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema(pricingFaqs)} />
      {children}
    </>
  );
}
