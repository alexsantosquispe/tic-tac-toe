import Square from './Square';
import useGame from '../../hooks/useGame';

export const Board = () => {
  const { data, currentPlayer, checkSquare, combHighLight, winner, isDraw } =
    useGame();

  return (
    <div className="flex h-[20rem] w-[20rem] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-lg md:h-[28rem] md:w-[28rem]">
      <div
        className="flex flex-1 flex-wrap overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-white"
        aria-label="Tic Tac Toe board"
      >
        {data.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              value={square}
              onClickItem={checkSquare}
              highLight={combHighLight.includes(index)}
              isDisabled={!!winner || isDraw}
              currentPlayer={currentPlayer}
            />
          );
        })}
      </div>
    </div>
  );
};
