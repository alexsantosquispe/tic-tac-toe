import { Suspense, lazy, useCallback, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import Status from './components/atoms/Status/Status';
import { Title } from './components/atoms/Title/Title';
import useGame from './hooks/useGame';
import { ResetIcon } from './icons/ResetIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { getIsBoardDirty } from './utils/gameUtils';

const Navbar = lazy(() => import('./components/atoms/Navbar/Navbar'));
const Footer = lazy(() => import('./components/atoms/Footer/Footer'));
const Board = lazy(() => import('./components/molecules/Board/Board'));
const Button = lazy(() => import('./components/atoms/Button/Button'));
const SettingsModal = lazy(
  () => import('./components/molecules/SettingsModal/SettingsModal')
);

function App() {
  const { t } = useTranslation();
  const { data, winner, currentPlayer, resetGame, isDraw } = useGame();
  const isBoardDirty = useMemo(() => getIsBoardDirty(data), [data]);
  //TODO: This state will be improved to show the modal the first loading time
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSettingsModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeSettingsModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white font-normal text-neutral-700 uppercase dark:bg-black dark:text-white">
        <Suspense fallback={<div className="h-14" />}>
          <Navbar />
        </Suspense>

        <main className="mt-14 mb-8 flex flex-1 flex-col md:mb-0">
          <button
            onClick={openSettingsModal}
            aria-label={t('settings.settingsButtonAriaLabel')}
            className="transform self-end rounded-xl p-4 text-rose-600 transition-transform duration-500 hover:rotate-90 hover:cursor-pointer hover:text-rose-500 focus:outline-none dark:text-rose-500 dark:hover:text-rose-400"
          >
            <SettingsIcon />
          </button>

          <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-8">
            <h1 className="flex flex-col gap-2 text-center">
              <Title />
              <p className="text-base md:text-lg">{t('gameMessage')}</p>
            </h1>

            <div className="flex flex-col items-center justify-between gap-4 md:gap-8">
              <Status
                winner={winner}
                isDraw={isDraw}
                currentPlayer={currentPlayer}
              />

              <Suspense
                fallback={
                  <div className="flex h-[20rem] w-[20rem] md:h-[28rem] md:w-[28rem]" />
                }
              >
                <Board />
              </Suspense>

              <Suspense fallback={<div className="h-[3.75rem] w-[10rem]" />}>
                <Button
                  title={t('resetButton.title')}
                  ariaLabel={t('resetButton.ariaLabel')}
                  icon={<ResetIcon />}
                  onClick={resetGame}
                  isDisabled={!isBoardDirty}
                />
              </Suspense>
            </div>
          </section>
        </main>

        <Suspense fallback={<div className="h-14" />}>
          <Footer />
        </Suspense>

        <Suspense>
          <SettingsModal isOpen={isModalOpen} onClose={closeSettingsModal} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
