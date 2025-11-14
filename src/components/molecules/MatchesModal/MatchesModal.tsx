import { clearMatches, getMatches } from '../../../utils/localStorageUtils';

import { useTranslation } from 'react-i18next';
import { playClick } from '../../../utils/soundUtils';
import Button from '../../atoms/Button/Button';
import { Modal } from '../../atoms/Modal/Modal';
import { MatchesTable } from './components/MatchesTable/MatchesTable';

interface MatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MatchesModal = ({ isOpen, onClose }: MatchesModalProps) => {
  const { t } = useTranslation();
  const data = getMatches();

  const handleClearHistory = () => {
    playClick();
    clearMatches();
    onClose();
  };

  return (
    <Modal
      title={t('matches.title')}
      isOpen={isOpen}
      onClose={onClose}
      className={{
        mainContainer: 'max-h-[22rem] overflow-hidden md:w-[30rem]',
        childContainer: 'overflow-auto'
      }}
    >
      <div className="flex w-full flex-col items-center gap-4 overflow-hidden pb-4">
        <MatchesTable data={data} className="overflow-y-auto" />
        <Button
          ariaLabel="Clear matches history"
          onClick={handleClearHistory}
          title={t('matches.clearHistoryButton')}
          className="text-md"
          isDisabled={!data.length}
        />
      </div>
    </Modal>
  );
};
