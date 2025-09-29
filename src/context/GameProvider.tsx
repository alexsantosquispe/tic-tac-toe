import { useState, type ReactNode } from 'react';
import { DEFAULT_DATA } from '../constants';
import type { SquareValueTypes } from '../types';
import { getWinnerResult } from '../utils';
import GameContext from './GameContext';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider = ({ children }: GameProviderProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [data, setData] = useState<SquareValueTypes[]>(DEFAULT_DATA);
  const [winner, setWinner] = useState<SquareValueTypes | null>(null);
  const [combHighLight, setCombHighLight] = useState<number[]>([]);

  const toggleCurrentPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  const checkSquare = (index: number) => {
    if (data[index] !== '' || winner) return;
    const newData = [...data];
    newData[index] = currentPlayer;
    setData(newData);
    const result = getWinnerResult(newData);
    if (!result.winner) {
      toggleCurrentPlayer();
    }
    setWinner(result.winner);
    setCombHighLight(result.combHighLight);
  };

  const resetGame = () => {
    setData(DEFAULT_DATA);
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
        toggleCurrentPlayer,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
