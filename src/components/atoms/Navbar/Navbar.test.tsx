import { render } from '@testing-library/react';
import ThemeProvider from '../../../context/ThemeProvider';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render the navbar component correctly', () => {
    const component = render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
