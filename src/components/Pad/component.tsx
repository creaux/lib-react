import React, { forwardRef, FunctionComponent, ReactNode, Ref, useRef, useState } from 'react';
import { useWheel } from 'react-use-gesture';
import { useSprings, animated } from 'react-spring';
import { FullGestureState, StateKey } from 'react-use-gesture/dist/types';

export interface PadProps {
  children: ReactNode[];
  setSpringDown: (istate: FullGestureState<StateKey<"wheel">>) => (i: number) => void;
  setSpringUp: (istate: FullGestureState<StateKey<"wheel">>) => (i: number) => void;
  setSpring: (istate: FullGestureState<StateKey<"wheel">>) => (i: number) => void;
  position: number;
}

export const Pad: FunctionComponent<PadProps> = ({ children, setSpringUp, setSpringDown, position, setSpring }) => {
  const pages = children.length;

  const [springs, setSprings] = useSprings(pages, (i: number) => {
    const indent = i * window.innerHeight;
    return { container: indent, config: { duration: 100 } }
  });

  const bind = useWheel(state => {
    // if (state.wheeling) {
    //   if (state.axis === "y" && (position + 1 < children.length && state.direction[1] === 1 && state.offset[1] < window.innerHeight / 2)) {
    //     setSprings(setSpring(state));
    //     return;
    //   }
    // }

    if (state.velocity > 0.6333 && state.axis === "y" && state.direction[1] === 1 && (position + 1 < children.length)) {
      setSprings(setSpringDown(state));
    } else if (state.velocity > 0.6333 && state.axis === "y" && state.direction[1] === -1 && (position - 1 < children.length && position > 0)) {
      setSprings(setSpringUp(state));
    }
  });

  return springs.map((style, i) => (
    <animated.div style={{ transform: style.container.interpolate(x => `translate3d(0, ${x}px, 0)`) }} className="pad" {...bind()}>
      {children[i]}
    </animated.div>
  ))
};
