import type { CurrentPlayerType, SquareValueTypes } from '../models/types';

import { COMBINATIONS_BY_POSITION } from './constants';

export type WinnerResultType = {
  winner: CurrentPlayerType | null;
  winnerCombination: number[];
};

export const getIsBoardDirty = (data: SquareValueTypes[]) => {
  return data.some((value) => value !== '');
};

export const getWinnerResultByIndex = (
  board: SquareValueTypes[],
  index: number
): WinnerResultType => {
  const combinations = COMBINATIONS_BY_POSITION[index];
  const combination =
    combinations.find(
      ([a, b]) =>
        !!board[index] && board[index] === board[a] && board[index] === board[b]
    ) || [];

  return {
    winner: combination.length ? board[index] : null,
    winnerCombination: combination.length ? [index, ...combination] : []
  } as WinnerResultType;
};

export const getRandomMove = (availableIndexes: number[]) => {
  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  return availableIndexes[randomIndex];
};

export const getIndexesByValue = (board: SquareValueTypes[]) => {
  const indexesByValue: Record<string, number[]> = {
    X: [],
    O: [],
    empty: []
  };

  return board.reduce((acc, value, index) => {
    const key = value || 'empty';
    if (!acc[key]) acc[key] = [];
    acc[key].push(index);
    return acc;
  }, indexesByValue);
};

export const getCPUMove = (board: SquareValueTypes[]): number | null => {
  const availableIndexes = getIndexesByValue(board).empty;

  if (availableIndexes.length === 0) return null;

  return getRandomMove(availableIndexes);
};
