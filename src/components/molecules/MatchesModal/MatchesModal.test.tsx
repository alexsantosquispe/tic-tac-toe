import { fireEvent, render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { MatchesModal } from './MatchesModal';

describe('MatchesModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    onClose: onCloseMock
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <I18NWrapper>
          <MatchesModal {...props} />
        </I18NWrapper>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should call onClose when the close button is clicked', () => {
      render(
        <I18NWrapper>
          <MatchesModal {...props} />
        </I18NWrapper>
      );

      const closeButton = screen.getByRole('button', {
        name: 'Close modal button'
      });

      fireEvent.click(closeButton);

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
