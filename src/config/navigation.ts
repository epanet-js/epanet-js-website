import {
  Hammer,
  ClipboardList,
  BarChart3,
  SlidersHorizontal,
  Import,
  CalendarRange,
  Gauge,
  FlaskConical,
  Flame,
  Waypoints,
  Building2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  Newspaper,
  ShieldCheck,
  FileText,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TranslationKey } from "@i18n/utils";
import { ui as en } from "@i18n/en";
import { isPageEnabled, isSectionEnabled } from "./feature-flags";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
  labelKey?: TranslationKey;
  descriptionKey?: TranslationKey;
}

// Builds a translatable NavItem: label/description come from en.ts (the
// single source of truth for the English copy) via labelKey/descriptionKey,
// so the same string isn't hand-duplicated in navigation.ts.
function translatableItem(
  item: Omit<NavItem, "label" | "description"> & {
    labelKey: TranslationKey;
    descriptionKey?: TranslationKey;
  },
): NavItem {
  return {
    ...item,
    label: en[item.labelKey],
    description: item.descriptionKey ? en[item.descriptionKey] : undefined,
  };
}

export interface NavColumn {
  heading?: string;
  items: NavItem[];
  secondaryItems?: NavItem[];
  headingKey?: TranslationKey;
}

// Same idea as translatableItem, for a column's heading text.
function translatableColumn(
  column: Omit<NavColumn, "heading"> & { headingKey?: TranslationKey },
): NavColumn {
  return {
    ...column,
    heading: column.headingKey ? en[column.headingKey] : undefined,
  };
}

export interface NavSection {
  id: "solutions" | "who-its-for" | "resources";
  label: string;
  hubHref?: string;
  columns: NavColumn[];
}

// ── Solutions (by workflow) ──────────────────────────────────────────────
// Two lifecycle groups: getting to a model, then working with one. The menu
// is organized by workflow and does not signal availability.
const solutionsData: NavSection = {
  id: "solutions",
  label: "Solutions",
  hubHref: "/solutions",
  columns: [
    translatableColumn({
      headingKey: "nav.solutions.heading.build",
      items: [
        translatableItem({
          href: "/solutions/model-build",
          icon: Hammer,
          labelKey: "nav.solutions.modelBuild.label",
          descriptionKey: "nav.solutions.modelBuild.description",
        }),
        translatableItem({
          href: "/solutions/field-planning",
          icon: ClipboardList,
          labelKey: "nav.solutions.fieldPlanning.label",
          descriptionKey: "nav.solutions.fieldPlanning.description",
        }),
        translatableItem({
          href: "/solutions/demand-analysis",
          icon: BarChart3,
          labelKey: "nav.solutions.demandAnalysis.label",
          descriptionKey: "nav.solutions.demandAnalysis.description",
        }),
        translatableItem({
          href: "/solutions/calibration",
          icon: SlidersHorizontal,
          labelKey: "nav.solutions.calibration.label",
          descriptionKey: "nav.solutions.calibration.description",
        }),
      ],
    }),
    translatableColumn({
      headingKey: "nav.solutions.heading.use",
      items: [
        translatableItem({
          href: "/solutions/model-import",
          icon: Import,
          labelKey: "nav.solutions.modelImport.label",
          descriptionKey: "nav.solutions.modelImport.description",
        }),
        translatableItem({
          href: "/solutions/planning",
          icon: CalendarRange,
          labelKey: "nav.solutions.planning.label",
          descriptionKey: "nav.solutions.planning.description",
        }),
        translatableItem({
          href: "/solutions/operational-modeling",
          icon: Gauge,
          labelKey: "nav.solutions.operationalModeling.label",
          descriptionKey: "nav.solutions.operationalModeling.description",
        }),
        translatableItem({
          href: "/solutions/water-quality",
          icon: FlaskConical,
          labelKey: "nav.solutions.waterQuality.label",
          descriptionKey: "nav.solutions.waterQuality.description",
        }),
        translatableItem({
          href: "/solutions/fire-flow",
          icon: Flame,
          labelKey: "nav.solutions.fireFlow.label",
          descriptionKey: "nav.solutions.fireFlow.description",
        }),
        translatableItem({
          href: "/solutions/valve-criticality",
          icon: Waypoints,
          labelKey: "nav.solutions.valveCriticality.label",
          descriptionKey: "nav.solutions.valveCriticality.description",
        }),
      ],
    }),
  ],
};

// ── Who it's for (by audience) ───────────────────────────────────────────
const whoItsForData: NavSection = {
  id: "who-its-for",
  label: "Who it's for",
  hubHref: "/who-its-for",
  columns: [
    {
      items: [
        translatableItem({
          href: "/who-its-for/utilities",
          icon: Building2,
          labelKey: "nav.whoItsFor.utilities.label",
          descriptionKey: "nav.whoItsFor.utilities.description",
        }),
        translatableItem({
          href: "/who-its-for/consultants",
          icon: Briefcase,
          labelKey: "nav.whoItsFor.consultants.label",
          descriptionKey: "nav.whoItsFor.consultants.description",
        }),
        translatableItem({
          href: "/who-its-for/education",
          icon: GraduationCap,
          labelKey: "nav.whoItsFor.education.label",
          descriptionKey: "nav.whoItsFor.education.description",
        }),
        translatableItem({
          href: "/who-its-for/humanitarian-ngos",
          icon: HeartHandshake,
          labelKey: "nav.whoItsFor.humanitarianNgos.label",
          descriptionKey: "nav.whoItsFor.humanitarianNgos.description",
        }),
      ],
    },
  ],
};

// ── Resources ────────────────────────────────────────────────────────────
const resourcesData: NavSection = {
  id: "resources",
  label: "Resources",
  columns: [
    {
      items: [
        translatableItem({
          href: "/security",
          icon: ShieldCheck,
          labelKey: "nav.resources.security.label",
          descriptionKey: "nav.resources.security.description",
        }),
        translatableItem({
          href: "/blog",
          icon: Newspaper,
          labelKey: "nav.resources.blog.label",
          descriptionKey: "nav.resources.blog.description",
        }),
        translatableItem({
          href: "/case-studies",
          icon: FileText,
          labelKey: "nav.resources.caseStudies.label",
          descriptionKey: "nav.resources.caseStudies.description",
        }),
        translatableItem({
          href: "/compare",
          icon: Scale,
          labelKey: "nav.resources.compare.label",
          descriptionKey: "nav.resources.compare.description",
        }),
      ],
      secondaryItems: [
        translatableItem({
          href: "https://roadmap.epanetjs.com",
          external: true,
          labelKey: "nav.resources.roadmap.label",
        }),
        translatableItem({
          href: "https://help.epanetjs.com",
          external: true,
          labelKey: "nav.resources.helpCenter.label",
        }),
        translatableItem({
          href: "https://toolkit.epanetjs.com",
          external: true,
          labelKey: "nav.resources.toolkit.label",
        }),
      ],
    },
  ],
};

// ── Product comparisons ──────────────────────────────────────────────────
// Consumed by the /compare hub, the vs-page cross-links, and the footer.
export const comparePages: NavItem[] = [
  translatableItem({
    href: "/compare/epanet-js-vs-infowater",
    icon: Scale,
    labelKey: "nav.compare.infowater.label",
    descriptionKey: "nav.compare.infowater.description",
  }),
  translatableItem({
    href: "/compare/epanet-js-vs-watercad-watergems",
    icon: Scale,
    labelKey: "nav.compare.watercadWatergems.label",
    descriptionKey: "nav.compare.watercadWatergems.description",
  }),
  translatableItem({
    href: "/compare/epanet-js-vs-infoworks-ws-pro",
    icon: Scale,
    labelKey: "nav.compare.infoworksWsPro.label",
    descriptionKey: "nav.compare.infoworksWsPro.description",
  }),
];

// ── Staged-launch filtering ──────────────────────────────────────────────
// Sections are exported with feature-flagged items removed (see
// src/config/feature-flags.ts), so every consumer — mega-menu, footer,
// hub-page CardGrids, related-links grids — respects the flags for free.
function filterSection(section: NavSection, enabled: boolean): NavSection {
  return {
    ...section,
    columns: section.columns.map((column) => ({
      ...column,
      items: enabled
        ? column.items.filter(
            (item) => item.external || isPageEnabled(item.href),
          )
        : [],
    })),
  };
}

export const solutions = filterSection(
  solutionsData,
  isSectionEnabled("solutions"),
);
export const whoItsFor = filterSection(
  whoItsForData,
  isSectionEnabled("whoItsFor"),
);
export const resources = filterSection(resourcesData, true);

export const navSections: NavSection[] = [solutions, whoItsFor, resources];
