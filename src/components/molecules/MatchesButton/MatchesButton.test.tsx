import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { MatchesButton } from './MatchesButton';

describe('MatchesButton', () => {
  it('should open the matches modal', async () => {
    render(
      <I18NWrapper>
        <MatchesButton />
      </I18NWrapper>
    );

    const matchesButton = screen.getByRole('button', {
      name: 'Matches button'
    });

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });

    fireEvent.click(matchesButton);

    expect(await screen.findByTestId('modal')).toBeInTheDocument();
  });
});
