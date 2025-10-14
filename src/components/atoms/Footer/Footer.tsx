import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex h-14 w-full items-center justify-center border-t border-neutral-200 px-8 text-[0.8125rem] font-light dark:border-white/20">
      <p className="text-center">
        {t('footer.firstLine')}
        <a
          href="https://github.com/alexsantosquispe"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-rose-600 transition-colors duration-200 hover:underline dark:text-rose-500"
        >
          {t('footer.authorName')}
        </a>
        {t('footer.secondLine')}
      </p>
    </footer>
  );
};

export default Footer;
