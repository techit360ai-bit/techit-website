import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the TechIT Network team about the product, partnerships, investing, press, or support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TechIT Network",
    description: "Questions about the product, partnerships, or investing? Let's talk.",
    url: "https://www.techit.network/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
