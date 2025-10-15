import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { CurrentPlayerType, SquareValueTypes } from '../models/types';
import {
  DEFAULT_DATA,
  MIN_MOVES_TO_WIN,
  PLAYER_O,
  PLAYER_X
} from '../utils/constants';
import {
  getWinnerResultByIndex,
  type WinnerResultType
} from '../utils/gameUtils';
import GameContext from './GameContext';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [data, setData] = useState<SquareValueTypes[]>(DEFAULT_DATA);
  const [winner, setWinner] = useState<SquareValueTypes | null>(null);
  const [winnerCombination, setWinnerCombination] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] =
    useState<CurrentPlayerType>(PLAYER_X);
  const [movesCount, setMovesCount] = useState<number>(0);

  const checkSquare = useCallback(
    (index: number) => {
      let result: WinnerResultType = { winner: null, winnerCombination: [] };

      const boardData = [...data];
      boardData[index] = currentPlayer;
      const newMovesCount = movesCount + 1;

      if (newMovesCount > MIN_MOVES_TO_WIN) {
        result = getWinnerResultByIndex(boardData, index);
      }

      setData(boardData);
      setWinner(result.winner);
      setWinnerCombination(result.winnerCombination);
      setMovesCount(newMovesCount);

      if (!result.winner && newMovesCount < DEFAULT_DATA.length) {
        setCurrentPlayer((prevPlayer) =>
          prevPlayer === PLAYER_X ? PLAYER_O : PLAYER_X
        );
      }
    },
    [data, currentPlayer, movesCount]
  );

  const resetGame = useCallback(() => {
    setData([...DEFAULT_DATA]);
    setWinner(null);
    setWinnerCombination([]);
    setCurrentPlayer(PLAYER_X);
    setMovesCount(0);
  }, []);

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
          () => !winner && movesCount === DEFAULT_DATA.length,
          [winner, movesCount]
        )
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
