import { useTranslation } from 'react-i18next';

interface StatusProps {
  winner: string | null;
  isDraw: boolean;
  currentPlayer: string;
}

const Status = ({ winner, isDraw, currentPlayer }: StatusProps) => {
  const { t } = useTranslation();

  return (
    <p className="text-3xl md:text-4xl" aria-live="polite">
      {!winner &&
        !isDraw &&
        currentPlayer &&
        t('turn', { player: currentPlayer })}
      {winner && t('win', { player: winner })}
      {isDraw && !winner && t('draw')}
    </p>
  );
};

export default Status;
