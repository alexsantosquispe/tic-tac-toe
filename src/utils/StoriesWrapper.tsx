import type { ReactNode } from 'react';

interface ItemWrapperProps {
  title: string;
  children: ReactNode;
}

export const ItemWrapper = ({ title, children }: ItemWrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span className="uppercase">{title}</span>
      {children}
    </div>
  );
};

export const StoryContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center gap-8 rounded-2xl border border-neutral-200 p-8">
      {children}
    </div>
  );
};
