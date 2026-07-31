import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "See TechIT in action: an interactive walkthrough of the Idea Diagnostic, GSIS Dashboard, Build Log, and Investor View.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "TechIT Network — Interactive Demo",
    description:
      "Explore the four systems that power TechIT, from idea diagnosis to investor-ready execution signals.",
    url: "https://www.techit.network/demo",
    type: "website",
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
