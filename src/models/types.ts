import type { ReactNode } from 'react';

export interface SvgIconProps {
  className?: string;
}
export const LANGUAGES = [
  { id: 'en', label: 'EN' },
  { id: 'es', label: 'ES' }
] as const;

export type LanguageTypes = (typeof LANGUAGES)[number]['id'];

export type SquareValueTypes = 'X' | 'O' | '';

export type CurrentPlayerType = Exclude<SquareValueTypes, ''>;

export const PLAYER_MODE = {
  SINGLE_PLAYER: 'singlePlayer',
  TWO_PLAYERS: 'twoPlayers'
} as const;

export type PlayerModeTypes = (typeof PLAYER_MODE)[keyof typeof PLAYER_MODE];

export const LEVELS = {
  EASY: 'easy',
  HARD: 'hard'
} as const;

export type LevelTypes = (typeof LEVELS)[keyof typeof LEVELS];

export type OptionType<T> = {
  value: T;
  component: ReactNode;
};

export type MatchType = {
  id: string;
  playerMode: PlayerModeTypes;
  level: LevelTypes | null;
  winner: CurrentPlayerType | 'draw';
};
