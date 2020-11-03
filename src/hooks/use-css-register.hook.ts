import { useEffect, useRef } from 'react';

export const useCssRegister = (names: string[], values: string[]) => {
  const ref = useRef(null);

  // Register variables once on mount
  useEffect(() => {
    (function () {
      for (const [i, name] of names.entries()) {
        if (values[i] && ref && ref.current) {
          ((ref.current as unknown) as HTMLElement).style.setProperty(
            name,
            values[i]
          );
        }
      }
    })();
  }, [names, values]);

  return ref;
};
