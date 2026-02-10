import studyAreaUrl from "@assets/landing/study-area.webp?url";
import MuxPlayer from "@mux/mux-player-react";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function Features({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section
      id="features"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(216,180,254,0.08),transparent_50%)]"></div>
      <div className="container px-4 md:px-6 xl:px-24 mx-auto relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-0">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("features.heading")}
            </h3>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              {t("features.subheading")}
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h4 className="text-2xl font-bold">
                {t("features.dataControl.title")}
              </h4>
              <p className="">{t("features.dataControl.p1")}</p>

              <p className="">{t("features.dataControl.p2")}</p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div
                className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:ml-8
              bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(216,180,254,0.08),transparent_50%)]
              "
              >
                <MuxPlayer
                  playbackId="HL00y0195x34CGva01q01iIV2DgA1jA3kAlm8vzgU5g500qo"
                  autoPlay="muted"
                  loop
                  muted
                  streamType="on-demand"
                  thumbnail-time={0}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    "--controls": "none",
                    maxHeight: "600px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "brightness(1)",
                    aspectRatio: "836 / 720",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
              <div className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:mr-8">
                <MuxPlayer
                  playbackId="KHLKT02VAzGiVFDYCj4f68ONdBk4g301301sWEmXhfbyV4"
                  autoPlay="muted"
                  loop
                  muted
                  streamType="on-demand"
                  thumbnail-time={0}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    "--controls": "none",
                    maxHeight: "600px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "brightness(1)",
                    aspectRatio: "836 / 720",
                  }}
                />
              </div>
            </div>

            <div className="space-y-4 lg:pl-8">
              <h4 className="text-2xl font-bold">
                {t("features.enhanced.title")}
              </h4>
              <p className="">{t("features.enhanced.p1")}</p>
              <p className="">{t("features.enhanced.p2")}</p>
              <p className="">{t("features.enhanced.p3")}</p>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h4 className="text-2xl font-bold">
                {t("features.built.title")}
              </h4>
              <ul className=" space-y-2 [&>li]:before:content-['✓'] [&>li]:before:mr-2 ">
                <li>
                  <strong>{t("features.built.item1Bold")}</strong>
                  {t("features.built.item1")}
                </li>
                <li>
                  <strong>{t("features.built.item2Bold")}</strong>
                  {t("features.built.item2")}
                </li>
                <li>
                  <strong>{t("features.built.item3Bold")}</strong>
                  {t("features.built.item3")}
                </li>
                <li>
                  <strong>{t("features.built.item4Bold")}</strong>
                  {t("features.built.item4")}
                </li>
                <li>
                  <strong>{t("features.built.item5Bold")}</strong>
                  {t("features.built.item5")}
                </li>
                <li>
                  <strong>{t("features.built.item6Bold")}</strong>
                  {t("features.built.item6")}
                </li>
                <li>
                  <strong>{t("features.built.item7Bold")}</strong>
                  {t("features.built.item7")}
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:ml-8">
                <MuxPlayer
                  playbackId="iKzonhS027Y4oLlHms7bW6vm006s5jDhXVyHs00LCtCsg8"
                  autoPlay="muted"
                  loop
                  muted
                  streamType="on-demand"
                  thumbnail-time={0}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    "--controls": "none",
                    maxHeight: "600px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "brightness(1)",
                    aspectRatio: "1 / 1",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
              <div className="max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                <img
                  src={studyAreaUrl}
                  alt={t("features.whoFor.imgAlt")}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-4 lg:pl-8">
              <h4 className="text-2xl font-bold">
                {t("features.whoFor.title")}
              </h4>

              <p>
                <strong>{t("features.whoFor.utilities.bold")}</strong> <br />
                {t("features.whoFor.utilities")}
              </p>
              <p>
                <strong>{t("features.whoFor.educators.bold")}</strong> <br />
                {t("features.whoFor.educators")}
              </p>
              <p>
                <strong>{t("features.whoFor.students.bold")}</strong> <br />
                {t("features.whoFor.students")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
