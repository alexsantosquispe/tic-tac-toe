import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { I18NWrapper } from '../../../../../tests/testsUtils';
import { SoundSwitcher } from './SoundSwitcher';

describe('SoundSwitcher', () => {
  const setSoundEffectsMock = jest.fn();

  const props = {
    soundEffects: true,
    setSoundEffects: setSoundEffectsMock
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <I18NWrapper>
          <SoundSwitcher {...props} />
        </I18NWrapper>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should call setSoundEffects when clicked', () => {
      render(
        <I18NWrapper>
          <SoundSwitcher {...props} />
        </I18NWrapper>
      );

      const buttonOff = screen.getByRole('button', { name: 'off button' });

      const indicator = screen.getByTestId('selected-indicator');

      expect(indicator).toHaveClass('translate-x-[0rem]');

      fireEvent.click(buttonOff);

      expect(setSoundEffectsMock).toHaveBeenCalledTimes(1);

      expect(setSoundEffectsMock).toHaveBeenCalledWith(false);
    });
  });
});
