import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type OptionType<T> = {
  id: T;
  label?: string;
  icon?: ReactNode;
};

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

interface TabGroupProps<T> {
  options: OptionType<T>[];
  optionIdSelected: T;
  onSelectOption: (optionId: T) => void;
  isDefault?: boolean;
}

export const TabGroup = <T extends string | number | symbol>({
  options,
  optionIdSelected,
  onSelectOption,
  isDefault = true
}: TabGroupProps<T>) => {
  const transformMap: Record<T, string> = options.reduce(
    (acc, option, index) => {
      acc[option.id] = `translate-x-[${index * 2}rem]`;
      return acc;
    },
    {} as Record<T, string>
  );
  const currentTransform = transformMap[optionIdSelected];

  return (
    <div className="relative flex items-center gap-1 rounded-lg border border-neutral-200 p-1 dark:border-white/20">
      <div
        data-testid="selected-indicator"
        className={twMerge(
          'absolute top-1 left-1 h-7 w-7 rounded-md shadow',
          'transform transition-transform duration-200 ease-in-out',
          currentTransform,
          cn({
            'bg-rose-600 dark:bg-rose-500': !isDefault,
            'bg-black dark:bg-white': isDefault
          })
        )}
      />

      {options.map(({ id, label, icon }) => {
        const isSelected = id === optionIdSelected;
        return (
          <TabOption
            key={id as string}
            id={id}
            label={label}
            icon={icon}
            isSelected={isSelected}
            onSelect={onSelectOption}
            isDefault={isDefault}
          />
        );
      })}
    </div>
  );
};
