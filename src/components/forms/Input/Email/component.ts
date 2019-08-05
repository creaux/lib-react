import { Input } from '../index';
import { OnChange } from "../../../types/form";
import { InputTypeEnum, OnValidChange } from "../types";
import { Validators } from "../../../../validators";
import { Messages } from "../../../../validators/types";
import { compose } from 'recompose';
import { HOC } from "../hoc";
import { MessagesProps, ValidatorProps } from "../hoc/validator";
import { TypeProps } from "../hoc/type";

export interface EmailProps {
  placeholder: string;
  label?: string;
  value: string;
  id: string;
  onChange: OnChange;
  onValidChange: OnValidChange;
}

export const Email = compose<ValidatorProps & TypeProps & EmailProps, EmailProps & { messages: Messages }>(
  HOC.type<TypeProps>(InputTypeEnum.EMAIL),
  HOC.validator<ValidatorProps & MessagesProps>(Validators.email)
)(Input);
