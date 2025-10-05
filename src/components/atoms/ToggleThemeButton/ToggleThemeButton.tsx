import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { THEME_TYPES } from '../../../context/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';
import { MoonIcon } from '../../../icons/MoonIcon';
import { SunIcon } from '../../../icons/SunIcon';
import { SystemIcon } from '../../../icons/SystemIcon';

const THEME_OPTIONS = [
  { id: THEME_TYPES.SYSTEM, icon: <SystemIcon /> },
  { id: THEME_TYPES.LIGHT, icon: <SunIcon /> },
  { id: THEME_TYPES.DARK, icon: <MoonIcon /> }
];

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 p-1 dark:border-white/20">
      {THEME_OPTIONS.map(({ id, icon }) => {
        const isSelected = id === theme;
        return (
          <button
            key={id}
            aria-label={`${id} button`}
            className={twMerge(
              'flex h-7 w-7 items-center justify-center rounded-full text-neutral-600 hover:cursor-pointer',
              cn({ 'bg-rose-600 text-white': isSelected })
            )}
            onClick={() => setTheme(id)}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};
