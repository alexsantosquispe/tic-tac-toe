import { useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';
import { PLAYER_MODE, type PlayerModeTypes } from '../models/types';
import { CPU_MOVE_DELAY, DEFAULT_DATA, PLAYER_O } from '../utils/constants';
import { getCPUMove } from '../utils/gameUtils';
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
  const moves = useRef<number[]>([]);

  const isDraw = useMemo(
    () => !winner && movesCount >= DEFAULT_DATA.length,
    [winner, movesCount]
  );

  const checkSquare = (index: number) => {
    dispatch({ type: 'CHECK_SQUARE', index });
    moves.current.push(index);
  };

  const resetGame = () => dispatch({ type: 'RESET' });

  const setPlayerMode = (mode: PlayerModeTypes) => {
    dispatch({ type: 'SET_PLAYER_MODE', mode });
  };

  useEffect(() => {
    if (
      playerMode === PLAYER_MODE.SINGLE_PLAYER &&
      currentPlayer === PLAYER_O &&
      !winner
    ) {
      const cpuMove = getCPUMove(data, moves.current[moves.current.length - 1]);
      if (cpuMove !== null) {
        const timeout = setTimeout(() => {
          dispatch({ type: 'CHECK_SQUARE', index: cpuMove });
        }, CPU_MOVE_DELAY);

        return () => clearTimeout(timeout);
      }
    }
  }, [playerMode, currentPlayer, winner, data]);

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
