import React from "react";
import { storiesOf } from "@storybook/react";
import { OneCheckoutContainer } from "./container";
import { Form, FormType } from "../forms/Form/component";
import { props as productDescriptionProps } from "../ProductDescription/mocks";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const story = storiesOf("Templates/OneCheckout", module);

story.add("default", () => {
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_SECRET ? process.env.STRIPE_SECRET : ""
      )}
    >
      <Form type={FormType.INLINE} onSubmit={() => {}}>
        <OneCheckoutContainer product={productDescriptionProps} />
      </Form>
    </Elements>
  );
});
