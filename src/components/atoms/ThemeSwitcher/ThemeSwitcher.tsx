import { useTheme } from 'use-theme-hook';
import { THEME_TYPES } from '../../../context/ThemeContext';
import { MoonIcon } from '../../../icons/MoonIcon';
import { SunIcon } from '../../../icons/SunIcon';
import { SystemIcon } from '../../../icons/SystemIcon';
import { TabGroup } from '../TabGroup/TabGroup';

const THEME_OPTIONS = [
  { id: THEME_TYPES.SYSTEM, icon: <SystemIcon /> },
  { id: THEME_TYPES.LIGHT, icon: <SunIcon /> },
  { id: THEME_TYPES.DARK, icon: <MoonIcon /> }
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <TabGroup
      options={THEME_OPTIONS}
      optionIdSelected={theme}
      onSelectOption={setTheme}
      className="duration-300"
    />
  );
};
