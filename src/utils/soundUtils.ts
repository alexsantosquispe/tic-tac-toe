export const playSound = (path: string, volume = 0.5) => {
  try {
    const audio = new Audio(path);
    audio.volume = volume;

    audio.play().catch(() => {
      console.warn(`Sound playback prevented for ${path}`);
    });
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export const playClick = () => playSound('/sounds/click.wav');

export const playCelebration = () => playSound('/sounds/tada.wav', 0.3);
