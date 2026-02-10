import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { cookies, preferredLocale } = context;

  if (context.url.pathname === "/" || context.url.pathname === "/pricing") {
    const savedLocale = cookies.get("preferred_locale")?.value;
    const targetLocale = savedLocale || preferredLocale || "en";

    if (targetLocale === "es") {
      const newPath = context.url.pathname === "/" ? "/es/" : "/es/pricing";
      return context.redirect(newPath);
    }
  }

  return next();
});
