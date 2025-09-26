import { Board } from './components/Board';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
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
            <Board />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
