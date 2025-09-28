import { useState, type ReactNode } from 'react';
import { DEFAULT_DATA, WINNING_COMBINATIONS } from '../constants';
import type { SquareValueTypes } from '../types';
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
    checkWinner(newData);
    if (!winner) {
      toggleCurrentPlayer();
    }
  };

  const checkWinner = (board: SquareValueTypes[]) => {
    WINNING_COMBINATIONS.forEach((combination) => {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setCombHighLight(combination);
      }
    });
  };

  console.log(combHighLight);

  return (
    <GameContext.Provider
      value={{
        data,
        currentPlayer,
        winner,
        combHighLight,
        checkSquare,
        toggleCurrentPlayer
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
