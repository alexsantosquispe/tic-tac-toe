import { render } from '@testing-library/react';
import GameProvider from '../../../context/GameProvider';
import Board from './Board';

describe('Board', () => {
  it('should render the board', () => {
    const component = render(
      <GameProvider>
        <Board />
      </GameProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
