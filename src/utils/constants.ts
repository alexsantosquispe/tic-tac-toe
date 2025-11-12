import type { SquareValueTypes } from '../models/types';

export const TIC_TAC_TOE_MATCHES = 'matches';

export const PLAYER_X = 'X';

export const PLAYER_O = 'O';

export const MIN_MOVES_TO_WIN = 4;

export const CPU_MOVE_DELAY = 800;

export const DEFAULT_DATA: SquareValueTypes[] = Array(9).fill('');

export const COMBINATIONS_BY_POSITION: Record<number, number[][]> = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8]
  ],
  1: [
    [0, 2],
    [4, 7]
  ],
  2: [
    [0, 1],
    [4, 6],
    [5, 8]
  ],
  3: [
    [0, 6],
    [4, 5]
  ],
  4: [
    [0, 8],
    [2, 6],
    [1, 7],
    [3, 5]
  ],
  5: [
    [3, 4],
    [2, 8]
  ],
  6: [
    [0, 3],
    [2, 4],
    [7, 8]
  ],
  7: [
    [1, 4],
    [6, 8]
  ],
  8: [
    [0, 4],
    [2, 5],
    [6, 7]
  ]
};
