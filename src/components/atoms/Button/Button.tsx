import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  title?: string;
  ariaLabel: string;
  onClick: () => void;
  icon?: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const Button = ({
  title,
  ariaLabel,
  onClick,
  icon,
  isDisabled = false,
  className
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2 text-2xl text-white uppercase shadow-md hover:cursor-pointer hover:bg-rose-500',
        cn({
          'bg-neutral-200 shadow-none hover:cursor-not-allowed hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-600 dark:hover:bg-neutral-800':
            isDisabled
        }),
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={isDisabled}
      type="button"
    >
      {!!icon && icon}
      {!!title && title}
    </button>
  );
};

export default Button;
