import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useGame from '../../../hooks/useGame';
import {
  LEVELS,
  PLAYER_MODE,
  type LevelTypes,
  type OptionType,
  type PlayerModeTypes
} from '../../../models/types';
import { Modal } from '../../atoms/Modal/Modal';
import PlayersCard from '../../atoms/PlayersCard/PlayersCard';
import { SettingsOptions } from './components/SettingsOptions/SettingsOptions';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const playerModeOptions: OptionType<PlayerModeTypes>[] = [
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
  const { playerMode, setPlayerMode, levelOfDifficulty, setLevelOfDifficulty } =
    useGame();

  const levelOptions: OptionType<LevelTypes>[] = useMemo(
    () => [
      {
        value: LEVELS.EASY,
        component: <span>{t('settings.levels.options.easy')}</span>
      },
      {
        value: LEVELS.HARD,
        component: <span>{t('settings.levels.options.hard')}</span>
      }
    ],
    [t]
  );

  const onSelectPlayerMode = (value: OptionType<PlayerModeTypes>['value']) => {
    setPlayerMode(value);
  };

  const onSelectLevel = (value: OptionType<LevelTypes>['value']) => {
    setLevelOfDifficulty(value);
  };

  return (
    <Modal title={t('settings.title')} isOpen={isOpen} onClose={onClose}>
      <div className="flex w-full flex-col gap-5 p-6 pt-2">
        <SettingsOptions<PlayerModeTypes>
          title={t('settings.playerMode.title')}
          options={playerModeOptions}
          initialOptionValue={playerMode}
          onSelectOption={onSelectPlayerMode}
        />

        <SettingsOptions<LevelTypes>
          title={t('settings.levels.title')}
          options={levelOptions}
          initialOptionValue={levelOfDifficulty}
          onSelectOption={onSelectLevel}
          className={{ container: 'w-full flex-row', option: 'py-2' }}
        />
      </div>
    </Modal>
  );
};

export default SettingsModal;
