import { useEffect } from 'react';

const usePressKey = (
  targetKey: string,
  callback: () => void,
  skip?: boolean
) => {
  useEffect(() => {
    const onPressKey = (event: KeyboardEvent) => {
      if (!skip && event.key === targetKey) {
        console.log('esc key pressed');
        callback();
      }
    };
    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [skip, targetKey, callback]);
};

export default usePressKey;
