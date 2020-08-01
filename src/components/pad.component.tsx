import React, {
  Dispatch,
  FunctionComponent,
  ReactNode,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect, useMemo,
  useRef,
  useState
} from 'react';
import { Dots } from './dots.component';

export interface PadProps {
  children: ReactNode[];
}

let stopExecution = false;

const usePosition = (
  count: number
): [
  RefObject<HTMLDivElement>,
  number,
  Dispatch<SetStateAction<number>>,
  number
] => {
  const [dot, setDot] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const viewportYRef = useRef<HTMLDivElement>(null);
  const { current: refCurrent } = viewportYRef;
  const viewportHeight = useMemo(() => {
    if (refCurrent) return refCurrent.getBoundingClientRect().height;
    return 0;
  }, [refCurrent]);

  const listener = useCallback(
    (e: WheelEvent) => {
      if (stopExecution) return;

      if (Math.sign(e.deltaY) === 1 && dot + 1 <= count - 1) {
        setDot(dot + 1);
      }

      if (Math.sign(e.deltaY) === -1 && dot - 1 >= 0) {
        setDot(dot - 1);
      }

      stopExecution = true;

      setTimeout(() => stopExecution = false, 1200);
    },
    [dot]
  );

  useEffect(() => {
    setPositionY(-(dot * viewportHeight));
  }, [dot, viewportHeight]);

  useEffect(() => {
    if (viewportYRef && viewportYRef.current) {
      (viewportYRef.current as HTMLDivElement).addEventListener(
        'wheel',
        listener
      );

      return () => {
        (viewportYRef.current as HTMLDivElement).removeEventListener(
          'wheel',
          listener
        );
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
