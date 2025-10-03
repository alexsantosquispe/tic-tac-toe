import useGame from '../../../hooks/useGame';
import Square from '../Square/Square';

export const Board = () => {
  const { data, currentPlayer, checkSquare, combHighLight, winner, isDraw } =
    useGame();

  return (
    <div
      data-testid="board"
      className="flex h-[20rem] w-[20rem] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-lg md:h-[28rem] md:w-[28rem] dark:border-white/20 dark:bg-white/10"
    >
      <div
        className="flex flex-1 flex-wrap overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-white dark:border-white/20 dark:bg-black"
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
