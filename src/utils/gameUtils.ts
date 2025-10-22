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

export const isPossibleWinCombination = () => {};

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

export const getIndexToBlock = (
  board: SquareValueTypes[],
  lastMoveIndex: number
) => {
  const combinations = COMBINATIONS_BY_POSITION[lastMoveIndex];
  const winnerCombination = combinations.find(
    ([a, b]) =>
      !!board[lastMoveIndex] &&
      (board[lastMoveIndex] === board[a] ||
        board[lastMoveIndex] === board[b]) &&
      (board[a] === '' || board[b] === '')
  );

  if (winnerCombination?.length) {
    const [a, b] = winnerCombination;
    return board[a] === '' ? a : b;
  }
  return null;
};

export const getCPUMove = (
  board: SquareValueTypes[],
  lastMove: number
): number | null => {
  const blockIndex = getIndexToBlock(board, lastMove);
  const availableIndexes = getIndexesByValue(board).empty;

  if (availableIndexes.length === 0) return null;

  return blockIndex || getRandomMove(availableIndexes);
};
