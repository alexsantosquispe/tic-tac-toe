import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ResetButton } from './components/ResetButton';
import useGame from './hooks/useGame';

function App() {
  const { winner, currentPlayer, resetGame, isDraw } = useGame();
  return (
    <>
      <div className="flex min-h-screen flex-col font-normal text-neutral-700 uppercase">
        <Navbar />
        <main className="flex flex-1 py-8 md:p-0">
          <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:gap-10">
            <h1 className="flex flex-col gap-2 text-center">
              <span className="text-5xl font-medium">
                TIC-<span className="text-rose-600">TAC</span>-TOE
              </span>
              <span className="text-xl md:text-2xl">
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
              <ResetButton onClick={resetGame} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
