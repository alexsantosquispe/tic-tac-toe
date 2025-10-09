import { useTranslation } from 'react-i18next';
import { PersonIcon } from '../../../icons/PersonIcon';
import Button from '../../atoms/Button/Button';
import { CardGroup } from '../../atoms/CardGroup/CardGroup';
import { Modal } from '../../atoms/Modal/Modal';
import { PlayersCard } from '../../atoms/Modal/PlayersCard';

interface SettingsModalProps {
  onClose: () => void;
}
const options = [
  {
    value: 'singlePlayer',
    component: (
      <PlayersCard
        playerIcon={<PersonIcon className="size-12" />}
        isSinglePlayer={true}
      />
    )
  },
  {
    value: 'twoPlayers',
    component: <PlayersCard playerIcon={<PersonIcon className="size-12" />} />
  }
];

export const SettingsModal = ({ onClose }: SettingsModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal title={t('settings.title')} onClose={onClose}>
      <div className="flex flex-col gap-4 py-4">
        <span className="text-center">Choose your gaming mode</span>

        <CardGroup
          options={options}
          defaultSelectedOption={options[0].value}
          onSelectOption={() => {}}
        />

        <Button title={'continue'} ariaLabel={'continue'} onClick={() => {}} />
      </div>
    </Modal>
  );
};
