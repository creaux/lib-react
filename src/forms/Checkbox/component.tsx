import React, { FunctionComponent } from 'react';
import { OnChange } from '../../components/form.types';
import { CheckboxBuilder, ICheckbox } from './types';

export class CheckboxPropsBuilder extends CheckboxBuilder {
  private onChange!: OnChange;
  private title!: string;

  withOnChange(onChange: OnChange) {
    this.onChange = onChange;
  }

  withTitle(title: string) {
    this.title = title;
  }

  build(): CheckboxProps {
    return {
      ...super.build(),
      title: this.title,
      onChange: this.onChange,
    };
  }
}

export interface CheckboxProps extends ICheckbox {
  onChange: OnChange;
  title: string;
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