import {
  LEVELS,
  type CurrentPlayerType,
  type LevelTypes,
  type SquareValueTypes
} from '../models/types';
import { COMBINATIONS_BY_POSITION, PLAYER_O } from './constants';

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

export const getWinnerCombinationByIndex = (
  board: SquareValueTypes[],
  index: number
) => {
  const combinations = COMBINATIONS_BY_POSITION[index];
  const winnerCombination = combinations.find(
    ([a, b]) =>
      !!board[index] &&
      (board[index] === board[a] || board[index] === board[b]) &&
      (board[a] === '' || board[b] === '')
  );

  return winnerCombination || [];
};

export const getIndexToBlock = (
  board: SquareValueTypes[],
  lastMoveIndex: number
) => {
  const winnerCombination = getWinnerCombinationByIndex(board, lastMoveIndex);
  if (winnerCombination.length) {
    const [a, b] = winnerCombination;
    return board[a] === '' ? a : b;
  }
  return null;
};

export const getIndexToWin = (
  board: SquareValueTypes[],
  indexes: number[]
): number | null => {
  if (indexes.length === 0) return null;

  for (const index of indexes) {
    const winnerCombination = getWinnerCombinationByIndex(board, index);
    if (winnerCombination.length) {
      const [a, b] = winnerCombination;
      return board[a] === '' ? a : b;
    }
  }

  return null;
};

export const getCPUMove = (
  board: SquareValueTypes[],
  lastMove: number,
  difficulty?: LevelTypes
): number | null => {
  const indexesByValue = getIndexesByValue(board);
  const availableIndexes = indexesByValue.empty;

  if (availableIndexes.length === 0) return null;

  if (difficulty === LEVELS.HARD) {
    const winIndex = getIndexToWin(board, indexesByValue[PLAYER_O]);
    if (winIndex !== null) return winIndex;
  }

  const blockIndex = getIndexToBlock(board, lastMove);
  if (blockIndex !== null) return blockIndex;

  return getRandomMove(availableIndexes);
};
