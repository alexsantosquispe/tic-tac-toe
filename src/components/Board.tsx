import { Square } from "./Square";

export const Board = () => {
  const squares = ["X", "O", "X", "", "", "O", "", "", ""];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-100 shadow-lg w-80 h-80 md:w-96 md:h-96 p-3 flex">
      <div className="flex flex-wrap flex-1 overflow-hidden bg-white rounded-xl border border-dashed border-neutral-200">
        {squares.map((square, index) => {
          return <Square key={`${index}`} value={square} />;
        })}
      </div>
    </div>
  );
};
