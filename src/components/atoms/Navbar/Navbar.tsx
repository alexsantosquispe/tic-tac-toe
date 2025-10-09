import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="fixed z-40 flex h-14 w-full items-center justify-between border-b border-neutral-200 bg-white/50 px-4 font-semibold shadow backdrop-blur dark:border-white/20 dark:bg-black/60">
      <p className="text-4xl text-black dark:text-white">
        <span className="text-rose-600">X</span>O
      </p>

      <div className="flex gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
