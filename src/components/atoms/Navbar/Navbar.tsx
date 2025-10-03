import { Title } from '../Title/Title';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';

export const Navbar = () => {
  return (
    <nav className="fixed flex h-14 w-full items-center justify-between border-b border-neutral-200 px-4 font-semibold shadow md:px-8 dark:border-white/20">
      <Title className="text-lg md:text-xl" />
      <ToggleThemeButton />
    </nav>
  );
};
