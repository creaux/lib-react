import React, { FunctionComponent, useEffect, useState } from 'react';
import cx from 'classnames';

export interface DotsProps {
  count: number;
  onDot: (position: number) => void;
  active: number;
}

export const Dots: FunctionComponent<DotsProps> = ({
  count,
  onDot,
  active
}) => {
  const [dot, setDot] = useState();
  const dots = [...Array(count)];

  useEffect(() => {
    if (dot) {
      // @ts-ignore
      onDot(dot);
    }
  });

  return (
    <div className="dots">
      {dots.map((_, i) => (
        <button
          key={i}
          className={cx('dots__dot', { 'dots__dot--active': dot === i })}
          // @ts-ignore
          onClick={() => setDot(i)}
        ></button>
      ))}
    </div>
  );
};
