import React, { useState } from "react";
import { Check, CircleMinus, InfoIcon } from "lucide-react";
import { Button } from "@components/ui/landing/button";
import { useTranslations } from "@i18n/utils";
import type { Locale, TranslationKey } from "@i18n/utils";

// --- Props Interface for Main Pricing Card ---
interface MainPricingCardProps {
  name: string;
  price: string | number;
  suffix: string;
  description: string;
  titleDescription: string;
  features: string[];
  featureSubtitle?: string;
  comingSoonFeatures?: string[];
  comingSoonSubtitle?: string;
  buttonText: string;
  buttonVariant?: "outline" | "default";
  buttonClassName?: string;
  isPopular?: boolean;
  popularLabel?: string;
  tooltipText?: string;
  isPlanComingSoon?: boolean;
  comingSoonBadgeText?: string;
  comingSoonButtonText?: string;
  buttonUrl?: string;
  billingCycle: "monthly" | "annually";
}

// --- Main Pricing Card Component (with Spacer Logic) ---
const MainPricingCard: React.FC<MainPricingCardProps> = ({
  name,
  price,
  suffix,
  titleDescription,
  description,
  features,
  featureSubtitle,
  comingSoonFeatures,
  comingSoonSubtitle = "Coming soon:",
  buttonText,
  buttonVariant = "outline",
  buttonClassName,
  isPopular,
  popularLabel = "Most popular",
  tooltipText,
  isPlanComingSoon,
  comingSoonBadgeText = "Coming Soon",
  comingSoonButtonText = "Coming Soon.",
  buttonUrl,
  billingCycle,
}) => {
  // Generate the final URL with payment type parameter
  const getFinalUrl = () => {
    if (!buttonUrl || isPlanComingSoon) return buttonUrl;

    // For Professional plan, append payment type
    if (name === "Pro") {
      const paymentType = billingCycle === "monthly" ? "monthly" : "yearly";
      return `${buttonUrl}&paymentType=${paymentType}&startCheckout=true`;
    }

    // For other plans, return the base URL
    return buttonUrl;
  };

  const finalUrl = getFinalUrl();

  return (
    <div
      className={`relative flex flex-col justify-between rounded-lg border bg-background transition-shadow md:min-h-[450px] mx-auto md:mx-0 w-full max-w-[450px] md:min-w-0 ${
        isPopular
          ? "shadow-lg shadow-purple-200/50 hover:shadow-xl hover:shadow-purple-300/50"
          : "shadow-sm hover:shadow-md"
      }`}
    >
      {" "}
      {/* Added min-height for consistency */}
      {/* Badges */}
      {isPlanComingSoon && (
        <div className="absolute -top-3 right-3 mx-auto w-fit rounded-full bg-gray-500 px-3 py-1 text-xs font-medium text-white z-10">
          {comingSoonBadgeText}
        </div>
      )}
      {/* Top Content */}
      <div className="flex flex-col gap-2 p-6">
        <h3 className="tracking-tight flex items-center justify-between w-full text-xl font-semibold">
          <span>{name}</span>
          {isPopular && (
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 whitespace-nowrap">
              {popularLabel}
            </span>
          )}
        </h3>
        <span className="text-base text-gray-900 ">{titleDescription}</span>
        <span className="inline-block whitespace-nowrap leading-none">
          <span className="text-4xl font-bold">${price}</span>
          <span className="inline-block text-gray-500">
            {" "}
            {/* Removed -translate-y-px for simplicity */}/{suffix}
          </span>
        </span>
        <div className="flex items-center gap-2">
          <p className="text-base text-gray-900 min-h-[1.5rem]">
            {description}
          </p>
          {tooltipText && (
            <div className="relative group">
              <InfoIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-4 py-2 w-max max-w-xs">
                {tooltipText}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Features Section */}
      <div className="p-6 pt-0 flex-grow">
        {" "}
        {/* Added flex-grow */}
        {/* --- Spacer logic --- */}
        {/* Render spacer if no subtitle but features exist, to align lists */}
        {!featureSubtitle && features.length > 0 && <div className="h-7"></div>}
        {/* Feature Subtitle */}
        {featureSubtitle && (
          <span className="mb-3 block text-sm text-gray-500">
            {featureSubtitle}
          </span>
        )}
        {/* Included Features */}
        {features.length > 0 && (
          <ul className="space-y-2 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {" "}
                {/* Changed to items-start */}
                <Check className="mr-2 mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {/* Coming Soon Features */}
        {comingSoonFeatures && comingSoonFeatures.length > 0 && (
          <>
            <span className="mt-4 mb-3 block text-sm text-gray-500">
              {comingSoonSubtitle}
            </span>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {comingSoonFeatures.map((feature, index) => (
                <li key={`coming-${index}`} className="flex items-start">
                  {" "}
                  {/* Changed to items-start */}
                  <Check className="mr-2 mt-0.5 h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      {/* Button Section */}
      <div className="flex items-center p-6 pt-0 pb-6 mt-auto">
        {" "}
        {/* Ensure padding consistent */}
        {finalUrl && !isPlanComingSoon ? (
          <Button
            className={`w-full ${buttonClassName || ""}`}
            variant={buttonVariant}
            asChild
          >
            <a href={finalUrl} rel="noopener">
              {buttonText}
            </a>
          </Button>
        ) : (
          <Button
            className={`w-full ${buttonClassName || ""}`}
            variant={buttonVariant}
            disabled={isPlanComingSoon}
          >
            {isPlanComingSoon ? comingSoonButtonText : buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

// --- Props Interface for Special Pricing Card ---
interface SpecialPricingCardProps {
  name: string;
  price: string | number;
  suffix: string;
  description: string;
  limitations: string[];
  limitationSubtitle?: string;
  buttonText: string;
  buttonVariant?: "outline" | "default";
  buttonUrl?: string;
}

// --- Special Pricing Card Component ---
const SpecialPricingCard: React.FC<SpecialPricingCardProps> = ({
  name,
  price,
  suffix,
  description,
  limitations,
  limitationSubtitle = "Everything in pro, but:",
  buttonText,
  buttonVariant = "outline",
  buttonUrl,
}) => {
  // Generate the final URL for Personal plan
  const getFinalUrl = () => {
    if (!buttonUrl) return buttonUrl;

    // For Personal plan, append yearly payment type
    if (name === "Personal") {
      return `${buttonUrl}&paymentType=yearly&startCheckout=true`;
    }

    // For other plans, return the base URL
    return buttonUrl;
  };

  const finalUrl = getFinalUrl();

  return (
    <div className="rounded-lg border bg-background shadow-sm transition-shadow hover:shadow-md mx-auto md:mx-0 w-full max-w-[450px] md:min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] gap-3 p-4">
        {/* Left Column */}
        <div className="flex flex-col gap-1">
          <h3 className="whitespace-nowrap tracking-tight flex items-center gap-x-2 text-lg font-semibold">
            {name}
          </h3>
          <span className="inline-block whitespace-nowrap leading-none">
            <span className="text-2xl font-bold">${price}</span>
            <span className="inline-block text-sm text-gray-500">
              /{suffix}
            </span>
          </span>
          <p className="text-sm text-gray-900 min-h-[1.5rem]">{description}</p>
        </div>
        {/* Right Column */}
        <div className="flex flex-col justify-start">
          <span className="mb-2 block text-xs text-gray-500">
            {limitationSubtitle}
          </span>
          <ul className="space-y-1 text-xs">
            {limitations.map((limitation, index) => (
              <li key={index} className="flex items-start">
                {" "}
                {/* Changed to items-start */}
                <CircleMinus className="mr-1.5 mt-0.5 h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Button Row */}
        <div className="col-span-1 md:col-span-2 mt-2">
          {finalUrl ? (
            <Button
              className="w-full"
              variant={buttonVariant}
              size={"sm"}
              asChild
            >
              <a href={finalUrl} rel="noopener">
                {buttonText}
              </a>
            </Button>
          ) : (
            <Button className="w-full" variant={buttonVariant} size={"sm"}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Pricing Component ---
interface PricingProps {
  lang?: Locale;
}

export default function Pricing({ lang = "en" }: PricingProps) {
  const t = useTranslations(lang);

  // State for billing cycle
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "annually",
  );

  // --- Pricing Data (translated) ---
  const planDetails = {
    free: {
      name: t("pricing.free.name"),
      description: t("pricing.free.description"),
      titleDescription: t("pricing.free.titleDescription"),
      pricing: {
        monthly: { price: 0, suffix: t("pricing.suffix.month") },
        annually: { price: 0, suffix: t("pricing.suffix.year") },
      },
      features: [
        t("pricing.free.feature1"),
        t("pricing.free.feature2"),
        t("pricing.free.feature3"),
        t("pricing.free.feature4"),
        t("pricing.free.feature5"),
      ],
      buttonText: t("pricing.free.button"),
      buttonVariant: "outline" as const,
      buttonUrl: "https://app.epanetjs.com",
    },
    professional: {
      name: t("pricing.pro.name"),
      description: t("pricing.pro.description"),
      titleDescription: t("pricing.pro.titleDescription"),
      pricing: {
        monthly: { price: 95, suffix: t("pricing.suffix.month") },
        annually: { price: 950, suffix: t("pricing.suffix.year") },
      },
      features: [t("pricing.pro.feature1"), t("pricing.pro.feature2")],
      featureSubtitle: t("pricing.pro.featureSubtitle"),
      comingSoonFeatures: [
        t("pricing.pro.comingSoon1"),
        t("pricing.pro.comingSoon2"),
        t("pricing.pro.comingSoon3"),
        t("pricing.pro.comingSoon4"),
      ],
      buttonText: t("pricing.pro.button"),
      buttonVariant: "default" as const,
      buttonClassName:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
      isPopular: true,
      popularLabel: t("pricing.pro.popular"),
      buttonUrl: "https://app.epanetjs.com/?dialog=upgrade&plan=pro",
    },
    teams: {
      name: t("pricing.teams.name"),
      description: t("pricing.teams.description"),
      titleDescription: t("pricing.teams.titleDescription"),
      pricing: {
        monthly: { price: 250, suffix: t("pricing.suffix.month") },
        annually: { price: 2500, suffix: t("pricing.suffix.year") },
      },
      tooltipText: t("pricing.teams.tooltip"),
      features: [
        t("pricing.teams.feature1"),
        t("pricing.teams.feature2"),
        t("pricing.teams.feature3"),
      ],
      featureSubtitle: t("pricing.teams.featureSubtitle"),
      comingSoonFeatures: [
        t("pricing.teams.comingSoon1"),
        t("pricing.teams.comingSoon2"),
        t("pricing.teams.comingSoon3"),
      ],
      comingSoonSubtitle: t("pricing.teams.comingSoonSubtitle"),
      buttonVariant: "default" as const,
      buttonClassName:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
      isPlanComingSoon: false,
      comingSoonBadgeText: t("pricing.teams.comingSoonBadge"),
      buttonText: t("pricing.teams.button"),
      buttonUrl: "https://tally.so/r/wkqjyo",
    },
  };

  const specialPlanDetails = {
    personal: {
      name: t("pricing.personal.name"),
      price: 100,
      suffix: t("pricing.suffix.year"),
      description: t("pricing.personal.description"),
      limitations: [
        t("pricing.personal.limitation1"),
        t("pricing.personal.limitation2"),
      ],
      limitationSubtitle: t("pricing.personal.limitationSubtitle"),
      buttonText: t("pricing.personal.button"),
      buttonVariant: "outline" as const,
      buttonUrl: "https://app.epanetjs.com/?dialog=upgrade&plan=personal",
    },
    education: {
      name: t("pricing.education.name"),
      price: 0,
      suffix: t("pricing.suffix.year"),
      description: t("pricing.education.description"),
      limitations: [
        t("pricing.education.limitation1"),
        t("pricing.education.limitation2"),
      ],
      limitationSubtitle: t("pricing.education.limitationSubtitle"),
      buttonText: t("pricing.education.button"),
      buttonVariant: "outline" as const,
      buttonUrl:
        "https://help.epanetjs.com/Free-educational-licenses-for-epanet-js-2a1e18c9f0f68192a785cbe61747addf",
    },
  };

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_90%,rgba(147,197,253,0.08),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(216,180,254,0.07),transparent_45%)]"></div>

      {/* Header Section */}
      <div className=" mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("pricing.heading")}
            </h3>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
              {t("pricing.subheading")}
            </p>
          </div>
        </div>

        {/* --- Billing Cycle Toggle --- */}
        <div className="flex justify-center items-center gap-2 mt-10 mb-0">
          {" "}
          {/* Reduced mb */}
          <Button
            type="button"
            aria-pressed={billingCycle === "monthly"}
            variant={billingCycle === "monthly" ? "default" : "outline"}
            onClick={() => setBillingCycle("monthly")}
            className={`
                    ${
                      billingCycle === "monthly"
                        ? "bg-blue-600 text-white border-transparent hover:bg-blue-700"
                        : "text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400"
                    }
                `}
          >
            {t("pricing.billedMonthly")}
          </Button>
          <Button
            type="button"
            aria-pressed={billingCycle === "annually"}
            variant={billingCycle === "annually" ? "default" : "outline"}
            onClick={() => setBillingCycle("annually")}
            className={`
                     ${
                       billingCycle === "annually"
                         ? "bg-blue-600 text-white border-transparent hover:bg-blue-700"
                         : "text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400"
                     }
                `}
          >
            {t("pricing.billedYearly")}
          </Button>
        </div>

        {/* --- Main Pricing Grid --- */}
        <div className="grid gap-12 pt-8 md:grid-cols-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {" "}
          {/* Adjusted pt */}
          <MainPricingCard
            {...planDetails.free}
            price={planDetails.free.pricing[billingCycle].price}
            suffix={planDetails.free.pricing[billingCycle].suffix}
            billingCycle={billingCycle}
          />
          <MainPricingCard
            {...planDetails.professional}
            price={planDetails.professional.pricing[billingCycle].price}
            suffix={planDetails.professional.pricing[billingCycle].suffix}
            billingCycle={billingCycle}
            comingSoonButtonText={t("pricing.comingSoon")}
          />
          <MainPricingCard
            {...planDetails.teams}
            price={planDetails.teams.pricing[billingCycle].price}
            suffix={planDetails.teams.pricing[billingCycle].suffix}
            billingCycle={billingCycle}
            buttonText={planDetails.teams.buttonText}
            comingSoonButtonText={t("pricing.comingSoon")}
          />
        </div>

        <p className=" mx-auto text-muted-foreground text-center md:text-xl/relaxed pt-8">
          {t("pricing.questions.text")}
          <a
            href="mailto:sales@epanetjs.com?subject=epanet-js%20sales%20inquiry"
            className="underline hover:text-gray-500"
          >
            {t("pricing.questions.email")}
          </a>
          {t("pricing.questions.or")}
          <a
            href="https://cal.com/epanet-js/"
            className="underline hover:text-gray-500"
          >
            {t("pricing.questions.call")}
          </a>
          .
        </p>
      </div>

      {/* --- Special Access Section --- */}
      <div className="container mx-auto mt-20 px-4 md:px-6 relative">
        {" "}
        {/* Increased mt */}
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="space-y-1 max-w-[700px] mx-auto">
              <h3 className="text-2xl font-bold">
                {t("pricing.special.heading")}
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                {t("pricing.special.subheading")}
              </p>
            </div>
          </div>
        </div>
        {/* --- Special Access Grid --- */}
        <div className="grid gap-4 pt-10 grid-cols-1 md:grid-cols-2 lg:gap-8 max-w-3xl mx-auto">
          {/* These cards are not affected by the toggle */}
          <SpecialPricingCard {...specialPlanDetails.personal} />
          <SpecialPricingCard {...specialPlanDetails.education} />
        </div>
      </div>
    </section>
  );
}
