import React, { createElement, FormEvent } from 'react';
import { RadioStack, RadioStackProps } from './component';

export interface RadioStackProps extends RadioStackProps {}

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
