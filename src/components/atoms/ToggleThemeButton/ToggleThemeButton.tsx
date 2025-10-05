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

const themeTransformMap = {
  [THEME_TYPES.SYSTEM]: 'translate-x-0',
  [THEME_TYPES.LIGHT]: 'translate-x-[2rem]',
  [THEME_TYPES.DARK]: 'translate-x-[4rem]'
};

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const currentTransform = themeTransformMap[theme];

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-neutral-200 p-1 dark:border-white/20">
      <div
        data-testid="selected-indicator"
        className={twMerge(
          'absolute top-1 left-1 h-7 w-7 rounded-full bg-rose-600',
          'transform transition-transform duration-200 ease-in-out',
          currentTransform
        )}
      />

      {THEME_OPTIONS.map(({ id, icon }) => {
        const isSelected = id === theme;
        return (
          <button
            key={id}
            aria-label={`${id} button`}
            className={twMerge(
              'relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-neutral-600 hover:cursor-pointer',
              cn({ 'text-white': isSelected })
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
