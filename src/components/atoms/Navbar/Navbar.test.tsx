import { render } from '@testing-library/react';
import ThemeProvider from '../../../context/ThemeProvider';
import Navbar from './Navbar';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en'
    }
  })
}));

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
