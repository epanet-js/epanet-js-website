// Alternate shared geometry for the illustrative demo network, traced from
// a hand-made reference (diagram-network.svg): a grid of parallel looped
// mains fed from a single reservoir. Same 640x400 space as BasemapAlt, so
// overlay content lines up with its streets. Plain single-color network,
// no pressure zones (unlike network-geometry.ts).

export const pipes: [number, number, number, number][] = [
  [64, 86, 170, 86],
  [170, 86, 270, 86],
  [170, 196, 270, 196],
  [170, 196, 170, 86],
  [270, 196, 270, 86],
  [470, 196, 470, 86],
  [170, 306, 170, 196],
  [270, 306, 270, 196],
  [470, 306, 470, 196],
  [270, 86, 370, 86],
  [370, 86, 470, 86],
  [470, 196, 570, 196],
  [470, 306, 570, 306],
  [370, 306, 470, 306],
  [270, 306, 370, 306],
  [170, 306, 270, 306],
];

export const junctions: [number, number][] = [
  [170, 86],
  [270, 86],
  [370, 86],
  [470, 86],
  [170, 196],
  [270, 196],
  [470, 196],
  [570, 196],
  [170, 306],
  [270, 306],
  [370, 306],
  [470, 306],
  [570, 306],
];

// The reservoir triangle sits at the top-left supply point.
export const reservoirPoint: [number, number] = [64, 86];
