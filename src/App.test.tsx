import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';
import GameProvider from './context/GameProvider';

describe('App', () => {
  beforeEach(() => {
    render(
      <GameProvider>
        <App />
      </GameProvider>
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

  describe('behavior', () => {
    it('should change the current player after select a square', () => {
      const squareButtons = screen.getAllByRole('button');

      expect(screen.getByText('X turn')).toBeInTheDocument();

      fireEvent.click(squareButtons[0]);

      expect(screen.getByText('O turn')).toBeInTheDocument();
    });
  });
});
