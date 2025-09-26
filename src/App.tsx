import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-1">
          <section className="flex justify-center items-center w-full flex-col gap-10">
            <h1 className="text-2xl font-bold text-center">
              Lets play a classic game!
              <br />
              <span className="font-black text-slate-600 text-4xl">
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
