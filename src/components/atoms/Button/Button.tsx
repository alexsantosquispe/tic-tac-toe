import type { ReactNode } from 'react';

interface ButtonProps {
  title: string;
  ariaLabel: string;
  onClick: () => void;
  icon?: ReactNode;
}

export const Button = ({ title, ariaLabel, onClick, icon }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-3xl text-white uppercase shadow-md hover:cursor-pointer hover:bg-rose-500"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {!!icon && icon}
      {title}
    </button>
  );
};
