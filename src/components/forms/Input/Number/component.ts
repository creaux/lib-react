import { InputContainer } from "../container";
import { OnChange } from "../../../types/form";
import { InputTypeEnum, OnValidChange } from "../types";
import { Validators } from "../../../../validators";
import { Messages } from "../../../../validators/types";
import { compose } from "recompose";
import { HOC } from "../hoc";
import {
  MessagesProps,
  ValidatorProps
} from "../../../../validators/validator";
import { TypeProps } from "../hoc/type";

export interface NumberProps {
  placeholder: string;
  label?: string;
  value: string;
  id: string;
  onChange: OnChange;
  onValidChange: OnValidChange;
  messages: Messages;
}

export type NumberInnerProps = ValidatorProps &
  TypeProps &
  Omit<NumberProps, "messages">;
export type NumberOuterProps = NumberProps;

export const Number = compose<NumberInnerProps, NumberOuterProps>(
  HOC.type<TypeProps>(InputTypeEnum.NUMBER),
  HOC.validator<ValidatorProps & MessagesProps>(Validators.number)
)(InputContainer);
