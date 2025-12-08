import type { Meta, StoryObj } from '@storybook/react-vite';
import { ItemWrapper, StoryContainer } from '../../../utils/StoriesWrapper';
import Button from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code', // ensures the code panel is shown
        code: `
<>
  <Button
    title="Button"
    ariaLabel="button component"
    onClick={() => {}}
  />
  <Button
    title="Button"
    ariaLabel="button component"
    onClick={() => {}}
    isDisabled={true}
  />
</>`.trim()
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = () => {
  return (
    <StoryContainer>
      <ItemWrapper title="DEFAULT">
        <Button
          title="Button"
          ariaLabel="button component"
          onClick={() => {}}
        />
      </ItemWrapper>
      <ItemWrapper title="DISABLED">
        <Button
          title="Button"
          ariaLabel="button component"
          onClick={() => {}}
          isDisabled={true}
        />
      </ItemWrapper>
    </StoryContainer>
  );
};

Default.args = {
  title: 'Button',
  ariaLabel: 'button component',
  onClick: () => {},
  isDisabled: false,
  className: ''
};
