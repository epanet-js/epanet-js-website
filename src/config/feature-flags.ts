// Staged-launch feature flags.
//
// The flag data lives in feature-flags.json (also read by astro.config.mjs
// for the sitemap filter). Flags only control where a page is *linked* —
// header mega-menu, footer, and section landing pages. Flagged-off routes
// still build and serve if visited directly; they are simply unadvertised
// and kept out of the sitemap.
import flags from "./feature-flags.json";

// PUBLIC_PREVIEW_LAUNCH is the single "is the redesign launched?" switch. It is
// read the SAME way locally and in every deploy, so `astro dev` shows exactly
// what a deploy with the same value would. Flip it in .env.local (then restart
// the dev server) to see either state:
//
//   true  → redesigned home + every redesign section/page. Set this in the
//           Vercel Preview environment, and in .env.local while building.
//   false / unset → old home + pre-launch nav: what production serves until
//           launch. Leave it unset/false in the Vercel Production environment.
//
// .env.local is gitignored, so a local setting can't leak into a deploy. The
// PUBLIC_ prefix is required: the footer is a hydrated island, so the value must
// also reach the client bundle or server and client would disagree. Env values
// are strings, hence the explicit === "true".
const previewLaunch = import.meta.env.PUBLIC_PREVIEW_LAUNCH === "true";

// Home page swaps between HomeRedesign and HomeLegacy on this flag.
export const showRedesignedHome: boolean = previewLaunch;

type SectionFlag = keyof typeof flags.sections;

const sectionPrefixes: Record<SectionFlag, string> = {
  solutions: "/solutions/",
  whoItsFor: "/who-its-for/",
};

export function isSectionEnabled(id: SectionFlag): boolean {
  return previewLaunch || flags.sections[id] !== false;
}

export function isPageEnabled(href: string): boolean {
  if (previewLaunch) return true;
  for (const [section, prefix] of Object.entries(sectionPrefixes)) {
    if (href.startsWith(prefix) && !isSectionEnabled(section as SectionFlag)) {
      return false;
    }
  }
  // Unknown hrefs (external links, pages without a flag) default to visible.
  return (flags.pages as Record<string, boolean>)[href] !== false;
}
