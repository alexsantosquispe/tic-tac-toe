import { Button } from './components/atoms/Button/Button';
import { Footer } from './components/atoms/Footer/Footer';
import { Navbar } from './components/atoms/Navbar/Navbar';
import { Title } from './components/atoms/Title/Title';
import { Board } from './components/molecules/Board/Board';
import useGame from './hooks/useGame';
import { ResetIcon } from './icons/ResetIcon';

function App() {
  const { winner, currentPlayer, resetGame, isDraw } = useGame();
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white font-normal text-neutral-700 uppercase dark:bg-black dark:text-white/70">
        <Navbar />
        <main className="mt-14 flex flex-1 py-8 md:p-0">
          <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-10">
            <h1 className="flex flex-col gap-2 text-center">
              <Title />
              <span className="text-lg md:text-2xl">
                Lets play a classic game!
              </span>
            </h1>
            <div className="flex flex-col items-center justify-between gap-4 md:gap-8">
              <p className="text-3xl md:text-4xl" aria-live="polite">
                {!winner && !isDraw && currentPlayer && `${currentPlayer} turn`}
                {winner && `${winner} wins!`}
                {isDraw && !winner && 'Draw!'}
              </p>
              <Board />
              <Button
                title="Reset"
                ariaLabel="Reset game button"
                icon={<ResetIcon />}
                onClick={resetGame}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
