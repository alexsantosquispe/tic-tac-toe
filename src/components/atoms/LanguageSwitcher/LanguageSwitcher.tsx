import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, type LanguageTypes } from '../../../types';
import { TabGroup } from '../TabGroup/TabGroup';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = useMemo(
    () => (i18n.language.split('-')[0] || LANGUAGES[0]) as LanguageTypes,
    [i18n.language]
  );

  const toggleLanguage = useCallback(
    (optionId: LanguageTypes) => {
      i18n.changeLanguage(optionId);
    },
    [i18n]
  );

  return (
    <TabGroup
      options={[...LANGUAGES]}
      optionIdSelected={currentLanguage}
      onSelectOption={toggleLanguage}
      isDefault={false}
    />
  );
};
