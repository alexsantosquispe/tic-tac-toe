import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render the component correctly', () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
