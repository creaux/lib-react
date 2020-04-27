import { compose } from "recompose";
import { InputContainer, InputContainerProps } from "../container";
import { HOC } from "../hoc/index";
import { InputTypeEnum } from "../types";
import { Validators } from "../../../../validators/validators";
import { Messages } from "../../../../validators/types";
import { TextProps } from "../Text/component";

type AlphaInnerProps = InputContainerProps;
type AlphaProps = TextProps & { messages: Messages };

export const Alpha = compose<AlphaInnerProps, AlphaProps>(
  HOC.type(InputTypeEnum.TEXT),
  HOC.validator(Validators.alpha)
)(InputContainer);
