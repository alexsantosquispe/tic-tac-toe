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

export type OptionType = {
  value: PlayerModeTypes;
  component: ReactNode;
};
