import React, {
  Dispatch,
  FunctionComponent,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Dots } from './dots.component';

export interface PadProps {
  children: ReactNode[];
}

const usePosition = (
  count: number
): [
  RefObject<HTMLDivElement>,
  number,
  Dispatch<SetStateAction<number>>,
  number
] => {
  const [dot, setDot] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const viewportYRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPositionY(-(dot * viewportHeight));
  }, [dot, viewportHeight]);

  useEffect(() => {
    if (viewportYRef && viewportYRef.current) {
      const { height } = viewportYRef.current.getBoundingClientRect();
      setViewportHeight(height);

      const listener = (e: WheelEvent) => {
        if (Math.sign(e.deltaY) === 1 && dot + 1 <= count - 1) {
          setDot(dot + 1);
        }

        if (Math.sign(e.deltaY) === -1 && dot - 1 >= 0) {
          setDot(dot - 1);
        }
      };

      const currentViewportYRef: HTMLDivElement = viewportYRef.current;

      currentViewportYRef.addEventListener('wheel', listener);

      return () => {
        currentViewportYRef.removeEventListener('wheel', listener);
      };
    }
  }, [viewportHeight, dot, viewportYRef, count]);

  return [viewportYRef, positionY, setDot, dot];
};

export const Pad: FunctionComponent<PadProps> = ({ children }) => {
  const [viewportYRef, positionY, setDot, dot] = usePosition(children.length);

  return (
    <div className="pad" ref={viewportYRef}>
      <div className="pad__items" style={{ top: positionY }}>
        {children.map((child, i) => {
          return (
            <div className="pad__item" key={i}>
              {child}
            </div>
          );
        })}
      </div>
      <div className="pad__dots">
        <Dots
          count={children.length}
          onDot={(activeDot) => setDot(activeDot)}
          active={dot}
        />
      </div>
      <div
        className="pad__prev"
        onClick={() => {
          if (dot - 1 >= 0) {
            setDot(dot - 1);
          }
        }}
      >
        o
      </div>
      <div
        className="pad__next"
        onClick={() => {
          if (dot + 1 <= children.length - 1) {
            setDot(dot + 1);
          }
        }}
      >
        o
      </div>
    </div>
  );
};