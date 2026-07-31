import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "One operating system, tailored to how you work — for founders, builders, investors, accelerators, universities, innovation hubs, and governments.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "TechIT Network — Solutions",
    description: "Built for everyone in the startup journey.",
    url: "https://www.techit.network/solutions",
    type: "website",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
