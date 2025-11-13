import { Suspense, lazy, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { SettingsIcon } from '../../../icons/SettingsIcon';
import { playClick } from '../../../utils/soundUtils';

const SettingsModal = lazy(() => import('../SettingsModal/SettingsModal'));

export const SettingsButton = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSettingsModal = useCallback(() => {
    setIsModalOpen(true);
    playClick();
    document.body.style.overflow = 'hidden';
  }, []);

  const closeSettingsModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <button
        onClick={openSettingsModal}
        aria-label={t('settings.settingsButtonAriaLabel')}
        className="absolute top-4 right-4 self-end rounded-lg bg-rose-600 p-1 text-white shadow-md hover:cursor-pointer focus:outline-none"
      >
        <SettingsIcon className="transform transition-transform duration-500 hover:rotate-90" />
      </button>
      <Suspense fallback={<div className="w-full md:w-80" />}>
        <SettingsModal isOpen={isModalOpen} onClose={closeSettingsModal} />
      </Suspense>
    </>
  );
};
