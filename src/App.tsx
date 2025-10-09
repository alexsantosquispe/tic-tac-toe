import { Suspense, lazy, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Footer } from './components/atoms/Footer/Footer';
import Status from './components/atoms/Status/Status';
import { Title } from './components/atoms/Title/Title';
import { SettingsModal } from './components/molecules/SettingsModal/SettingsModal';
import useGame from './hooks/useGame';
import { ResetIcon } from './icons/ResetIcon';
import { getIsBoardDirty } from './utils/gameUtils';

const Navbar = lazy(() => import('./components/atoms/Navbar/Navbar'));
const Board = lazy(() => import('./components/molecules/Board/Board'));
const Button = lazy(() => import('./components/atoms/Button/Button'));

function App() {
  const { t } = useTranslation();
  const { data, winner, currentPlayer, resetGame, isDraw } = useGame();
  const isBoardDirty = useMemo(() => getIsBoardDirty(data), [data]);
  //TODO: This state should be improved in order to show the modal the first time
  //TODO: and then the next time should be from settings icon
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white font-normal text-neutral-700 uppercase dark:bg-black dark:text-white">
        <Suspense fallback={<div className="h-14" />}>
          <Navbar />
        </Suspense>
        <main className="mt-14 mb-8 flex flex-1 py-8 md:p-0">
          <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-10">
            <h1 className="flex flex-col gap-2 text-center">
              <Title />
              <span className="text-lg md:text-xl">{t('gameMessage')}</span>
            </h1>

            <div className="flex flex-col items-center justify-between gap-4 md:gap-8">
              <Status
                winner={winner}
                isDraw={isDraw}
                currentPlayer={currentPlayer}
              />

              <Button
                title={t('settings.title')}
                ariaLabel="Start game button"
                onClick={() => setIsModalOpen(true)}
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

        <Footer />

        {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </>
  );
}

export default App;
