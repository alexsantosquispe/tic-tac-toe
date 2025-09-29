import { WINNING_COMBINATIONS } from './constants';
import type { SquareValueTypes } from './types';

export const getWinnerResult = (
  data: SquareValueTypes[]
): { winner: SquareValueTypes | null; combHighLight: number[] } => {
  let winner: SquareValueTypes | null = null;
  const winnerComb =
    WINNING_COMBINATIONS.find((combination) => {
      const [a, b, c] = combination;
      const isWinner = !!data[a] && data[a] === data[b] && data[a] === data[c];
      if (isWinner) {
        winner = data[a];
      }
      return isWinner;
    }) || [];
  return { winner, combHighLight: winnerComb };
};

export const isDraw = (data: SquareValueTypes[]): boolean => {
  return data.every((cell) => cell !== '');
};
