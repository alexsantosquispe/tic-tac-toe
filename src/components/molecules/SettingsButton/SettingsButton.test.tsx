import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import GameProvider from '../../../context/GameProvider';
import { I18NWrapper } from '../../../tests/testsUtils';
import { SettingsButton } from './SettingsButton';

describe('SettingsButton', () => {
  it('should open the settings modal', async () => {
    render(
      <I18NWrapper>
        <GameProvider>
          <SettingsButton />
        </GameProvider>
      </I18NWrapper>
    );

    const settingsButton = screen.getByRole('button', {
      name: 'Settings button'
    });

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });

    fireEvent.click(settingsButton);

    expect(await screen.findByTestId('modal')).toBeInTheDocument();
  });
});
