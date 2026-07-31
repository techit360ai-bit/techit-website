"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Lightbulb, Clock, MessageSquare } from "lucide-react";

const insights = [
  {
    icon: Clock,
    text: "It's been 4 days since your last update on user interviews.",
  },
  {
    icon: Lightbulb,
    text: "Your Revenue Signal (40) is your weakest GSIS dimension this week.",
  },
  {
    icon: MessageSquare,
    text: "Recommended: log 3 target-user interviews to lift market readiness.",
  },
];

export function ContextualIntelligence() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
              <Sparkles className="h-3.5 w-3.5" /> Contextual Intelligence
            </span>
            <h2 className="mt-4 text-3xl font-bold text-text-primary">
              It remembers where you left off.
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              TechIT doesn&apos;t start from zero every session. The Contextual Intelligence Layer
              carries your startup&apos;s full history — decisions, progress, and gaps — so every
              recommendation is grounded in your actual venture, not generic advice.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {[
                "Persistent memory across every workflow and agent",
                "Proactive nudges based on real execution signals",
                "Advice tailored to your stage, market, and history",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-digital-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* "Welcome back" panel */}
          <div className="rounded-2xl border border-digital-blue-100 bg-gradient-to-b from-digital-blue-50/60 to-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-digital-blue-500 text-sm font-bold text-white">
                AC
              </div>
              <div>
                <p className="font-semibold text-text-primary">Welcome back, Ada 👋</p>
                <p className="text-xs text-text-muted">AgriCredit · Seed stage</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {insights.map((insight, i) => (
                <motion.div
                  key={insight.text}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex items-start gap-3 rounded-xl border border-digital-blue-100 bg-white p-3.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-digital-blue-500/10 text-digital-blue-500">
                    <insight.icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm text-text-primary">{insight.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-digital-blue-500 p-4 text-center text-sm font-medium text-white">
              Pick up where you left off →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
