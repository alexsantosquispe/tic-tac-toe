import { createContext } from 'react';

export const THEME_TYPES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
