import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import featureFlags from "./src/config/feature-flags.json";

// Staged-launch flags: pages flagged off in feature-flags.json still build,
// but are kept out of the sitemap (they're also unlinked from nav/footer —
// see src/config/feature-flags.ts). Prefix matching means disabling
// "/compare" also drops the three vs-pages, and a disabled section drops
// its hub and every child page.
const flagDisabledPaths = [
  ...Object.entries(featureFlags.pages)
    .filter(([, enabled]) => !enabled)
    .map(([path]) => path),
  ...(featureFlags.sections.solutions ? [] : ["/solutions"]),
  ...(featureFlags.sections.whoItsFor ? [] : ["/who-its-for"]),
];

// https://astro.build/config
export default defineConfig({
  site: "https://epanetjs.com",
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  customCss: ["./src/styles/custom.css"],
  redirects: {
    "api/": "https://toolkit.epanetjs.com",
    "api/introduction/water-modelling/":
      "https://toolkit.epanetjs.com/learn-more/water-modelling/",
    "api/introduction/development/":
      "https://toolkit.epanetjs.com/learn-more/development/",
    "api/introduction/examples/":
      "https://toolkit.epanetjs.com/examples/hydraulic-simulation-steps/",
    "api/introduction/examples/vite/":
      "https://toolkit.epanetjs.com/examples/vite",
    "api/introduction/showcase/":
      "https://toolkit.epanetjs.com/learn-more/showcase/",
    "api/toolkit/": "https://toolkit.epanetjs.com/overview/",
    "api/workspace/": "https://toolkit.epanetjs.com/workspace/",
    "api/project/": "https://toolkit.epanetjs.com/project-functions/",
    "api/project-functions/project/":
      "https://toolkit.epanetjs.com/project-functions/project",
    "api/project-functions/hydraulic-analysis/":
      "https://toolkit.epanetjs.com/project-functions/hydraulic-analysis/",
    "api/project-functions/water-quality/":
      "https://toolkit.epanetjs.com/project-functions/water-quality",
    "api/project-functions/reporting/":
      "https://toolkit.epanetjs.com/project-functions/reporting",
    "api/project-functions/analysis-options/":
      "https://toolkit.epanetjs.com/project-functions/analysis-options/",
    "api/project-functions/network-node/":
      "https://toolkit.epanetjs.com/project-functions/network-node",
    "api/project-functions/nodal-demand/":
      "https://toolkit.epanetjs.com/project-functions/nodal-demand",
    "api/project-functions/network-link/":
      "https://toolkit.epanetjs.com/project-functions/network-link",
    "api/project-functions/time-pattern/":
      "https://toolkit.epanetjs.com/project-functions/time-pattern",
    "api/project-functions/data-curve/":
      "https://toolkit.epanetjs.com/project-functions/data-curve",
    "api/project-functions/simple-control/":
      "https://toolkit.epanetjs.com/project-functions/simple-control",
    "api/project-functions/rule-based-control/":
      "https://toolkit.epanetjs.com/project-functions/rule-based-control",
    "api/project-functions/enumerated-types/":
      "https://toolkit.epanetjs.com/project-functions/enumerated-types",
    "/blog/2023/01/04/epanet-js---the-water-distribution-modelling-engine-for-the-web":
      "/blog/2023/01/04/epanet-js-toolkit---the-water-distribution-modelling-engine-for-the-web/",
  },
  integrations: [
    tailwind(),
    react(),
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        // Internal animation gallery; noindex and kept out of the sitemap.
        if (page === "https://epanetjs.com/demos/") return false;
        const path = new URL(page).pathname.replace(/\/$/, "");
        return !flagDisabledPaths.some(
          (disabled) => path === disabled || path.startsWith(disabled + "/"),
        );
      },
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", es: "es" },
      },
    }),
  ],
});
