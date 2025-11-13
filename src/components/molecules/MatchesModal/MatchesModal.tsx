import { useTranslation } from 'react-i18next';
import { getMatches } from '../../../utils/localStorageUtils';
import { Modal } from '../../atoms/Modal/Modal';
import { MatchesTable } from './components/MatchesTable/MatchesTable';

interface MatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
      <MatchesTable data={data} />
    </Modal>
  );
};
