import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { CurrentPlayerType, SquareValueTypes } from '../models/types';
import { DEFAULT_DATA, PLAYER_O, PLAYER_X } from '../utils/constants';
import { getWinnerResult, isDraw } from '../utils/gameUtils';
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

  const checkSquare = useCallback(
    (index: number) => {
      const boardData = [...data];
      boardData[index] = currentPlayer;

      const result = getWinnerResult(boardData);
      const isGameDraw = !result.winner && isDraw(boardData);

      setData(boardData);
      setWinner(result.winner);
      setWinnerCombination(result.winnerCombination);

      if (!result.winner && !isGameDraw) {
        setCurrentPlayer((prevPlayer) =>
          prevPlayer === PLAYER_X ? PLAYER_O : PLAYER_X
        );
      }
    },
    [data, currentPlayer]
  );

  const resetGame = useCallback(() => {
    setData([...DEFAULT_DATA]);
    setWinner(null);
    setWinnerCombination([]);
    setCurrentPlayer(PLAYER_X);
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
        isDraw: useMemo(() => !winner && isDraw(data), [winner, data])
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
