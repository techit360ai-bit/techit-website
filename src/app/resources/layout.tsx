import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documentation, help centre, FAQs, downloads, and product updates for TechIT Network — the AI operating system for building startups.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "TechIT Network — Resources",
    description: "Documentation, support, downloads, and updates, all in one place.",
    url: "https://www.techit.network/resources",
    type: "website",
  },
};

// Mirrors the FAQ content rendered on the resources page, for rich results.
const resourceFaqs = [
  {
    q: "What is TechIT Network?",
    a: "TechIT Network is an AI operating system for building startups — one workspace to validate ideas, execute, measure progress with GSIS, and become investor-ready.",
  },
  {
    q: "Is it available now?",
    a: "We're in private beta. Join the waitlist to get early access as we roll out to new users.",
  },
  {
    q: "Who is it for?",
    a: "Founders, builders, investors, and organisations like accelerators, universities, innovation hubs, and governments.",
  },
  {
    q: "How much does it cost?",
    a: "There's a free Explorer plan, paid plans from $9/month, and custom Enterprise pricing. See the pricing page for full details.",
  },
  {
    q: "Do you support African payment methods?",
    a: "Yes. We support cards, bank transfer, and mobile money through an African-first payment stack, with local currency billing in supported markets.",
  },
];

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema(resourceFaqs)} />
      {children}
    </>
  );
}
