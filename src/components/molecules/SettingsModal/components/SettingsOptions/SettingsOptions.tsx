import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { type OptionType } from '../../../../../models/types';

interface SettingsOptionsProps<T> {
  title: string;
  options: OptionType<T>[];
  initialOptionValue: OptionType<T>['value'];
  onSelectOption: (value: OptionType<T>['value']) => void;
  className?: {
    container?: string;
    option?: string;
  };
}

export const SettingsOptions = <T,>({
  title,
  options,
  initialOptionValue,
  onSelectOption,
  className
}: SettingsOptionsProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T>(initialOptionValue);

  const handleSelectOption = (value: OptionType<T>['value']) => {
    setSelectedOption(value);
    onSelectOption(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-center">{title}</span>

      <div className={twMerge('flex flex-col gap-2', className?.container)}>
        {options.map((option) => (
          <button
            key={option.value as string}
            aria-label={option.value as string} //TODO: Improve aria-label for generic options
            onClick={() => handleSelectOption(option.value)}
            className={twMerge(
              'w-full rounded-xl border-2 border-neutral-300 uppercase hover:cursor-pointer dark:border-white/20',
              cn({
                'border-rose-600 bg-rose-100 dark:border-rose-600 dark:bg-rose-950/70':
                  selectedOption === option.value
              }),
              className?.option
            )}
          >
            {option.component}
          </button>
        ))}
      </div>
    </div>
  );
};
