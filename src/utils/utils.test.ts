import { getWinnerResult, isDraw } from './utils';

import type { SquareValueTypes } from '../types';

describe('utils', () => {
  describe('getWinnerResult', () => {
    const data: SquareValueTypes[] = ['X', 'X', 'X', 'O', 'O', '', '', '', 'O'];

    const resultExpected = { winner: 'X', combHighLight: [0, 1, 2] };

    it('should return the winner', () => {
      const result = getWinnerResult(data);

      expect(result.winner).toEqual(resultExpected.winner);
      expect(result.combHighLight).toEqual(resultExpected.combHighLight);
    });
  });

  describe('isDraw', () => {
    const data: SquareValueTypes[] = [
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X',
      'O',
      'X'
    ];

    it('should return true if the game is draw', () => {
      const result = isDraw(data);

      expect(result).toBe(true);
    });
  });
});
