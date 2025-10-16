import { useTranslation } from 'react-i18next';
import useGame from '../../../hooks/useGame';
import { PLAYER_MODE, type OptionType } from '../../../models/types';
import Button from '../../atoms/Button/Button';
import { Modal } from '../../atoms/Modal/Modal';
import PlayersCard from '../../atoms/PlayersCard/PlayersCard';
import { PlayerModeOptions } from './components/PlayerModeOptions/PlayerModeOptions';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options: OptionType[] = [
  {
    value: PLAYER_MODE.SINGLE_PLAYER,
    component: <PlayersCard />
  },
  {
    value: PLAYER_MODE.TWO_PLAYERS,
    component: <PlayersCard isSinglePlayer={false} />
  }
];

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const { t } = useTranslation();
  const { playerMode, setPlayerMode } = useGame();

  const onSelectOption = (value: OptionType['value']) => {
    setPlayerMode(value);
  };

  const saveSettings = () => {
    onClose();
  };

  return (
    <Modal title={t('settings.title')} isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full flex-col gap-3 px-6 py-6">
        <span className="text-center">{t('settings.description')}</span>

        <PlayerModeOptions
          options={options}
          initialOptionValue={playerMode}
          onSelectOption={onSelectOption}
        />

        <Button
          title={t('settings.continueButton')}
          ariaLabel={t('settings.continueButtonAriaLabel')}
          onClick={saveSettings}
        />
      </div>
    </Modal>
  );
};

export default SettingsModal;
