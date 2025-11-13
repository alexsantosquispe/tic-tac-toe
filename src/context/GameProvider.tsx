import { useEffect, useMemo, useReducer, useRef, type ReactNode } from 'react';
import {
  PLAYER_MODE,
  type LevelTypes,
  type PlayerModeTypes
} from '../models/types';
import { CPU_MOVE_DELAY, DEFAULT_DATA, PLAYER_O } from '../utils/constants';
import { getCPUMove } from '../utils/gameUtils';
import { saveMatch } from '../utils/localStorageUtils';
import { playClick } from '../utils/soundUtils';
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
    playerMode,
    levelOfDifficulty,
    soundEffects
  } = state;
  const moves = useRef<number[]>([]);

  const isDraw = useMemo(
    () => !winner && movesCount >= DEFAULT_DATA.length,
    [winner, movesCount]
  );

  const checkSquare = (index: number) => {
    playClick();
    dispatch({ type: 'CHECK_SQUARE', index });
    moves.current.push(index);
  };

  const resetGame = () => {
    playClick();
    dispatch({ type: 'RESET' });
  };

  const setPlayerMode = (mode: PlayerModeTypes) => {
    playClick();
    dispatch({ type: 'SET_PLAYER_MODE', mode });
  };

  const setLevelOfDifficulty = (level: LevelTypes) => {
    playClick();
    dispatch({ type: 'SET_LEVEL_OF_DIFFICULTY', level });
  };

  const setSoundEffects = (value: boolean) => {
    playClick();
    dispatch({ type: 'SET_SOUND_EFFECTS', value });
  };

  useEffect(() => {
    if (
      playerMode === PLAYER_MODE.SINGLE_PLAYER &&
      currentPlayer === PLAYER_O &&
      !winner
    ) {
      const lastIndexMove = moves.current[moves.current.length - 1];
      const cpuMove = getCPUMove(data, lastIndexMove, levelOfDifficulty);

      if (cpuMove !== null) {
        const timeout = setTimeout(() => {
          playClick();
          dispatch({ type: 'CHECK_SQUARE', index: cpuMove });
        }, CPU_MOVE_DELAY);

        return () => clearTimeout(timeout);
      }
    }
  }, [playerMode, levelOfDifficulty, currentPlayer, winner, data]);

  useEffect(() => {
    if (winner || isDraw) {
      saveMatch({
        id: Date.now().toString(),
        playerMode,
        level:
          playerMode === PLAYER_MODE.SINGLE_PLAYER ? levelOfDifficulty : null,
        winner: winner ?? 'draw'
      });
    }
  }, [winner, playerMode, levelOfDifficulty, isDraw]);

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
        setPlayerMode,
        levelOfDifficulty,
        setLevelOfDifficulty,
        soundEffects,
        setSoundEffects
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
