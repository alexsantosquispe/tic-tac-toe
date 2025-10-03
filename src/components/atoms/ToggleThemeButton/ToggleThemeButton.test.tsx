import { render, screen } from '@testing-library/react';

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

  // describe('behavior', () => {
  //   beforeEach(() => {
  //     render(
  //       <ThemeProvider>
  //         <ToggleThemeButton />
  //       </ThemeProvider>
  //     );
  //   });

  //   it('should ', () => {});
  // });
});
