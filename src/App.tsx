import { Suspense, lazy, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import Status from './components/atoms/Status/Status';
import { Title } from './components/atoms/Title/Title';
import { MatchesButton } from './components/molecules/MatchesButton/MatchesButton';
import { SettingsButton } from './components/molecules/SettingsButton/SettingsButton';
import useGame from './hooks/useGame';
import { ResetIcon } from './icons/ResetIcon';
import { getIsBoardDirty } from './utils/gameUtils';

const Navbar = lazy(() => import('./components/atoms/Navbar/Navbar'));
const Footer = lazy(() => import('./components/atoms/Footer/Footer'));
const Board = lazy(() => import('./components/molecules/Board/Board'));
const Button = lazy(() => import('./components/atoms/Button/Button'));

function App() {
  const { t } = useTranslation();
  const { data, winner, currentPlayer, resetGame, isDraw, soundEffects } =
    useGame();
  const isBoardDirty = useMemo(() => getIsBoardDirty(data), [data]);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white font-normal text-neutral-700 uppercase dark:bg-black dark:text-white">
        <Suspense fallback={<div className="h-14" />}>
          <Navbar />
        </Suspense>

        <main className="relative mt-14 flex flex-1 flex-col items-center justify-center md:mb-0">
          <SettingsButton />
          <MatchesButton />

          <section className="mt-4 mb-4 flex w-full flex-col items-center justify-center gap-6 px-4 md:mb-0 md:gap-8">
            <h1 className="flex flex-col gap-2 text-center">
              <Title />
              <p className="text-base md:text-lg">{t('gameMessage')}</p>
            </h1>

            <div className="flex flex-col items-center justify-between gap-4 md:gap-8">
              <Status
                winner={winner}
                isDraw={isDraw}
                currentPlayer={currentPlayer}
                soundEffects={soundEffects}
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
      </div>
    </>
  );
}

export default App;
