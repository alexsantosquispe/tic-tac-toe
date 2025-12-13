import type { Meta, StoryObj } from '@storybook/react-vite';
import { PLAYER_MODE } from '../../../models/types';
import { ItemWrapper, StoryContainer } from '../../../utils/StoriesWrapper';
import Square from './Square';

const meta = {
  title: 'Molecules/Square',
  component: Square,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'code',
        code: `
<>
  <Square
    index={0}
    value="X"
    currentPlayer="O"
    playerMode={PLAYER_MODE.TWO_PLAYERS}
    onClickItem={() => {}}
  />
  <Square
    index={1}
    value="O"
    currentPlayer="X"
    playerMode={PLAYER_MODE.TWO_PLAYERS}
    onClickItem={() => {}}
  />
</>`.trim()
      }
    }
  }
} satisfies Meta<typeof Square>;

export default meta;

type Story = StoryObj<typeof Square>;

export const Default: Story = () => {
  return (
    <StoryContainer>
      <ItemWrapper title="EMPTY">
        <Square
          index={0}
          value=""
          currentPlayer="O"
          playerMode={PLAYER_MODE.TWO_PLAYERS}
          onClickItem={() => {}}
          className="h-40 w-40"
        />
      </ItemWrapper>
      <ItemWrapper title="X">
        <Square
          index={1}
          value="X"
          currentPlayer="O"
          playerMode={PLAYER_MODE.TWO_PLAYERS}
          onClickItem={() => {}}
          className="h-40 w-40"
        />
      </ItemWrapper>
      <ItemWrapper title="O">
        <Square
          index={2}
          value="O"
          currentPlayer="X"
          playerMode={PLAYER_MODE.TWO_PLAYERS}
          onClickItem={() => {}}
          className="h-40 w-40"
        />
      </ItemWrapper>
    </StoryContainer>
  );
};

Default.args = {
  index: 0,
  value: 'X',
  currentPlayer: 'O',
  playerMode: PLAYER_MODE.TWO_PLAYERS,
  onClickItem: () => {},
  isHighLight: false,
  isDisabled: false
};
