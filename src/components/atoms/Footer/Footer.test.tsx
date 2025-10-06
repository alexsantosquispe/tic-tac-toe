import { Footer } from './Footer';
import { I18NWrapper } from '../../../tests/testsUtils';
import { render } from '@testing-library/react';

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
