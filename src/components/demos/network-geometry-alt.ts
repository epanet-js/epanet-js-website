// Alternate shared geometry for the illustrative demo network, traced from
// a hand-made reference (diagram-network.svg): a grid of parallel looped
// mains fed from a single reservoir. Same 640x400 space as BasemapAlt, so
// overlay content lines up with its streets.

// Pipes as [x1, y1, x2, y2, zone] where zone drives the pressure coloring
// (mirrors network-geometry.ts's Zone system) -- assigned by how far a pipe's
// far endpoint sits from the reservoir (high near it, critical at the two
// dead-end cul-de-sac tips).
export type Zone = "high" | "good" | "low" | "critical";

export const pipes: [number, number, number, number, Zone][] = [
  [64, 86, 170, 86, "high"],
  [170, 86, 270, 86, "high"],
  [170, 196, 270, 196, "good"],
  [170, 196, 170, 86, "high"],
  [270, 196, 270, 86, "good"],
  [470, 196, 470, 86, "low"],
  [170, 306, 170, 196, "good"],
  [270, 306, 270, 196, "good"],
  [470, 306, 470, 196, "low"],
  [270, 86, 370, 86, "good"],
  [370, 86, 470, 86, "low"],
  [470, 196, 570, 196, "critical"],
  [470, 306, 570, 306, "critical"],
  [370, 306, 470, 306, "low"],
  [270, 306, 370, 306, "good"],
  [170, 306, 270, 306, "good"],
];

// Junctions as [x, y, passes] where `passes` drives the pass/fail coloring --
// the two dead-end cul-de-sac tips are the network's only "failing" nodes,
// mirroring how network-geometry.ts's failing junctions are its own
// off-grid extremities.
export const junctions: [number, number, boolean][] = [
  [170, 86, true],
  [270, 86, true],
  [370, 86, true],
  [470, 86, true],
  [170, 196, true],
  [270, 196, true],
  [470, 196, true],
  [570, 196, false],
  [170, 306, true],
  [270, 306, true],
  [370, 306, true],
  [470, 306, true],
  [570, 306, false],
];

export const markerPoints: [number, number][] = [
  [170, 196],
  [270, 306],
  [470, 196],
  [370, 306],
];

// The reservoir triangle sits at the top-left supply point.
export const reservoirPoint: [number, number] = [64, 86];
