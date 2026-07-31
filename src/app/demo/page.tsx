"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { whatsappGroupUrl } from "@/data/navigation";
import {
  ArrowRight,
  Brain,
  BarChart3,
  ListChecks,
  Eye,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  TrendingUp,
  Award,
} from "lucide-react";

// --------------------------------------------------------------------------
// Animated number counter
// --------------------------------------------------------------------------

function Counter({ to, duration = 1200, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

// --------------------------------------------------------------------------
// Tabs config
// --------------------------------------------------------------------------

const tabs = [
  { id: "diagnostic", label: "Idea Diagnostic", icon: Brain },
  { id: "gsis", label: "GSIS Dashboard", icon: BarChart3 },
  { id: "buildlog", label: "Build Log", icon: ListChecks },
  { id: "investor", label: "Investor View", icon: Eye },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function DemoPage() {
  const [active, setActive] = useState<TabId>("diagnostic");

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Interactive Demo
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          See TechIT in action
        </h1>
        <p className="mt-3 mx-auto max-w-2xl text-text-muted">
          A guided walkthrough of the four systems that power TechIT — from idea diagnosis to
          investor-ready execution signals. This is illustrative sample data.
        </p>
      </div>

      {/* Tab bar */}
      <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Demo sections">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            onClick={() => setActive(id)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              active === id
                ? "bg-digital-blue-500 text-white shadow-sm"
                : "border border-digital-blue-100 text-text-primary hover:bg-digital-blue-50"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div
        className="mt-8 rounded-2xl border border-digital-blue-100 bg-white p-6 sm:p-10"
        role="tabpanel"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {active === "diagnostic" && <DiagnosticTab />}
            {active === "gsis" && <GsisTab />}
            {active === "buildlog" && <BuildLogTab />}
            {active === "investor" && <InvestorTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <p className="text-text-muted">Ready to run this on your own startup?</p>
        <a
          href={whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
        >
          Join the Private Beta <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Tab 1 — Idea Diagnostic
// --------------------------------------------------------------------------

const diagnosticScores = [
  { label: "Problem Clarity", value: 84 },
  { label: "Market Opportunity", value: 71 },
  { label: "Innovation Gap", value: 66 },
  { label: "Execution Feasibility", value: 78 },
  { label: "Monetisation Potential", value: 59 },
];

function DiagnosticTab() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-text-primary">The idea</h3>
        <div className="mt-3 rounded-xl border border-digital-blue-100 bg-digital-blue-50/40 p-4 text-sm text-text-primary">
          <p className="font-medium">
            A platform that helps African smallholder farmers access fair credit using mobile
            transaction history as an alternative credit score.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-text-muted">
            <span className="rounded-full bg-white px-2.5 py-1">Fintech</span>
            <span className="rounded-full bg-white px-2.5 py-1">Agriculture</span>
            <span className="rounded-full bg-white px-2.5 py-1">Africa</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-digital-blue-100 p-4">
          <p className="text-sm font-medium text-text-primary">AI Verdict</p>
          <p className="mt-2 text-sm text-text-muted leading-relaxed">
            Strong problem-market fit with a clear underserved segment. The alternative-credit
            angle is defensible. Weakest signal is monetisation — validate willingness-to-pay
            among lenders before building the scoring engine.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-text-primary">Diagnostic scores</h3>
        <div className="mt-4 space-y-4">
          {diagnosticScores.map(({ label, value }, i) => (
            <div key={label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted">{label}</span>
                <span className="font-semibold text-text-primary">
                  <Counter to={value} />
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-digital-blue-100">
                <motion.div
                  className="h-full rounded-full bg-digital-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-digital-blue-500 p-5 text-center text-white">
          <p className="text-xs uppercase tracking-wide text-digital-blue-100">
            Overall Idea Score
          </p>
          <p className="mt-1 text-4xl font-bold">
            <Counter to={72} />
            <span className="text-lg text-digital-blue-100">/100</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Tab 2 — GSIS Dashboard
// --------------------------------------------------------------------------

const gsisBars = [
  { label: "Product Progress", value: 82 },
  { label: "Execution Velocity", value: 74 },
  { label: "Market Readiness", value: 61 },
  { label: "Revenue Signal", value: 40 },
  { label: "Investor Interest", value: 58 },
  { label: "Community Score", value: 45 },
];

function GsisTab() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "GSIS Score", value: 68, suffix: "" },
          { label: "Decay Factor", value: 91, suffix: "%" },
          { label: "Weekly Momentum", value: 12, suffix: "+" },
        ].map(({ label, value, suffix }) => (
          <div
            key={label}
            className="rounded-xl border border-digital-blue-100 bg-digital-blue-50/40 p-5 text-center"
          >
            <p className="text-3xl font-bold text-digital-blue-500">
              <Counter to={value} suffix={suffix} />
            </p>
            <p className="mt-1 text-xs text-text-muted">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Six-dimension breakdown</h3>
          <div className="mt-4 space-y-3">
            {gsisBars.map(({ label, value }, i) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-36 shrink-0 text-sm text-text-muted">{label}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-digital-blue-100">
                  <motion.div
                    className={`h-full rounded-full ${
                      value < 50 ? "bg-amber-400" : "bg-digital-blue-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
                <span className="w-8 text-right text-sm font-medium text-text-primary">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Simple trend chart */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary">12-week trend</h3>
          <TrendChart />
          <div className="mt-4 rounded-xl border border-digital-blue-100 p-4 text-sm">
            <p className="font-medium text-text-primary">Recommended next action</p>
            <p className="mt-1 text-text-muted">
              Revenue Signal is your weakest dimension. Interview 3 target users and record a
              paid pilot commitment to lift it above 55.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendChart() {
  const points = [38, 41, 44, 43, 48, 52, 55, 57, 60, 62, 65, 68];
  const max = 80;
  const w = 320;
  const h = 120;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 w-full">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#0066FF"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

// --------------------------------------------------------------------------
// Tab 3 — Build Log
// --------------------------------------------------------------------------

const buildLog = [
  { agent: "Research Agent", action: "Completed competitor analysis (7 players mapped)", delta: 4, kind: "up" },
  { agent: "Product Agent", action: "Generated MVP architecture & data model", delta: 6, kind: "up" },
  { agent: "Execution Tracker", action: "3 milestones slipped past due date", delta: 3, kind: "down" },
  { agent: "Document Agent", action: "Drafted problem-validation report", delta: 2, kind: "up" },
  { agent: "Market Agent", action: "Market sizing: SAM revised down after data check", delta: 2, kind: "down" },
  { agent: "Build Agent", action: "Scaffolded authentication & onboarding flow", delta: 5, kind: "up" },
];

function BuildLogTab() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary">Execution timeline</h3>
      <p className="mt-1 text-sm text-text-muted">
        Every AI action is recorded and scored — a transparent, auditable execution history.
      </p>
      <div className="mt-6 space-y-3">
        {buildLog.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl border border-digital-blue-100 p-4"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                item.kind === "up"
                  ? "bg-green-100 text-green-600"
                  : "bg-amber-100 text-amber-600"
              }`}
            >
              {item.kind === "up" ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">{item.action}</p>
              <p className="text-xs text-text-muted">{item.agent}</p>
            </div>
            <span
              className={`text-sm font-semibold ${
                item.kind === "up" ? "text-green-600" : "text-amber-600"
              }`}
            >
              {item.kind === "up" ? "+" : "−"}
              {item.delta} GSIS
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Tab 4 — Investor View
// --------------------------------------------------------------------------

function InvestorTab() {
  const badges = [
    { label: "GSIS", value: "68", desc: "Global Startup Intelligence Score", icon: BarChart3 },
    { label: "EVI-I", value: "A−", desc: "Execution Velocity & Integrity Index", icon: TrendingUp },
    { label: "Trust", value: "Verified", desc: "Identity & execution history verified", icon: ShieldCheck },
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-digital-blue-500 text-lg font-bold text-white">
          AC
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">AgriCredit</h3>
          <p className="text-sm text-text-muted">Seed · Fintech · Lagos, Nigeria</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          <Award className="h-3.5 w-3.5" /> Investor-Ready
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {badges.map(({ label, value, desc, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-digital-blue-100 bg-digital-blue-50/40 p-5"
          >
            <div className="flex items-center gap-2 text-digital-blue-500">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-text-primary">{value}</p>
            <p className="mt-1 text-xs text-text-muted">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-digital-blue-100 p-5">
          <p className="text-sm font-semibold text-text-primary">Execution evidence</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            {[
              "142 recorded execution actions over 12 weeks",
              "MVP live with 38 pilot users",
              "2 signed letters of intent from microfinance partners",
              "Full IP documentation trail",
            ].map((e) => (
              <li key={e} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-digital-blue-500" />
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-digital-blue-100 p-5">
          <p className="text-sm font-semibold text-text-primary">Why this matters</p>
          <p className="mt-3 text-sm text-text-muted leading-relaxed">
            Investors see verified execution — not just a polished deck. Every score traces back
            to real, timestamped activity in the Build Log, so diligence takes minutes, not
            weeks.
          </p>
        </div>
      </div>
    </div>
  );
}
