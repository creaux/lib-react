import { Input } from '../index';
import { OnChange } from '../../../types/form';
import { InputTypeEnum, OnValidChange } from '../types';
import { Validators } from '../../../../validators';
import { Messages } from '../../../../validators/types';
import { compose } from 'recompose';
import { HOC } from '../hoc';
import { MessagesProps, ValidatorProps } from '../hoc/validator';
import { TypeProps } from '../hoc/type';

export interface TextProps {
  placeholder: string;
  label?: string;
  value: string;
  id: string;
  onChange: OnChange;
  onValidChange: OnValidChange;
}

export type TextInnerProps = ValidatorProps & TypeProps & TextProps;
export type TextOuterProps = TextProps & { messages: Messages };

export const Text = compose<TextInnerProps, TextOuterProps>(
  HOC.type<TypeProps>(InputTypeEnum.TEXT),
  HOC.validator<ValidatorProps & MessagesProps>(Validators.text)
)(Input);
