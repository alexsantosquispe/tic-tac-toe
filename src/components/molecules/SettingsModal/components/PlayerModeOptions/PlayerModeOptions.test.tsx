import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { PLAYER_MODE } from '../../../../../models/types';
import { I18NWrapper } from '../../../../../tests/testsUtils';
import PlayersCard from '../../../../atoms/PlayersCard/PlayersCard';
import { PlayerModeOptions } from './PlayerModeOptions';

describe('PlayerModeOptions', () => {
  const onSelectOptionMock = jest.fn();
  const props = {
    options: [
      { value: PLAYER_MODE.SINGLE_PLAYER, component: <PlayersCard /> },
      {
        value: PLAYER_MODE.TWO_PLAYERS,
        component: <PlayersCard isSinglePlayer={false} />
      }
    ],
    initialOptionValue: PLAYER_MODE.SINGLE_PLAYER,
    onSelectOption: onSelectOptionMock
  };

  it('should render the component correctly', () => {
    const component = render(
      <I18NWrapper>
        <PlayerModeOptions {...props} />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();

    const cardOptions = screen.getAllByRole('button');

    expect(cardOptions).toHaveLength(2);

    expect(cardOptions[0]).toHaveClass(
      'border-rose-600 bg-rose-100 dark:border-rose-600 dark:bg-rose-950/70'
    );
  });

  it('should check the onSelectOption function was executed', () => {
    render(
      <I18NWrapper>
        <PlayerModeOptions {...props} />
      </I18NWrapper>
    );

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[1]);

    expect(onSelectOptionMock).toHaveBeenCalledTimes(1);

    expect(onSelectOptionMock).toHaveBeenCalledWith(PLAYER_MODE.TWO_PLAYERS);
  });
});
