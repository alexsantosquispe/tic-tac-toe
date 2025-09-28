import { createContext } from 'react';
import type { SquareValueTypes } from '../types';

export interface GameContextTypes {
  data: SquareValueTypes[];
  currentPlayer: 'X' | 'O';
  winner: SquareValueTypes | null;
  combHighLight: number[];
  checkSquare: (index: number) => void;
  toggleCurrentPlayer: () => void;
}

const GameContext = createContext<GameContextTypes | null>(null);

export default GameContext;
