import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Status from './Status';

const playWinMock = jest.fn();

jest.mock('../../../hooks/useSounds', () => ({
  useSounds: () => ({
    playClick: jest.fn(),
    playWin: playWinMock
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { player?: string }) => {
      if (key === 'turn' && options?.player) {
        return `${options.player} turn`;
      }
      if (key === 'win' && options?.player) {
        return `${options.player} wins! 🎉`;
      }
      if (key === 'draw') {
        return 'Draw! 🤝';
      }
      return key;
    }
  })
}));

describe('Status', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render the component correctly for turn', () => {
      const component = render(
        <Status
          winner={null}
          isDraw={false}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(component).toMatchSnapshot();
      expect(screen.getByText('X turn')).toBeInTheDocument();
    });

    it('should render the component correctly for winner', () => {
      const component = render(
        <Status
          winner="X"
          isDraw={false}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(component).toMatchSnapshot();
      expect(screen.getByText('X wins! 🎉')).toBeInTheDocument();
    });

    it('should render the component correctly for draw', () => {
      const component = render(
        <Status
          winner={null}
          isDraw={true}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(component).toMatchSnapshot();
      expect(screen.getByText('Draw! 🤝')).toBeInTheDocument();
    });

    it('should render turn message when currentPlayer is O', () => {
      render(
        <Status
          winner={null}
          isDraw={false}
          currentPlayer="O"
          soundEffects={true}
        />
      );

      expect(screen.getByText('O turn')).toBeInTheDocument();
    });
  });

  describe('sound effects', () => {
    it('should play win sound when winner exists and soundEffects is true', () => {
      render(
        <Status
          winner="X"
          isDraw={false}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(playWinMock).toHaveBeenCalledTimes(1);
    });

    it('should not play win sound when winner exists but soundEffects is false', () => {
      render(
        <Status
          winner="X"
          isDraw={false}
          currentPlayer="X"
          soundEffects={false}
        />
      );

      expect(playWinMock).not.toHaveBeenCalled();
    });

    it('should not play win sound when there is no winner', () => {
      render(
        <Status
          winner={null}
          isDraw={false}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(playWinMock).not.toHaveBeenCalled();
    });

    it('should not play win sound when it is a draw', () => {
      render(
        <Status
          winner={null}
          isDraw={true}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      expect(playWinMock).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('should have aria-live="polite" attribute', () => {
      render(
        <Status
          winner={null}
          isDraw={false}
          currentPlayer="X"
          soundEffects={true}
        />
      );

      const statusElement = screen.getByText('X turn');
      expect(statusElement).toHaveAttribute('aria-live', 'polite');
    });
  });
});
