import { twMerge } from 'tailwind-merge';

interface TitleProps {
  className?: string;
}

export const Title = ({ className }: TitleProps) => {
  return (
    <span className={twMerge('text-4xl font-medium md:text-5xl', className)}>
      TIC-<span className="text-rose-600 dark:text-rose-500">TAC</span>-TOE
    </span>
  );
};
