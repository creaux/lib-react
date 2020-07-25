import React, { createElement, FormEvent } from 'react';
import { RadioStack, RadioStackProps as RadioStackProps2 } from './component';

export interface RadioStackProps extends RadioStackProps2 {}

export class RadioStackContainer extends React.Component<RadioStackProps> {
  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.props.onChange(e, data);
  };

  render() {
    const { id, radios, active } = this.props;
    const props = { id, radios, active, onChange: this.handleChange };
    return createElement(RadioStack, props);
  }
}
