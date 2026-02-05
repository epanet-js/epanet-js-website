import lbutler from "@assets/landing/lbutler.webp?url";
import spaya from "@assets/landing/spaya.webp?url";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function WhyWeBuilt({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section
      id="why-we-built-epanet-js"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="container mx-auto px-8 md:px-6 xl:px-24 relative">
        <div className="flex flex-col items-center md:gap-10 justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-12">
          <div className="space-y-2">
            <h2 className="pb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("whyBuilt.heading")}
            </h2>
          </div>

          {/* Cofounders Photos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-4">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={lbutler}
                alt={t("whyBuilt.lukeAlt")}
                className="w-36 h-36 md:w-44 md:h-44 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
              />
              <div className="text-center space-y-1">
                <p className="text-base font-semibold text-gray-800">
                  {t("whyBuilt.luke")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("whyBuilt.cofounder")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={spaya}
                alt={t("whyBuilt.samAlt")}
                className="w-36 h-36 md:w-44 md:h-44 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
              />
              <div className="text-center space-y-1">
                <p className="text-base font-semibold text-gray-800">
                  {t("whyBuilt.sam")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("whyBuilt.cofounder")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 ">
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p1")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p2")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p3")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p4")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p5")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p6")}</p>
          <p className="md:text-lg leading-relaxed">{t("whyBuilt.p7")}</p>
        </div>
      </div>
    </section>
  );
}
