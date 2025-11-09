import { render } from '@testing-library/react';
import { I18NWrapper } from '../../../tests/testsUtils';
import { MatchesModal } from './MatchesModal';

describe('MatchesModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    isOpen: true,
    onClose: onCloseMock
  };

  it('should render the component correctly', () => {
    const component = render(
      <I18NWrapper>
        <MatchesModal {...props} />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
