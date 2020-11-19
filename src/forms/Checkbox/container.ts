import React, { createElement, FormEvent } from 'react';
import { Checkbox, CheckboxProps } from './component';

export interface CheckboxContainerProps extends CheckboxProps {}

export class CheckboxContainer extends React.Component<CheckboxContainerProps> {
  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.props.onChange(e, data);
  };

  render() {
    const { id, checked, title, disabled } = this.props;
    const props = { id, checked, title, onChange: this.handleChange, disabled };
    return createElement(Checkbox, props);
  }
}
