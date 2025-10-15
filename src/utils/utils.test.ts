import type { SquareValueTypes } from '../models/types';
import { getWinnerResultByIndex } from './gameUtils';

describe('utils', () => {
  const data: SquareValueTypes[] = ['X', 'X', 'X', 'O', 'O', '', '', '', 'O'];
  const drawData: SquareValueTypes[] = [
    'X',
    'O',
    'X',
    'O',
    'X',
    'X',
    'O',
    'X',
    'O'
  ];
  describe('getWinnerResultByIndex', () => {
    const resultExpected = { winner: 'X', combHighLight: [0, 1, 2] };

    it('should return the winner', () => {
      const result = getWinnerResultByIndex(data, 0);

      expect(result.winner).toEqual(resultExpected.winner);
      expect(result.winnerCombination).toEqual(resultExpected.combHighLight);
    });

    it('should return default values', () => {
      const result = getWinnerResultByIndex(drawData, 0);

      expect(result.winner).toEqual(null);
      expect(result.winnerCombination).toEqual([]);
    });
  });
});
