import { LEVELS, PLAYER_MODE } from '../models/types';
import { DEFAULT_DATA, PLAYER_X } from '../utils/constants';

import { renderHook } from '@testing-library/react';
import type { GameContextTypes } from '../context/GameContext';
import GameProvider from '../context/GameProvider';
import useGame from './useGame';

describe('useGame', () => {
  it('should throw an error message if the hook is not wrapped in GameProvider', () => {
    expect(() => renderHook(() => useGame())).toThrow(
      'useGame must be used within a GameProvider'
    );
  });

  it('should return the game context when wrapped in GameProvider', () => {
    const mockContextValue: GameContextTypes = {
      data: DEFAULT_DATA,
      currentPlayer: PLAYER_X,
      winner: null,
      winnerCombination: [],
      checkSquare: jest.fn(),
      resetGame: jest.fn(),
      isDraw: false,
      playerMode: PLAYER_MODE.SINGLE_PLAYER,
      setPlayerMode: jest.fn(),
      levelOfDifficulty: LEVELS.EASY,
      setLevelOfDifficulty: jest.fn(),
      soundEffects: true,
      setSoundEffects: jest.fn()
    };

    const { result } = renderHook(() => useGame(), { wrapper: GameProvider });

    expect(result.current.data).toEqual(mockContextValue.data);
    expect(result.current.currentPlayer).toEqual(
      mockContextValue.currentPlayer
    );
    expect(result.current.winner).toEqual(mockContextValue.winner);
    expect(result.current.winnerCombination).toEqual(
      mockContextValue.winnerCombination
    );
    expect(typeof result.current.checkSquare).toBe('function');
    expect(typeof result.current.resetGame).toBe('function');
    expect(result.current.isDraw).toEqual(mockContextValue.isDraw);
    expect(result.current.playerMode).toEqual(mockContextValue.playerMode);
    expect(typeof result.current.setPlayerMode).toBe('function');
    expect(result.current.levelOfDifficulty).toEqual(
      mockContextValue.levelOfDifficulty
    );
    expect(typeof result.current.setLevelOfDifficulty).toBe('function');
    expect(result.current.soundEffects).toEqual(mockContextValue.soundEffects);
    expect(typeof result.current.setSoundEffects).toBe('function');
  });
});
