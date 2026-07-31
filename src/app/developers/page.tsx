import Link from "next/link";
import type { Metadata } from "next";
import { Code, Boxes, Plug, Puzzle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers — TechIT Network",
  description:
    "Build on TechIT. API, SDK, MCP server, and a plugin ecosystem for the AI operating system for startups.",
};

const pillars = [
  {
    id: "api",
    icon: Code,
    title: "REST API",
    desc: "Programmatic access to startups, evaluations, GSIS scores, tasks, and documents.",
    status: "Planned",
  },
  {
    id: "sdk",
    icon: Boxes,
    title: "TypeScript SDK",
    desc: "A typed client for the TechIT API, with helpers for auth, pagination, and webhooks.",
    status: "Planned",
  },
  {
    id: "mcp",
    icon: Plug,
    title: "MCP Server",
    desc: "Expose TechIT to any MCP-compatible AI client as first-class tools and context.",
    status: "Planned",
  },
  {
    id: "plugins",
    icon: Puzzle,
    title: "Plugin Ecosystem",
    desc: "Extend the workspace with custom agents, tools, and integrations.",
    status: "Exploring",
  },
];

const integrations = [
  { name: "Payments (African-first stack)", status: "Live" },
  { name: "Email (Resend)", status: "Live" },
  { name: "Authentication", status: "Live" },
  { name: "Webhooks", status: "Planned" },
  { name: "Zapier / automation", status: "Planned" },
  { name: "Slack notifications", status: "Exploring" },
];

const statusStyles: Record<string, string> = {
  Live: "bg-green-100 text-green-700",
  Planned: "bg-digital-blue-500/10 text-digital-blue-600",
  Exploring: "bg-digital-blue-100 text-text-muted",
};

const apiExample = `curl https://api.techit.network/v1/startups/{id}/gsis \\
  -H "Authorization: Bearer $TECHIT_API_KEY"

# Response
{
  "startup_id": "st_9f2c...",
  "gsis": 68,
  "decay_factor": 0.91,
  "dimensions": {
    "product_progress": 82,
    "execution_velocity": 74,
    "market_readiness": 61,
    "revenue_signal": 40
  }
}`;

const sdkExample = `import { TechIT } from "@techit/sdk";

const techit = new TechIT({ apiKey: process.env.TECHIT_API_KEY });

const startup = await techit.startups.create({
  name: "AgriCredit",
  problem: "Smallholder farmers lack access to fair credit",
});

const score = await techit.gsis.get(startup.id);
console.log(\`GSIS: \${score.gsis}\`);`;

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Developer Platform
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Build on the startup operating system
        </h1>
        <p className="mt-3 text-text-muted">
          Access execution intelligence programmatically. API, SDK, MCP, and plugins — designed to
          fit into your stack and your agents.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-1.5 rounded-lg bg-digital-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
          >
            Request API Access <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-lg border border-digital-blue-200 px-5 py-2.5 text-sm font-semibold text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
          >
            <Code className="h-4 w-4" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Pillars */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className="scroll-mt-24 rounded-2xl border border-digital-blue-100 bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-digital-blue-500/10">
              <p.icon className="h-5 w-5 text-digital-blue-500" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <h3 className="font-semibold text-text-primary">{p.title}</h3>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[p.status]}`}>
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-text-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Code examples */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2" id="docs">
        <CodeBlock title="REST API — get a GSIS score" language="bash" code={apiExample} />
        <CodeBlock title="TypeScript SDK — create & score" language="typescript" code={sdkExample} />
      </div>

      {/* Integrations */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold text-text-primary">Integration status</h2>
        <p className="mt-2 text-center text-text-muted">
          What&apos;s live today and what&apos;s coming to the platform.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="flex items-center justify-between rounded-xl border border-digital-blue-100 bg-white px-4 py-3"
            >
              <span className="text-sm font-medium text-text-primary">{i.name}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[i.status]}`}>
                {i.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-digital-blue-900 p-10 text-center text-white">
        <h2 className="text-2xl font-bold">Get early developer access</h2>
        <p className="mx-auto mt-2 max-w-xl text-digital-blue-200">
          The developer platform is rolling out with the private beta. Join now to get API keys as
          soon as they&apos;re available.
        </p>
        <Link
          href="/waitlist"
          className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-digital-blue-900 hover:bg-digital-blue-50 transition-colors"
        >
          Join the Private Beta
        </Link>
      </div>
    </div>
  );
}

function CodeBlock({
  title,
  language,
  code,
}: {
  title: string;
  language: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-digital-blue-100">
      <div className="flex items-center justify-between border-b border-digital-blue-100 bg-digital-blue-50/50 px-4 py-2.5">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <span className="text-xs font-mono uppercase text-text-muted">{language}</span>
      </div>
      <pre className="overflow-x-auto bg-digital-blue-950 p-4 text-xs leading-relaxed text-digital-blue-50">
        <code>{code}</code>
      </pre>
    </div>
  );
}
