import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import GameProvider from '../../../context/GameProvider';
import { I18NWrapper } from '../../../tests/testsUtils';
import SettingsModal from './SettingsModal';

describe('SettingsModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    onClose: onCloseMock
  };

  it('should render the component correctly', () => {
    const component = render(
      <I18NWrapper>
        <GameProvider>
          <SettingsModal {...props} />
        </GameProvider>
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <GameProvider>
          <SettingsModal {...props} />
        </GameProvider>
      );
    });
    it('should call onClose when the close button is clicked', () => {
      const closeButton = screen.getByRole('button', {
        name: 'Close modal button'
      });

      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should check the player mode singlePlayer and select twoPlayers', () => {
      const singlePlayerButton = screen.getByRole('button', {
        name: 'Single player button'
      });

      const twoPlayersButton = screen.getByRole('button', {
        name: 'Two players button'
      });

      expect(singlePlayerButton).toBeInTheDocument();

      expect(twoPlayersButton).toBeInTheDocument();

      expect(singlePlayerButton).toHaveClass(
        'border-rose-600 bg-rose-100 dark:border-rose-600 dark:bg-rose-950/70'
      );

      fireEvent.click(twoPlayersButton);

      expect(twoPlayersButton).toHaveClass(
        'border-rose-600 bg-rose-100 dark:border-rose-600 dark:bg-rose-950/70'
      );
    });
  });
});
