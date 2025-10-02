import '@testing-library/jest-dom';

import { fireEvent, render, screen, within } from '@testing-library/react';

import type { ComponentProps } from 'react';
import Square from './Square';

describe('Square', () => {
  const onClickItemMock = jest.fn();

  const props: ComponentProps<typeof Square> = {
    index: 0,
    value: '',
    onClickItem: onClickItemMock,
    currentPlayer: 'X',
    highLight: false,
    isDisabled: false
  };

  describe('styles', () => {
    it('should render the square with the correct styles', () => {
      let component = render(<Square {...props} />);
      expect(component).toMatchSnapshot();

      component = render(<Square {...props} value="O" />);
      expect(component).toMatchSnapshot();

      component = render(<Square {...props} value="X" />);
      expect(component).toMatchSnapshot();
    });

    it('should render a placeholder icon on hover when the square is empty', () => {
      render(<Square {...props} />);

      const square = screen.getByRole('button');

      fireEvent.mouseEnter(square);

      expect(square).toHaveClass('hover:bg-neutral-50');

      expect(within(square).getByTestId('x-icon')).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should call onClickItem when the square is clicked', () => {
      render(<Square {...props} />);

      const squareButton = screen.getByRole('button');

      fireEvent.click(squareButton);

      expect(onClickItemMock).toHaveBeenCalledTimes(1);

      expect(onClickItemMock).toHaveBeenCalledWith(props.index);
    });
  });
});
