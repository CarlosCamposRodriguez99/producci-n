import { useEffect, useState } from 'react';

export default function useMedia(queries: string[], values: number[], defaultValue: number) {
  const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue;
  const [value, set] = useState(match);
  const [disableTransition, setDisableTransition] = useState(false); // Nuevo estado para desactivar la transición

  useEffect(() => {
    const handler = () => {
      set(match);
      setDisableTransition(true);

      const timeout = setTimeout(() => {
        setDisableTransition(false);
      }, 1000);

      return () => clearTimeout(timeout);
    };

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return { value, disableTransition };
}
