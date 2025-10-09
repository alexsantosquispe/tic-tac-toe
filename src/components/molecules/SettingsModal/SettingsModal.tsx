import { useTranslation } from 'react-i18next';
import { BotIcon } from '../../../icons/BotIcon';
import { PersonIcon } from '../../../icons/PersonIcon';
import Button from '../../atoms/Button/Button';
import { CardGroup } from '../../atoms/CardGroup/CardGroup';
import { Modal } from '../../atoms/Modal/Modal';

interface SettingsModalProps {
  onClose: () => void;
}
const options = [
  {
    value: 'singlePlayer',
    component: (
      <div className="flex items-center justify-between gap-8 px-8 py-4">
        <PersonIcon className="size-12" />
        <span className="text-xl font-medium">VS</span>
        <BotIcon className="size-12" />
      </div>
    )
  },
  {
    value: 'twoPlayers',
    component: (
      <div className="flex items-center justify-between gap-8 px-8 py-4">
        <PersonIcon className="size-12" />
        <span className="text-xl font-medium">VS</span>
        <PersonIcon className="size-12" />
      </div>
    )
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
