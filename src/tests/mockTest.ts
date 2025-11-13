import type { MatchType } from '../models/types';

export const matchesDataMock: MatchType[] = [
  {
    id: '1',
    playerMode: 'singlePlayer',
    level: 'easy',
    winner: 'X'
  },
  {
    id: '2',
    playerMode: 'singlePlayer',
    level: 'hard',
    winner: 'O'
  },
  {
    id: '3',
    playerMode: 'twoPlayers',
    level: null,
    winner: 'draw'
  }
];
