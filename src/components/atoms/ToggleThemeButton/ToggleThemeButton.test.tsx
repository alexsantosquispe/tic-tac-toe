import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { THEME_TYPES } from '../../../context/ThemeContext';
import ThemeProvider from '../../../context/ThemeProvider';
import { ToggleThemeButton } from './ToggleThemeButton';

describe('ToggleThemButton', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <ThemeProvider>
          <ToggleThemeButton />
        </ThemeProvider>
      );

      expect(component).toMatchSnapshot();

      expect(
        screen.getByRole('button', { name: `${THEME_TYPES.SYSTEM} button` })
      );
      expect(
        screen.getByRole('button', { name: `${THEME_TYPES.DARK} button` })
      );
      expect(
        screen.getByRole('button', { name: `${THEME_TYPES.LIGHT} button` })
      );
    });
  });

  describe.only('behavior', () => {
    beforeEach(() => {
      render(
        <ThemeProvider>
          <ToggleThemeButton />
        </ThemeProvider>
      );
    });

    it('should change the theme', () => {
      const selectedButtonStyles = 'text-white';
      const systemButton = screen.getByRole('button', {
        name: `${THEME_TYPES.SYSTEM} button`
      });
      const lightButton = screen.getByRole('button', {
        name: `${THEME_TYPES.LIGHT} button`
      });
      const darkButton = screen.getByRole('button', {
        name: `${THEME_TYPES.DARK} button`
      });
      const indicator = screen.getByTestId('selected-indicator');

      expect(systemButton).toHaveClass(selectedButtonStyles);
      expect(lightButton).not.toHaveClass(selectedButtonStyles);
      expect(darkButton).not.toHaveClass(selectedButtonStyles);
      expect(indicator).toHaveClass('translate-x-0');

      fireEvent.click(lightButton);
      expect(systemButton).not.toHaveClass(selectedButtonStyles);
      expect(lightButton).toHaveClass(selectedButtonStyles);
      expect(darkButton).not.toHaveClass(selectedButtonStyles);
      expect(indicator).toHaveClass('translate-x-[2rem]');

      fireEvent.click(darkButton);
      expect(systemButton).not.toHaveClass(selectedButtonStyles);
      expect(lightButton).not.toHaveClass(selectedButtonStyles);
      expect(darkButton).toHaveClass(selectedButtonStyles);
      expect(indicator).toHaveClass('translate-x-[4rem]');
    });
  });
});
