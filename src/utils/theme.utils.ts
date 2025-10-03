import { THEME_TYPES, type ThemeType } from '../context/ThemeContext';

const THEME_KEY = 'theme';

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEME_TYPES.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_TYPES.DARK
    : THEME_TYPES.LIGHT;
};

export const getStoredTheme = () => {
  if (typeof window === 'undefined') return THEME_TYPES.LIGHT;

  return window.localStorage.getItem(THEME_KEY);
};

export const setStoredTheme = (theme: ThemeType) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(THEME_KEY, theme);
};

export const applyTheme = (theme: ThemeType) => {
  const root = window?.document.documentElement;
  if (!root) return;

  if (theme === THEME_TYPES.DARK) {
    root.classList.add(THEME_TYPES.DARK);
  } else {
    root.classList.remove(THEME_TYPES.DARK);
  }
};
