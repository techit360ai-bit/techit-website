import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Get early access to TechIT Network, the AI operating system for building startups. Join the private beta waitlist and claim your spot.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Join the TechIT Network Waitlist",
    description: "Get early access to the AI operating system for building startups.",
    url: "https://www.techit.network/waitlist",
    type: "website",
  },
};

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
