"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  FileText,
  FileDown,
  Lock,
  Check,
  Target,
  Cpu,
  Users,
  Coins,
  Rocket,
} from "lucide-react";

// --------------------------------------------------------------------------
// The five serious questions
// --------------------------------------------------------------------------

const questions = [
  {
    id: "problem",
    n: "01",
    icon: Target,
    title: "The Problem",
    lead: "Startup execution is broken after the event.",
    body: "Founders leave hackathons, accelerators, and programmes with momentum — then lose it. Tooling is fragmented, progress is unmeasurable, and investors receive polished decks with no execution evidence. African founders face this plus infrastructure and access barriers. There is no persistent system that carries a venture from idea to investment.",
  },
  {
    id: "product",
    n: "02",
    icon: Cpu,
    title: "Product Proof",
    lead: "A working platform, not a concept.",
    body: "TechIT is a production system: 34 AI agents, 20 scoring models, 42 database tables, and 51 task types connected through a persistent startup context layer. The founder shipped a 19,000-line production codebase before raising external capital. This is architecture that already runs.",
  },
  {
    id: "customers",
    n: "03",
    icon: Users,
    title: "Customers",
    lead: "Founders, builders, investors, and institutions.",
    body: "Our wedge is African founders and the accelerators, universities, and innovation hubs that support them — a large, underserved, high-intent market. Organisations pay for cohort visibility; investors pay for verified deal flow; founders convert from free exploration to paid execution as their ventures mature.",
  },
  {
    id: "model",
    n: "04",
    icon: Coins,
    title: "Business Model",
    lead: "Credit-based economics with software margins.",
    body: "Subscriptions plus consumable AI credits. Credits map to real AI costs with a healthy margin, so revenue scales with usage while unit economics stay predictable. Enterprise contracts with organisations add high-value, recurring, multi-seat revenue on top of self-serve.",
  },
  {
    id: "team",
    n: "05",
    icon: Rocket,
    title: "The Team",
    lead: "Founder-led, shipping in Africa for the world.",
    body: "A technical founder-led team of engineers and operators with deep roots in African startup ecosystems, building in strategic partnership with Otukpo Tech Academy. We build fast, ship real software, and stay close to the founders we serve.",
  },
];

// Illustrative business-model / margin figures
const economics = [
  { label: "Gross margin target", value: "80%+" },
  { label: "Revenue model", value: "Subscription + Credits" },
  { label: "Enterprise ACV", value: "Custom" },
  { label: "Primary market", value: "African founders" },
];

// --------------------------------------------------------------------------
// Data room request form
// --------------------------------------------------------------------------

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().min(1, "Email is required.").email("Enter a valid email."),
  firm: z.string().min(2, "Please enter your firm or fund."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function InvestorsPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onTouched" });

  const onSubmit = async (_values: FormValues) => {
    // Resend-ready: POST to /api/data-room when the endpoint exists.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          For Investors
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Five serious questions, answered.
        </h1>
        <p className="mt-3 text-text-muted">
          We respect your time. Here is the case for TechIT Network — the problem, the proof, the
          market, the model, and the team.
        </p>
      </div>

      {/* Downloads */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="#data-room"
          className="inline-flex items-center gap-2 rounded-lg bg-digital-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
        >
          <Lock className="h-4 w-4" /> Request Data Room
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-digital-blue-200 px-5 py-2.5 text-sm font-semibold text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
        >
          <FileDown className="h-4 w-4" /> Download Pitch Deck
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-digital-blue-200 px-5 py-2.5 text-sm font-semibold text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
        >
          <FileText className="h-4 w-4" /> Download One-Pager
        </a>
      </div>

      {/* The five questions */}
      <div className="mt-16 space-y-6">
        {questions.map((q, i) => (
          <motion.section
            key={q.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
            className="rounded-2xl border border-digital-blue-100 bg-white p-6 sm:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-digital-blue-500/10 text-digital-blue-500">
                  <q.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-digital-blue-500">{q.n}</span>
                  <h2 className="text-xl font-semibold text-text-primary">{q.title}</h2>
                </div>
                <p className="mt-2 font-medium text-text-primary">{q.lead}</p>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{q.body}</p>

                {/* Product architecture diagram */}
                {q.id === "product" && <ArchitectureDiagram />}

                {/* Business model economics */}
                {q.id === "model" && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {economics.map((e) => (
                      <div
                        key={e.label}
                        className="rounded-xl border border-digital-blue-100 bg-digital-blue-50/40 p-4"
                      >
                        <p className="text-lg font-bold text-digital-blue-500">{e.value}</p>
                        <p className="mt-0.5 text-xs text-text-muted">{e.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Data room request */}
      <section
        id="data-room"
        className="mt-20 scroll-mt-24 rounded-2xl border border-digital-blue-100 bg-digital-blue-50/40 p-8 sm:p-12"
      >
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-digital-blue-500 text-white">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-text-primary">Request the Data Room</h2>
            <p className="mt-2 text-sm text-text-muted">
              Access financials, metrics, technical architecture, and the full pitch materials. We
              respond to qualified investors within two business days.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-xl border border-digital-blue-200 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-digital-blue-500 text-white">
                <Check className="h-6 w-6" />
              </div>
              <p className="mt-4 font-semibold text-text-primary">Request received</p>
              <p className="mt-1 text-sm text-text-muted">
                Thank you. We&apos;ll be in touch shortly with data room access.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className="w-full rounded-lg border border-digital-blue-200 bg-white px-3 py-2.5 text-sm text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
                    placeholder="Jane Investor"
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-lg border border-digital-blue-200 bg-white px-3 py-2.5 text-sm text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
                    placeholder="jane@fund.com"
                  />
                </Field>
              </div>
              <Field label="Firm / Fund" error={errors.firm?.message}>
                <input
                  {...register("firm")}
                  className="w-full rounded-lg border border-digital-blue-200 bg-white px-3 py-2.5 text-sm text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
                  placeholder="Acme Ventures"
                />
              </Field>
              <Field label="Message (optional)" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={3}
                  className="w-full rounded-lg border border-digital-blue-200 bg-white px-3 py-2.5 text-sm text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
                  placeholder="Cheque size, stage focus, or anything you'd like us to know."
                />
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 disabled:opacity-60 transition-colors"
              >
                {isSubmitting ? "Sending…" : "Request Access"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text-primary">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { title: "Interface Layer", items: ["Workspace Console", "Dashboards", "Investor View"] },
    { title: "Intelligence Layer", items: ["34 AI Agents", "20 Scoring Models", "GSIS Engine"] },
    { title: "Context Layer", items: ["Persistent Startup Context", "51 Task Types"] },
    { title: "Data Layer", items: ["42 Database Tables", "Execution Build Log"] },
  ];
  return (
    <div className="mt-5 space-y-2">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
          className="rounded-xl border border-digital-blue-100 bg-digital-blue-50/40 p-3"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-digital-blue-500">
            {layer.title}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {layer.items.map((item) => (
              <span
                key={item}
                className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
