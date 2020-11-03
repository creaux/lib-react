import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import { BackgroundColor } from '..';
import { BorderColor } from '../schema/border-color.enum';

export interface DotsProps {
  count: number;
  onDot: (position: number) => void;
  active: number;
  borderColor?: BorderColor;
  backgroundColor?: BackgroundColor;
}

export const Dots: FunctionComponent<DotsProps> = ({
  count,
  onDot: handleDot,
  active,
  borderColor = BorderColor.DARK,
  backgroundColor = BackgroundColor.DARK,
}) => {
  const dots = [...Array(count)];

  return (
    <div className="dots">
      {dots.map((_, i) => (
        <button
          key={i}
          className={cx('border', borderColor, 'dots__dot', {
            [backgroundColor]: active === i,
          })}
          // @ts-ignore
          onClick={() => handleDot(i)}
        ></button>
      ))}
    </div>
  );
};
