import Link from "next/link";
import { ArrowRight, Brain, Target, TrendingUp, Shield, Users, Zap, BarChart3, Rocket, Code, FileText, Search, Layers, Activity, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-text-primary">
              The AI Operating System for Building Startups.
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">
              Build, validate, execute, and prepare your startup for investment through one intelligent workspace that understands your venture, tracks your progress, identifies execution gaps, and recommends what to do next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/waitlist" className="rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors">
                Join Private Beta
              </Link>
              <Link href="/demo" className="rounded-lg border border-digital-blue-200 px-6 py-3 text-sm font-semibold text-digital-blue-600 hover:bg-digital-blue-50 transition-colors">
                See Live Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-digital-blue-50/50 via-transparent to-transparent" />
      </section>

      {/* TRUST SIGNALS */}
      <section className="border-y border-digital-blue-100 bg-digital-blue-50/40 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-text-muted">
            <span>34 AI Agents</span><span className="hidden sm:inline text-digital-blue-200">·</span>
            <span>20 Scoring Models</span><span className="hidden sm:inline text-digital-blue-200">·</span>
            <span>42 Database Tables</span><span className="hidden sm:inline text-digital-blue-200">·</span>
            <span>51 Task Types</span><span className="hidden sm:inline text-digital-blue-200">·</span>
            <span>African-First Payment Stack</span><span className="hidden sm:inline text-digital-blue-200">·</span>
            <span>IP-Protected by Design</span>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section id="product" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary">One workspace. Every startup workflow.</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">Strategy, execution, research, product development, team activity, and investor preparation—connected to the same startup context.</p>
          </div>
          <div className="rounded-2xl border border-digital-blue-100 bg-gradient-to-b from-digital-blue-50/50 to-white p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[
                { label: "Startup Workspace", icon: Layers },
                { label: "AI Validation", icon: Brain },
                { label: "Execution Tracker", icon: Activity },
                { label: "GSIS Intelligence", icon: BarChart3 },
                { label: "Investor Readiness", icon: TrendingUp },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-digital-blue-500/10">
                    <Icon className="h-6 w-6 text-digital-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/demo" className="text-sm font-medium text-digital-blue-500 hover:text-digital-blue-600 inline-flex items-center gap-1">
                Explore the Live Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-digital-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-text-primary">The Monday after the hackathon.</h2>
            <p className="mt-6 text-text-muted leading-relaxed">A founder leaves a hackathon with a promising idea, a prototype, and momentum. On Monday, the structure disappears. The team returns to disconnected tools, unclear priorities, limited support, and no persistent execution system.</p>
            <ul className="mt-8 space-y-4 text-sm text-text-muted">
              {["Idea validation is shallow and disconnected from execution","Progress is difficult to measure objectively","Product development and business execution live in separate tools","Investors receive polished decks but limited execution evidence","Support is programme-based, not continuous","African founders face additional infrastructure and access barriers"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-digital-blue-500 shrink-0" />{item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-medium text-text-primary">TechIT Network provides continuity after the event, programme, pitch, or initial idea.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-16">How TechIT Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "01", title: "Create Your Startup", desc: "Add your idea, problem, target users, market, and current stage." },
              { step: "02", title: "Understand the Opportunity", desc: "AI analyses problem, market opportunity, competition, innovation gap, and validation priorities." },
              { step: "03", title: "Build Your Execution System", desc: "Generate milestones, tasks, documents, product plans, and execution priorities." },
              { step: "04", title: "Execute With AI", desc: "Use specialised AI agents to research, build, test, document, and improve." },
              { step: "05", title: "Measure Progress", desc: "Track execution through GSIS, market readiness, activity signals, and recommendations." },
              { step: "06", title: "Become Investor-Ready", desc: "Build a transparent execution record, investor profile, and investment materials." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="rounded-xl border border-digital-blue-100 p-6 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-digital-blue-500">{step}</span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-digital-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">Platform Capabilities</h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-16">Every workflow a startup needs—connected through persistent context.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-white border border-digital-blue-100 p-6">
                <Icon className="h-5 w-5 text-digital-blue-500 mb-3" />
                <h3 className="font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GSIS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">GSIS — Global Startup Intelligence Score</h2>
              <p className="mt-4 text-text-muted leading-relaxed">A structured startup intelligence framework that measures progress and identifies execution gaps. Not a vanity score—a decision-support system.</p>
              <div className="mt-8 space-y-4">
                {gsisComponents.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-sm text-text-muted w-40">{label}</span>
                    <div className="flex-1 h-2 rounded-full bg-digital-blue-100 overflow-hidden">
                      <div className="h-full rounded-full bg-digital-blue-500" style={{ width: `${value}%` }} />
                    </div>
                    <span className="text-sm font-medium text-text-primary w-8">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-digital-blue-100 bg-digital-blue-50/50 p-8 text-center">
              <p className="text-6xl font-bold text-digital-blue-500">68</p>
              <p className="text-sm text-text-muted mt-2">GSIS Score / 100</p>
              <div className="mt-6 space-y-2 text-sm text-text-muted text-left">
                <p>• Decay Factor: 0.91</p>
                <p>• Weakest: Revenue Signal (40)</p>
                <p>• Strongest: Product Progress (82)</p>
                <p>• Recommended: Interview 3 target users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 bg-digital-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-16">Built for the people building the future</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Founders", desc: "From idea to execution and investment readiness." },
              { title: "Builders", desc: "Build verified portfolios and contribute to startup execution." },
              { title: "Investors", desc: "Access execution signals beyond pitch decks." },
              { title: "Organisations", desc: "Manage cohorts and monitor startup progress." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-digital-blue-100 bg-white p-6">
                <h3 className="font-semibold text-text-primary">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary">Simple, transparent pricing</h2>
          <p className="mt-4 text-text-muted">Free to explore. Pay as you build.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="rounded-full bg-digital-blue-50 px-4 py-2 text-text-primary font-medium">Explorer — Free</span>
            <span className="rounded-full bg-digital-blue-50 px-4 py-2 text-text-primary font-medium">Builder — $9/mo</span>
            <span className="rounded-full bg-digital-blue-500 px-4 py-2 text-white font-medium">Founder Pro — $29/mo</span>
            <span className="rounded-full bg-digital-blue-50 px-4 py-2 text-text-primary font-medium">Investor — $79/mo</span>
            <span className="rounded-full bg-digital-blue-50 px-4 py-2 text-text-primary font-medium">Enterprise — Custom</span>
          </div>
          <Link href="/pricing" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-digital-blue-500 hover:text-digital-blue-600">
            View full pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-digital-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Start building your startup the right way.</h2>
          <p className="mt-4 text-digital-blue-200 max-w-xl mx-auto">Join the private beta and get access to the full AI-powered startup execution platform.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/waitlist" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-digital-blue-900 hover:bg-digital-blue-50 transition-colors">
              Join Private Beta
            </Link>
            <Link href="/demo" className="rounded-lg border border-digital-blue-400 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-800 transition-colors">
              Try the Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const capabilities = [
  { title: "Idea Intake & Problem Discovery", desc: "Define the problem before building the solution.", icon: Search },
  { title: "AI Startup Evaluation", desc: "Analyse problem clarity, innovation potential, and validation gaps.", icon: Brain },
  { title: "Unicorn Analysis", desc: "Evaluate startup potential using structured signals.", icon: Rocket },
  { title: "Market Intelligence", desc: "Research, competitive analysis, market sizing, and opportunity reports.", icon: Globe },
  { title: "Incubation Hub", desc: "Structured guidance throughout the startup-building journey.", icon: Target },
  { title: "Execution Tracker", desc: "Track milestones, tasks, progress, and execution velocity.", icon: Activity },
  { title: "GSIS Intelligence", desc: "Measure progress across six dimensions.", icon: BarChart3 },
  { title: "Matching Engine", desc: "Connect with collaborators, opportunities, and ecosystem support.", icon: Users },
  { title: "Workspace Console", desc: "AI agents, tools, documents, integrations—one environment.", icon: Layers },
  { title: "Investor Readiness", desc: "Execution records, materials, and transparent venture profiles.", icon: TrendingUp },
  { title: "App Scaffold Generation", desc: "Move from concept to product architecture rapidly.", icon: Code },
  { title: "IP Protection", desc: "Documentation and intellectual-property-aware workflows.", icon: Shield },
  { title: "Startup Documents", desc: "Generate structured business and startup documents.", icon: FileText },
  { title: "Developer Platform", desc: "APIs, SDKs, MCP, plugins, and external service integrations.", icon: Zap },
];

const gsisComponents = [
  { label: "Product Progress", value: 82 },
  { label: "Execution Velocity", value: 74 },
  { label: "Market Readiness", value: 61 },
  { label: "Revenue Signal", value: 40 },
  { label: "Investor Interest", value: 58 },
  { label: "Community Score", value: 45 },
];
