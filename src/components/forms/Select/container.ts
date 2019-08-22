import React, { createElement, FormEvent } from 'react';
import { Select, SelectProps } from './component';
import { OnValidChange } from '../Input/types';

export interface SelectContainerProps extends SelectProps {
  onValidChange: OnValidChange;
}

export interface SelectContainerState {
  value?: string | number;
  valid: boolean;
}

export class SelectContainer extends React.Component<
  SelectContainerProps,
  SelectContainerState
> {
  constructor(props: SelectContainerProps) {
    super(props);
    this.state = {
      value: '',
      valid: false
    };
  }

  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.setState({ value: data.value, valid: true });
    this.props.onValidChange(this.state.valid);
    this.props.onChange(e, data);
  };

  render() {
    const { id, label, options, placeholder } = this.props;
    const { value } = this.state;
    const props = {
      id,
      label,
      value,
      options,
      onChange: this.handleChange,
      placeholder
    };
    return createElement(Select, props);
  }
}
