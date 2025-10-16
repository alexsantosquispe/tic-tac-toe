import { useMemo, useReducer, type ReactNode } from 'react';
import { DEFAULT_DATA } from '../utils/constants';
import GameContext from './GameContext';
import { gameReducer, initialState } from './reducers/gameReducer';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { data, currentPlayer, winner, winnerCombination, movesCount } = state;

  const checkSquare = (index: number) =>
    dispatch({ type: 'CHECK_SQUARE', index });

  const resetGame = () => dispatch({ type: 'RESET' });

  return (
    <GameContext.Provider
      value={{
        data,
        currentPlayer,
        winner,
        winnerCombination,
        checkSquare,
        resetGame,
        isDraw: useMemo(
          () => !winner && movesCount >= DEFAULT_DATA.length,
          [winner, movesCount]
        )
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
