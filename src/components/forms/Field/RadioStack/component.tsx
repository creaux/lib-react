import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { OnChange } from '../../../types/form';
import { IRadioStack, IRadio } from './types';

export interface RadioStackProps extends IRadioStack {
  onChange: OnChange;
}

export const RadioStack: FunctionComponent<RadioStackProps> = ({
  radios,
  id,
  active,
  onChange: handleChange,
}) => (
  <div className="btn-group w-100" data-toggle="buttons">
    {radios.map((radio: IRadio) => (
      <label
        className={cx('btn', 'btn-primary', { active: active === radio.id })}
        key={radio.id}
      >
        <FontAwesomeIcon icon={radio.icon} size="1x" className="mr-3" />
        <input
          type="radio"
          name={id}
          id={radio.id}
          className="sr-only"
          value={radio.id}
          checked={active === radio.id}
          onChange={handleChange}
        />
        {radio.title}
      </label>
    ))}
  </div>
);
