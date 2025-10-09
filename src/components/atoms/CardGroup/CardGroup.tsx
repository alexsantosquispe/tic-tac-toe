import cn from 'clsx';
import { useState, type ReactNode } from 'react';
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
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    onSelectOption(value);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleSelectOption(option.value)}
          className={twMerge(
            'rounded-xl border-2 border-neutral-300 p-2 hover:cursor-pointer',
            cn({
              'border-rose-600 bg-rose-100': selectedOption === option.value
            })
          )}
        >
          {option.component}
        </button>
      ))}
    </div>
  );
};
