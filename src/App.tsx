import { Suspense, lazy } from 'react';

import { Footer } from './components/atoms/Footer/Footer';
import { ResetIcon } from './icons/ResetIcon';
import { Title } from './components/atoms/Title/Title';
import useGame from './hooks/useGame';
import { useTranslation } from 'react-i18next';

const Navbar = lazy(() => import('./components/atoms/Navbar/Navbar'));
const Board = lazy(() => import('./components/molecules/Board/Board'));
const Button = lazy(() => import('./components/atoms/Button/Button'));

function App() {
  const { t } = useTranslation();
  const { winner, currentPlayer, resetGame, isDraw } = useGame();

  return (
    <>
      <div className="flex min-h-screen flex-col bg-white font-normal text-neutral-700 uppercase dark:bg-black dark:text-white">
        <Suspense fallback={<div className="h-14" />}>
          <Navbar />
        </Suspense>
        <main className="mt-14 flex flex-1 py-8 md:p-0">
          <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-10">
            <h1 className="flex flex-col gap-2 text-center">
              <Title />
              <span className="text-lg md:text-2xl">{t('gameMessage')}</span>
            </h1>
            <div className="flex flex-col items-center justify-between gap-4 md:gap-8">
              <p className="text-3xl md:text-4xl" aria-live="polite">
                {!winner &&
                  !isDraw &&
                  currentPlayer &&
                  t('turn', { player: currentPlayer })}
                {winner && t('win', { player: winner })}
                {isDraw && !winner && t('draw')}
              </p>
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
                />
              </Suspense>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
