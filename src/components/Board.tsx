import useGame from '../hooks/useGame';
import { Square } from './Square';

export const Board = () => {
  const { data, checkSquare, combHighLight, winner } = useGame();
  console.log(winner);
  return (
    <div className="flex h-80 w-80 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-lg md:h-96 md:w-96">
      <div className="flex flex-1 flex-wrap overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-white">
        {data.map((square, index) => {
          return (
            <Square
              key={`${index}`}
              value={square}
              onClickItem={() => checkSquare(index)}
              highLight={combHighLight.includes(index)}
              isDisabled={!!winner}
            />
          );
        })}
      </div>
    </div>
  );
};
