"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { tiers, creditPacks } from "@/data/pricing";
import { whatsappGroupUrl } from "@/data/navigation";

const faqs = [
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

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          <Sparkles className="h-3.5 w-3.5" /> Pricing
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Free to explore. Pay as you build.
        </h1>
        <p className="mt-3 mx-auto max-w-2xl text-text-muted">
          Start free and scale as your startup grows. Every plan is powered by credits that fuel
          AI evaluations, execution tracking, and investor-readiness tools.
        </p>
      </div>

      {/* Tiers */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              tier.highlighted
                ? "border-digital-blue-500 bg-digital-blue-500 text-white shadow-lg lg:-mt-4"
                : "border-digital-blue-100 bg-white"
            }`}
          >
            {tier.highlighted && (
              <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
                Most popular
              </span>
            )}
            <h3
              className={`text-lg font-semibold ${
                tier.highlighted ? "text-white" : "text-text-primary"
              }`}
            >
              {tier.name}
            </h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span
                className={`text-3xl font-bold ${
                  tier.highlighted ? "text-white" : "text-text-primary"
                }`}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-digital-blue-100" : "text-text-muted"
                  }`}
                >
                  {tier.period}
                </span>
              )}
            </div>
            <p
              className={`mt-1 text-xs font-medium ${
                tier.highlighted ? "text-digital-blue-100" : "text-digital-blue-500"
              }`}
            >
              {tier.credits}
            </p>
            <p
              className={`mt-3 text-sm ${
                tier.highlighted ? "text-digital-blue-50" : "text-text-muted"
              }`}
            >
              {tier.description}
            </p>

            <ul className="mt-5 flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      tier.highlighted ? "text-white" : "text-digital-blue-500"
                    }`}
                  />
                  <span className={tier.highlighted ? "text-digital-blue-50" : "text-text-muted"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.name === "Enterprise" ? "/contact" : "/waitlist"}
              className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                tier.highlighted
                  ? "bg-white text-digital-blue-600 hover:bg-digital-blue-50"
                  : "bg-digital-blue-500 text-white hover:bg-digital-blue-600"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Credit packs */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary">Need more credits?</h2>
          <p className="mt-2 text-text-muted">
            Top up any plan with credit packs. Purchased credits never expire.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-digital-blue-100">
          <table className="w-full text-sm">
            <thead className="bg-digital-blue-50/60 text-text-primary">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Credit pack</th>
                <th className="px-6 py-3 text-right font-semibold">Price (USD)</th>
                <th className="px-6 py-3 text-right font-semibold">Per credit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-digital-blue-100">
              {creditPacks.map((pack) => (
                <tr key={pack.credits} className="hover:bg-digital-blue-50/30">
                  <td className="px-6 py-3 font-medium text-text-primary">
                    {pack.credits.toLocaleString()} credits
                  </td>
                  <td className="px-6 py-3 text-right text-text-primary">${pack.price}</td>
                  <td className="px-6 py-3 text-right text-text-muted">
                    ${(pack.price / pack.credits).toFixed(3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* African payment note */}
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-digital-blue-100 bg-digital-blue-50/40 p-6 text-center">
        <p className="text-sm font-medium text-text-primary">Built for African founders</p>
        <p className="mt-2 text-sm text-text-muted">
          Pay with cards, bank transfer, or mobile money through our African-first payment stack —
          with local currency billing in supported markets, alongside international cards.
        </p>
      </div>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-text-primary">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-digital-blue-100 rounded-2xl border border-digital-blue-100">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Start building today</h2>
        <p className="mt-2 text-text-muted">Join the private beta — free to explore.</p>
        <a
          href={whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
        >
          Join Private Beta
        </a>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-text-primary">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-digital-blue-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-4 text-sm text-text-muted leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
