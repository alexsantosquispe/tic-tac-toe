import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import App from './App';
import GameProvider from './context/GameProvider';
import ThemeProvider from './context/ThemeProvider';

describe('App', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </ThemeProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('styles', () => {
    it('should render the app correctly', () => {
      expect(screen.getByText('X turn')).toBeInTheDocument();

      expect(screen.getByTestId('board')).toBeInTheDocument();

      expect(
        screen.getByRole('button', { name: 'Reset game button' })
      ).toBeInTheDocument();
    });
  });

  describe.skip('behavior', () => {
    it('should change the current player after select a square', () => {
      const squareButtons = screen.getAllByRole('button');

      expect(screen.getByText('X turn')).toBeInTheDocument();

      fireEvent.click(squareButtons[0]);

      expect(screen.getByText('O turn')).toBeInTheDocument();
    });

    it('should reset the game', () => {
      const squareButtons = screen.getAllByRole('button');
      const resetButton = screen.getByRole('button', {
        name: 'Reset game button'
      });

      fireEvent.click(squareButtons[0]);
      fireEvent.click(squareButtons[1]);

      expect(screen.getAllByTestId('x-icon')[0]).toBeInTheDocument();
      expect(screen.getAllByTestId('circle-icon')[0]).toBeInTheDocument();

      fireEvent.click(resetButton);

      waitFor(() => {
        expect(screen.getAllByTestId('x-icon').length).toBe(0);
        expect(screen.getAllByTestId('circle-icon').length).toBe(0);
      });
    });
  });
});
