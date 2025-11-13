import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { PLAYER_MODE, type MatchType } from '../../../../../models/types';
import { PLAYER_X } from '../../../../../utils/constants';
import { Cell } from '../Cell/Cell';

interface MatchesTableProps {
  data: MatchType[];
}

const PLAYER_MODE_MAP = {
  [PLAYER_MODE.SINGLE_PLAYER]: 'P v CPU',
  [PLAYER_MODE.TWO_PLAYERS]: 'P v P'
};

export const MatchesTable = ({ data }: MatchesTableProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-5 px-1 md:px-4 md:pt-4">
      {!data.length && (
        <div className="flex justify-center p-12">No matches found</div>
      )}

      {!!data.length && (
        <table className="rounded-md">
          <thead className="sticky -top-2 bg-white md:top-0 dark:bg-black">
            <tr>
              <Cell value={t('matches.table.columns.#')} isHeader={true} />
              <Cell value={t('matches.table.columns.winner')} isHeader={true} />
              <Cell value={t('matches.table.columns.level')} isHeader={true} />
              <Cell
                value={t('matches.table.columns.playerMode')}
                isHeader={true}
              />
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <Cell value={`${index + 1}`} />
                <Cell
                  value={item.winner}
                  className={twMerge(
                    'text-lg',
                    cn({ 'text-rose-600': item.winner === PLAYER_X })
                  )}
                />
                <Cell value={t(`settings.levels.options.${item.level}`)} />
                <Cell
                  value={PLAYER_MODE_MAP[item.playerMode]}
                  className="normal-case"
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
