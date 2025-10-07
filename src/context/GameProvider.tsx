import { useState, type ReactNode } from 'react';
import { DEFAULT_DATA } from '../constants';
import type { SquareValueTypes } from '../types';
import { getWinnerResult, isDraw } from '../utils/gameUtils';
import GameContext from './GameContext';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [currentPlayer, setCurrentPlayer] =
    useState<Exclude<SquareValueTypes, ''>>('X');
  const [data, setData] = useState<SquareValueTypes[]>(DEFAULT_DATA);
  const [winner, setWinner] = useState<SquareValueTypes | null>(null);
  const [combHighLight, setCombHighLight] = useState<number[]>([]);

  const toggleCurrentPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  const checkSquare = (index: number) => {
    const boardData = [...data];
    boardData[index] = currentPlayer;
    setData(boardData);
    const result = getWinnerResult(boardData);
    const draw = !result.winner && isDraw(boardData);
    if (!result.winner && !draw) {
      toggleCurrentPlayer();
    }
    setWinner(result.winner);
    setCombHighLight(result.winnerCombination);
  };

  const resetGame = () => {
    setData([...DEFAULT_DATA]);
    setWinner(null);
    setCombHighLight([]);
    setCurrentPlayer('X');
  };

  return (
    <GameContext.Provider
      value={{
        data,
        currentPlayer,
        winner,
        combHighLight,
        checkSquare,
        resetGame,
        isDraw: !winner && isDraw(data)
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
