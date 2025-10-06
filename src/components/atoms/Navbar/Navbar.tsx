import { Title } from '../Title/Title';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';

const Navbar = () => {
  return (
    <nav className="fixed flex h-14 w-full items-center justify-between border-b border-neutral-200 bg-white/60 px-4 font-semibold shadow backdrop-blur md:px-8 dark:border-white/20 dark:bg-black/60">
      <Title className="text-lg md:text-xl" />
      <ToggleThemeButton />
    </nav>
  );
};

export default Navbar;
