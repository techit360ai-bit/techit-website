import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { team } from "@/data/team";
import { company } from "@/data/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — TechIT Network",
  description:
    "Meet the team building TechIT Network — the AI operating system for building startups, engineered in Africa for the world.",
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          Our Team
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          The people building the future of startup execution
        </h1>
        <p className="mt-3 text-text-muted">
          A founder-led team of engineers, operators, and builders shipping a production platform
          from the ground up — engineered in Africa for the world.
        </p>
      </div>

      {/* Team grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col rounded-2xl border border-digital-blue-100 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-digital-blue-400 to-digital-blue-600 text-lg font-bold text-white">
                  {initials(member.name)}
                </div>
              )}
              <div>
                <h3 className="font-semibold text-text-primary">{member.name}</h3>
                <p className="text-sm text-digital-blue-500">{member.role}</p>
              </div>
            </div>

            <p className="mt-4 flex-1 text-sm text-text-muted leading-relaxed">{member.bio}</p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-text-muted hover:text-digital-blue-500 transition-colors"
                aria-label={`${member.name} on LinkedIn`}
              >
                <ExternalLink className="h-4 w-4" /> LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Strategic partner */}
      <section className="mt-20 rounded-2xl border border-digital-blue-100 bg-digital-blue-50/40 p-8 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-digital-blue-600">
            Strategic Partner
          </span>
          <h2 className="mt-4 text-2xl font-bold text-text-primary">{company.partner}</h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            TechIT Network is built in strategic partnership with {company.partner}, grounding the
            platform in real founder and builder communities across Africa — and ensuring what we
            build reflects the realities of the ecosystems we serve.
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Want to build with us?</h2>
        <p className="mt-2 text-text-muted">
          We&apos;re always looking for exceptional builders who care about the mission.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
