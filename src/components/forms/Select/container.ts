import { createElement, FormEvent } from "react";
import { Select } from "./component";
import { ISelect } from "./types";
import {
  AbstractFieldContainer,
  AbstractFieldContainerProps
} from "../AbstractField/component";

export interface SelectContainerProps
  extends AbstractFieldContainerProps,
    ISelect {
  className?: string;
}

export class SelectContainer extends AbstractFieldContainer<
  SelectContainerProps
> {
  handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    let data = { ...this.props, value: e.currentTarget.value };
    this.setState({ value: data.value, valid: true });
    this.props.onValidChange(this.state.valid);
    this.props.onChange(e, data);
  };

  render() {
    const { id, label, placeholder, options, className } = this.props;
    const { message, valid, value } = this.state;
    const props = {
      id,
      label,
      value,
      placeholder,
      options,
      message,
      valid,
      onChange: this.handleChange,
      // FIXME WTF?
      formType: this.context,
      className
    };
    return createElement(Select, props);
  }
}
