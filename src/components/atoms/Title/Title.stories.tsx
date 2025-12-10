import type { Meta, StoryObj } from '@storybook/react-vite';

import { Title } from './Title';

const meta = {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
import { Title } from './Title';

function Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <Title />
    </div>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-100 p-8 dark:bg-neutral-900">
      <Title />
    </div>
  );
};

Default.args = {};
