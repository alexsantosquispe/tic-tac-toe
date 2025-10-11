import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import SettingsModal from './SettingsModal';

describe('SettingsModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    onClose: onCloseMock
  };

  it('should render the component correctly', () => {
    const component = render(
      <I18NWrapper>
        <SettingsModal {...props} />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });

  it('should call onClose when the close button is clicked', () => {
    render(<SettingsModal {...props} />);

    const closeButton = screen.getByRole('button', {
      name: 'Close modal button'
    });

    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
