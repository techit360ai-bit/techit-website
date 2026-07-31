"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface Solution {
  id: string;
  label: string;
  headline: string;
  description: string;
  challenges: string[];
  workflow: string[];
  outcome: string;
}

const solutions: Solution[] = [
  {
    id: "founders",
    label: "Founders",
    headline: "Go from idea to investor-ready with an AI operating system.",
    description:
      "Validate your idea, structure execution, and track the signals investors actually look for — all in one workspace.",
    challenges: [
      "Not sure if the idea is worth building",
      "No clear path from concept to launch",
      "Struggling to look credible to investors",
    ],
    workflow: [
      "Run the AI Idea Diagnostic to pressure-test your concept",
      "Generate a structured execution plan with milestones",
      "Track your GSIS score as you ship and learn",
      "Produce an investor-ready snapshot on demand",
    ],
    outcome: "A validated idea, a live execution plan, and a fundable story.",
  },
  {
    id: "builders",
    label: "Builders",
    headline: "Ship faster with contextual intelligence at every step.",
    description:
      "For technical and non-technical builders who want structure without slowing down.",
    challenges: [
      "Losing context across tools and docs",
      "Reinventing process for every project",
      "Execution stalls between milestones",
    ],
    workflow: [
      "Capture context once in the workspace",
      "Let the intelligence layer surface next actions",
      "Log progress and watch execution signals update",
      "Hand off a clean, documented build history",
    ],
    outcome: "Momentum you can measure and a build history that tells the story.",
  },
  {
    id: "investors",
    label: "Investors",
    headline: "See real execution signals, not just pitch decks.",
    description:
      "Evaluate startups on evidence of execution with GSIS, EVI-I, and trust indicators.",
    challenges: [
      "Decks don't reflect real progress",
      "Hard to compare startups objectively",
      "Diligence is slow and inconsistent",
    ],
    workflow: [
      "Review standardised GSIS execution scores",
      "Drill into evidence behind each signal",
      "Compare startups on the same framework",
      "Request a live data room in a click",
    ],
    outcome: "Faster, evidence-based decisions across your pipeline.",
  },
  {
    id: "accelerators",
    label: "Accelerators",
    headline: "Run cohorts on a shared execution framework.",
    description:
      "Accelerators and incubators supporting many founders at once, with real visibility.",
    challenges: [
      "No consistent way to measure cohort progress",
      "Manual reporting across many startups",
      "Hard to show programme impact to stakeholders",
    ],
    workflow: [
      "Onboard founders into a shared workspace",
      "Track cohort execution on one dashboard",
      "Surface which startups need support now",
      "Report programme outcomes with real data",
    ],
    outcome: "A measurable, scalable programme with real impact reporting.",
  },
  {
    id: "universities",
    label: "Universities",
    headline: "Turn entrepreneurship courses into real ventures.",
    description:
      "Give students a structured path from classroom idea to executed startup.",
    challenges: [
      "Coursework rarely leads to real launches",
      "No way to assess execution, only ideas",
      "Limited bridge to funding and ecosystem",
    ],
    workflow: [
      "Assign the workspace as the execution layer",
      "Grade on evidence of execution, not just decks",
      "Connect standout students to investors",
      "Track venture creation as an institution",
    ],
    outcome: "More student ventures that actually get built and backed.",
  },
  {
    id: "hubs",
    label: "Innovation Hubs",
    headline: "Grow your ecosystem with measurable execution.",
    description:
      "Innovation hubs building the local startup ecosystem and proving their impact.",
    challenges: [
      "Impact is hard to quantify",
      "Founders scatter across disconnected tools",
      "Difficult to attract partners and funding",
    ],
    workflow: [
      "Bring founders onto one execution platform",
      "Monitor community-wide progress signals",
      "Highlight breakout startups to partners",
      "Publish ecosystem impact with hard data",
    ],
    outcome: "A thriving, measurable ecosystem you can prove and grow.",
  },
  {
    id: "governments",
    label: "Governments",
    headline: "Build innovation economies on real execution data.",
    description:
      "Public bodies and agencies driving national or regional startup growth.",
    challenges: [
      "Funding outcomes are hard to track",
      "No standard measure of startup health",
      "Policy decisions lack ground-truth data",
    ],
    workflow: [
      "Deploy TechIT across supported programmes",
      "Aggregate anonymised execution signals",
      "Identify where interventions work best",
      "Inform policy with real ecosystem data",
    ],
    outcome: "Evidence-based innovation policy and accountable funding.",
  },
];

export default function SolutionsPage() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active) ?? solutions[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Solutions
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Built for everyone in the startup journey
        </h1>
        <p className="mt-3 text-text-muted">
          One operating system, tailored to how you work — whether you&apos;re building, backing, or
          scaling startups.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Audience">
        {solutions.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              active === s.id
                ? "bg-digital-blue-500 text-white"
                : "border border-digital-blue-200 text-text-muted hover:bg-digital-blue-50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-digital-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary">{current.headline}</h2>
            <p className="mt-2 max-w-2xl text-text-muted">{current.description}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                  Challenges we solve
                </h3>
                <ul className="mt-4 space-y-3">
                  {current.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-digital-blue-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                  How the workflow runs
                </h3>
                <ul className="mt-4 space-y-3">
                  {current.workflow.map((w, i) => (
                    <li key={w} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-digital-blue-500/10 text-xs font-semibold text-digital-blue-600">
                        {i + 1}
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-xl bg-digital-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-digital-blue-500" />
                <p className="text-sm font-medium text-text-primary">{current.outcome}</p>
              </div>
              <Link
                href="/waitlist"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-digital-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
