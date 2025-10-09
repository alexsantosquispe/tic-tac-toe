import cn from 'clsx';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

type CardItem = {
  value: string;
  component: ReactNode;
};

interface CardGroupProps {
  options: CardItem[];
  defaultSelectedOption: string;
  onSelectOption: (value: string) => void;
}

export const CardGroup = ({
  options,
  defaultSelectedOption,
  onSelectOption
}: CardGroupProps) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    onSelectOption(value);
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          aria-label={t(`settings.${option.value}AriaLabel`)}
          onClick={() => handleSelectOption(option.value)}
          className={twMerge(
            'rounded-xl border-2 border-neutral-300 hover:cursor-pointer dark:border-white/20',
            cn({
              'border-rose-600 bg-rose-100 dark:border-rose-600 dark:bg-rose-950/70':
                selectedOption === option.value
            })
          )}
        >
          {option.component}
        </button>
      ))}
    </div>
  );
};
