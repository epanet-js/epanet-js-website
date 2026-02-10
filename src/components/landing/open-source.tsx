import epanetLogoUrl from "@assets/landing/Seal_of_the_United_States_Environmental_Protection_Agency.svg?url";
import sourceCodeUrl from "@assets/landing/github-open-source.webp?url";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function OpenSource({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section
      id="features"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(216,180,254,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-16 xl:px-48 relative">
        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h2 className="text-2xl font-bold">{t("opensource.heading1")}</h2>
              <p className="">{t("opensource.p1")}</p>
              <p className="">{t("opensource.p2")}</p>
              <p className="">{t("opensource.p3")}</p>
            </div>

            <div className={`flex items-center justify-center `}>
              <div className="h-[350px] max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                <img
                  src={epanetLogoUrl}
                  className="object-contain w-full h-full"
                  alt={t("opensource.imgAlt1")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:pt-24">
            <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
              <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
                <div className="max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                  <img
                    src={sourceCodeUrl}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                    alt={t("opensource.imgAlt2")}
                  />
                </div>
              </div>

              <div className="space-y-4 lg:pl-8">
                <h2 className="text-2xl font-bold">
                  {t("opensource.heading2")}
                </h2>
                <p className="">{t("opensource.support.p1")}</p>
                <p className="">{t("opensource.support.p2")}</p>
                <ul className=" space-y-2 [&>li]:before:content-['✓'] [&>li]:before:mr-2 ">
                  <li>
                    {t("opensource.support.item1Pre")}
                    <a
                      href="https://github.com/epanet-js/epanet-js"
                      className="underline hover:text-gray-500"
                    >
                      {t("opensource.support.item1Link")}
                    </a>
                    {t("opensource.support.item1Post")}
                  </li>
                  <li>
                    {t("opensource.support.item2Pre")}
                    <a
                      href="https://fsl.software/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500"
                    >
                      {t("opensource.support.item2Link")}
                    </a>
                    {t("opensource.support.item2Post")}
                  </li>
                </ul>
                <p className="">{t("opensource.support.p3")}</p>

                <p className="">{t("opensource.support.p4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
