import '@testing-library/jest-dom';

import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react';

import App from './App';
import GameProvider from './context/GameProvider';
import ThemeProvider from './context/ThemeProvider';
import { I18NWrapper } from './tests/testsUtils';

describe('App', () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(
        <I18NWrapper>
          <ThemeProvider>
            <GameProvider>
              <App />
            </GameProvider>
          </ThemeProvider>
        </I18NWrapper>
      );
    });
  });

  describe('styles', () => {
    it('should render the app correctly', async () => {
      await waitFor(() => {
        expect(screen.getByText('X turn')).toBeInTheDocument();
        expect(screen.getByTestId('board')).toBeInTheDocument();
        expect(
          screen.getByRole('button', { name: 'Reset game button' })
        ).toBeInTheDocument();
      });
    });
  });

  describe('behavior', () => {
    it('should change the current player after select a square', () => {
      const board = screen.getByTestId('board');

      const squareButtons = within(board).getAllByRole('button');

      expect(screen.getByText('X turn')).toBeInTheDocument();

      fireEvent.click(squareButtons[0]);

      expect(screen.getByText('O turn')).toBeInTheDocument();
    });

    it('should show the winner', () => {
      const board = screen.getByTestId('board');
      const squareButtons = within(board).getAllByRole('button');

      fireEvent.click(squareButtons[0]); //X
      fireEvent.click(squareButtons[3]); //O
      fireEvent.click(squareButtons[1]); //X
      fireEvent.click(squareButtons[4]); //O
      fireEvent.click(squareButtons[2]); //X

      expect(screen.getByText('X wins!')).toBeInTheDocument();
    });

    it('should check draw', () => {
      const board = screen.getByTestId('board');
      const squareButtons = within(board).getAllByRole('button');

      fireEvent.click(squareButtons[0]); //X
      fireEvent.click(squareButtons[1]); //O
      fireEvent.click(squareButtons[2]); //X
      fireEvent.click(squareButtons[3]); //O
      fireEvent.click(squareButtons[4]); //X
      fireEvent.click(squareButtons[6]); //0
      fireEvent.click(squareButtons[5]); //X
      fireEvent.click(squareButtons[8]); //O
      fireEvent.click(squareButtons[7]); //X

      expect(screen.getByText('Draw!')).toBeInTheDocument();
    });

    it('should reset the game', () => {
      const board = screen.getByTestId('board');
      const squareButtons = within(board).getAllByRole('button');

      const resetButton = screen.getByRole('button', {
        name: 'Reset game button'
      });

      fireEvent.click(squareButtons[0]);
      fireEvent.click(squareButtons[1]);

      expect(within(board).getAllByTestId('x-icon')[0]).toBeInTheDocument();
      expect(
        within(board).getAllByTestId('circle-icon')[0]
      ).toBeInTheDocument();

      fireEvent.click(resetButton);

      waitFor(() => {
        expect(within(board).getAllByTestId('x-icon').length).toBe(0);
        expect(within(board).getAllByTestId('circle-icon').length).toBe(0);
      });
    });

    it('should open and close de settings modal', () => {
      const settingsButton = screen.getByRole('button', {
        name: 'Settings button'
      });

      expect(settingsButton).toBeInTheDocument();

      fireEvent.click(settingsButton);

      const settingsModal = screen.getByTestId('modal');

      expect(settingsModal).toBeInTheDocument();

      const closeSettingsButton = screen.getByRole('button', {
        name: 'Close modal button'
      });

      fireEvent.click(closeSettingsButton);

      waitFor(() => {
        expect(settingsModal).not.toBeInTheDocument();
      });
    });
  });
});
