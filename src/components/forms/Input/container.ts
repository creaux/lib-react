import React, { createElement, FormEvent } from 'react';
import { Input } from './component';
import { IInputDataTyped } from './types';
import { OnChange } from '../../types/form';
import { FormContext } from '../Form/component';
import { OnValidChange } from './types';
import { Validation, ValidatorModel } from './hoc/validator';

export interface InputContainerProps extends IInputDataTyped {
  onChange: OnChange;
  validator: ValidatorModel;
  onValidChange: OnValidChange;
}

export interface InputContainerState {
  value: string;
  message: string;
  valid: boolean;
}

export class InputContainer extends React.Component<
  InputContainerProps,
  InputContainerState
> {
  static readonly contextType = FormContext;

  constructor(props: InputContainerProps) {
    super(props);

    this.state = {
      value: '',
      message: '',
      valid: true
    };
  }

  private get validations(): Validation[] {
    return this.validator.validations;
  }

  private get validator(): ValidatorModel {
    return this.props.validator;
  }

  private validChange(valid: boolean) {
    const { onValidChange: handleValidChange } = this.props;
    if (this.state.valid !== valid && !!handleValidChange) {
      handleValidChange(valid);
    }
  }

  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    const { onChange: handleChange } = this.props;

    const validation: Validation | undefined = this.validations.find(
      ({ validator }: Validation) => validator(value)
    );

    if (validation && validation.message) {
      this.setState({ message: validation.message, valid: false, value });
      this.validChange(false);
    } else {
      handleChange(e, value);
      this.setState({ message: this.validator.message, valid: true, value });
      this.validChange(true);
    }
  };

  render() {
    const { id, label, placeholder, type } = this.props;
    const { message, valid, value } = this.state;
    const props = {
      id,
      label,
      value,
      placeholder,
      type,
      message,
      valid,
      onChange: this.handleChange,
      formType: this.context
    };
    return createElement(Input, props);
  }
}
