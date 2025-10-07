import { WINNING_COMBINATIONS } from '../constants';
import type { SquareValueTypes } from '../types';

type WinnerResultType = {
  winner: SquareValueTypes | null;
  winnerCombination: number[];
};

export const getIsBoardDirty = (data: SquareValueTypes[]) => {
  return data.some((value) => value !== '');
};

export const getWinnerResult = (data: SquareValueTypes[]): WinnerResultType => {
  let winner: SquareValueTypes | null = null;

  const winnerCombination =
    WINNING_COMBINATIONS.find((combination) => {
      const [a, b, c] = combination;
      const isWinner = !!data[a] && data[a] === data[b] && data[a] === data[c];
      if (isWinner) {
        winner = data[a];
      }
      return isWinner;
    }) || [];

  return { winner, winnerCombination };
};

export const isDraw = (data: SquareValueTypes[]): boolean => {
  return data.every((cell) => cell !== '');
};
