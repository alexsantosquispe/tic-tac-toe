import { WINNING_COMBINATIONS } from './constants';
import type { SquareValueTypes } from './types';

export const getWinnerResult = (
  data: SquareValueTypes[]
): { winner: SquareValueTypes | null; combHighLight: number[] } => {
  let winner = null;
  const winnerComb =
    WINNING_COMBINATIONS.find((combination) => {
      const [a, b, c] = combination;
      if (!!data[a] && data[a] === data[b] && data[a] === data[c]) {
        winner = data[a];
        return combination;
      }
    }) || [];
  return { winner, combHighLight: winnerComb };
};
