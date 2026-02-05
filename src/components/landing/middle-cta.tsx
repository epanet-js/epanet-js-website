import { Button } from "@components/ui/landing/button";
import { Input } from "@components/ui/landing/input";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function MiddleCTA({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section className="w-full py-24 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("middleCta.heading")}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              {t("middleCta.subheading")}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <form className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Input
                type="email"
                placeholder={t("middleCta.placeholder")}
                className="w-full"
                required
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t("middleCta.button")}
            </Button>
          </form>
          <p className="mt-2 text-xs text-center text-muted-foreground">
            {t("middleCta.privacy")}
          </p>
        </div>
      </div>
    </section>
  );
}
