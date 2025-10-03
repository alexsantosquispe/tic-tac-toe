import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CircleIcon } from '../../../icons/CircleIcon';
import { XIcon } from '../../../icons/XIcon';
import type { SquareValueTypes } from '../../../types';

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
  X: 'text-rose-600',
  O: 'text-neutral-600 dark:text-neutral-400',
  hover: 'text-neutral-200/60 dark:text-white/20'
} as const;

const renderIcon = (player: 'X' | 'O', color: string) => {
  const { component: Icon, className } = ICONS[player];
  return <Icon className={twMerge(className, color)} />;
};

interface SquareProps {
  index: number;
  value: SquareValueTypes;
  onClickItem: (index: number) => void;
  currentPlayer: 'X' | 'O';
  highLight?: boolean;
  isDisabled?: boolean;
}

const Square = ({
  index,
  value,
  onClickItem,
  currentPlayer,
  highLight = false,
  isDisabled = false
}: SquareProps) => {
  const disabled = !!value || isDisabled;
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
        'group relative flex h-1/3 w-1/3 items-center justify-center border border-dashed border-neutral-200 p-1 transition-colors duration-150 dark:border-white/20',
        clsx({
          'hover:cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/10':
            !disabled,
          'hover:cursor-not-allowed': disabled,
          'bg-rose-50 dark:bg-rose-900/30': highLight
        })
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
