import { fireEvent, render, screen } from '@testing-library/react';

import { ResetIcon } from '../../../icons/ResetIcon';
import Button from './Button';

describe('Button', () => {
  const onClickMock = jest.fn();
  const props = {
    title: 'Reset Button',
    ariaLabel: 'Reset Button',
    icon: <ResetIcon />,
    onClick: onClickMock
  };

  it('should render the component correctly', () => {
    const component = render(<Button {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('should call the onClick function when clicked', () => {
    render(<Button {...props} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
