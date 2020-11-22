import { Component, createElement, FormEvent } from 'react';
import { Field } from './component';
import { FormTypeContext } from '../Form/component';
import { FieldType, InputTypeEnum, IOption, OnValidChange } from './types';
import { Message, MessageBuilder, MessageType } from './hoc/validators/types';
import { Validation } from './hoc/validators/validator/validator';
import { OnChange } from '../../components/form.types';

export interface FieldContainerProps {
  id: string;
  onChange: OnChange;
  validator: [Validation, Validation, Validation];
  onValidChange: OnValidChange;
  placeholder: string;
  label?: string;
  type: InputTypeEnum;
  fieldType?: FieldType;
  options?: IOption[];
  disabled: boolean;
}

export interface FieldContainerState {
  value: string;
  message: Message;
}

export class FieldContainer extends Component<
  FieldContainerProps,
  FieldContainerState
> {
  static readonly contextType = FormTypeContext;

  private get defaultMessage(): Message {
    return new MessageBuilder()
      .withType(MessageType.default)
      .withValue(this.props.validator[MessageType.default].message.value)
      .build();
  }

  constructor(props: FieldContainerProps) {
    super(props);

    this.state = {
      value: '',
      message: this.defaultMessage,
    };
  }

  private get validator(): Validation[] {
    return this.props.validator;
  }

  private validChange(valid: boolean) {
    const { onValidChange: handleValidChange } = this.props;
    handleValidChange(valid);
  }

  public readonly handleChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.currentTarget;
    const { onChange: handleChange } = this.props;

    const validation: Validation | undefined = this.validator.find(
      ({ validator }: Validation) => {
        return validator(value);
      }
    );

    if (validation && validation.message) {
      this.setState({ message: validation.message, value });

      handleChange(e, value);

      if (validation.message.type === MessageType.valid) {
        this.validChange(true);
      } else {
        this.validChange(false);
      }
    } else {
      throw new Error(
        'Validators do not cover this use case please revise them.'
      );
    }
  };

  render() {
    const {
      id,
      label,
      placeholder,
      type,
      fieldType,
      options,
      disabled,
    } = this.props;
    const { message, value } = this.state;
    const props = {
      id,
      label,
      value,
      placeholder,
      type,
      message,
      onChange: this.handleChange,
      formType: this.context,
      fieldType,
      options,
      disabled,
    };
    return createElement(Field, props);
  }
}
