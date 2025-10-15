import type { SquareValueTypes } from '../models/types';
import { COMBINATIONS_BY_POSITION } from './constants';

type WinnerResultType = {
  winner: SquareValueTypes | null;
  winnerCombination: number[];
};

export const getIsBoardDirty = (data: SquareValueTypes[]) => {
  return data.some((value) => value !== '');
};

// export const getWinnerResult = (data: SquareValueTypes[]): WinnerResultType => {
//   let winner: SquareValueTypes | null = null;

//   const winnerCombination =
//     WINNING_COMBINATIONS.find((combination) => {
//       const [a, b, c] = combination;
//       const isWinner = !!data[a] && data[a] === data[b] && data[a] === data[c];
//       if (isWinner) {
//         winner = data[a];
//       }
//       return isWinner;
//     }) || [];

//   return { winner, winnerCombination };
// };

export const getWinnerResultByIndex = (
  data: SquareValueTypes[],
  index: number
): WinnerResultType => {
  let winner: SquareValueTypes | null = null;

  const winnerCombination =
    COMBINATIONS_BY_POSITION[index].find((combination) => {
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
  return !data.some((cell) => cell === '');
};
