import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render the navbar component correctly', () => {
    const component = render(<Navbar />);

    expect(component).toMatchSnapshot();
  });
});
