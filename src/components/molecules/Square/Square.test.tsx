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

    it('should display highlight styles if the square is a highlight winner combination', () => {
      render(
        <Square {...props} value="X" isDisabled={true} highLight={true} />
      );

      const squareButton = screen.getByRole('button');

      expect(squareButton).toBeDisabled();

      expect(squareButton).toHaveClass('hover:cursor-not-allowed');

      expect(squareButton).toHaveClass('bg-rose-50 dark:bg-rose-800/40');
    });

    it('should display disabled styles if the square is not a highlight winner combination', () => {
      render(
        <Square {...props} value="X" isDisabled={true} highLight={false} />
      );

      const squareButton = screen.getByRole('button');

      expect(squareButton).toBeDisabled();

      expect(squareButton).toHaveClass('hover:cursor-not-allowed');

      expect(squareButton).toHaveClass(
        'opacity-25 brightness-30 dark:opacity-80 dark:brightness-50'
      );
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

    it('should not call onClickItem when the square it was already selected', () => {
      render(<Square {...props} value="X" />);

      const squareButton = screen.getByRole('button');

      expect(squareButton).toBeDisabled();

      fireEvent.click(squareButton);

      expect(onClickItemMock).toHaveBeenCalledTimes(0);

      expect(squareButton).toHaveClass('hover:cursor-not-allowed');
    });
  });
});
