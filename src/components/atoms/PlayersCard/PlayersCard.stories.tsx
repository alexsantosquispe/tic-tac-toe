import type { Meta, StoryObj } from '@storybook/react-vite';

import PlayersCard from './PlayersCard';

const meta = {
  title: 'Atoms/PlayersCard',
  component: PlayersCard,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
import { useState } from 'react';
import PlayersCard from './PlayersCard';

function Example() {
  const [isSinglePlayer, setIsSinglePlayer] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <PlayersCard isSinglePlayer={isSinglePlayer} />
      <button onClick={() => setIsSinglePlayer(!isSinglePlayer)}>
        Toggle Player Mode
      </button>
    </div>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof PlayersCard>;

export default meta;

type Story = StoryObj<typeof PlayersCard>;

export const Default: Story = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 uppercase">
          Single Player
        </span>
        <PlayersCard isSinglePlayer={true} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 uppercase">Two Players</span>
        <PlayersCard isSinglePlayer={false} />
      </div>
    </div>
  );
};

Default.args = {
  isSinglePlayer: true
};
