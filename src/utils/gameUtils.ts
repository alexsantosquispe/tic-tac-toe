import type { SquareValueTypes } from '../models/types';
import { COMBINATIONS_BY_POSITION } from './constants';

type WinnerResultType = {
  winner: SquareValueTypes | null;
  winnerCombination: number[];
};

export const getIsBoardDirty = (data: SquareValueTypes[]) => {
  return data.some((value) => value !== '');
};

export const getWinnerResultByIndex = (
  data: SquareValueTypes[],
  index: number
): WinnerResultType => {
  const combinations = COMBINATIONS_BY_POSITION[index];
  if (!combinations) return { winner: null, winnerCombination: [] };

  const combination =
    combinations.find(
      ([a, b, c]) => !!data[a] && data[a] === data[b] && data[a] === data[c]
    ) || [];

  return {
    winner: combination.length ? data[combination[0]] : null,
    winnerCombination: combination
  };
};

export const isDraw = (data: SquareValueTypes[]): boolean => {
  return !data.some((cell) => cell === '');
};
