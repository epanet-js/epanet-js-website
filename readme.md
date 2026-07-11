# epanet-js website

The epanet-js website is created using Astro with Starship Pro theme.

```
pnpm install
pnpm run dev
```

## Feature flags (staged launch)

Which pages are advertised on the site is controlled by
`src/config/feature-flags.json` — one `true`/`false` per page, plus
`sections.solutions` and `sections.whoItsFor` to switch off a whole section.

A flag set to `false` removes the page from the header mega-menu, the footer,
the section landing pages, and the sitemap. The route itself still builds and
serves if visited directly (in-page prose links may still point at it — that's
accepted; we're staging visibility, not access).

Dev vs production:

- `pnpm run dev` shows **everything**, regardless of the flags.
- Production builds obey the flags.
- To preview the launch state locally, add `PUBLIC_PREVIEW_LAUNCH=true` to
  `.env.local` and restart the dev server. Remove it (or set it to anything
  other than `true`) to go back to showing everything. `.env.local` is
  gitignored, so this can't affect a deploy.

The flags work because `src/config/navigation.ts` exports its data already
filtered, and the navbar, footer, and landing pages all read from it. The
sitemap filter in `astro.config.mjs` reads the same JSON. To flag a **new**
page, add it to `feature-flags.json` and make sure it's listed in
`navigation.ts` (unlisted pages default to visible).
