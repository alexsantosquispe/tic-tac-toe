import type {
  CurrentPlayerType,
  LevelTypes,
  PlayerModeTypes,
  SquareValueTypes
} from '../models/types';

import { createContext } from 'react';

export interface GameContextTypes {
  data: SquareValueTypes[];
  currentPlayer: CurrentPlayerType;
  winner: SquareValueTypes | null;
  winnerCombination: number[];
  checkSquare: (index: number) => void;
  resetGame: () => void;
  isDraw: boolean;
  playerMode: PlayerModeTypes;
  setPlayerMode: (mode: PlayerModeTypes) => void;
  levelOfDifficulty: LevelTypes;
  setLevelOfDifficulty: (level: LevelTypes) => void;
}

const GameContext = createContext<GameContextTypes | null>(null);

export default GameContext;
