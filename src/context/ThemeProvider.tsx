import { useEffect, useState, type ReactNode } from 'react';
import { applyTheme, getStoredTheme } from '../utils/theme.utils';
import { THEME_TYPES, ThemeContext, type ThemeType } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    THEME_TYPES.SYSTEM
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (getStoredTheme() === THEME_TYPES.SYSTEM) {
        applyTheme(e.matches ? THEME_TYPES.DARK : THEME_TYPES.LIGHT);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
