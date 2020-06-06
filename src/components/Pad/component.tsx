import React, { FunctionComponent, ReactNode } from "react";
import { useWheel } from "react-use-gesture";
import { useSprings, animated } from "react-spring";

export interface PadProps {
  children: ReactNode[];
  setSpringDown: (i: number) => any;
  setSpringUp: (i: number) => any;
  position: number;
  velocity: number;
  axis: "y" | "x";
  direction: {
    down: number;
    up: number;
  };
}

export const Pad: FunctionComponent<PadProps> = ({
  children,
  setSpringUp,
  setSpringDown,
  position,
  velocity,
  axis,
  direction
}) => {
  const pages = children.length;

  const [springs, setSprings] = useSprings(pages, i => {
    const indent = i * window.innerHeight;
    return { container: indent, config: { duration: 100 } };
  });

  const bind = useWheel(state => {
    if (
      state.velocity > velocity &&
      state.axis === axis &&
      state.direction[1] === direction.down &&
      position + 1 < children.length
    ) {
      // @ts-ignore
      setSprings(setSpringDown);
    } else if (
      state.velocity > velocity &&
      state.axis === axis &&
      state.direction[1] === direction.up &&
      (position - 1 < children.length && position > 0)
    ) {
      // @ts-ignore
      setSprings(setSpringUp);
    }
  });

  return (
    <>
      {springs.map((style, i) => (
        <animated.div
          style={{
            transform: style.container.interpolate(
              x => `translate3d(0, ${x}px, 0)`
            )
          }}
          className="pad"
          {...bind()}
        >
          {children[i]}
        </animated.div>
      ))}
    </>
  );
};
