import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import {
  PLAYER_MODE,
  type CurrentPlayerType,
  type PlayerModeTypes,
  type SquareValueTypes
} from '../../../models/types';

import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CircleIcon } from '../../../icons/CircleIcon';
import { XIcon } from '../../../icons/XIcon';
import { PLAYER_O } from '../../../utils/constants';

const ICONS = {
  X: {
    component: XIcon,
    className: 'size-28 md:size-36'
  },
  O: {
    component: CircleIcon,
    className: 'size-20 md:size-28'
  }
} as const;

const COLORS = {
  X: 'text-rose-600 dark:text-rose-500',
  O: 'text-neutral-600 dark:text-neutral-200',
  hover: 'text-neutral-200/60 dark:text-white/20'
} as const;

const renderIcon = (player: CurrentPlayerType, color: string) => {
  const { component: Icon, className } = ICONS[player];
  return <Icon className={twMerge(className, color)} />;
};

interface SquareProps {
  index: number;
  value: SquareValueTypes;
  onClickItem: (index: number) => void;
  currentPlayer: CurrentPlayerType;
  playerMode: PlayerModeTypes;
  isHighLight?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const Square = ({
  index,
  value,
  onClickItem,
  currentPlayer,
  playerMode,
  isHighLight = false,
  isDisabled = false,
  className
}: SquareProps) => {
  const disabled =
    !!value ||
    isDisabled ||
    (playerMode === PLAYER_MODE.SINGLE_PLAYER && currentPlayer === PLAYER_O);
  const icon = value !== '' ? renderIcon(value, COLORS[value]) : null;
  const hoverIcon =
    !icon && !disabled ? renderIcon(currentPlayer, COLORS.hover) : null;

  const handleClick = useCallback(() => {
    onClickItem(index);
  }, [index, onClickItem]);

  return (
    <button
      data-testid={`square-${index}`}
      onClick={handleClick}
      disabled={disabled}
      className={twMerge(
        'group relative flex h-1/3 w-1/3 items-center justify-center border border-dashed border-neutral-200 p-1 transition-colors duration-150 dark:border-white/35',
        cn({
          'hover:cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/10':
            !disabled,
          'hover:cursor-not-allowed': disabled,
          'bg-rose-50 dark:bg-rose-800/40': isHighLight,
          'opacity-25 brightness-30 dark:opacity-80 dark:brightness-50':
            !isHighLight && isDisabled
        }),
        className
      )}
      aria-label={value || 'Empty'}
      type="button"
    >
      <AnimatePresence>
        {icon && (
          <motion.span
            key={value}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {icon}
          </motion.span>
        )}
      </AnimatePresence>

      {hoverIcon && (
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          {hoverIcon}
        </span>
      )}
    </button>
  );
};

export default memo(Square);
