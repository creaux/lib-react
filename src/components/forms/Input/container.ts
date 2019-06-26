import React, { createElement, FormEvent } from 'react';
import { Input, InputProps } from './component';

export interface InputContainerProps extends InputProps {}

export class InputContainer extends React.Component<InputContainerProps> {
  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.props.onChange(e, data);
  };

  render() {
    const { id, label, value, placeholder, type } = this.props;
    const props = {
      id,
      label,
      value,
      placeholder,
      type,
      onChange: this.handleChange
    };
    return createElement(Input, props);
  }
}
