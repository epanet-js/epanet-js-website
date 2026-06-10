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
// Two lifecycle groups: getting to a model, then working with one. The menu
// is organized by workflow and does not signal availability.
export const solutions: NavSection = {
  id: "solutions",
  label: "Solutions",
  hubHref: "/solutions",
  columns: [
    {
      heading: "Build your model",
      items: [
        {
          label: "Model building",
          href: "/solutions/model-build",
          description: "Turn GIS and asset data into a working model, fast.",
          icon: Hammer,
        },
        {
          label: "Field planning",
          href: "/solutions/field-planning",
          description: "Design the field campaign that makes your model trustworthy.",
          icon: ClipboardList,
        },
        {
          label: "Demand analysis",
          href: "/solutions/demand-analysis",
          description: "Build an accurate picture of demand across your network.",
          icon: BarChart3,
        },
        {
          label: "Calibration",
          href: "/solutions/calibration",
          description: "Assisted tuning that makes your model match the field.",
          icon: SlidersHorizontal,
        },
      ],
    },
    {
      heading: "Use your model",
      items: [
        {
          label: "Model import",
          href: "/solutions/model-import",
          description: "Bring in an existing model from any platform.",
          icon: Import,
        },
        {
          label: "Planning",
          href: "/solutions/planning",
          description: "Plan your network and investment years ahead.",
          icon: CalendarRange,
        },
        {
          label: "Operational modeling",
          href: "/solutions/operational-modeling",
          description: "See how your network responds before you make a change.",
          icon: Gauge,
        },
        {
          label: "Water quality",
          href: "/solutions/water-quality",
          description: "Track water age, source, and chlorine across the network.",
          icon: FlaskConical,
        },
        {
          label: "Fire flow",
          href: "/solutions/fire-flow",
          description: "Find available flow and capacity across your network.",
          icon: Flame,
        },
        {
          label: "Valve criticality",
          href: "/solutions/valve-criticality",
          description: "Find the valves that isolate each part of the network.",
          icon: Waypoints,
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
