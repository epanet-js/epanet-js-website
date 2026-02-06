import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Only redirect from the root path based on browser language preference
  console.log("middleware");
  console.log(context.url.pathname);
  console.log(context.preferredLocale);
  if (context.url.pathname === "/") {
    const preferred = context.preferredLocale;
    console.log("On root path");
    if (preferred === "es") {
      console.log("Redirecting to /es/");
      return context.redirect("/es/");
    }
  }
  console.log("Not on root path");
  return next();
});
