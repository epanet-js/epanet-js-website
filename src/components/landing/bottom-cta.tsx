import { ArrowRight } from "lucide-react";
import { Button } from "@components/ui/landing/button";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function BottomCTA({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section className="w-full py-8 md:py-16 bg-gray-800 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl leading-[36px] font-bold tracking-tight pb-6">
          {t("bottomCta.heading")}
        </h3>
        <p className="max-w-[600px] mx-auto pb-6 text-base leading-6 text-center">
          {t("bottomCta.subheading")}
        </p>

        <Button size="sm" variant="secondary" asChild>
          <a
            href="https://app.epanetjs.com"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-md font-medium text-sm leading-5 transition-colors bg-gray-100 text-gray-900 no-underline"
          >
            <span>{t("bottomCta.button")}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
