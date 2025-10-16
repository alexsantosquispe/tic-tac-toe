import { PLAYER_O, PLAYER_X } from '../../utils/constants';
import { getWinnerResultByIndex } from '../../utils/gameUtils';
import {
  gameReducer,
  initialState,
  type GameActionType,
  type GameStateType
} from './gameReducer';

jest.mock('../../utils/gameUtils', () => ({
  getWinnerResultByIndex: jest.fn()
}));

describe('gameReducer', () => {
  it('should mark a square and switch the player', () => {
    const action: GameActionType = { type: 'CHECK_SQUARE', index: 0 };
    const state = { ...initialState };

    const result = gameReducer(state, action);

    expect(result.data[0]).toBe(PLAYER_X);
    expect(result.currentPlayer).toBe(PLAYER_O);
    expect(result.movesCount).toBe(1);
    expect(result.winner).toBeNull();
  });

  it('should not switch the turn if there is a winner', () => {
    (getWinnerResultByIndex as jest.Mock).mockReturnValueOnce({
      winner: PLAYER_X,
      winnerCombination: [0, 1, 2]
    });

    const state: GameStateType = {
      ...initialState,
      data: ['X', 'X', '', '', '', '', '', '', ''],
      movesCount: 4,
      currentPlayer: PLAYER_X
    };

    const result = gameReducer(state, { type: 'CHECK_SQUARE', index: 2 });

    expect(result.winner).toBe(PLAYER_X);
    expect(result.winnerCombination).toEqual([0, 1, 2]);
    expect(result.currentPlayer).toBe(PLAYER_X); // stays the same
  });

  it('should not check for a winner before the minimum move count', () => {
    (getWinnerResultByIndex as jest.Mock).mockReturnValueOnce({
      winner: null,
      winnerCombination: []
    });

    const state: GameStateType = {
      ...initialState,
      movesCount: 2,
      data: ['X', '', '', '', '', '', '', '', '']
    };

    const result = gameReducer(state, { type: 'CHECK_SQUARE', index: 1 });

    expect(getWinnerResultByIndex).not.toHaveBeenCalled(); // too early
    expect(result.movesCount).toBe(3);
  });

  it('should reset the state when RESET action is dispatched', () => {
    const modifiedState: GameStateType = {
      ...initialState,
      data: ['X', 'O', 'X', 'O', 'X', '', '', '', ''],
      currentPlayer: PLAYER_O,
      movesCount: 5
    };

    const result = gameReducer(modifiedState, { type: 'RESET' });

    expect(result).toEqual(initialState);
  });
});
