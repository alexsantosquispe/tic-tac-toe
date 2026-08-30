import { useTranslation } from 'react-i18next';
import {
  SOUND_EFFECTS,
  type SoundEffectsType
} from '../../../../../models/types';
import { TabGroup } from '../../../../atoms/TabGroup/TabGroup';

interface SoundSwitcherProps {
  soundEffects: boolean;
  setSoundEffects: (value: boolean) => void;
}

export const SoundSwitcher = ({
  soundEffects,
  setSoundEffects
}: SoundSwitcherProps) => {
  const { t } = useTranslation();

  const onSelectOption = (optionId: SoundEffectsType) => {
    setSoundEffects(optionId === SOUND_EFFECTS[0].id);
  };

  return (
    <div className="inline-flex items-center justify-between rounded-xl border border-neutral-200 p-3 dark:border-white/20">
      <span>{t('settings.soundEffects.title')}</span>
      <TabGroup
        options={[...SOUND_EFFECTS]}
        optionIdSelected={
          soundEffects ? SOUND_EFFECTS[0].id : SOUND_EFFECTS[1].id
        }
        onSelectOption={onSelectOption}
        isDefault={false}
      />
    </div>
  );
};
