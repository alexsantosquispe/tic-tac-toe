import { render } from '@testing-library/react';
import { ThemeProvider } from 'use-theme-hook';
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

//TODO: This is just a workaround in order to pass the tests, it will be fixed when the ThemeProvider is refactored
jest.mock('use-theme-hook', () => ({
  __esModule: true,
  THEME_TYPES: {
    SYSTEM: 'system',
    LIGHT: 'light',
    DARK: 'dark'
  },
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn()
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-theme-provider">{children}</div>
  )
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
