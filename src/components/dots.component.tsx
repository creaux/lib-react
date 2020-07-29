import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export interface DotsProps {
  count: number;
  onDot: (position: number) => void;
  active: number;
}

export const Dots: FunctionComponent<DotsProps> = ({
  count,
  onDot: handleDot,
  active,
}) => {
  const dots = [...Array(count)];

  return (
    <div className="dots">
      {dots.map((_, i) => (
        <button
          key={i}
          className={cx('dots__dot', { 'dots__dot--active': active === i })}
          // @ts-ignore
          onClick={() => handleDot(i)}
        ></button>
      ))}
    </div>
  );
};
