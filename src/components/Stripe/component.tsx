import React from "react";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

export const Stripe = () => (
  <Elements stripe={loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")}>
    <CardNumberElement />
    <CardExpiryElement />
    <CardCvcElement />
  </Elements>
);
