import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { I18NWrapper } from '../../../tests/testsUtils';
import { Modal } from './Modal';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
import { useState } from 'react';
import { Modal } from './Modal';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        title="Modal Title"
        onClose={() => setIsOpen(false)}
      >
        <div className="p-4">
          Modal content goes here
        </div>
      </Modal>
    </>
  );
}`.trim()
      }
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <I18NWrapper>
      <div className="flex w-full items-center justify-center bg-neutral-100 p-8 dark:bg-neutral-900">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Open Modal
        </button>
        <Modal
          isOpen={isOpen}
          title="Modal Title"
          onClose={() => setIsOpen(false)}
        >
          <div className="p-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              This is the modal content. You can add any content here.
            </p>
          </div>
        </Modal>
      </div>
    </I18NWrapper>
  );
};

Default.args = {
  isOpen: true,
  title: 'Modal Title',
  onClose: () => {}
};
