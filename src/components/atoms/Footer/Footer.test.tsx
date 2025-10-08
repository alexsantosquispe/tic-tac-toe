import { render } from '@testing-library/react';
import { I18NWrapper } from '../../../tests/testsUtils';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render the component correctly', () => {
    const component = render(
      <I18NWrapper>
        <Footer />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
