import { useEffect } from 'react';

export const useCssRegister = (names: string[], values: string[]) => {
  // Register variables once on mount
  useEffect(() => {
    for (const [i, name] of names.entries()) {
      if (values[i]) {
        document.documentElement.style.setProperty(name, values[i]);
      }
    }
  }, []);
};
