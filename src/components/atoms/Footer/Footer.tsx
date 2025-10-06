import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex h-14 w-full items-center justify-center border-t border-neutral-200 px-8 text-[0.8125rem] font-light dark:border-white/20">
      <p className="text-center">{t('footer')}</p>
    </footer>
  );
};
