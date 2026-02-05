import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Only redirect from the root path based on browser language preference
  if (context.url.pathname === "/") {
    const preferred = context.preferredLocale;
    if (preferred === "es") {
      return context.redirect("/es/");
    }
  }
  return next();
});
