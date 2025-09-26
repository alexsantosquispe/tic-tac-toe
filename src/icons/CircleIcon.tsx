import type { SvgIconProps } from "../types";
import { twMerge } from "tailwind-merge";

export const CircleIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge("size-6", className)}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};
