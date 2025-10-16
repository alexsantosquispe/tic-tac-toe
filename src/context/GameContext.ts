import type { CurrentPlayerType, SquareValueTypes } from '../models/types';

import { createContext } from 'react';

export interface GameContextTypes {
  data: SquareValueTypes[];
  currentPlayer: CurrentPlayerType;
  winner: SquareValueTypes | null;
  winnerCombination: number[];
  checkSquare: (index: number) => void;
  resetGame: () => void;
  isDraw: boolean;
}

const GameContext = createContext<GameContextTypes | null>(null);

export default GameContext;
