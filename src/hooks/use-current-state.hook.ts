import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Give current state value (future state value beore render)
 * @param initialValue
 */
export const useStateRef = (initialValue: any) => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  useLayoutEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [stateRef, setState, state];
};
