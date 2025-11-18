import { useCallback, useEffect, useRef } from 'react';

export const useSounds = () => {
  const sounds = useRef({
    click: new Audio('/sounds/click.wav'),
    win: new Audio('/sounds/tada.wav')
  });

  useEffect(() => {
    Object.values(sounds.current).forEach((audio) => {
      audio.preload = 'auto';
      audio.load();
    });
  }, []);

  const playClick = useCallback(() => {
    const sound = sounds.current.click;
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play().catch(() => {});
  }, []);

  const playWin = useCallback(() => {
    const sound = sounds.current.win;
    sound.currentTime = 0;
    sound.volume = 0.3;
    sound.play().catch(() => {});
  }, []);

  return {
    playClick,
    playWin
  };
};
