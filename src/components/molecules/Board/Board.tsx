import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import useGame from '../../../hooks/useGame';
import Square from '../Square/Square';

const Board = () => {
  const { t } = useTranslation();
  const {
    data,
    currentPlayer,
    checkSquare,
    winnerCombination,
    winner,
    isDraw
  } = useGame();

  return (
    <div
      data-testid="board"
      className="relative flex h-[20rem] w-[20rem] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-lg md:h-[28rem] md:w-[28rem] dark:border-white/20 dark:bg-white/10"
    >
      <div
        className={twMerge(
          'flex flex-1 flex-wrap overflow-hidden rounded-xl border border-dashed border-neutral-200 bg-white dark:border-white/35 dark:bg-black'
        )}
        aria-label={t('boardAriaLabel')}
      >
        {data.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              value={square}
              onClickItem={checkSquare}
              highLight={winnerCombination.includes(index)}
              isDisabled={!!winner || isDraw}
              currentPlayer={currentPlayer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
