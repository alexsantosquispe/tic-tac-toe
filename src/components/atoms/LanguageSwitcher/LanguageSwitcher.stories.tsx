import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from 'use-theme-hook';
import { I18NWrapper } from '../../../tests/testsUtils';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <I18NWrapper>
        <div className="flex h-full w-full bg-neutral-800 p-8">
          <LanguageSwitcher />
        </div>
      </I18NWrapper>
    </ThemeProvider>
  );
};

Default.args = {};
