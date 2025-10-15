import type { SquareValueTypes } from '../models/types';

export const PLAYER_X = 'X';

export const PLAYER_O = 'O';

export const DEFAULT_DATA: SquareValueTypes[] = Array(9).fill('');

// export const WINNING_COMBINATIONS: number[][] = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

export const COMBINATIONS_BY_POSITION: Record<number, number[][]> = {
  0: [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8]
  ],
  1: [
    [0, 1, 2],
    [1, 4, 7]
  ],
  2: [
    [0, 1, 2],
    [2, 4, 6],
    [2, 5, 8]
  ],
  3: [
    [0, 3, 6],
    [3, 4, 5]
  ],
  4: [
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
  ],
  5: [
    [3, 4, 5],
    [2, 5, 8]
  ],
  6: [
    [0, 3, 6],
    [2, 4, 6],
    [6, 7, 8]
  ],
  7: [
    [1, 4, 7],
    [6, 7, 8]
  ],
  8: [
    [0, 4, 8],
    [2, 5, 8],
    [6, 7, 8]
  ]
};
