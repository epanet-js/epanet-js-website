// Shared geometry for the illustrative demo network. NetworkMap renders it
// directly; other demos draw overlay SVGs (same 400x300 viewBox, same
// stroke-width) on top of NetworkMap so per-pipe animation lines up exactly
// with the base strokes.

// Pipes as [x1, y1, x2, y2, zone] where zone drives the pressure coloring
// (source side stays blue, extremities trend amber/red).
export type Zone = "high" | "good" | "low" | "critical";

export const pipes: [number, number, number, number, Zone][] = [
  [40, 50, 90, 70, "high"],
  [90, 70, 150, 60, "high"],
  [90, 70, 100, 130, "high"],
  [150, 60, 210, 75, "good"],
  [100, 130, 160, 140, "good"],
  [160, 140, 150, 60, "good"],
  [100, 130, 110, 195, "good"],
  [230, 150, 210, 75, "good"],
  [160, 140, 170, 200, "good"],
  [210, 75, 270, 65, "low"],
  [110, 195, 170, 200, "low"],
  [170, 200, 240, 210, "low"],
  [240, 210, 230, 150, "low"],
  [230, 150, 160, 140, "low"],
  [310, 160, 330, 80, "low"],
  [270, 65, 330, 80, "critical"],
  [240, 210, 300, 220, "critical"],
  [300, 220, 310, 160, "low"],
  [300, 220, 350, 230, "critical"],
  [310, 160, 360, 150, "critical"],
];

// Junctions as [x, y, passes] where `passes` drives the pass/fail coloring.
export const junctions: [number, number, boolean][] = [
  [90, 70, true],
  [150, 60, true],
  [210, 75, true],
  [270, 65, true],
  [330, 80, false],
  [100, 130, true],
  [160, 140, true],
  [110, 195, true],
  [170, 200, true],
  [240, 210, true],
  [230, 150, true],
  [300, 220, true],
  [310, 160, true],
  [350, 230, false],
  [360, 150, false],
];

export const markerPoints: [number, number][] = [
  [100, 130],
  [270, 65],
  [240, 210],
  [310, 160],
];

// The tank glyph sits at the top-left supply point.
export const tankPoint: [number, number] = [40, 50];

export const pressureColor: Record<Zone, string> = {
  high: "#3b82f6",
  good: "#22c55e",
  low: "#f59e0b",
  critical: "#ef4444",
};
