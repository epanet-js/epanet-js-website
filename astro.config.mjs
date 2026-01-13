import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship-pro.web3templates.com",
  customCss: ["./src/styles/custom.css"],
  image: {
    domains: ["unsplash.com", "images.unsplash.com"],
  },
  integrations: [tailwind(), react(), mdx(), icon(), sitemap()],
});
