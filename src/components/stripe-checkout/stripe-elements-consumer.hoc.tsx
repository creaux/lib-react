import React, { ComponentType, FunctionComponent } from 'react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import { Stripe, StripeElements } from '@stripe/stripe-js';

export interface ElementsContextValue {
  stripe: Stripe | null;
  elements: StripeElements | null;
}

export function stripeElementsConsumer<P, O extends ElementsContextValue>(
  Component: ComponentType<O>
): FunctionComponent<P> {
  return function (props: P) {
    return (
      <ElementsConsumer>
        {({ stripe, elements }: ElementsContextValue) => (
          <Component
            stripe={stripe}
            elements={elements}
            {...((props as unknown) as O)}
          />
        )}
      </ElementsConsumer>
    );
  };
}
