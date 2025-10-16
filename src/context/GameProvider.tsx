import { useMemo, useReducer, type ReactNode } from 'react';
import type { PlayerModeTypes } from '../models/types';
import { DEFAULT_DATA } from '../utils/constants';
import GameContext from './GameContext';
import { gameReducer, initialState } from './reducers/gameReducer';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const {
    data,
    currentPlayer,
    winner,
    winnerCombination,
    movesCount,
    playerMode
  } = state;

  const isDraw = useMemo(
    () => !winner && movesCount >= DEFAULT_DATA.length,
    [winner, movesCount]
  );

  const checkSquare = (index: number) =>
    dispatch({ type: 'CHECK_SQUARE', index });

  const resetGame = () => dispatch({ type: 'RESET' });

  const setPlayerMode = (mode: PlayerModeTypes) => {
    dispatch({ type: 'SET_PLAYER_MODE', mode });
  };

  return (
    <GameContext.Provider
      value={{
        data,
        currentPlayer,
        winner,
        winnerCombination,
        checkSquare,
        resetGame,
        isDraw,
        playerMode,
        setPlayerMode
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
