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
    font: {
      title: { color: [30, 41, 59], size: 80 }, // slate-800
      description: { color: [71, 85, 105], size: 32 }, // slate-600
    },
  }),
});
