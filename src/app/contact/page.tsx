"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Check, LoaderCircle } from "lucide-react";
import { company } from "@/data/navigation";
import { formspree, submitToFormspree } from "@/lib/formspree";

const topics = [
  "General enquiry",
  "Private beta access",
  "Partnership",
  "Investor relations",
  "Press & media",
  "Support",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  organisation: z.string().optional(),
  role: z.string().optional(),
  topic: z.enum(topics),
  message: z.string().min(10, "Please add a little more detail (10+ characters)"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: "General enquiry" },
  });

  async function onSubmit(data: ContactForm) {
    setError(null);
    try {
      await submitToFormspree(formspree.contact, {
        ...data,
        _subject: `TechIT contact — ${data.topic}`,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-digital-blue-200 bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-digital-blue-500 focus:outline-none focus:ring-2 focus:ring-digital-blue-500/20";

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left — intro + details */}
        <div>
          <span className="inline-flex items-center rounded-full bg-digital-blue-50 px-3 py-1 text-xs font-medium text-digital-blue-600">
            Contact
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Let&apos;s talk
          </h1>
          <p className="mt-3 text-text-muted">
            Questions about the product, partnerships, or investing? Send us a note and the right
            person on the team will get back to you.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${company.email}`}
              className="flex items-start gap-4 rounded-xl border border-digital-blue-100 p-4 hover:border-digital-blue-300 transition-colors"
            >
              <Mail className="mt-0.5 h-5 w-5 text-digital-blue-500" />
              <div>
                <p className="text-sm font-medium text-text-primary">Email</p>
                <p className="text-sm text-text-muted">{company.email}</p>
              </div>
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-4 rounded-xl border border-digital-blue-100 p-4 hover:border-digital-blue-300 transition-colors"
            >
              <Phone className="mt-0.5 h-5 w-5 text-digital-blue-500" />
              <div>
                <p className="text-sm font-medium text-text-primary">Phone</p>
                <p className="text-sm text-text-muted">{company.phone}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-digital-blue-100 p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-digital-blue-500" />
              <div>
                <p className="text-sm font-medium text-text-primary">Location</p>
                <p className="text-sm text-text-muted">{company.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-2xl border border-digital-blue-100 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-digital-blue-500/10">
                <Check className="h-7 w-7 text-digital-blue-500" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-text-primary">Message sent</h2>
              <p className="mt-2 text-sm text-text-muted">
                Thanks for reaching out. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">Name</label>
                  <input {...register("name")} className={fieldClass} placeholder="Ada Obi" />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">Email</label>
                  <input {...register("email")} className={fieldClass} placeholder="you@company.com" />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Organisation <span className="text-text-muted">(optional)</span>
                  </label>
                  <input {...register("organisation")} className={fieldClass} placeholder="Company / fund" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Role <span className="text-text-muted">(optional)</span>
                  </label>
                  <input {...register("role")} className={fieldClass} placeholder="Founder, Investor…" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Topic</label>
                <select {...register("topic")} className={fieldClass}>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-primary">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={fieldClass}
                  placeholder="How can we help?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-digital-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-digital-blue-600 disabled:opacity-60 transition-colors"
              >
                {isSubmitting && <LoaderCircle className="h-4 w-4 animate-spin" />}
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              {error && (
                <p className="text-center text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
