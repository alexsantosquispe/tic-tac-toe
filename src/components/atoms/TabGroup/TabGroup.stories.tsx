import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { TabGroup } from './TabGroup';

const meta = {
  title: 'Atoms/TabGroup',
  component: TabGroup,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
import { useState } from 'react';
import { TabGroup } from './TabGroup';

function Example() {
  const [selected, setSelected] = useState('option1');

  const options = [
    { id: 'option1', label: 'Op1' },
    { id: 'option2', label: 'Op2' },
    { id: 'option3', label: 'Op3' }
  ];

  return (
    <TabGroup
      options={options}
      optionIdSelected={selected}
      onSelectOption={setSelected}
      isDefault={true}
    />
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof TabGroup>;

export default meta;

type Story = StoryObj<typeof TabGroup>;

export const Default: Story = () => {
  const [selected, setSelected] = useState('option1');

  const options = [
    { id: 'option1', label: 'Op1' },
    { id: 'option2', label: 'Op2' },
    { id: 'option3', label: 'Op3' }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 uppercase">
          Default Style
        </span>
        <TabGroup
          options={options}
          optionIdSelected={selected}
          onSelectOption={setSelected}
          isDefault={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 uppercase">Custom Style</span>
        <TabGroup
          options={options}
          optionIdSelected={selected}
          onSelectOption={setSelected}
          isDefault={false}
        />
      </div>
    </div>
  );
};

Default.args = {
  options: [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' }
  ],
  optionIdSelected: 'option1',
  onSelectOption: () => {},
  isDefault: true
};
