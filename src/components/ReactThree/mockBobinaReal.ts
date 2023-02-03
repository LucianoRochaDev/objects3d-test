const holdWidth = 27;
const holdWithMetade = holdWidth / 2;

const holdLength = 27.1;
const holdLengthMetade = holdLength / 2;

export interface BobinasRangeModel {
  width: number;
  diameter: number;
  pieces: number;
}

export const BobinasRange_all: BobinasRangeModel[] = [
  {
    width: 1.02,
    diameter: 1.88,
    pieces: 13,
  },
  {
    width: 1.15,
    diameter: 1.42,
    pieces: 22,
  },

  {
    width: 1.21,
    diameter: 1.35,
    pieces: 59,
  },
  {
    width: 1.36,
    diameter: 1.42,
    pieces: 102,
  },
  {
    width: 1.43,
    diameter: 1.28,
    pieces: 69,
  },
  {
    width: 1.54,
    diameter: 1.86,
    pieces: 30,
  },
  {
    width: 1.67,
    diameter: 1.56,
    pieces: 22,
  },
  {
    width: 1.74,
    diameter: 1.68,
    pieces: 22,
  },
  {
    width: 1.82,
    diameter: 1.85,
    pieces: 39,
  },
  {
    width: 1.91,
    diameter: 1.85,
    pieces: 50,
  },
];
