# TechIT Website — Build Continuation Plan

## What's Done (Session 1)

- [x] Next.js 16 project scaffolded with TypeScript, Tailwind CSS v4
- [x] Dependencies installed: framer-motion, lucide-react, next-themes, radix-ui, react-hook-form, zod, clsx, tailwind-merge
- [x] Digital-blue colour system implemented in globals.css
- [x] Global layout with Header (sticky, responsive, mobile drawer) and Footer (6-column, links)
- [x] Full homepage with all sections: Hero, Trust Signals, Product Preview, Problem, How It Works, Capabilities (14 items), GSIS section, Audiences, Pricing Preview, Final CTA
- [x] Data files: navigation.ts, team.ts, pricing.ts, roadmap.ts
- [x] Utils: cn() helper
- [x] All route pages created as stubs: /demo, /waitlist, /pricing, /investors, /team, /roadmap, /developers, /resources, /contact, /solutions

## What Needs Building (Session 2+)

### Priority 1 — Core Pages (full implementations)

1. **`/waitlist`** — Multi-step form (role selector → email → referral code → confirmation with position + referral link + share buttons). localStorage persistence. React Hook Form + Zod.

2. **`/demo`** — 4-tab interactive demo:
   - Tab 1: Idea Diagnostic (pre-filled input, animated scores)
   - Tab 2: GSIS Dashboard (animated counters, 6 bars, decay, chart)
   - Tab 3: Build Log (execution timeline with +/- indicators)
   - Tab 4: Investor View (GSIS/EVI-I/Trust badges)
   Use Framer Motion for all animations.

3. **`/pricing`** — Full pricing grid (5 tiers) + credit packs table + FAQ accordion + African payment note. Data from `src/data/pricing.ts`.

4. **`/investors`** — 5 serious questions format: Problem, Product Proof (architecture diagram), Customers, Business Model (credit economics + margin), Team. Plus: Download Pitch Deck, One-Pager, Data Room Request form.

5. **`/team`** — Grid of team cards from `src/data/team.ts`. Photo placeholders, roles, bios, LinkedIn (conditional). Strategic partner section.

### Priority 2 — Supporting Pages

6. **`/roadmap`** — 3-column (NOW/NEXT/FUTURE) from `src/data/roadmap.ts` with status badges.

7. **`/solutions`** — Tabbed or accordion: Founders, Builders, Investors, Accelerators, Universities, Innovation Hubs, Governments. Each with challenges, workflows, outcomes, CTA.

8. **`/developers`** — API overview, SDK, MCP, plugin ecosystem, code examples, GitHub placeholder, integration status badges.

9. **`/resources`** — Documentation links, Help Centre, FAQs, Pitch Deck download, One-Pager, newsletter signup.

10. **`/contact`** — Form with name/email/org/role/topic/message. Topics dropdown. Zod validation. Resend-ready.

### Priority 3 — Polish & SEO

11. **Dark mode** — Add `next-themes` ThemeProvider, toggle button in header, dark variants throughout.

12. **Framer Motion** — Add entrance animations to homepage sections, scroll-triggered reveals.

13. **SEO metadata** — Unique metadata per page (already in layout for homepage, needs per-page).

14. **Contextual Intelligence section** — Dedicated "Welcome back" example on homepage (between GSIS and Audiences).

15. **Product video placeholder** — Below hero, YouTube embed component.

16. **Structured data** — Schema.org JSON-LD for Organization, SoftwareApplication, FAQ.

17. **Accessibility audit** — Focus states, aria labels, reduced-motion, contrast.

## Tech Notes

- Project uses Next.js 16 with Tailwind v4 (`@theme inline` syntax, not tailwind.config.ts)
- Colour tokens defined in `src/app/globals.css` under `@theme inline`
- All page routes use App Router (`src/app/[page]/page.tsx`)
- Header is client component (useState for mobile menu)
- Data is centralised in `src/data/` — always import from there
- Forms: use `react-hook-form` + `zod` + `@hookform/resolvers`
- Animations: use `framer-motion` (motion.div, AnimatePresence, etc.)
- Icons: `lucide-react` only

## Resume Command

To continue building, tell Claude:
"Continue building the TechIT website from BUILD_CONTINUATION.md. Start with Priority 1 items."
