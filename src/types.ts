export interface SvgIconProps {
  className?: string;
}
export const LANGUAGES = [
  { id: 'en', label: 'EN' },
  { id: 'es', label: 'ES' }
] as const;

export type LanguageTypes = (typeof LANGUAGES)[number]['id'];

export type SquareValueTypes = 'X' | 'O' | '';
