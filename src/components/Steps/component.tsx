import React, { FunctionComponent } from 'react';
import cx from 'classnames';

const circle = cx(
  'd-inline-block',
  'rounded-circle',
  'w-10',
  'circle',
  'align-middle',
  'text-center',
  'mr-2',
  'text-light'
);

const label = cx('text-center', 'align-middle', 'label');

export interface StepsProps {
  steps: string[];
  active: number;
  onStep?: (id: number) => () => void;
}

export const Steps: FunctionComponent<StepsProps> = ({
  steps,
  active,
  onStep = () => () => {}
}) => (
  <ul className="steps list-group list-group-horizontal list-group-flush justify-content-between mb-3">
    {steps.map((step, i) => (
      <li
        key={i}
        className={cx(
          'list-group-item',
          'border-0',
          { 'step-active': i === active },
          'px-0',
          'py-0'
        )}
      >
        <button onClick={onStep(i)} className="btn btn-link">
          <span className={circle}>{i + 1}</span>
          <span className={label}>{step}</span>
        </button>
      </li>
    ))}
  </ul>
);
