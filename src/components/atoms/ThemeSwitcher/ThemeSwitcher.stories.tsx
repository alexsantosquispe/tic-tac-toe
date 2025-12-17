import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from '@aes/use-theme-hook';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'Atoms/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
import { ThemeProvider } from 'use-theme-hook';
import { ThemeSwitcher } from './ThemeSwitcher';

function Example() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center p-8">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center bg-neutral-100 p-8 dark:bg-neutral-900">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

Default.args = {};
