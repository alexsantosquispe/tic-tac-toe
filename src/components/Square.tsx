import clsx from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CircleIcon } from '../icons/CircleIcon';
import { XIcon } from '../icons/XIcon';
import type { SquareValueTypes } from '../types';

interface SquareProps {
  value: SquareValueTypes;
}

const SQUARE_ICONS: { [key: string]: ReactNode } = {
  X: <XIcon className="size-20 text-rose-600 md:size-28" />,
  O: <CircleIcon className="size-16 text-slate-600 md:size-20" />
};

export const Square = ({ value }: SquareProps) => {
  const icon = value ? SQUARE_ICONS[value] : null;

  return (
    <button
      className={twMerge(
        'flex h-1/3 w-1/3 items-center justify-center border border-dashed border-neutral-200 p-1',
        clsx({ 'hover:cursor-pointer': !value })
      )}
    >
      {icon}
    </button>
  );
};
