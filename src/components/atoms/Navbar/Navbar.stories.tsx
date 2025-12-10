import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from 'use-theme-hook';
import { I18NWrapper } from '../../../tests/testsUtils';
import Navbar from './Navbar';

const meta = {
  title: 'Atoms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
        code: `
import Navbar from './Navbar';

function Example() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center pt-14">
        Content goes here
      </main>
    </div>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <I18NWrapper>
        <div className="flex h-screen w-full flex-col">
          <Navbar />
          <main className="flex flex-1 items-center justify-center pt-14">
            <p className="text-neutral-700 dark:text-neutral-300">
              Content goes here
            </p>
          </main>
        </div>
      </I18NWrapper>
    </ThemeProvider>
  );
};

Default.args = {};
