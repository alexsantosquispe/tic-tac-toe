import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { playCelebration } from '../../../utils/soundUtils';

interface StatusProps {
  winner: string | null;
  isDraw: boolean;
  currentPlayer: string;
}

const Status = ({ winner, isDraw, currentPlayer }: StatusProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (winner) {
      playCelebration();
    }
  }, [winner]);

  return (
    <p className="text-xl font-medium" aria-live="polite">
      {!winner &&
        !isDraw &&
        currentPlayer &&
        t('turn', { player: currentPlayer })}

      {winner && (
        <motion.span
          key={`winner-${winner}`}
          initial={{ scale: 1 }}
          animate={{ scale: [1.2, 1.5, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {t('win', { player: winner })}
        </motion.span>
      )}

      {isDraw && !winner && (
        <motion.span
          key={`winner-${winner}`}
          initial={{ scale: 1 }}
          animate={{ scale: [1.2, 1.5, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {t('draw')}
        </motion.span>
      )}
    </p>
  );
};

export default Status;
