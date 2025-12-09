import type { Meta, StoryObj } from '@storybook/react-vite';

import { I18NWrapper } from '../../../tests/testsUtils';
import Footer from './Footer';

const meta = {
  title: 'Atoms/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = () => {
  return (
    <I18NWrapper>
      <div className="flex h-auto w-full flex-col border border-neutral-400">
        <main className="flex h-auto w-full flex-1 items-center justify-center p-16">
          Content
        </main>
        <Footer />
      </div>
    </I18NWrapper>
  );
};

Default.args = {};
