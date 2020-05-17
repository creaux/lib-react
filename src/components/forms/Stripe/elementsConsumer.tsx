import React, { Component, ComponentType, FunctionComponent } from "react";
import { ElementsConsumer } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

export interface ElementsContextValue {
  stripe: Stripe | null;
  elements: StripeElements | null;
}

export function elementsProvider<
  P extends ElementsContextValue,
  O extends Omit<P, keyof ElementsContextValue>
>(Component: ComponentType<P>): FunctionComponent<O> {
  return function(props: O) {
    return (
      <ElementsConsumer>
        {({ stripe, elements }: ElementsContextValue) => (
          <Component
            stripe={stripe}
            elements={elements}
            {...((props as unknown) as P)}
          />
        )}
      </ElementsConsumer>
    );
  };
}
