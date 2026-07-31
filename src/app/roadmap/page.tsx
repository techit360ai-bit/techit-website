import Link from "next/link";
import type { Metadata } from "next";
import { roadmap, type RoadmapItem } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What we're building now, what's next, and what we're exploring. The TechIT Network product roadmap.",
};

const columns = [
  {
    key: "now",
    label: "Now",
    caption: "In active development",
    items: roadmap.now,
    accent: "border-digital-blue-500",
    dot: "bg-digital-blue-500",
  },
  {
    key: "next",
    label: "Next",
    caption: "Planned for upcoming releases",
    items: roadmap.next,
    accent: "border-digital-blue-300",
    dot: "bg-digital-blue-300",
  },
  {
    key: "future",
    label: "Future",
    caption: "Exploring and researching",
    items: roadmap.future,
    accent: "border-digital-blue-200",
    dot: "bg-digital-blue-200",
  },
] as const;

const statusStyles: Record<RoadmapItem["status"], string> = {
  "In Development": "bg-digital-blue-500/10 text-digital-blue-600",
  Planned: "bg-digital-blue-300/20 text-digital-blue-600",
  Exploring: "bg-digital-blue-100 text-text-muted",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Product Roadmap
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Where TechIT is heading
        </h1>
        <p className="mt-3 text-text-muted">
          We build in the open. Here&apos;s what&apos;s shipping now, what&apos;s next, and what
          we&apos;re exploring for the future of startup execution.
        </p>
      </div>

      {/* Columns */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {columns.map((col) => (
          <div key={col.key} className={`rounded-2xl border-t-4 ${col.accent} bg-white shadow-sm`}>
            <div className="border-b border-digital-blue-100 p-6">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${col.dot}`} />
                <h2 className="text-lg font-semibold text-text-primary">{col.label}</h2>
              </div>
              <p className="mt-1 text-sm text-text-muted">{col.caption}</p>
            </div>
            <ul className="space-y-3 p-6">
              {col.items.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between gap-3 rounded-xl border border-digital-blue-100 p-4"
                >
                  <span className="text-sm font-medium text-text-primary">{item.title}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-muted">
        Roadmap items and timelines are indicative and may shift as we learn from founders and
        the ecosystem. Priorities are shaped by what helps startups execute.
      </p>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Want to shape what we build?</h2>
        <p className="mt-2 text-text-muted">Join the private beta and tell us what you need.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
          >
            Join Private Beta
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-digital-blue-200 px-6 py-3 text-sm font-semibold text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
          >
            Share Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
