import { AnimatePresence, motion } from 'framer-motion';

import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import usePressKey from '../../../hooks/usePressKey';
import { XIcon } from '../../../icons/XIcon';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  const { t } = useTranslation();
  usePressKey('Escape', onClose, !isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          data-testid="modal"
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed z-50 flex h-full w-full items-center justify-center bg-black/50 p-8 backdrop-blur-xs dark:bg-black/20"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="flex w-full flex-col rounded-2xl bg-white md:w-80 dark:border dark:border-white/20 dark:bg-neutral-950"
          >
            <button
              onClick={onClose}
              aria-label={t('closeModalButtonAriaLabel')}
              className="mt-5 mr-5 self-end rounded-xl text-neutral-500 hover:cursor-pointer hover:text-black dark:text-neutral-600 dark:hover:text-white"
            >
              <XIcon />
            </button>

            <h2 className="text-center text-xl font-medium md:text-2xl">
              {title}
            </h2>

            <div className="flex w-full">{children}</div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
