import type { CurrentPlayerType, SquareValueTypes } from '../../models/types';
import {
  DEFAULT_DATA,
  MIN_MOVES_TO_WIN,
  PLAYER_O,
  PLAYER_X
} from '../../utils/constants';

import { getWinnerResultByIndex } from '../../utils/gameUtils';

export interface GameStateType {
  data: SquareValueTypes[];
  currentPlayer: CurrentPlayerType;
  winner: CurrentPlayerType | null;
  winnerCombination: number[];
  movesCount: number;
}

export type GameActionType =
  | { type: 'CHECK_SQUARE'; index: number }
  | { type: 'RESET' };

export const initialState: GameStateType = {
  data: [...DEFAULT_DATA],
  currentPlayer: PLAYER_X,
  winner: null,
  winnerCombination: [],
  movesCount: 0
};

export const gameReducer = (
  state: GameStateType,
  action: GameActionType
): GameStateType => {
  switch (action.type) {
    case 'CHECK_SQUARE': {
      let winner: CurrentPlayerType | null = null;
      let winnerCombination: number[] = [];

      const { index } = action;
      const boardData = [...state.data];
      boardData[index] = state.currentPlayer;
      const newMovesCount = state.movesCount + 1;

      if (newMovesCount > MIN_MOVES_TO_WIN) {
        const result = getWinnerResultByIndex(boardData, index);
        winner = result.winner;
        winnerCombination = result.winnerCombination;
      }

      return {
        ...state,
        data: boardData,
        winner,
        winnerCombination,
        movesCount: newMovesCount,
        currentPlayer:
          !winner && newMovesCount < DEFAULT_DATA.length
            ? state.currentPlayer === PLAYER_X
              ? PLAYER_O
              : PLAYER_X
            : state.currentPlayer
      };
    }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};
