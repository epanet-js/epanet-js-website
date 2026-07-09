import React, { useRef, useState } from "react";
import { Check, CircleMinus, InfoIcon, Minus } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@components/ui/landing/button";
import { useTranslations } from "@i18n/utils";
import type { Locale } from "@i18n/utils";

// ── Pricing comparison table ─────────────────────────────────────────────────

type CellValue = "yes" | "no" | "coming-soon";

interface ComparisonRow {
  feature: string;
  indent?: boolean;
  values: [CellValue, CellValue, CellValue]; // [free, pro, teams]
}

interface ComparisonSection {
  title: string;
  rows: ComparisonRow[];
}

const comparisonSections: ComparisonSection[] = [
  {
    title: "Simulation",
    rows: [
      { feature: "EPANET Toolkit 2.3.5 engine", values: ["yes", "yes", "yes"] },
      { feature: "Steady-state and Extended Period Simulation (EPS)", values: ["yes", "yes", "yes"] },
      { feature: "Pressure-Driven Demands (PDD)", values: ["yes", "yes", "yes"] },
      { feature: "Simple and rule-based controls", values: ["yes", "yes", "yes"] },
      { feature: "Water quality analysis (age, trace, chemical)", values: ["yes", "yes", "yes"] },
      { feature: "Energy consumption analysis", values: ["yes", "yes", "yes"] },
      { feature: "Energy pricing parameters (global price, demand charge, price pattern)", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Stop / play simulation", values: ["yes", "yes", "yes"] },
      { feature: "Headloss formula (H-W, D-W, C-M)", values: ["yes", "yes", "yes"] },
      { feature: "US or metric units", values: ["yes", "yes", "yes"] },
      { feature: "Tank mixing models (complete mix, 2-compartment, FIFO, LIFO)", values: ["yes", "yes", "yes"] },
      { feature: "Global demand multiplier", values: ["yes", "yes", "yes"] },
    ],
  },
  {
    title: "Network editing",
    rows: [
      { feature: "Easy asset drawing in the map", values: ["yes", "yes", "yes"] },
      { feature: "Snap-to-node and pipe splitting", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Node merging and replacement", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Redraw and reverse links", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Customize pipe drawing defaults", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Active topology – deactivate / reactivate assets", values: ["yes", "yes", "yes"] },
      { feature: "Area selection (rectangular, freehand, polygonal)", values: ["yes", "yes", "yes"] },
      { feature: "Batch attribute editing", values: ["yes", "yes", "yes"] },
      { feature: "Asset search", values: ["yes", "yes", "yes"] },
      { feature: "Custom asset labels", values: ["yes", "yes", "yes"] },
    ],
  },
  {
    title: "Customer points",
    rows: [
      { feature: "Add, edit, move, remove customer points", values: ["yes", "yes", "yes"] },
      { feature: "Import from Shapefile or GeoJSON", values: ["yes", "yes", "yes"] },
      { feature: "Demand allocation rules", values: ["yes", "yes", "yes"] },
      { feature: "Customer points data table", values: ["yes", "yes", "yes"] },
      { feature: "Per-zone demand allocation", values: ["coming-soon", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Element properties",
    rows: [
      { feature: "Define pump curves (1-point or 3-point)", values: ["yes", "yes", "yes"] },
      { feature: "Define tank curves (diameter, area, volume)", values: ["yes", "yes", "yes"] },
      { feature: "Define reservoir head patterns", values: ["yes", "yes", "yes"] },
      { feature: "Demand patterns on junctions", values: ["yes", "yes", "yes"] },
      { feature: "Edit junction demand categories", values: ["yes", "yes", "yes"] },
      { feature: "Pump speed patterns", values: ["yes", "yes", "yes"] },
      { feature: "Pipe material and installation year", values: ["no", "yes", "yes"] },
      { feature: "Assign roughness", values: ["coming-soon", "coming-soon", "coming-soon"] },
      { feature: "Pump controls", values: ["coming-soon", "coming-soon", "coming-soon"] },
      { feature: "Custom data fields per asset", values: ["no", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Data libraries",
    rows: [
      { feature: "Curve library manager", values: ["yes", "yes", "yes"] },
      { feature: "Patterns library (time-series patterns)", values: ["yes", "yes", "yes"] },
      { feature: "Pipe definition library", values: ["coming-soon", "coming-soon", "coming-soon"] },
      { feature: "Saved selection sets", values: ["no", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Data exchange",
    rows: [
      { feature: "INP import and export", values: ["yes", "yes", "yes"] },
      { feature: "epanet-js project format (.ejsdb)", values: ["yes", "yes", "yes"] },
      { feature: "Custom coordinate systems and projections", values: ["yes", "yes", "yes"] },
      { feature: "Simple X-Y grid (non-georeferenced models)", values: ["yes", "yes", "yes"] },
      { feature: "Elevation data", values: ["yes", "yes", "yes"] },
      { feature: "Mapbox Terrain DTM", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "GeoTIFF upload", indent: true, values: ["no", "yes", "yes"] },
      { feature: "Export asset data (Shapefile, CSV, XLSX, GeoJSON)", values: ["yes", "yes", "yes"] },
      { feature: "Export simulation results (CSV, XLSX)", values: ["yes", "yes", "yes"] },
      { feature: "Third-party model importers", values: ["no", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Results & visualization",
    rows: [
      { feature: "Map visualization", values: ["yes", "yes", "yes"] },
      { feature: "Basemap selection (satellite, streets, outdoors)", indent: true, values: ["yes", "yes", "yes"] },
      { feature: "Custom tile server (XYZ, Mapbox, TileJSON)", indent: true, values: ["no", "yes", "yes"] },
      { feature: "Custom vector file layers (GeoJSON, Shapefile)", indent: true, values: ["no", "yes", "yes"] },
      { feature: "Local background layers", indent: true, values: ["no", "coming-soon", "coming-soon"] },
      { feature: "Upstream and downstream trace", values: ["yes", "yes", "yes"] },
      { feature: "Map symbology (pressure, flow, demand, head, roughness, diameter, elevation)", values: ["yes", "yes", "yes"] },
      { feature: "Flow direction arrows", values: ["yes", "yes", "yes"] },
      { feature: "Node size and visibility settings", values: ["yes", "yes", "yes"] },
      { feature: "Time-series quick graph", values: ["yes", "yes", "yes"] },
      { feature: "Asset data tables", values: ["yes", "yes", "yes"] },
      { feature: "Show / hide asset labels", values: ["yes", "yes", "yes"] },
      { feature: "Hydraulic Grade Line (HGL) profile", values: ["no", "yes", "yes"] },
      { feature: "Zone polygons – import and visualize", values: ["no", "yes", "yes"] },
      { feature: "Time-series custom graphs", values: ["no", "yes", "yes"] },
    ],
  },
  {
    title: "Network review & analysis",
    rows: [
      { feature: "Boundary and selection trace", values: ["yes", "yes", "yes"] },
      { feature: "Network review (orphan assets, proximity, crossing pipes, connectivity trace)", values: ["yes", "yes", "yes"] },
      { feature: "Valve criticality analysis", values: ["no", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Scenario management",
    rows: [
      { feature: "Create and switch scenarios", values: ["no", "yes", "yes"] },
      { feature: "Scenarios, versioning, model history", values: ["no", "coming-soon", "coming-soon"] },
      { feature: "Save scenarios in model / cloud", values: ["no", "coming-soon", "coming-soon"] },
    ],
  },
  {
    title: "Model building",
    rows: [
      { feature: "GIS model import (legacy)", values: ["yes", "no", "no"] },
      { feature: "GIS model import (improved)", values: ["no", "yes", "yes"] },
    ],
  },
  {
    title: "Team collaboration",
    rows: [
      { feature: "Support for multiple languages", values: ["yes", "yes", "yes"] },
      { feature: "Multiple team members", values: ["no", "no", "yes"] },
      { feature: "Guest user access and privacy settings", values: ["no", "no", "yes"] },
      { feature: "Organization management", values: ["no", "no", "yes"] },
    ],
  },
];

function TableCell({ value }: { value: CellValue }) {
  if (value === "yes") {
    return <Check className="mx-auto h-5 w-5 text-indigo-500" aria-label="Included" />;
  }
  if (value === "no") {
    return <Minus className="mx-auto h-4 w-4 text-gray-300" aria-label="Not included" />;
  }
  return (
    <span className="inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-[0.65rem] font-medium text-gray-600 whitespace-nowrap">
      Coming soon
    </span>
  );
}

interface PlanHeader {
  name: string;
  price: string;
  priceSuffix: string;
  priceNote?: string;
  userPrice?: string;
  userPriceSuffix?: string;
  userPriceNote?: string;
  buttonText: string;
  buttonUrl: string;
  buttonVariant?: "outline" | "default";
  buttonClassName?: string;
}

function getPlanHeaders(billingCycle: "monthly" | "annually"): PlanHeader[] {
  const isMonthly = billingCycle === "monthly";
  const suffix = isMonthly ? "/mo" : "/yr";
  return [
    {
      name: "Free",
      price: "$0",
      priceSuffix: suffix,
      priceNote: " ",
      buttonText: "Get Free",
      buttonUrl: "https://app.epanetjs.com",
    },
    {
      name: "Pro",
      price: isMonthly ? "$95" : "$950",
      priceSuffix: suffix,
      priceNote: "Individual named license",
      buttonText: "Get Pro",
      buttonUrl: `https://app.epanetjs.com/?dialog=upgrade&plan=pro&paymentType=${isMonthly ? "monthly" : "yearly"}&startCheckout=true`,
      buttonVariant: "default",
      buttonClassName: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent",
    },
    {
      name: "Teams",
      price: isMonthly ? "$440" : "$4,400",
      priceSuffix: suffix,
      priceNote: "(base cost)",
      userPrice: isMonthly ? "+ $60" : "+ $600",
      userPriceSuffix: "/user",
      userPriceNote: "(per user)",
      buttonText: "Get Teams",
      buttonUrl: "https://tally.so/r/wkqjyo",
    },
  ];
}

function ComparisonHeader({ billingCycle, position }: { billingCycle: "monthly" | "annually"; position: "top" | "bottom" }) {
  const plans = getPlanHeaders(billingCycle);
  return (
    <tr className={clsx("bg-white", position === "top" ? "border-b border-gray-200" : "border-t border-gray-200")}>
      <th className="w-[46%] py-5 px-5 text-left align-bottom">
        <span className="sr-only">Feature</span>
      </th>
      {plans.map((plan) => (
        <th key={plan.name} className="w-[18%] py-5 px-4 text-center font-normal">
          <div className="flex flex-col items-center gap-2.5">
            <span className="font-semibold text-gray-800 text-base">{plan.name}</span>
            {plan.userPrice ? (
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="whitespace-nowrap leading-none">
                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.priceSuffix}</span>
                  </span>
                  {plan.priceNote && <span className="text-xs text-gray-500 mt-1">{plan.priceNote}</span>}
                </div>
                <div className="flex flex-col items-center pt-0.5">
                  <span className="whitespace-nowrap leading-none">
                    <span className="text-lg font-semibold text-gray-900">{plan.userPrice}</span>
                    <span className="text-sm text-gray-500">{plan.userPriceSuffix}</span>
                  </span>
                  {plan.userPriceNote && <span className="text-xs text-gray-500 mt-1">{plan.userPriceNote}</span>}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="whitespace-nowrap leading-none">
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.priceSuffix}</span>
                </span>
                <span className="text-xs text-gray-500 mt-1 whitespace-nowrap">{plan.priceNote ?? " "}</span>
              </div>
            )}
            <Button size="sm" variant={plan.buttonVariant ?? "outline"} className={plan.buttonClassName} asChild>
              <a href={plan.buttonUrl} rel="noopener">
                {plan.buttonText}
              </a>
            </Button>
          </div>
        </th>
      ))}
    </tr>
  );
}

function PricingComparisonTable({
  billingCycle,
  collapsibleTable = false,
}: {
  billingCycle: "monthly" | "annually";
  collapsibleTable?: boolean;
}) {
  const [expanded, setExpanded] = useState(!collapsibleTable);
  const containerRef = useRef<HTMLDivElement>(null);

  const collapse = () => {
    setExpanded(false);
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={containerRef} className="mt-20 max-w-5xl mx-auto px-4 md:px-6 scroll-mt-24">
      <h3 className="text-2xl font-bold text-center mb-2">Compare plans</h3>
      <p className="text-center text-muted-foreground mb-10">Everything that's included in each plan.</p>
      <div
        className={clsx(
          "relative rounded-xl border border-gray-200 shadow-sm",
          expanded ? "overflow-x-auto" : "max-h-[30rem] overflow-hidden"
        )}
      >
        <table className="w-full text-sm border-collapse">
          <thead>
            <ComparisonHeader billingCycle={billingCycle} position="top" />
          </thead>
          <tbody>
            {comparisonSections.flatMap((section) => [
              <tr key={`section-${section.title}`} className="bg-gray-100 border-t border-b border-gray-200">
                <td
                  colSpan={4}
                  className="py-2.5 px-5 text-[0.7rem] font-semibold uppercase tracking-wide text-gray-600"
                >
                  {section.title}
                </td>
              </tr>,
              ...section.rows.map((row, i) => (
                <tr
                  key={`${section.title}-${i}`}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60 transition-colors"
                >
                  <td
                    className={clsx(
                      "py-3 px-5 text-gray-700 leading-snug",
                      row.indent && "pl-10 text-gray-500"
                    )}
                  >
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <TableCell value={row.values[0]} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <TableCell value={row.values[1]} />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <TableCell value={row.values[2]} />
                  </td>
                </tr>
              )),
            ])}
          </tbody>
          {expanded && (
            <tfoot>
              <ComparisonHeader billingCycle={billingCycle} position="bottom" />
            </tfoot>
          )}
        </table>
        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-6">
            <Button variant="outline" onClick={() => setExpanded(true)}>
              Show full comparison
            </Button>
          </div>
        )}
      </div>
      {collapsibleTable && expanded && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={collapse}
            className="text-sm text-gray-500 underline hover:text-gray-700"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
}

// --- Props Interface for Main Pricing Card ---
interface PlanFeature {
  label: string;
  tooltip?: string;
}

interface MainPricingCardProps {
  name: string;
  price: string | number;
  suffix: string;
  description: string;
  titleDescription: string;
  features: PlanFeature[];
  featureSubtitle?: string;
  comingSoonFeatures?: string[];
  comingSoonSubtitle?: string;
  buttonText: string;
  buttonVariant?: "outline" | "default";
  buttonClassName?: string;
  isPopular?: boolean;
  popularLabel?: string;
  tooltipText?: string;
  userPrice?: number;
  baseCostLabel?: string;
  perUserLabel?: string;
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
  userPrice,
  baseCostLabel = "Base cost",
  perUserLabel = "Per user",
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
        <span className="text-gray-600 text-sm mb-3">{titleDescription}</span>
        {userPrice !== undefined ? (
          <div className="flex items-baseline gap-4">
            <div>
              <div className="mb-1">
                <strong className="text-4xl font-bold">${price}</strong>
                <span className="text-sm text-gray-500">/{suffix}</span>
              </div>
              <p className="text-gray-500 text-sm">{baseCostLabel}</p>
            </div>
            <div className="flex gap-1">
              <span className="text-xl font-bold text-gray-700 self-start">+</span>
              <div>
                <div className="mb-1">
                  <strong className="text-xl font-bold">${userPrice}</strong>
                  <span className="text-sm text-gray-500">/{suffix}</span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-gray-500 text-sm whitespace-nowrap">{perUserLabel}</p>
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
            </div>
          </div>
        ) : (
          <>
            <span className="inline-block whitespace-nowrap leading-none">
              <span className="text-4xl font-bold">${price}</span>
              <span className="inline-block text-gray-500">
                {" "}
                /{suffix}
              </span>
            </span>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-sm">{description}</p>
              {tooltipText && (
                <div className="relative group">
                  <InfoIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                  <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-4 py-2 w-max max-w-xs">
                    {tooltipText}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
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
                <Check className="mr-2 mt-0.5 h-4 w-4 text-indigo-500 flex-shrink-0" />
                <span>{feature.label}</span>
                {feature.tooltip && (
                  <div className="relative group ml-1.5 self-center">
                    <InfoIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
                    <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md px-4 py-2 w-max max-w-xs">
                      {feature.tooltip}
                    </div>
                  </div>
                )}
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
                <CircleMinus className="mr-1.5 mt-0.5 h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
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
  collapsibleTable?: boolean;
}

export default function Pricing({ lang = "en", collapsibleTable = false }: PricingProps) {
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
        monthly: { price: 0, suffix: t("pricing.suffix.monthShort") },
        annually: { price: 0, suffix: t("pricing.suffix.yearShort") },
      },
      features: [
        { label: t("pricing.free.feature1") },
        { label: t("pricing.free.feature2"), tooltip: t("pricing.modelBuilderTooltip") },
        { label: t("pricing.free.feature3") },
        { label: t("pricing.free.feature4") },
        { label: t("pricing.free.feature5") },
        { label: t("pricing.free.feature6") },
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
        monthly: { price: 95, suffix: t("pricing.suffix.monthShort") },
        annually: { price: 950, suffix: t("pricing.suffix.yearShort") },
      },
      features: [
        { label: t("pricing.pro.feature1") },
        { label: t("pricing.pro.feature2"), tooltip: t("pricing.modelBuilderTooltip") },
        { label: t("pricing.pro.feature3") },
        { label: t("pricing.pro.feature4") },
        { label: t("pricing.pro.feature5") },
        { label: t("pricing.pro.feature6") },
      ],
      featureSubtitle: t("pricing.pro.featureSubtitle"),
      comingSoonFeatures: [
        t("pricing.pro.comingSoon1"),
        t("pricing.pro.comingSoon2"),
        t("pricing.pro.comingSoon3"),
      ],
      comingSoonSubtitle: t("pricing.pro.comingSoonSubtitle"),
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
        monthly: { price: 440, userPrice: 60, suffix: t("pricing.suffix.monthShort") },
        annually: { price: 4400, userPrice: 600, suffix: t("pricing.suffix.yearShort") },
      },
      baseCostLabel: t("pricing.teams.baseCost"),
      perUserLabel: t("pricing.teams.perUser"),
      tooltipText: t("pricing.teams.tooltip"),
      features: [
        { label: t("pricing.teams.feature1") },
        { label: t("pricing.teams.feature2") },
        { label: t("pricing.teams.feature3") },
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
      suffix: t("pricing.suffix.yearShort"),
      description: t("pricing.personal.description"),
      limitations: [
        t("pricing.personal.limitation1"),
        t("pricing.personal.limitation2"),
        t("pricing.personal.limitation3"),
      ],
      limitationSubtitle: t("pricing.personal.limitationSubtitle"),
      buttonText: t("pricing.personal.button"),
      buttonVariant: "outline" as const,
      buttonUrl: "https://app.epanetjs.com/?dialog=upgrade&plan=personal",
    },
    education: {
      name: t("pricing.education.name"),
      price: 0,
      suffix: t("pricing.suffix.yearShort"),
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
            userPrice={planDetails.teams.pricing[billingCycle].userPrice}
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

      <PricingComparisonTable billingCycle={billingCycle} collapsibleTable={collapsibleTable} />

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
