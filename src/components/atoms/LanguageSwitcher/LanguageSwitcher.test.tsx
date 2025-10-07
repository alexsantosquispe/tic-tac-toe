import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { LanguageSwitcher } from './LanguageSwitcher';

const changeLanguageMock = jest.fn();
let mockLanguage = 'en';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: mockLanguage,
      changeLanguage: changeLanguageMock
    }
  })
}));

describe('LanguageSwitcher', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <I18NWrapper>
          <LanguageSwitcher />
        </I18NWrapper>
      );

      expect(component).toMatchSnapshot();
      expect(screen.getByRole('button', { name: 'en button' }));
      expect(screen.getByRole('button', { name: 'es button' }));
      expect(screen.getByTestId('selected-indicator')).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should call the changeLanguage function to change from `en` to `es`', () => {
      mockLanguage = 'en';

      render(
        <I18NWrapper>
          <LanguageSwitcher />
        </I18NWrapper>
      );

      const buttonES = screen.getByRole('button', { name: 'es button' });
      const indicator = screen.getByTestId('selected-indicator');

      expect(indicator).toHaveClass('translate-x-[0rem]');

      fireEvent.click(buttonES);
      expect(changeLanguageMock).toHaveBeenCalledTimes(1);
      expect(changeLanguageMock).toHaveBeenCalledWith('es');
    });

    it('should call the changeLanguage function to change from `es` to `en`', () => {
      mockLanguage = 'es';

      render(
        <I18NWrapper>
          <LanguageSwitcher />
        </I18NWrapper>
      );

      const buttonEN = screen.getByRole('button', { name: 'en button' });
      const indicator = screen.getByTestId('selected-indicator');

      expect(indicator).toHaveClass('translate-x-[2rem]');

      fireEvent.click(buttonEN);
      expect(changeLanguageMock).toHaveBeenCalledTimes(1);
      expect(changeLanguageMock).toHaveBeenCalledWith('en');
    });
  });
});
