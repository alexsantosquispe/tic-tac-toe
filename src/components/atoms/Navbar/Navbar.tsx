import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Title } from '../Title/Title';

const Navbar = () => {
  return (
    <nav className="fixed flex h-14 w-full items-center justify-between border-b border-neutral-200 bg-white/60 px-4 font-semibold shadow backdrop-blur dark:border-white/20 dark:bg-black/60">
      <Title className="text-lg md:text-xl" />
      <div className="flex gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
