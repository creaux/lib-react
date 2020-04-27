import { FormEvent, Component } from "react";
import { OnChange } from "../../types/form";
import { Validation, ValidatorModel } from "../../../validators/validator";
import { OnValidChange } from "./type";

export interface AbstractFieldContainerProps {
  id: string;
  onChange: OnChange;
  validator: ValidatorModel;
  onValidChange: OnValidChange;
  placeholder: string;
  label?: string;
}

export interface AbstractFieldContainerState {
  value: string;
  message: string;
  valid: boolean;
}

export abstract class AbstractFieldContainer<P> extends Component<
  AbstractFieldContainerProps & P,
  AbstractFieldContainerState
> {
  constructor(props: AbstractFieldContainerProps) {
    super(props);

    this.state = {
      value: "",
      message: "",
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

  protected handleChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
}
