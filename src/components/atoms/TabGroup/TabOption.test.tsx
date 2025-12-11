import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import TabOption from './TabOption';

describe('TabOption', () => {
  const onSelectMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render the component correctly with default props', () => {
      const component = render(
        <TabOption id="test-id" onSelect={onSelectMock} />
      );

      expect(component).toMatchSnapshot();
    });

    it('should render with label', () => {
      render(
        <TabOption id="test-id" label="Test Label" onSelect={onSelectMock} />
      );

      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('should render with icon', () => {
      const icon = <span data-testid="test-icon">Icon</span>;
      render(<TabOption id="test-id" icon={icon} onSelect={onSelectMock} />);

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should render with both label and icon', () => {
      const icon = <span data-testid="test-icon">Icon</span>;
      render(
        <TabOption
          id="test-id"
          label="Test Label"
          icon={icon}
          onSelect={onSelectMock}
        />
      );

      expect(screen.getByText('Test Label')).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should render with correct aria-label', () => {
      render(<TabOption id="test-id" onSelect={onSelectMock} />);

      const button = screen.getByRole('button', { name: 'test-id button' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('selected state styling', () => {
    it('should apply selected styles when isSelected is true and isDefault is true', () => {
      render(
        <TabOption
          id="test-id"
          isSelected={true}
          isDefault={true}
          onSelect={onSelectMock}
        />
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-white dark:text-black');
    });

    it('should apply selected styles when isSelected is true and isDefault is false', () => {
      render(
        <TabOption
          id="test-id"
          isSelected={true}
          isDefault={false}
          onSelect={onSelectMock}
        />
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-white');
      expect(button).not.toHaveClass('dark:text-black');
    });

    it('should not apply selected styles when isSelected is false', () => {
      render(
        <TabOption
          id="test-id"
          isSelected={false}
          isDefault={true}
          onSelect={onSelectMock}
        />
      );

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('text-white');
      expect(button).not.toHaveClass('dark:text-black');
    });
  });

  describe('behavior', () => {
    it('should call onSelect when clicked and not selected', () => {
      render(
        <TabOption id="test-id" isSelected={false} onSelect={onSelectMock} />
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(onSelectMock).toHaveBeenCalledTimes(1);
      expect(onSelectMock).toHaveBeenCalledWith('test-id');
    });

    it('should not call onSelect when clicked and already selected', () => {
      render(
        <TabOption id="test-id" isSelected={true} onSelect={onSelectMock} />
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(onSelectMock).not.toHaveBeenCalled();
    });

    it('should call onSelect with correct id when multiple options exist', () => {
      const onSelect1 = jest.fn();
      const onSelect2 = jest.fn();

      render(
        <>
          <TabOption id="option-1" isSelected={false} onSelect={onSelect1} />
          <TabOption id="option-2" isSelected={false} onSelect={onSelect2} />
        </>
      );

      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[0]);

      expect(onSelect1).toHaveBeenCalledTimes(1);
      expect(onSelect1).toHaveBeenCalledWith('option-1');
      expect(onSelect2).not.toHaveBeenCalled();
    });
  });
});
