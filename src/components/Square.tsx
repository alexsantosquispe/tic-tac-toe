import clsx from 'clsx';
import { memo, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CircleIcon } from '../icons/CircleIcon';
import { XIcon } from '../icons/XIcon';
import type { SquareValueTypes } from '../types';

interface SquareProps {
  value: SquareValueTypes;
  onClickItem: () => void;
  highLight?: boolean;
  isDisabled?: boolean;
}

const SQUARE_ICONS: Record<'X' | 'O', ReactNode> = {
  X: <XIcon className="size-20 text-rose-600 md:size-28" />,
  O: <CircleIcon className="size-16 text-slate-600 md:size-20" />
};

const Square = ({
  value,
  onClickItem,
  highLight = false,
  isDisabled = false
}: SquareProps) => {
  const icon = value ? SQUARE_ICONS[value] : null;
  const disabled = !!value || isDisabled;

  return (
    <button
      onClick={onClickItem}
      disabled={disabled}
      className={twMerge(
        'flex h-1/3 w-1/3 items-center justify-center border border-dashed border-neutral-200 p-1 transition-colors duration-150',
        clsx({
          'hover:cursor-pointer hover:bg-neutral-50': !disabled,
          'hover:cursor-not-allowed': disabled,
          'bg-rose-50': highLight
        })
      )}
      aria-disabled={disabled}
      aria-label={value || 'Empty'}
      type="button"
    >
      {icon}
    </button>
  );
};

export default memo(Square);
