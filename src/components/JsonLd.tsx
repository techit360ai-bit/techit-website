import { company } from "@/data/navigation";

/**
 * Renders a Schema.org JSON-LD script tag.
 * Kept as a small server component so any page can drop in structured data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static content generated on the server.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.website,
  email: company.email,
  telephone: company.phone,
  slogan: company.tagline,
  description:
    "The AI operating system for building startups. Build, validate, execute, and prepare your startup for investment through one intelligent workspace.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: company.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "An AI operating system for building startups, featuring 34 AI agents, 20 scoring models, GSIS intelligence, execution tracking, and investor readiness.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free Explorer plan with 5 credits per month.",
  },
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
