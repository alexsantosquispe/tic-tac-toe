import { Title } from '../Title';

export const Navbar = () => {
  return (
    <nav className="fixed flex h-14 w-full items-center justify-between border-b border-neutral-200 px-8 font-semibold shadow dark:border-white/20">
      <Title className="text-lg md:text-xl" />
    </nav>
  );
};
