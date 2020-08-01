import React, {
  Dispatch,
  FunctionComponent,
  ReactNode,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dots } from './dots.component';
import { provideIsTouchDevice } from '../hocs/provideIsTouchDevice';

export interface PadProps {
  children: ReactNode[];
}

let stopExecution = false;
let startY = 0;

const usePosition = (
  count: number,
  isTouchDevice: boolean
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

  const wheelListener = useCallback(
    (e: WheelEvent) => {
      if (stopExecution) return;

      if (Math.sign(e.deltaY) === 1 && dot + 1 <= count - 1) {
        setDot(dot + 1);
      }

      if (Math.sign(e.deltaY) === -1 && dot - 1 >= 0) {
        setDot(dot - 1);
      }

      stopExecution = true;

      setTimeout(() => (stopExecution = false), 1200);
    },
    [dot]
  );

  const touchMoveListener = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
    },
    [dot]
  );

  const touchStart = useCallback(
    (e: TouchEvent) => {
      startY = e.changedTouches[0].pageY;
    },
    [dot]
  );

  const touchEnd = useCallback(
    (e: TouchEvent) => {
      if (e.changedTouches[0].pageY > startY && dot > 0) {
        setDot(dot - 1);
      }

      if (e.changedTouches[0].pageY < startY && dot < count - 1) {
        setDot(dot + 1);
      }
    },
    [startY, dot, count]
  );

  useEffect(() => {
    setPositionY(-(dot * viewportHeight));
  }, [dot, viewportHeight]);

  useEffect(() => {
    if (viewportYRef && viewportYRef.current) {
      (viewportYRef.current as HTMLDivElement).addEventListener(
        'wheel',
        wheelListener
      );

      (viewportYRef.current as HTMLDivElement).addEventListener(
        'touchmove',
        touchMoveListener
      );

      (viewportYRef.current as HTMLDivElement).addEventListener(
        'touchstart',
        touchStart
      );

      (viewportYRef.current as HTMLDivElement).addEventListener(
        'touchend',
        touchEnd
      );

      return () => {
        (viewportYRef.current as HTMLDivElement).removeEventListener(
          'wheel',
          wheelListener
        );
        (viewportYRef.current as HTMLDivElement).removeEventListener(
          'touchmove',
          touchMoveListener
        );
        (viewportYRef.current as HTMLDivElement).removeEventListener(
          'touchstart',
          touchStart
        );
        (viewportYRef.current as HTMLDivElement).removeEventListener(
          'touchend',
          touchEnd
        );
      };
    }
  }, [viewportHeight, dot, viewportYRef, count]);

  return [viewportYRef, positionY, setDot, dot];
};

export const Pad: FunctionComponent<PadProps> = provideIsTouchDevice(
  ({ children, isTouchDevice }) => {
    const [viewportYRef, positionY, setDot, dot] = usePosition(
      children.length,
      isTouchDevice
    );

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
  }
);
