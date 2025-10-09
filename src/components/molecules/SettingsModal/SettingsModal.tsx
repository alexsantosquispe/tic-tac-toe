import { useTranslation } from 'react-i18next';
import { PersonIcon } from '../../../icons/PersonIcon';
import Button from '../../atoms/Button/Button';
import { CardGroup } from '../../atoms/CardGroup/CardGroup';
import { Modal } from '../../atoms/Modal/Modal';
import PlayersCard from '../../atoms/PlayersCard/PlayersCard';

interface SettingsModalProps {
  isOpen: boolean;
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

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal title={t('settings.title')} isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full flex-col gap-3 px-6 py-6">
        <span className="text-center">{t('settings.description')}</span>

        <CardGroup
          options={options}
          defaultSelectedOption={options[0].value}
          onSelectOption={() => {}}
        />

        <Button
          title={t('settings.continueButton')}
          ariaLabel={t('settings.continueButtonAriaLabel')}
          onClick={() => {}}
        />
      </div>
    </Modal>
  );
};

export default SettingsModal;
