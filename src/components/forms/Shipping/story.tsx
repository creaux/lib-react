import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Shipping as ShippingContainer,
  ShippingProps,
  ShippingState
} from "./container";
import { Form, FormType } from "../Form/component";

const propsContainer: ShippingProps = {
  onFormSubmit(data: ShippingState["data"]) {
    console.log(data);
  }
};

const story = storiesOf("Organisms/forms/Shipping", module);

story.add("default", () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <ShippingContainer {...propsContainer} />
  </Form>
));

story.add("onplace", () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <ShippingContainer {...propsContainer} />
  </Form>
));

story.add("inline", () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <ShippingContainer {...propsContainer} />
  </Form>
));
