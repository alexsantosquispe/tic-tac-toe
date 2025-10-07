import { THEME_TYPES, type ThemeType } from '../context/ThemeContext';

const THEME_KEY = 'theme';

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEME_TYPES.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_TYPES.DARK
    : THEME_TYPES.LIGHT;
};

export const getStoredTheme = () => {
  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (!storedTheme) return null;
  return storedTheme as ThemeType;
};

export const setStoredTheme = (theme: ThemeType) => {
  window.localStorage.setItem(THEME_KEY, theme);
};

export const applyTheme = (theme: ThemeType) => {
  const root = window?.document.documentElement;

  if (theme === THEME_TYPES.DARK) {
    root.classList.add(THEME_TYPES.DARK);
  } else {
    root.classList.remove(THEME_TYPES.DARK);
  }
};
