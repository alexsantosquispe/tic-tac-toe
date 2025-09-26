import { CircleIcon } from "../icons/CircleIcon";
import type { ReactNode } from "react";
import { XIcon } from "../icons/XIcon";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SquareProps {
  value: string;
}

const SQUARE_ICONS: { [key: string]: ReactNode } = {
  X: <XIcon className="size-20 md:size-28 text-rose-600" />,
  O: <CircleIcon className="size-16 md:size-20 text-slate-600" />
};

export const Square = ({ value }: SquareProps) => {
  const icon = value ? SQUARE_ICONS[value] : null;

  return (
    <button
      className={twMerge(
        "flex w-1/3 h-1/3 p-1 border border-dashed border-neutral-200 items-center justify-center",
        clsx({ "hover:cursor-pointer": !value })
      )}
    >
      {icon}
    </button>
  );
};
