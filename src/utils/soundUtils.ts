export const playSound = (path: string, volume = 0.75) => {
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

export const playXSound = () => playSound('/sounds/x-sound.wav');

export const playOSound = () => playSound('/sounds/o-sound.wav', 0.5);

export const playClick = () => playSound('/sounds/click.wav', 0.5);
