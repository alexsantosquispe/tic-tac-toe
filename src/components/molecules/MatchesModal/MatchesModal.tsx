import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { PLAYER_MODE } from '../../../models/types';
import { PLAYER_X } from '../../../utils/constants';
import { formatMatchDate } from '../../../utils/gameUtils';
import { getMatches } from '../../../utils/localStorageUtils';
import { Modal } from '../../atoms/Modal/Modal';
import { Cell } from './components/Cell/Cell';

interface MatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLAYER_MODE_MAP = {
  [PLAYER_MODE.SINGLE_PLAYER]: 'P v CPU',
  [PLAYER_MODE.TWO_PLAYERS]: 'P v P'
};

export const MatchesModal = ({ isOpen, onClose }: MatchesModalProps) => {
  const { t } = useTranslation();
  const data = getMatches();

  return (
    <Modal
      title={t('matches.title')}
      isOpen={isOpen}
      onClose={onClose}
      className={{
        mainContainer: 'max-h-[25rem] md:max-h-[20rem] md:w-[30rem]',
        childContainer: 'overflow-y-auto'
      }}
    >
      <div className="flex w-full flex-col gap-5 px-6 md:px-2 md:pt-4">
        {!data.length && (
          <div className="flex justify-center p-12">No matches found</div>
        )}

        {!!data.length && (
          <table className="rounded-md">
            <thead className="sticky -top-2 bg-white md:top-0 dark:bg-black">
              <tr>
                <Cell value={t('matches.table.columns.#')} isHeader={true} />
                <Cell
                  value={t('matches.table.columns.winner')}
                  isHeader={true}
                />
                <Cell
                  value={t('matches.table.columns.level')}
                  isHeader={true}
                />
                <Cell
                  value={t('matches.table.columns.playerMode')}
                  isHeader={true}
                />
                <Cell
                  value={t('matches.table.columns.date')}
                  isHeader={true}
                  className="hidden md:block"
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
                  <Cell value={item.level} />
                  <Cell
                    value={PLAYER_MODE_MAP[item.playerMode]}
                    className="normal-case"
                  />
                  <Cell
                    value={formatMatchDate(item.id)}
                    className="hidden normal-case md:block"
                  />
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Modal>
  );
};
