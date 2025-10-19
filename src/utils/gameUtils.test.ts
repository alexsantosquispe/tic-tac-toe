import {
  getAvailableIndexes,
  getCPUMove,
  getIsBoardDirty,
  getRandomMove,
  getWinnerResultByIndex
} from './gameUtils';

import type { SquareValueTypes } from '../models/types';

jest.mock('./constants', () => ({
  COMBINATIONS_BY_POSITION: {
    0: [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8]
    ],
    1: [[1, 4, 7]]
  }
}));

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

  describe('getAvailableIndexes', () => {
    it('should return indexes of empty squares', () => {
      const board: SquareValueTypes[] = [
        'X',
        '',
        'O',
        '',
        'X',
        '',
        'O',
        '',
        ''
      ];
      const result = getAvailableIndexes(board);
      expect(result).toEqual([1, 3, 5, 7, 8]);
    });

    it('should return an empty array when no empty squares', () => {
      const result = getAvailableIndexes(drawData);
      expect(result).toEqual([]);
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
      const result = getCPUMove(drawData);
      expect(result).toBeNull();
    });
  });
});
