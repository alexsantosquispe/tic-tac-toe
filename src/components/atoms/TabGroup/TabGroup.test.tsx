import { fireEvent, render, screen } from '@testing-library/react';

import { TabGroup } from './TabGroup';

describe('TabGroup', () => {
  const onSelectOptionMock = jest.fn();
  const props = {
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' }
    ],
    optionIdSelected: '1',
    onSelectOption: onSelectOptionMock
  };

  it('should render the component correctly', () => {
    let component = render(<TabGroup {...props} />);

    expect(component).toMatchSnapshot();

    component = render(<TabGroup {...props} isDefault={false} />);

    expect(component).toMatchSnapshot();
  });

  it('should call onSelectOption when a tab is clicked', () => {
    render(<TabGroup {...props} />);

    const option2 = screen.getByText('Option 2');

    fireEvent.click(option2);

    expect(onSelectOptionMock).toHaveBeenCalledTimes(1);

    expect(onSelectOptionMock).toHaveBeenCalledWith('2');
  });
});
