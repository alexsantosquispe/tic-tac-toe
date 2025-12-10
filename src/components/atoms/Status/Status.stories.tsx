import type { Meta, StoryObj } from '@storybook/react-vite';

import { I18NWrapper } from '../../../tests/testsUtils';
import Status from './Status';

const meta = {
  title: 'Atoms/Status',
  component: Status,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
import { useState } from 'react';
import Status from './Status';

function Example() {
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <Status
        winner={winner}
        isDraw={isDraw}
        currentPlayer={currentPlayer}
        soundEffects={soundEffects}
      />
      <div className="flex gap-2">
        <button onClick={() => setWinner('X')}>
          Set X as winner
        </button>
        <button onClick={() => setWinner('O')}>
          Set O as winner
        </button>
        <button onClick={() => setIsDraw(true)}>
          Set Draw
        </button>
        <button onClick={() => {
          setWinner(null);
          setIsDraw(false);
        }}>
          Reset
        </button>
      </div>
    </div>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof Status>;

export default meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = () => {
  return (
    <I18NWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-neutral-500 uppercase">TURN</span>
          <Status
            winner={null}
            isDraw={false}
            currentPlayer="X"
            soundEffects={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-neutral-500 uppercase">WINNER</span>
          <Status
            winner="X"
            isDraw={false}
            currentPlayer="X"
            soundEffects={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-neutral-500 uppercase">DRAW</span>
          <Status
            winner={null}
            isDraw={true}
            currentPlayer="X"
            soundEffects={true}
          />
        </div>
      </div>
    </I18NWrapper>
  );
};

Default.args = {
  winner: null,
  isDraw: false,
  currentPlayer: 'X',
  soundEffects: true
};
