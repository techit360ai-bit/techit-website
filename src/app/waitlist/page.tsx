"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Rocket,
  Hammer,
  TrendingUp,
  Building2,
  Sparkles,
} from "lucide-react";

// --- Roles -----------------------------------------------------------------

const roles = [
  { id: "founder", label: "Founder", desc: "Building or launching a startup", icon: Rocket },
  { id: "builder", label: "Builder", desc: "Engineer, designer, or maker", icon: Hammer },
  { id: "investor", label: "Investor", desc: "Backing early-stage ventures", icon: TrendingUp },
  { id: "organisation", label: "Organisation", desc: "Accelerator, university, or hub", icon: Building2 },
] as const;

type RoleId = (typeof roles)[number]["id"];

// --- Schema ----------------------------------------------------------------

const schema = z.object({
  role: z.enum(["founder", "builder", "investor", "organisation"], {
    message: "Please select how you'll use TechIT.",
  }),
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
  referral: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const STORAGE_KEY = "techit_waitlist";

interface StoredEntry {
  role: RoleId;
  email: string;
  referral?: string;
  position: number;
  code: string;
  joinedAt: string;
}

// Deterministic pseudo-position from the email so it's stable per person.
function positionFor(email: string): number {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = (hash * 31 + email.charCodeAt(i)) % 100000;
  }
  return 1200 + (hash % 3600);
}

function codeFor(email: string): string {
  let hash = 7;
  for (let i = 0; i < email.length; i++) hash = (hash * 33 + email.charCodeAt(i)) >>> 0;
  return "TECHIT-" + hash.toString(36).toUpperCase().slice(0, 6).padEnd(6, "X");
}

export default function WaitlistPage() {
  const [step, setStep] = useState(0);
  const [entry, setEntry] = useState<StoredEntry | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const selectedRole = watch("role");

  // Restore a prior submission on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredEntry;
        setEntry(parsed);
        setStep(3);
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  const onSubmit = (values: FormValues) => {
    const stored: StoredEntry = {
      role: values.role,
      email: values.email,
      referral: values.referral?.trim() || undefined,
      position: positionFor(values.email),
      code: codeFor(values.email),
      joinedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // storage may be unavailable; still show confirmation
    }
    setEntry(stored);
    setStep(3);
  };

  const goNext = async () => {
    if (step === 0) {
      const ok = await trigger("role");
      if (ok) setStep(1);
    } else if (step === 1) {
      const ok = await trigger("email");
      if (ok) setStep(2);
    }
  };

  const referralLink =
    entry && typeof window !== "undefined"
      ? `${window.location.origin}/waitlist?ref=${entry.code}`
      : "";

  const copyLink = async () => {
    if (!referralLink) return;
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked
    }
  };

  // Pick up ?ref= into the referral field on first load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setValue("referral", ref);
  }, [setValue]);

  const totalSteps = 3;

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Intro */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
          <Sparkles className="h-3.5 w-3.5" /> Private Beta
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Join the TechIT waitlist
        </h1>
        <p className="mt-3 text-text-muted">
          Get early access to the AI operating system for building startups.
        </p>
      </div>

      {/* Progress */}
      {step < totalSteps && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-16 rounded-full transition-colors ${
                i <= step ? "bg-digital-blue-500" : "bg-digital-blue-100"
              }`}
            />
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <AnimatePresence mode="wait">
          {/* STEP 0 — Role */}
          {step === 0 && (
            <motion.div
              key="role"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-semibold text-text-primary">
                How will you use TechIT?
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {roles.map(({ id, label, desc, icon: Icon }) => {
                  const active = selectedRole === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setValue("role", id, { shouldValidate: true })}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-digital-blue-500 bg-digital-blue-50/60 ring-1 ring-digital-blue-500"
                          : "border-digital-blue-100 hover:border-digital-blue-300 hover:bg-digital-blue-50/40"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          active ? "bg-digital-blue-500 text-white" : "bg-digital-blue-500/10 text-digital-blue-500"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-medium text-text-primary">{label}</span>
                        <span className="mt-0.5 block text-sm text-text-muted">{desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.role && (
                <p className="mt-3 text-sm text-red-600">{errors.role.message}</p>
              )}
            </motion.div>
          )}

          {/* STEP 1 — Email */}
          {step === 1 && (
            <motion.div
              key="email"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-semibold text-text-primary">What&apos;s your email?</h2>
              <p className="mt-1 text-sm text-text-muted">
                We&apos;ll notify you the moment your access is ready.
              </p>
              <input
                {...register("email")}
                type="email"
                autoFocus
                placeholder="you@company.com"
                className="mt-5 w-full rounded-lg border border-digital-blue-200 px-4 py-3 text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </motion.div>
          )}

          {/* STEP 2 — Referral */}
          {step === 2 && (
            <motion.div
              key="referral"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-semibold text-text-primary">
                Have a referral code?{" "}
                <span className="font-normal text-text-muted">(optional)</span>
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Referral codes move you up the waitlist.
              </p>
              <input
                {...register("referral")}
                type="text"
                placeholder="TECHIT-XXXXXX"
                className="mt-5 w-full rounded-lg border border-digital-blue-200 px-4 py-3 uppercase tracking-wide text-text-primary outline-none focus:border-digital-blue-500 focus:ring-1 focus:ring-digital-blue-500"
              />
            </motion.div>
          )}

          {/* STEP 3 — Confirmation */}
          {step === 3 && entry && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-digital-blue-500 text-white">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-text-primary">You&apos;re on the list!</h2>
              <p className="mt-2 text-text-muted">
                We&apos;ll email <span className="font-medium text-text-primary">{entry.email}</span>{" "}
                when your access opens.
              </p>

              <div className="mt-8 rounded-2xl border border-digital-blue-100 bg-digital-blue-50/50 p-6">
                <p className="text-sm text-text-muted">Your position</p>
                <p className="mt-1 text-5xl font-bold text-digital-blue-500">
                  #{entry.position.toLocaleString()}
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  Share your link to move up the queue.
                </p>
              </div>

              {/* Referral link */}
              <div className="mt-6 text-left">
                <label className="text-sm font-medium text-text-primary">
                  Your referral link
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    readOnly
                    value={referralLink}
                    className="flex-1 rounded-lg border border-digital-blue-200 bg-white px-3 py-2 text-sm text-text-muted outline-none"
                  />
                  <button
                    type="button"
                    onClick={copyLink}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-digital-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Share buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "I just joined the TechIT Network waitlist — the AI operating system for building startups."
                  )}&url=${encodeURIComponent(referralLink)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-digital-blue-200 px-4 py-2 text-sm font-medium text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
                >
                  Share on X
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    referralLink
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-digital-blue-200 px-4 py-2 text-sm font-medium text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
                >
                  Share on LinkedIn
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    "Join me on the TechIT Network waitlist: " + referralLink
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-digital-blue-200 px-4 py-2 text-sm font-medium text-digital-blue-600 hover:bg-digital-blue-50 transition-colors"
                >
                  Share on WhatsApp
                </a>
              </div>

              <Link
                href="/demo"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-digital-blue-500 hover:text-digital-blue-600"
              >
                Explore the live demo while you wait <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < totalSteps && (
          <div className="mt-10 flex items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : (
              <span />
            )}

            {step < 2 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-1.5 rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
              >
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
