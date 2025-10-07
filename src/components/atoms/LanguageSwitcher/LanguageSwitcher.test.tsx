import { render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { LanguageSwitcher } from './LanguageSwitcher';

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
    });
  });
});
