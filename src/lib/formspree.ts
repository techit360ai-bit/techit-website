/**
 * Formspree endpoints.
 *
 * Replace each placeholder ID with a real Formspree form ID
 * (create forms at https://formspree.io — one per form, all delivering to
 * anthony@techitnetwork.com). The ID is the last path segment of the endpoint,
 * e.g. https://formspree.io/f/abcdwxyz -> "abcdwxyz".
 *
 * You can also override these at build time with env vars
 * (NEXT_PUBLIC_FORMSPREE_*) without editing this file.
 */

const CONTACT_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT ?? "YOUR_CONTACT_FORM_ID";
const WAITLIST_ID = process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST ?? "YOUR_WAITLIST_FORM_ID";
const NEWSLETTER_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER ?? "YOUR_NEWSLETTER_FORM_ID";

export const formspree = {
  contact: `https://formspree.io/f/${CONTACT_ID}`,
  waitlist: `https://formspree.io/f/${WAITLIST_ID}`,
  newsletter: `https://formspree.io/f/${NEWSLETTER_ID}`,
};

/** True once a real Formspree ID has been configured for the given form. */
export function isConfigured(endpoint: string): boolean {
  return !endpoint.includes("YOUR_");
}

/**
 * POST form data to a Formspree endpoint as JSON.
 * Throws on a non-OK response so callers can surface an error state.
 */
export async function submitToFormspree(
  endpoint: string,
  data: Record<string, unknown>
): Promise<void> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message =
      body?.errors?.map((e: { message: string }) => e.message).join(", ") ??
      "Submission failed. Please try again.";
    throw new Error(message);
  }
}
