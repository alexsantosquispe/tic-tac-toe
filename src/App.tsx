import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-1">
          <section className="flex justify-center items-center w-full flex-col gap-4">
            <h1 className="text-2xl font-bold text-center">
              Lets play a classic game!
              <br />
              <span className="font-black">TIC TAC TOE</span>
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
