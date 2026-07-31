import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Five serious questions, answered: the problem, product proof, customers, business model, and team behind TechIT Network. Request the data room.",
  alternates: { canonical: "/investors" },
  openGraph: {
    title: "TechIT Network — For Investors",
    description:
      "The problem, the proof, the market, the model, and the team. Request the data room.",
    url: "https://www.techit.network/investors",
    type: "website",
  },
};

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
