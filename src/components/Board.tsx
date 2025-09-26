import type { SquareValueTypes } from '../types';
import { Square } from './Square';

export const Board = () => {
  const squares: SquareValueTypes[] = ['X', 'O', 'X', '', '', 'O', '', '', ''];
  return (
    <div className="flex h-80 w-80 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-lg md:h-96 md:w-96">
      <div className="flex flex-1 flex-wrap overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-white">
        {squares.map((square, index) => {
          return <Square key={`${index}`} value={square} />;
        })}
      </div>
    </div>
  );
};
