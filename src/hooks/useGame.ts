import { useContext } from 'react';
import GameContext from '../context/GameContext';

const useGame = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return gameContext;
};

export default useGame;
