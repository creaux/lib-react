import React, { FunctionComponent } from 'react';
import { OnChange } from '../../components/form.types';
import { CheckboxBuilder, ICheckbox } from './types';

export class CheckboxPropsBuilder extends CheckboxBuilder {
  private onChange!: OnChange;

  withOnChange(onChange: OnChange) {
    this.onChange = onChange;
  }

  build(): CheckboxProps {
    return {
      ...super.build(),
      onChange: this.onChange,
    };
  }
}

export interface CheckboxProps extends ICheckbox {
  onChange: OnChange;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked,
  id,
  title,
  onChange: handleChange,
}) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      checked={checked}
      id={id}
      onChange={handleChange}
      name={id}
    />
    <label className="form-check-label small" htmlFor={id}>
      {title}
    </label>
  </div>
);
