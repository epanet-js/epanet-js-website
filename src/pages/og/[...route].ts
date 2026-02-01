import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const blogPosts = await getCollection("blog");

// Helper to match the blog's slug format
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

// Build pages object with same slug format as blog posts
const pages = Object.fromEntries(
  blogPosts.map((post) => {
    const date = new Date(post.data.publishDate);
    const slug = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(date.getDate()).padStart(2, "0")}/${slugify(post.data.title)}`;
    return [slug, { title: post.data.title, description: post.data.snippet }];
  })
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: "./public/epanet-logotype.png",
      size: [400],
    },
    bgImage: {
      path: "./public/banner-background-og.jpg",
      fit: "cover",
    },
    // Load Inter font in multiple weights
    fonts: [
      "https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf",
      "https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf",
    ],
    font: {
      title: {
        color: [30, 41, 59], // slate-800
        size: 72,
        weight: "Bold",
        lineHeight: 1.2,
        families: ["Inter"],
      },
      description: {
        color: [71, 85, 105], // slate-600
        size: 32,
        weight: "Normal",
        lineHeight: 1.4,
        families: ["Inter"],
      },
    },
  }),
});
