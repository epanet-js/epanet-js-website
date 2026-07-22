// Shared styling constants for the alternate illustrative network
// (network-geometry-alt.ts / BasemapAlt.astro / NetworkMapAlt.astro) and any
// demo that draws its own overlay on top of them. Colors match
// NetworkMap.astro / network-geometry.ts (site-wide convention,
// docs/animated-diagram-best-practices.md §7); sizes are NetworkMap's own
// values multiplied by SCALE, the ratio between this network's 640-wide
// viewBox and NetworkMap's 400-wide one, so strokes/radii read at the same
// effective on-screen weight despite the wider coordinate space.
import type { Zone } from "./network-geometry-alt";

export const SCALE = 640 / 400; // 1.6

export const PIPE_COLOR = "#3730a3"; // indigo-800
export const PIPE_STROKE_WIDTH = 2.5 * SCALE; // = 4, matches NetworkMap exactly

export const JUNCTION_COLOR = "#312e81"; // indigo-900
// 4 x SCALE = 6.4; floored to 6, which is also the value visually confirmed
// against NetworkMap side by side.
export const JUNCTION_RADIUS = Math.floor(4 * SCALE);
export const OUTLINE_COLOR = "#ffffff";
export const OUTLINE_STROKE_WIDTH = 1 * SCALE; // = 1.6, matches NetworkMap exactly

export const RESERVOIR_COLOR = JUNCTION_COLOR;
export const RESERVOIR_APEX_OFFSET = Math.round(8 * SCALE); // 12.8 -> 13
export const RESERVOIR_BASE_OFFSET = Math.round(6 * SCALE); // 9.6 -> 10
export const RESERVOIR_HALF_WIDTH = Math.round(8 * SCALE); // 12.8 -> 13

// Same hex values as network-geometry.ts's pressureColor -- pressure zones
// are a site-wide color convention, not something this network reinterprets.
export const pressureColor: Record<Zone, string> = {
  high: "#3b82f6",
  good: "#22c55e",
  low: "#f59e0b",
  critical: "#ef4444",
};

// Junction pulse animation for failing (passes: false) nodes in the
// passfail variant -- same shape as NetworkMap.astro's .nm-pulse.
export const JUNCTION_PULSE_CLASS = "nma-pulse";

// Monitoring-point marker ring, matching NetworkMap.astro's own r="8" scaled
// by SCALE.
export const MARKER_RADIUS = Math.round(8 * SCALE); // 12.8 -> 13
