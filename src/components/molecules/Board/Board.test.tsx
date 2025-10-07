import { render } from '@testing-library/react';
import GameProvider from '../../../context/GameProvider';
import { I18NWrapper } from '../../../tests/testsUtils';
import Board from './Board';

describe('Board', () => {
  it('should render the board', () => {
    const component = render(
      <I18NWrapper>
        <GameProvider>
          <Board />
        </GameProvider>
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
