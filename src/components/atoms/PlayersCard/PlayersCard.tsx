import { memo } from 'react';
import { BotIcon } from '../../../icons/BotIcon';
import { PersonIcon } from '../../../icons/PersonIcon';

interface PlayersCardProps {
  isSinglePlayer?: boolean;
}

const PlayersCard = ({ isSinglePlayer = true }: PlayersCardProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-8 px-8 py-6">
      <PersonIcon className="size-12" />

      <span className="text-xl font-medium">VS</span>

      {isSinglePlayer ? (
        <BotIcon className="size-12" />
      ) : (
        <PersonIcon className="size-12" />
      )}
    </div>
  );
};

export default memo(PlayersCard);
