import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { cookies } = context;

  if (context.url.pathname === "/" || context.url.pathname === "/pricing") {
    const savedLocale = cookies.get("preferred_locale")?.value;
    // Read preferredLocale lazily here (it inspects request headers) so we
    // don't touch headers on prerendered routes that never reach this branch.
    const targetLocale = savedLocale || context.preferredLocale || "en";

    if (targetLocale === "es") {
      const newPath = context.url.pathname === "/" ? "/es/" : "/es/pricing";
      return context.redirect(newPath);
    }
  }

  return next();
});
