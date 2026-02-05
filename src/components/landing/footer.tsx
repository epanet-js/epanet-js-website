import epanetLogo from "@assets/landing/epanetjs.svg?url";
import { Button } from "@components/ui/landing/button";
import { Input } from "@components/ui/landing/input";
import { useState } from "react";
import { LogoIconAndWordmarkIcon } from "./icons";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function Footer({ lang = "en" }: Props) {
  const t = useTranslations(lang);
  const prefix = lang === "es" ? "/es" : "";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const apiKey = "ziRMXOpWNfww8zDIv0IYmA";
    const formId = "7704375";

    const data = {
      api_key: apiKey,
      email: email,
    };

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setMessage({
          text: t("footer.newsletter.success"),
          type: "success",
        });
        setEmail(""); // Clear the form
      } else {
        const errorData = await response.json();
        setMessage({
          text: `${t("footer.newsletter.errorPrefix")}${
            errorData.message || t("footer.newsletter.errorFallback")
          }`,
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: t("footer.newsletter.errorGeneric"),
        type: "error",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-gray-950 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Logo and Newsletter */}
          <div className="lg:col-span-4 space-y-6 lg:pr-12">
            {/* Logo */}
            <a href={prefix + "/"} className="flex items-center space-x-3">
              <LogoIconAndWordmarkIcon size={150} />
            </a>
            {/* Newsletter Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tighter text-white">
                  {t("footer.newsletter.heading")}
                </h3>
                <p className="text-sm text-gray-300">
                  {t("footer.newsletter.subheading")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("footer.newsletter.subscribing")
                    : t("footer.newsletter.button")}
                </Button>
              </form>

              {/* Success/Error Message */}
              {message && (
                <div
                  className={`text-sm p-3 rounded-md ${
                    message.type === "success"
                      ? "bg-green-900/20 border border-green-500/30 text-green-300"
                      : "bg-red-900/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <p className="text-xs text-gray-400">
                {t("footer.newsletter.privacy")}
              </p>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:pl-12">
            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {t("footer.product")}
              </h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href={`${prefix}/#features`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.features")}
                </a>
                <a
                  href={`${prefix}/pricing`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.pricing")}
                </a>
                <a
                  href={`${prefix}/#faq`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.faq")}
                </a>
              </nav>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {t("footer.community")}
              </h3>

              <nav className="flex flex-col space-y-3">
                <a
                  href="https://help.epanetjs.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.helpCenter")}
                </a>
                <a
                  href="https://roadmap.epanetjs.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.roadmap")}
                </a>
                <a
                  href="https://github.com/epanet-js/epanet-js"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.github")}
                </a>
                <a
                  href="https://toolkit.epanetjs.com/"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.toolkit")}
                </a>
                <a
                  href="/blog/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.blog")}
                </a>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {t("footer.company")}
              </h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href={`${prefix}/#why-we-built-epanet-js`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.about")}
                </a>
                <a
                  href="mailto:support@epanetjs.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.contact")}
                </a>
                <a
                  href="/terms-conditions/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.terms")}
                </a>
                <a
                  href="/privacy-policy/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                <a
                  href="/cookies-policy/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.cookies")}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/epanet-js/epanet-js"
                target="_blank"
                rel="noopener"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@iteratinginc"
                target="_blank"
                rel="noopener"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/iteratinginc/"
                target="_blank"
                rel="noopener"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
