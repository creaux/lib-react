import React, {
  Dispatch,
  FunctionComponent,
  ReactNode,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dots } from './dots.component';
import { provideIsTouchDevice } from './provide-is-touch-device.hoc';
import { useStateRef } from '../hooks/use-current-state.hook';

export interface PadProps {
  children: ReactNode[];
}

const usePosition = (
  count: number,
  isTouchDevice: boolean
): [
  RefObject<HTMLDivElement>,
  number,
  Dispatch<SetStateAction<number>>,
  number
] => {
  const [rerender, setRerender] = useState(0);
  const [dot, setDot] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const viewportYRef = useRef<HTMLDivElement>(null);
  const { current: refCurrent } = viewportYRef;
  const viewportHeight = useMemo(() => {
    if (refCurrent) return refCurrent.getBoundingClientRect().height;
    return 0;
    // Due to rerender has to be excluded as it is legit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refCurrent, rerender]);
  const [startYRef, setStartY] = useStateRef(0);
  const [stopExecutionRef, setStopExecution] = useStateRef(false);
  const viewportRefCurrent = viewportYRef.current;

  useEffect(() => {
    const resizeListener = () => {
      setRerender(rerender + 1);
    };
    // Make sure component rerenders when window is resized or portrait changed to landscape and oppose
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  const wheelListener = useCallback(
    (e: WheelEvent) => {
      if (stopExecutionRef.current) return;

      if (Math.sign(e.deltaY) === 1 && dot + 1 <= count - 1) {
        setDot(dot + 1);
      }

      if (Math.sign(e.deltaY) === -1 && dot - 1 >= 0) {
        setDot(dot - 1);
      }

      setStopExecution(true);

      setTimeout(() => {
        setStopExecution(false);
      }, 1200);
    },
    [dot, count, setStopExecution, stopExecutionRef]
  );

  const touchMoveListener = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  const touchStart = useCallback(
    (e: TouchEvent) => {
      setStartY(e.changedTouches[0].pageY);
    },
    [setStartY]
  );

  const touchEnd = useCallback(
    (e: TouchEvent) => {
      if (e.changedTouches[0].pageY > startYRef.current && dot > 0) {
        setDot(dot - 1);
      }

      if (e.changedTouches[0].pageY < startYRef.current && dot < count - 1) {
        setDot(dot + 1);
      }
    },
    [startYRef, dot, count]
  );

  useLayoutEffect(() => {
    setPositionY(-(dot * viewportHeight));
  }, [dot, viewportHeight]);

  useLayoutEffect(() => {
    if (viewportYRef && viewportRefCurrent) {
      (viewportRefCurrent as HTMLDivElement).addEventListener(
        'wheel',
        wheelListener
      );

      if (isTouchDevice) {
        (viewportRefCurrent as HTMLDivElement).addEventListener(
          'touchmove',
          touchMoveListener
        );
        (viewportRefCurrent as HTMLDivElement).addEventListener(
          'touchstart',
          touchStart
        );
        (viewportRefCurrent as HTMLDivElement).addEventListener(
          'touchend',
          touchEnd
        );
      }

      return () => {
        (viewportRefCurrent as HTMLDivElement).removeEventListener(
          'wheel',
          wheelListener
        );

        if (isTouchDevice) {
          (viewportRefCurrent as HTMLDivElement).removeEventListener(
            'touchmove',
            touchMoveListener
          );
          (viewportRefCurrent as HTMLDivElement).removeEventListener(
            'touchstart',
            touchStart
          );
          (viewportRefCurrent as HTMLDivElement).removeEventListener(
            'touchend',
            touchEnd
          );
        }
      };
    }
  }, [
    viewportHeight,
    dot,
    viewportYRef,
    count,
    isTouchDevice,
    touchEnd,
    touchMoveListener,
    touchStart,
    viewportRefCurrent,
    wheelListener,
  ]);

  return [viewportYRef, positionY, setDot, dot];
};

export const Pad: FunctionComponent<PadProps> = provideIsTouchDevice<PadProps>(
  ({ children, isTouchDevice }) => {
    const [viewportYRef, positionY, setDot, dot] = usePosition(
      children.length,
      isTouchDevice
    );

    const nextSlide = () => {
      if (dot + 1 <= children.length - 1) {
        setDot(dot + 1);
      }
    };

    const prevSlide = () => {
      if (dot - 1 >= 0) {
        setDot(dot - 1);
      }
    };

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
        <div className="pad__prev" onClick={prevSlide}>
          <svg
            width="3rem"
            height="3rem"
            viewBox="0 0 16 16"
            className="bi bi-chevron-compact-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
            />
          </svg>
        </div>
        <div className="pad__next" onClick={nextSlide}>
          <svg
            width="3rem"
            height="3rem"
            viewBox="0 0 16 16"
            className="bi bi-chevron-compact-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </div>
      </div>
    );
  }
);
