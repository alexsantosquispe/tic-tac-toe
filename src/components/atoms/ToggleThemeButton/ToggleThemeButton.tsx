import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { THEME_TYPES, type ThemeType } from '../../../context/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';
import { MoonIcon } from '../../../icons/MoonIcon';
import { SunIcon } from '../../../icons/SunIcon';
import { SystemIcon } from '../../../icons/SystemIcon';

const THEME_OPTIONS = [
  { id: THEME_TYPES.SYSTEM, icon: <SystemIcon /> },
  { id: THEME_TYPES.LIGHT, icon: <SunIcon /> },
  { id: THEME_TYPES.DARK, icon: <MoonIcon /> }
];

interface ThemeOptionProps {
  id: ThemeType;
  icon: ReactNode;
  isSelected: boolean;
  onSelectOption: (theme: ThemeType) => void;
}

export const ThemeOption = ({
  id,
  icon,
  isSelected = false,
  onSelectOption
}: ThemeOptionProps) => {
  return (
    <button
      aria-label={`${id} button`}
      className={twMerge(
        'rounded-full border-neutral-200 p-0.5 text-neutral-600 hover:cursor-pointer dark:border-white/20',
        cn({ 'border bg-rose-600 text-white': isSelected })
      )}
      onClick={() => onSelectOption(id)}
    >
      {icon}
    </button>
  );
};

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 p-1 dark:border-white/20">
      {THEME_OPTIONS.map((option) => {
        const isSelected = option.id === theme;
        return (
          <ThemeOption
            key={option.id}
            {...option}
            isSelected={isSelected}
            onSelectOption={setTheme}
          />
        );
      })}
    </div>
  );
};
