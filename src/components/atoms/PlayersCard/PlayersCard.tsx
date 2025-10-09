import { memo, type ReactNode } from 'react';
import { BotIcon } from '../../../icons/BotIcon';

interface PlayersCardProps {
  isSinglePlayer?: boolean;
  playerIcon: ReactNode;
}

const PlayersCard = ({ isSinglePlayer, playerIcon }: PlayersCardProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-8 px-8 py-6">
      {playerIcon}
      <span className="text-xl font-medium">VS</span>
      {isSinglePlayer ? <BotIcon className="size-12" /> : playerIcon}
    </div>
  );
};

export default memo(PlayersCard);
