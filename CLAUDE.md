# CLAUDE.md

Guidance for working in this repository (epanet-js marketing website).

## Stack & commands

- **Astro 5** (`output: "server"`, Vercel adapter), **Tailwind 3**, React 19 islands, bilingual EN/ES.
- Package manager is **pnpm** (not npm).
- The shell may be left in a subdirectory; run build/check from the repo root.
- Build: `node_modules/.bin/astro build`. Type-check: `node_modules/.bin/astro check`.
  - There are **10 known pre-existing `astro check` errors** in `TableOfContents.astro` and `landing/*` files. Do not be alarmed by them; just confirm your changes don't add new ones.
- File-based routing under `src/pages/`. Most marketing pages are `prerender = true`; the landing page (`src/pages/index.astro`) is `prerender = false` (SSR), so it isn't emitted as static HTML — render it via the dev server to inspect.

## Marketing pages & components

- Reusable marketing components live in `src/components/marketing/`: `PageHero`, `ProseSection`, `ContentMediaRow`, `Media`, `PullQuote`, `BenefitGrid`, `CardGrid`, `FaqList`, `CtaSection`, `ComingSoonBadge`. Compose pages from these.
- Navigation, solutions, audiences, and resources are a **single source of truth** in `src/config/navigation.ts`. The mega-menu, footer, and on-page `CardGrid`s all read from it — update the config, not each consumer.
- Media slots are filled one of three ways, in order of preference:
  1. **Real screen captures** via `Media` (`src`, optional `alt`/`poster`). Source from `public/assets/` — the blog progress reports hold real app footage. Never misrepresent what a capture shows.
  2. **App-styled demo components** from `src/components/demos/` (`FireFlowDemo`, `CalibrationReviewDemo`/`CalibrationPanel`, `ScenarioCompareDemo`, `DemandAllocationDemo`, `NetworkMap`+`LegendPanel`, `AppWindow`, `LocalFirstDiagram`, `DeploymentOptionsDiagram`). These mimic the real app UI (white panels, violet accent, exact labels/units) with subtle CSS-only animation. Anything depicting an unshipped feature must carry a caption: "Illustrative concept" or "Concept preview — in development" (use the `caption` prop on `ContentMediaRow`, or a `<p class="mt-2 text-xs text-gray-400">` under the media in a hero slot).
  3. **No media.** `ContentMediaRow` and `PageHero` both render cleanly without a media slot (single-column / centered). Prefer this over a stretch: do not fabricate screenshots and do not use stock-photo-style asks ("a consultant presenting to a client").

## Writing style (important — avoid "AI slop")

Match the established voice. The site should not read as AI-generated. Reference: <https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing>.

- **American English** throughout (color, analyze, prioritize, modeling).
- **Neutral, professional** tone on solution/marketing pages (the blog is more opinionated; pages are not).
- **No "eyebrow" pills/labels above headings.** These were removed and the components no longer support an `eyebrow` prop — do not re-add them. Let the heading lead the section.
- **Avoid AI tells:**
  - The "it's not X, it's Y" / "not only… but also" / "not just… but" constructions.
  - Manufactured rule-of-three / tricolon lists used for rhythm.
  - Em-dash overuse in prose. Prefer commas, periods, colons, or parentheses. (Bold-term bullet lists are fine for scannability.)
  - "AI vocabulary": delve, boasts, pivotal, testament, underscore, showcase, leverage, robust, vibrant, intricate, meticulous, landscape, seamless, crucial, etc.
  - Title-case headings (use sentence case), and excessive boldface.
- **Banned words** (per site owner): seamless, powerful, smart, effortless.
- **Be specific, not generic.** Use real product detail (file formats, EPANET 2.3 engine, named features) rather than vague benefit-speak. Good sources: the monthly progress reports in `src/content/blog/`.
- **Quotes/testimonials must be real.** Do not invent quotes attributed to named companies. Use published wording from our own posts (`src/content/blog/`) presented as unattributed editorial lines, or name the partner in prose only.
  - Founding partners: Optimatics, Affinity Water, AtkinsRéalis. **Anglian Water** is a partner the owner mentioned but it is **not yet announced publicly** — name it in prose only, never with a quote, until confirmed public.
- **Pricing:** keep qualitative ("free tier", "free for education", "affordable per-seat", "no lock-in") and link to `/pricing`. Don't hardcode dollar figures that will drift.

## Solutions menu & coming-soon treatment

- The Solutions mega-menu is organized into two **lifecycle groups** in `navigation.ts`: **"Build your model"** (model building, field planning, demand analysis, calibration) and **"Use your model"** (model import, planning, operational modeling, water quality, fire flow, valve criticality). It is grouped by workflow and does **not** signal what is available now vs. coming. Don't add "Coming soon" badges or availability labels to the menu or the nav-driven `CardGrid`s.
- Slugs of note: demand analysis lives at `/solutions/demand-analysis` (formerly "flow balance"), planning at `/solutions/planning` (formerly "master planning"). Keep the "master plan" noun (a deliverable) but call the workflow "planning".
- Some solution pages are intentionally **barebones** and will be filled in later: `model-import`, `water-quality`, `valve-criticality`. Don't pad them with invented detail.

## Git

- Feature work for this effort is on branch `claude/busy-bell-ar6i4`.
- Don't open a PR unless asked. Commit messages: imperative subject; explain the why.
