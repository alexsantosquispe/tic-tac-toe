import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ResetButton } from './components/ResetButton';
import useGame from './hooks/useGame';

function App() {
  const { winner, currentPlayer, resetGame, isDraw } = useGame();
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1">
          <section className="flex w-full flex-col items-center justify-center gap-10 px-4">
            <h1 className="text-center text-2xl font-bold">
              Lets play a classic game!
              <br />
              <span className="text-4xl font-black text-slate-600">
                TIC <span className="text-rose-600">TAC</span> TOE
              </span>
            </h1>
            <div className="flex flex-col items-center justify-between gap-8">
              <p className="text-3xl font-bold" aria-live="polite">
                {!winner && !isDraw && currentPlayer && `${currentPlayer} turn`}
                {winner && `${winner} wins!!`}
                {isDraw && !winner && 'Draw!!'}
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
