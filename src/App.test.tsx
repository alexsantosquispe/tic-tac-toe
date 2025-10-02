import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import App from './App';
import GameProvider from './context/GameProvider';

describe('App', () => {
  describe('styles', () => {
    it('should render the app correctly', () => {
      render(
        <GameProvider>
          <App />
        </GameProvider>
      );

      expect(screen.getByText('X turn')).toBeInTheDocument();

      expect(screen.getByTestId('board')).toBeInTheDocument();

      expect(
        screen.getByRole('button', { name: 'Reset game button' })
      ).toBeInTheDocument();
    });
  });
});
