# CLAUDE.md

Guidance for working in this repository (epanet-js marketing website).

This branch (`new-website`) is a major redesign of the site. The pages under `src/pages/` are the pages we are building out; the blog (`src/pages/blog/`, `src/content/blog/`) is **not** part of the redesign — leave it alone except as a source of real product detail.

## Core policy: everything is available

The product mixes shipped features and features in development. **The website does not make that distinction.** All copy is written in present tense, as if every feature is available today.

- Do not add "Coming soon" badges, availability labels, or "Concept preview / Illustrative concept" captions anywhere.
- `ComingSoonBadge.astro` and the `comingSoon` flag on `NavItem` are legacy; don't use them, and remove usages when you touch a file that has one.
- This applies to the nav, solution pages, demos, and comparison pages alike.

## Stack & commands

- **Never commit.** Do not run `git commit` (or `git push`), even if asked to "finish up". Leave changes in the working tree; the user reviews and commits the work themselves.
- **Astro 5** (`output: "server"`, Vercel adapter), **Tailwind 3**, React 19 islands.
- Package manager is **pnpm** (not npm).
- The shell may be left in a subdirectory; run build/check from the repo root.
- Build: `node_modules/.bin/astro build`. Type-check: `node_modules/.bin/astro check`.
  - `astro check` reports **0 errors** (hints are fine to ignore). Keep it that way — don't introduce new errors.
- File-based routing under `src/pages/`. Most marketing pages are `prerender = true`; the landing page (`src/pages/index.astro`) is `prerender = false` (SSR), so it isn't emitted as static HTML — render it via the dev server to inspect.
- **Languages:** the redesign is English-only for now. `src/pages/es/` holds Spanish versions of the old landing page and pricing; don't add new ES pages and don't mirror changes there unless asked.

## Site structure

- **Solutions** (`/solutions/*`): model-build, field-planning, demand-analysis, calibration, model-import, planning, operational-modeling, water-quality, fire-flow, valve-criticality. All get full-page treatment (the old "barebones" exemption for model-import / water-quality / valve-criticality no longer applies).
- **Who it's for** (`/who-its-for/*`): utilities, consultants, education, humanitarian-ngos.
- **Resources:** security, blog, case-studies, plus external links (roadmap, help center, toolkit) — and product comparisons (below).
- **Other:** pricing, security, demos, legal pages (`.md`).
- Navigation, solutions, audiences, and resources are a **single source of truth** in `src/config/navigation.ts`. The mega-menu, footer, and on-page `CardGrid`s all read from it — update the config, not each consumer.

### Product comparisons (to be built)

A comparison section pitting epanet-js against the incumbent tools:

- **Hub:** `/compare` — a picker page where the user chooses the product to compare against.
- **Three static, prerendered pages** (SEO is the point):
  - `/compare/epanet-js-vs-infowater` (Autodesk InfoWater Pro)
  - `/compare/epanet-js-vs-watercad-watergems` (Bentley OpenFlows WaterCAD / WaterGEMS)
  - `/compare/epanet-js-vs-infoworks-ws-pro` (Autodesk InfoWorks WS Pro)
- **Nav:** one "Compare" entry in the Resources menu pointing at the hub. **Footer:** all three comparison pages linked directly by name ("epanet-js vs InfoWater", etc.) for SEO.

Content posture: **factual, fair, persuasive.**

- Ground every claim about a competitor in publicly documented facts. No invented claims. Competitor pricing may be quoted where it is public.
- Be fair: acknowledge the incumbents have advanced capabilities you pay for. The pitch is not "they're bad", it's "here's what you get and what you give up".
- Persuasion comes from epanet-js strengths: an intuitive interface that makes day-to-day work much faster, open source, local-first, no lock-in, a free tier, and **data in and data out** — you can always export to the other tool. For a consultant who must deliver in a client's required format, or who needs a specific advanced feature, epanet-js plus the incumbent is the best of both worlds. Using epanet-js also supports the development of free options and spreads innovation and choice in the industry.

## Marketing pages & components

- Reusable marketing components live in `src/components/marketing/`: `PageHero`, `ProseSection`, `ContentMediaRow`, `Media`, `PullQuote`, `BenefitGrid`, `CardGrid`, `FaqList`, `CtaSection`. Compose pages from these.
- **Legacy components:** the loose `.astro` files at the top of `src/components/` (`hero.astro`, `pricing.astro`, `testimonials.astro`, `feature-grid.astro`, …) and most of `src/components/landing/` predate the redesign. Don't build new pages with them. Exceptions still in service: `Layout.astro` uses `landing/footer.tsx`, and the navbar lives in `src/components/navbar/`.
- Media slots are filled one of three ways, in order of preference:
  1. **Real screen captures** via `Media` (`src`, optional `alt`/`poster`). Source from `public/assets/` — the blog progress reports hold real app footage. Never misrepresent what a capture shows.
  2. **App-styled demo components** from `src/components/demos/` — 60+ CSS-only animated mockups (e.g. `FireFlowDemo`, `ScenarioCompareDemo`, `WaterAgeDemo`, `PumpScheduleDemo`, shared primitives `AppWindow`, `NetworkMap`, `LegendPanel`, `network-geometry.ts`). They mimic the real app UI: white panels, violet accent, exact labels and units. Check the directory for an existing demo before writing a new one, and match the established style when you do. No disclaimers or concept captions (see core policy).
  3. **No media.** `ContentMediaRow` and `PageHero` both render cleanly without a media slot (single-column / centered). Prefer this over a stretch: do not fabricate screenshots and do not use stock-photo-style imagery ("a consultant presenting to a client").

## Writing style (important — avoid "AI slop")

Match the established voice. The site should not read as AI-generated. Reference: <https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing>.

- **American English** throughout (color, analyze, prioritize, modeling).
- **Neutral, professional** tone on solution/marketing pages (the blog is more opinionated; pages are not). Comparison pages may push harder, but stay factual.
- **No "eyebrow" pills/labels above headings.** The components don't support an `eyebrow` prop — do not re-add one. Let the heading lead the section.
- **Avoid AI tells:**
  - The "it's not X, it's Y" / "not only… but also" / "not just… but" constructions.
  - Manufactured rule-of-three / tricolon lists used for rhythm.
  - Em-dash overuse in prose. Prefer commas, periods, colons, or parentheses. (Bold-term bullet lists are fine for scannability.)
  - "AI vocabulary": delve, boasts, pivotal, testament, underscore, showcase, leverage, robust, vibrant, intricate, meticulous, landscape, seamless, crucial, etc.
  - Title-case headings (use sentence case), and excessive boldface.
- **Banned words** (per site owner): seamless, powerful, smart, effortless.
- **Be specific, not generic.** Use real product detail (file formats, EPANET 2.3 engine, named features) rather than vague benefit-speak. Good sources: the monthly progress reports in `src/content/blog/`.

## Quotes, partners, case studies

- **The launch version ships with no quotes or testimonials, and no partner names.** Do not invent quotes, do not attribute anything to a named company, and do not mention founding partners anywhere on the site. Remove existing partner mentions and made-up quotes when you encounter them. Real quotes will be added by the owner later.
- `PullQuote` is for our own editorial pull-lines only (e.g. "The safest data is the data that never leaves."), never anything that reads as customer speech.
- **Case studies:** `case-studies/placeholder-utility.astro` is a deliberate placeholder until a real one lands. Never invent case-study content; wait for real material from the owner.

## Pricing

- Our real prices may be stated on pages where numbers make the argument (comparison tables especially). The source of truth for current figures is `src/components/landing/pricing.tsx` — check it before writing a dollar amount, and prefer linking to `/pricing` when a number isn't needed.
- Competitor pricing on comparison pages must come from their public pricing.

## Solutions menu notes

- The Solutions mega-menu is organized into two **lifecycle groups** in `navigation.ts`: **"Build your model"** (model building, field planning, demand analysis, calibration) and **"Use your model"** (model import, planning, operational modeling, water quality, fire flow, valve criticality). It is grouped by workflow, never by availability.
- Slugs of note: demand analysis lives at `/solutions/demand-analysis` (formerly "flow balance"), planning at `/solutions/planning` (formerly "master planning"). Keep the "master plan" noun (a deliverable) but call the workflow "planning".
