import { BobinasRangeModel } from "./mockBobinaReal";

// !RANGE!
// 1.00, 1.20, 1.50, 1.80

// !PARAMS!
//  position[0] = -holdWithMetade + args[0]/2 + (position[0] * 2)do anteior //diametro
//  position[1] = raio da bobina/2 (args[0]/2 ou args[1]/2)
//  position[2] = 0 centro, negativo para cima, positivo para baixo

const holdWidth = 27;
const holdWithMetade = holdWidth / 2;

const holdLength = 27.1;
const holdLengthMetade = holdLength / 2;

export const transformarEmVector3 = (bobinas: BobinasRangeModel[]) => {};

export const mockFiada1Altura1 = [
  {
    args: [1.92 / 2, 1.92 / 2, 2.1],
    position: [-holdWithMetade + 1.92 / 2, 1.92 / 2, 0],
  },
  {
    args: [1.85 / 2, 1.85 / 2, 1.91],
    position: [-holdWithMetade + 1.85 / 2 + 1.92, 1.85 / 2, 0],
  },
  {
    args: [1.85 / 2, 1.85 / 2, 1.82],
    position: [-holdWithMetade + 1.85 / 2 + 1.92 + 1.85, 1.85 / 2, 0],
  },
  {
    args: [1.68 / 2, 1.68 / 2, 1.74],
    position: [-holdWithMetade + 1.68 / 2 + 1.92 + 1.85 + 1.85, 1.68 / 2, 0],
  },
  {
    args: [1.56 / 2, 1.56 / 2, 1.67],
    position: [
      -holdWithMetade + 1.56 / 2 + 1.92 + 1.85 + 1.85 + 1.68,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.86 / 2, 1.86 / 2, 1.54],
    position: [
      -holdWithMetade + 1.86 / 2 + 1.92 + 1.85 + 1.85 + 1.68 + 1.56,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.28 / 2, 1.28 / 2, 1.43],
    position: [
      -holdWithMetade + 1.28 / 2 + 1.92 + 1.85 + 1.85 + 1.68 + 1.56 + 1.86,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.42 / 2, 1.42 / 2, 1.36],
    position: [
      -holdWithMetade +
        1.42 / 2 +
        1.92 +
        1.85 +
        1.85 +
        1.68 +
        1.56 +
        1.86 +
        1.28,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.35 / 2, 1.35 / 2, 1.21],
    position: [
      -holdWithMetade +
        1.35 / 2 +
        1.92 +
        1.85 +
        1.85 +
        1.68 +
        1.56 +
        1.86 +
        1.28 +
        1.42,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.42 / 2, 1.42 / 2, 1.15],
    position: [
      -holdWithMetade +
        1.42 / 2 +
        1.92 +
        1.85 +
        1.85 +
        1.68 +
        1.56 +
        1.86 +
        1.28 +
        1.42 +
        1.35,
      1.68 / 2,
      0,
    ],
  },
  {
    args: [1.88 / 2, 1.88 / 2, 1.02],
    position: [
      -holdWithMetade +
        1.88 / 2 +
        1.92 +
        1.85 +
        1.85 +
        1.68 +
        1.56 +
        1.86 +
        1.28 +
        1.42 +
        1.35 +
        1.42,
      1.68 / 2,
      0,
    ],
  },
];

export const mockFiada2Altura1 = [
  {
    args: [2.1 / 2, 2.1 / 2, 1.72],
    position: [-holdWithMetade + 2.1 / 2, 2.1 / 2, -4],
  },
  {
    args: [1.9 / 2, 1.9 / 2, 1.57],
    position: [-holdWithMetade + 1.9 / 2 + 2.1, 1.9 / 2, -4],
  },
  {
    args: [1.86 / 2, 1.86 / 2, 1.54],
    position: [-holdWithMetade + 1.86 / 2 + 2.1 + 1.9, 1.86 / 2, -4],
  },
  {
    args: [1.75 / 2, 1.75 / 2, 1.91],
    position: [-holdWithMetade + 1.75 / 2 + 2.1 + 1.9 + 1.86, 1.75 / 2, -4],
  },
  {
    args: [1.64 / 2, 1.64 / 2, 1.82],
    position: [
      -holdWithMetade + 1.64 / 2 + 2.1 + 1.9 + 1.86 + 1.75,
      1.64 / 2,
      -4,
    ],
  },
  {
    args: [1.58 / 2, 1.58 / 2, 1.74],
    position: [
      -holdWithMetade + 1.58 / 2 + 2.1 + 1.9 + 1.86 + 1.75 + 1.64,
      1.58 / 2,
      -4,
    ],
  },
  {
    args: [1.46 / 2, 1.46 / 2, 1.67],
    position: [
      -holdWithMetade + 1.46 / 2 + 2.1 + 1.9 + 1.86 + 1.75 + 1.64 + 1.58,
      1.46 / 2,
      -4,
    ],
  },
  {
    args: [1.32 / 2, 1.32 / 2, 1.36],
    position: [
      -holdWithMetade + 1.32 / 2 + 2.1 + 1.9 + 1.86 + 1.75 + 1.64 + 1.58 + 1.46,
      1.32 / 2,
      -4,
    ],
  },
  {
    args: [1.25 / 2, 1.25 / 2, 1.21],
    position: [
      -holdWithMetade +
        1.25 / 2 +
        2.1 +
        1.9 +
        1.86 +
        1.75 +
        1.64 +
        1.58 +
        1.46 +
        1.32,
      1.25 / 2,
      -4,
    ],
  },
  {
    args: [1.14 / 2, 1.14 / 2, 1.43],
    position: [
      -holdWithMetade +
        1.14 / 2 +
        2.1 +
        1.9 +
        1.86 +
        1.75 +
        1.64 +
        1.58 +
        1.46 +
        1.32 +
        1.25,
      1.14 / 2,
      -4,
    ],
  },
  {
    args: [1.02 / 2, 1.02 / 2, 1.15],
    position: [
      -holdWithMetade +
        1.02 / 2 +
        2.1 +
        1.9 +
        1.86 +
        1.75 +
        1.64 +
        1.58 +
        1.46 +
        1.32 +
        1.25 +
        1.14,
      1.02 / 2,
      -4,
    ],
  },
];
