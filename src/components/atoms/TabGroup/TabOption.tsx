import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TabOptionProps<T> {
  id: T;
  label?: string;
  icon?: ReactNode;
  isSelected?: boolean;
  onSelect: (optionId: T) => void;
  isDefault?: boolean;
}

const TabOption = <T,>({
  id,
  label,
  icon,
  isSelected = false,
  onSelect,
  isDefault = true
}: TabOptionProps<T>) => {
  return (
    <button
      aria-label={`${id} button`}
      className={twMerge(
        'relative z-10 flex h-7 w-7 items-center justify-center text-xs text-neutral-600 hover:cursor-pointer dark:text-white',
        cn({
          'text-white dark:text-black': isSelected && isDefault,
          'text-white': isSelected && !isDefault
        })
      )}
      onClick={() => onSelect(id)}
    >
      {icon && icon}
      {label && <pre>{label}</pre>}
    </button>
  );
};

export default TabOption;
