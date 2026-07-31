"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  LifeBuoy,
  FileText,
  FileDown,
  Newspaper,
  Send,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const resourceCards = [
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Guides, concepts, and how-tos for getting the most out of TechIT.",
    href: "/developers#docs",
    cta: "Read the docs",
  },
  {
    icon: LifeBuoy,
    title: "Help Centre",
    desc: "Answers to common questions and support for your account.",
    href: "/contact",
    cta: "Get help",
  },
  {
    icon: FileText,
    title: "One-Pager",
    desc: "A concise overview of TechIT Network for quick sharing.",
    href: "#",
    cta: "Download PDF",
  },
  {
    icon: FileDown,
    title: "Pitch Deck",
    desc: "The full investor pitch deck for TechIT Network.",
    href: "/investors",
    cta: "Request deck",
  },
];

const faqs = [
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

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Resources
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Everything you need to get started
        </h1>
        <p className="mt-3 text-text-muted">
          Documentation, support, downloads, and updates — all in one place.
        </p>
      </div>

      {/* Resource cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resourceCards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group flex flex-col rounded-2xl border border-digital-blue-100 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-digital-blue-500/10">
              <c.icon className="h-5 w-5 text-digital-blue-500" />
            </div>
            <h3 className="mt-4 font-semibold text-text-primary">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm text-text-muted">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-digital-blue-500 group-hover:gap-2 transition-all">
              {c.cta} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <section id="faq" className="mx-auto mt-24 max-w-3xl scroll-mt-24">
        <h2 className="text-center text-2xl font-bold text-text-primary">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-digital-blue-100 rounded-2xl border border-digital-blue-100">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="updates" className="mt-24 scroll-mt-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-digital-blue-900 p-8 text-center text-white sm:p-12">
          <Newspaper className="mx-auto h-8 w-8 text-digital-blue-300" />
          <h2 className="mt-4 text-2xl font-bold">TechIT Insights</h2>
          <p className="mx-auto mt-2 max-w-md text-digital-blue-200">
            Product updates, startup execution playbooks, and ecosystem stories. No spam.
          </p>
          <NewsletterForm />
        </div>
      </section>
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
      {open && <p className="px-6 pb-4 text-sm leading-relaxed text-text-muted">{answer}</p>}
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Placeholder — wire to email provider when backend is ready.
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white">
        <Check className="h-4 w-4" /> You&apos;re subscribed. Welcome aboard!
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-lg border border-digital-blue-700 bg-digital-blue-950 px-4 py-2.5 text-sm text-white placeholder:text-digital-blue-300 focus:border-digital-blue-400 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-digital-blue-900 hover:bg-digital-blue-50 transition-colors"
      >
        Subscribe <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
