import React, { createElement, FormEvent } from 'react';
import { Select, SelectProps } from './component';

export interface SelectContainerProps extends SelectProps {}

export class SelectContainer extends React.Component<SelectContainerProps> {
  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.props.onChange(e, data);
  };

  render() {
    const { id, label, value, options } = this.props;
    const props = { id, label, value, options, onChange: this.handleChange };
    return createElement(Select, props);
  }
}
