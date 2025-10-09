import type { ReactNode } from 'react';
import { XIcon } from '../../../icons/XIcon';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <section className="fixed z-50 flex h-full w-full items-center justify-center bg-black/50 p-8 backdrop-blur-xs">
      <div className="flex w-full flex-col rounded-xl bg-white md:w-80 dark:bg-black">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="mt-2 mr-2 self-end rounded-lg bg-white p-1 text-neutral-600 hover:cursor-pointer hover:bg-black hover:text-white"
        >
          <XIcon />
        </button>

        <h2 className="text-center text-xl font-medium md:text-2xl">{title}</h2>

        <div className="flex justify-center p-2">{children}</div>
      </div>
    </section>
  );
};
