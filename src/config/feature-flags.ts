// Staged-launch feature flags.
//
// The flag data lives in feature-flags.json (also read by astro.config.mjs
// for the sitemap filter). Flags only control where a page is *linked* —
// header mega-menu, footer, and section landing pages. Flagged-off routes
// still build and serve if visited directly; they are simply unadvertised
// and kept out of the sitemap.
import flags from "./feature-flags.json";

// By default `astro dev` shows everything and production builds obey the
// flags. To preview the launch state locally, add PUBLIC_PREVIEW_LAUNCH=true
// to .env.local and restart the dev server. .env.local is gitignored, so the
// preview setting can't leak into a deploy. The PUBLIC_ prefix is required:
// the footer is a hydrated island, so the value must also reach the client
// bundle or the two would disagree. Env values are strings, hence the
// explicit === "true".
const previewLaunch = import.meta.env.PUBLIC_PREVIEW_LAUNCH === "true";

export const showAll: boolean = import.meta.env.DEV && !previewLaunch;

// The home page renders the redesigned body when the redesign is "on" — local
// dev, or any deploy with PUBLIC_PREVIEW_LAUNCH=true — and the old body in
// production until launch. `showAll || previewLaunch` keeps it in lockstep with
// the section/page gates below, so a preview deploy shows the whole launched site.
export const showRedesignedHome: boolean = showAll || previewLaunch;

type SectionFlag = keyof typeof flags.sections;

const sectionPrefixes: Record<SectionFlag, string> = {
  solutions: "/solutions/",
  whoItsFor: "/who-its-for/",
};

export function isSectionEnabled(id: SectionFlag): boolean {
  return showAll || previewLaunch || flags.sections[id] !== false;
}

export function isPageEnabled(href: string): boolean {
  if (showAll || previewLaunch) return true;
  for (const [section, prefix] of Object.entries(sectionPrefixes)) {
    if (href.startsWith(prefix) && !isSectionEnabled(section as SectionFlag)) {
      return false;
    }
  }
  // Unknown hrefs (external links, pages without a flag) default to visible.
  return (flags.pages as Record<string, boolean>)[href] !== false;
}
