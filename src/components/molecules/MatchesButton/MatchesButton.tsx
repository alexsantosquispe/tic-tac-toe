import { Suspense, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { TrophyIcon } from '../../../icons/TrophyIcon';
import { MatchesModal } from '../MatchesModal/MatchesModal';

export const MatchesButton = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMatchesModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMatchesModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <button
        onClick={openMatchesModal}
        aria-label={t('matches.matchesButtonAriaLabel')}
        className="absolute top-14 right-4 self-end rounded-lg bg-black p-1 text-white shadow-md hover:cursor-pointer focus:outline-none dark:bg-white dark:text-black"
      >
        <TrophyIcon className="transform transition-transform duration-200 hover:scale-120" />
      </button>
      <Suspense fallback={<div className="w-full md:w-96" />}>
        <MatchesModal isOpen={isModalOpen} onClose={closeMatchesModal} />
      </Suspense>
    </>
  );
};
