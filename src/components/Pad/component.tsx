import React, { forwardRef, FunctionComponent, ReactNode, Ref, useRef } from 'react';
import { useWheel } from 'react-use-gesture';
import { useSprings } from 'react-spring';

export interface PadProps {
  children: ReactNode[];
  scrollUp: () => void;
  scrollDown: () => void;
  position: number;
  ref: Ref<HTMLDivElement>;
}

export const Pad: FunctionComponent<PadProps> = forwardRef(({ scrollUp, scrollDown, position, children }, ref) => {
  const bind = useWheel(state => {
    if (state.velocity > 0.4 && state.axis === "y" && state.direction[1] === 1 && (position + 1 < children.length)) {
      scrollDown();
    } else if (state.velocity > 0.4 && state.axis === "y" && state.direction[1] === -1 && (position - 1 < children.length && position > 0)) {
      scrollUp();
    }
  });
  return <div ref={ref} className='pad' {...bind()}>{children}</div>;
});
