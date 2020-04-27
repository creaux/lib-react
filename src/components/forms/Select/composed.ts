import { compose } from "recompose";
import { SelectContainer, SelectContainerProps } from "./container";
import { validator, Validators } from "../../../validators";
import { Messages } from "../../../validators/types";

export interface SelectProps
  extends Omit<
    Omit<Omit<SelectContainerProps, "valid">, "message">,
    "validator"
  > {
  messages: Messages;
}

type SelectInnerProps = SelectContainerProps;

export const Select = compose<SelectInnerProps, SelectProps>(
  validator(Validators.text)
)(SelectContainer);
