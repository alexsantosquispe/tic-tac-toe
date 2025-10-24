import {
  getCPUMove,
  getIndexesByValue,
  getIsBoardDirty,
  getRandomMove,
  getWinnerResultByIndex
} from './gameUtils';

import type { SquareValueTypes } from '../models/types';

describe('gameUtils', () => {
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

  describe('getIsBoardDirty', () => {
    it('should return false when all squares are empty', () => {
      const result = getIsBoardDirty(['', '', '', '', '', '', '', '', '']);
      expect(result).toBe(false);
    });

    it('should return true when at least one square is filled', () => {
      const result = getIsBoardDirty(['X', '', '', '', '', '', '', '', '']);
      expect(result).toBe(true);
    });
  });

  describe('getWinnerResultByIndex', () => {
    it('should return the winner and the winning combination', () => {
      const result = getWinnerResultByIndex(data, 0);
      expect(result).toEqual({
        winner: 'X',
        winnerCombination: [0, 1, 2]
      });
    });

    it('should return default values when there is no winner', () => {
      const result = getWinnerResultByIndex(drawData, 0);
      expect(result).toEqual({
        winner: null,
        winnerCombination: []
      });
    });

    it('should return default values when index has no combinations', () => {
      const result = getWinnerResultByIndex(data, 8);
      expect(result).toEqual({
        winner: null,
        winnerCombination: []
      });
    });
  });

  describe('getIndexesByValue', () => {
    it('should return indexes grouped by X, O, and empty', () => {
      const board: SquareValueTypes[] = [
        'X',
        '',
        'O',
        'X',
        'O',
        '',
        '',
        'X',
        'O'
      ];
      const expectedResult = {
        X: [0, 3, 7],
        O: [2, 4, 8],
        empty: [1, 5, 6]
      };

      const result = getIndexesByValue(board);

      expect(result).toEqual(expectedResult);
    });

    it('should handle a board with only empty squares', () => {
      const board: SquareValueTypes[] = ['', '', '', '', '', '', '', '', ''];
      const expectedResult = {
        X: [],
        O: [],
        empty: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      };
      const result = getIndexesByValue(board);

      expect(result).toEqual(expectedResult);
    });

    it('should handle a board with only one value type', () => {
      const board: SquareValueTypes[] = [
        'X',
        'X',
        'X',
        'X',
        'X',
        'X',
        'X',
        'X',
        'X'
      ];

      const result = getIndexesByValue(board);

      expect(result).toEqual({
        X: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        O: [],
        empty: []
      });
    });

    it('should handle an empty board array', () => {
      const board: SquareValueTypes[] = [];

      const result = getIndexesByValue(board);

      expect(result).toEqual({
        X: [],
        O: [],
        empty: []
      });
    });
  });

  describe('getRandomMove', () => {
    it('should return one of the available indexes', () => {
      const available = [2, 4, 6];
      jest.spyOn(Math, 'random').mockReturnValue(0.5);
      const result = getRandomMove(available);
      expect(available).toContain(result);
      jest.restoreAllMocks();
    });
  });

  describe('getCPUMove', () => {
    it('should return null when no available moves', () => {
      const result = getCPUMove(drawData, 0);
      expect(result).toBeNull();
    });

    it('should return index to block a possible X win (easy mode)', () => {
      const result = getCPUMove(
        ['X', '', 'X', 'O', '', '', '', '', ''],
        2,
        'easy'
      );
      expect(result).toBe(1);
    });

    it('should block X and not try to win in easy mode', () => {
      // CPU has a chance to win, but easy mode should only block or random
      const board: SquareValueTypes[] = [
        'O',
        'O',
        '',
        'X',
        'X',
        '',
        '',
        '',
        ''
      ];
      const result = getCPUMove(board, 4, 'easy');
      // The CPU shouldn't necessarily pick the winning move (2)
      expect(result).not.toBe(2);
    });

    it('should try to win if possible in hard mode', () => {
      const board: SquareValueTypes[] = ['O', 'O', '', 'X', '', '', '', '', ''];
      const result = getCPUMove(board, 3, 'hard');
      expect(result).toBe(2); // CPU should complete its win
    });

    it('should block player X if cannot win (hard mode)', () => {
      const board: SquareValueTypes[] = ['X', '', 'X', '', 'O', '', '', '', ''];
      const result = getCPUMove(board, 2, 'hard');
      expect(result).toBe(1); // CPU blocks X from winning
    });

    it('should return a random move when no win or block available', () => {
      const board: SquareValueTypes[] = ['X', 'O', 'X', '', '', '', '', '', ''];
      const available = [3, 4, 5, 6, 7, 8];
      jest.spyOn(Math, 'random').mockReturnValue(0.5);
      const result = getCPUMove(board, 2);
      expect(available).toContain(result);
      jest.restoreAllMocks();
    });
  });
});
