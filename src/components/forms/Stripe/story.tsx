import React from "react";
import { storiesOf } from "@storybook/react";
import { Stripe } from "./container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const story = storiesOf("Organisms/forms/Stripe", module);

story.add("default", () => {
  return (
    <Elements stripe={loadStripe("pk_test_foDOWVGgi52RtXjMWXhszdkA00X2vCJ2ZB")}>
      <Stripe />
    </Elements>
  );
});
