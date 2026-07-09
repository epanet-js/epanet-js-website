---
name: verify
description: How to run and observe this Astro site to verify changes end-to-end.
---

# Verifying changes in epanet-js-website

## Launch

- Dev server: `node_modules/.bin/astro dev --port <port>` from the repo root (run in background). If the port is taken, Astro silently picks the next one — read the "Local http://localhost:PORT/" line from the output to get the real port.
- The home page body is switched by `PUBLIC_PREVIEW_LAUNCH` (see `src/config/feature-flags.ts`). `.env.local` pins it locally; an inline env var overrides it, so run two servers to compare both states:
  - legacy home: `node_modules/.bin/astro dev --port 4400`
  - redesigned home: `PUBLIC_PREVIEW_LAUNCH=true node_modules/.bin/astro dev --port 4405`
- `src/pages/index.astro` and `/pricing` are SSR (`prerender = false`) — they only exist through the dev server, not in a static build.

## Drive (headless browser)

- No Playwright in this repo's deps. Install `playwright-core` into the scratchpad (`npm i playwright-core`) and launch the cached Chromium:
  `~/Library/Caches/ms-playwright/chromium-*/chrome-mac/Chromium.app/Contents/MacOS/Chromium` via `chromium.launch({ executablePath, headless: true })`.
- Write a small `.mjs` script in the scratchpad; run with `node`.

## Gotchas

- The pricing section is `section#pricing`; the redesigned home has other `<table>`s earlier in the page, so scope locators to `#pricing` before matching tables/buttons.
- Pricing card/toggle text comes from i18n — match buttons with regexes (e.g. `/monthly/i`), not exact strings.
- A floating dark pill (demo bar) sits at the bottom center of the viewport on home pages; it shows up in screenshots and can overlap elements near the fold.
