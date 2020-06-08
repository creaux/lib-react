import React from "react";
import { storiesOf } from "@storybook/react";
import { Stripe } from "./container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const story = storiesOf("Organisms/forms/Stripe", module);

story.add("default", () => {
  return (
    <Elements
      stripe={loadStripe(
        process.env.STRIPE_SECRET ? process.env.STRIPE_SECRET : ""
      )}
    >
      <Stripe />
    </Elements>
  );
});
