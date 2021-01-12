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
import { Conditional } from './utility/conditional.component';
import {
  backgroundColorMapper,
  borderColorMapper,
  Color,
  textColorMapper,
} from '../schema/color.enum';
import cx from 'classnames';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

export interface PadProps {
  children: ReactNode[];
  prev?: boolean;
  color?: Color;
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
  ({ children, isTouchDevice, prev = false, color = Color.DARK }) => {
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
              <div className={cx('pad__item', textColorMapper[color])} key={i}>
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
            backgroundColor={backgroundColorMapper[color]}
            borderColor={borderColorMapper[color]}
          />
        </div>
        <Conditional
          condition={prev}
          when={() => (
            <div className="pad__prev" onClick={prevSlide}>
              <BsChevronCompactUp />
            </div>
          )}
        ></Conditional>
        <div className="pad__next" onClick={nextSlide}>
          <BsChevronCompactDown />
        </div>
      </div>
    );
  }
);
