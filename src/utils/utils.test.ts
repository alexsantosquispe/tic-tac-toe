import { getWinnerResult, isDraw } from './utils';

import type { SquareValueTypes } from '../types';

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
  describe('getWinnerResult', () => {
    const resultExpected = { winner: 'X', combHighLight: [0, 1, 2] };

    it('should return the winner', () => {
      const result = getWinnerResult(data);

      expect(result.winner).toEqual(resultExpected.winner);
      expect(result.combHighLight).toEqual(resultExpected.combHighLight);
    });

    it('should return default values', () => {
      const result = getWinnerResult(drawData);

      expect(result.winner).toEqual(null);
      expect(result.combHighLight).toEqual([]);
    });
  });

  describe('isDraw', () => {
    it('should return true if the game is draw', () => {
      const result = isDraw(drawData);

      expect(result).toBe(true);
    });

    it('should return false if the game is not draw', () => {
      const result = isDraw(data);

      expect(result).toBe(false);
    });
  });
});
