import type { ReactNode } from 'react';

interface ButtonProps {
  title: string;
  ariaLabel: string;
  onClick: () => void;
  icon?: ReactNode;
}

const Button = ({ title, ariaLabel, onClick, icon }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-2xl text-white uppercase shadow-md hover:cursor-pointer hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {!!icon && icon}
      {title}
    </button>
  );
};

export default Button;
