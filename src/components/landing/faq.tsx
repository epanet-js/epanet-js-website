import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/landing/accordion";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

interface Props {
  lang?: Locale;
}

export default function FrequentlyAskedQuestons({ lang = "en" }: Props) {
  const t = useTranslations(lang);

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.07),transparent_50%),radial-gradient(circle_at_20%_70%,rgba(216,180,254,0.06),transparent_40%)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("faq.heading")}
            </h3>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              {t("faq.subheading")}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl pt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("faq.q1")}</AccordionTrigger>
              <AccordionContent>{t("faq.a1")}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t("faq.q2")}</AccordionTrigger>
              <AccordionContent>
                {t("faq.a2")}{" "}
                <a
                  href="https://help.epanetjs.com/Understanding-the-local-first-approach-2a1e18c9f0f681d881d0c0f0b24ff032"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  {t("faq.a2Link")}
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t("faq.q3")}</AccordionTrigger>
              <AccordionContent>{t("faq.a3")}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t("faq.q4")}</AccordionTrigger>
              <AccordionContent>{t("faq.a4")}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t("faq.q5")}</AccordionTrigger>
              <AccordionContent>{t("faq.a5")}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>{t("faq.q6")}</AccordionTrigger>
              <AccordionContent>
                {t("faq.a6Pre")}
                <a
                  href="#why-we-built-epanet-js"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  {t("faq.a6Link1")}
                </a>
                {t("faq.a6Mid")}
                <a
                  href="https://fsl.software/"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  {t("faq.a6Link2")}
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>{t("faq.q7")}</AccordionTrigger>
              <AccordionContent>{t("faq.a7")}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
