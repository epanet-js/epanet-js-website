import {
  Hammer,
  Flame,
  Gauge,
  SlidersHorizontal,
  Scale,
  Map,
  ClipboardList,
  Building2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  Newspaper,
  ShieldCheck,
  FileText,
  Milestone,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  external?: boolean;
}

export interface NavColumn {
  heading?: string;
  items: NavItem[];
}

export interface NavSection {
  id: "solutions" | "who-its-for" | "resources";
  label: string;
  hubHref?: string;
  columns: NavColumn[];
}

// ── Solutions (by workflow) ──────────────────────────────────────────────
export const solutions: NavSection = {
  id: "solutions",
  label: "Solutions",
  hubHref: "/solutions",
  columns: [
    {
      heading: "Available now",
      items: [
        {
          label: "Model building",
          href: "/solutions/model-build",
          description: "Turn GIS and asset data into a working model — fast.",
          icon: Hammer,
        },
        {
          label: "Calibration",
          href: "/solutions/calibration",
          description: "Smart, assisted tuning that makes your model match reality.",
          icon: SlidersHorizontal,
        },
        {
          label: "Fire flow",
          href: "/solutions/fire-flow",
          description: "Find available flow and capacity gaps across your network.",
          icon: Flame,
        },
        {
          label: "Operational modeling",
          href: "/solutions/operational-modeling",
          description: "See how your network responds before you make a change.",
          icon: Gauge,
        },
      ],
    },
    {
      heading: "Coming soon",
      items: [
        {
          label: "Flow balance",
          href: "/solutions/flow-balance",
          description: "Build an accurate picture of demand across your network.",
          icon: Scale,
          comingSoon: true,
        },
        {
          label: "Master planning",
          href: "/solutions/master-planning",
          description: "Plan your network years ahead with confidence.",
          icon: Map,
          comingSoon: true,
        },
        {
          label: "Field planning",
          href: "/solutions/field-planning",
          description: "Design the field campaign that makes your model trustworthy.",
          icon: ClipboardList,
          comingSoon: true,
        },
      ],
    },
  ],
};

// ── Who it's for (by audience) ───────────────────────────────────────────
export const whoItsFor: NavSection = {
  id: "who-its-for",
  label: "Who it's for",
  hubHref: "/who-its-for",
  columns: [
    {
      items: [
        {
          label: "Utilities",
          href: "/who-its-for/utilities",
          description: "Take control of your network and your model.",
          icon: Building2,
        },
        {
          label: "Consultants",
          href: "/who-its-for/consultants",
          description: "Build models faster and deliver more for every client.",
          icon: Briefcase,
        },
        {
          label: "Education",
          href: "/who-its-for/education",
          description: "Learn on the real tools the industry uses.",
          icon: GraduationCap,
        },
        {
          label: "Humanitarian & NGOs",
          href: "/who-its-for/humanitarian-ngos",
          description: "The best tools to get the job done for humanitarian water work.",
          icon: HeartHandshake,
        },
      ],
    },
  ],
};

// ── Resources ────────────────────────────────────────────────────────────
export const resources: NavSection = {
  id: "resources",
  label: "Resources",
  columns: [
    {
      items: [
        {
          label: "Help Center",
          href: "https://help.epanetjs.com",
          description: "Guides and answers for getting things done.",
          icon: LifeBuoy,
          external: true,
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Product updates and water modeling insights.",
          icon: Newspaper,
        },
        {
          label: "Security",
          href: "/security",
          description: "How we keep your data private and in your control.",
          icon: ShieldCheck,
        },
        {
          label: "Case studies",
          href: "/case-studies",
          description: "How teams use epanet-js in the real world.",
          icon: FileText,
        },
        {
          label: "Roadmap",
          href: "https://roadmap.epanetjs.com",
          description: "See what we're building next.",
          icon: Milestone,
          external: true,
        },
        {
          label: "Toolkit",
          href: "https://toolkit.epanetjs.com",
          description: "The EPANET engine for the web, for developers.",
          icon: Wrench,
          external: true,
        },
      ],
    },
  ],
};

export const navSections: NavSection[] = [solutions, whoItsFor, resources];
