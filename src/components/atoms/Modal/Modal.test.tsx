import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { Modal } from './Modal';

describe('Modal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    title: 'Modal Title',
    children: <div className="flex p-8">Modal Content</div>,
    onClose: onCloseMock
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <I18NWrapper>
          <Modal {...props} />
        </I18NWrapper>
      );

      expect(component).toMatchSnapshot();

      expect(screen.getByText(props.title)).toBeInTheDocument();

      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <I18NWrapper>
          <Modal {...props} />
        </I18NWrapper>
      );
    });

    it('should call the onClose function when the close button is clicked', () => {
      const closeButton = screen.getByRole('button');

      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should call the onClose function when Escape key is pressed', () => {
      fireEvent.keyDown(document, { key: 'Escape' });

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
