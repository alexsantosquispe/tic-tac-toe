import { twMerge } from 'tailwind-merge';

interface TitleProps {
  className?: string;
}

export const Title = ({ className }: TitleProps) => {
  return (
    <span
      className={twMerge(
        'transform text-4xl font-medium transition-transform duration-300 hover:scale-125 md:text-5xl',
        className
      )}
    >
      TIC-<span className="text-rose-600 dark:text-rose-500">TAC</span>-TOE
    </span>
  );
};
