import React, { FunctionComponent, useState } from "react";
import { ProductDescription } from "../ProductDescription";
import { ProductDescriptionProps } from "../ProductDescription/component";
import { asBackgroundProps } from "../Image/mock";
import { Image } from "../Image";
import { Button, Variants } from "../forms/Button";
import { Shipping } from "../forms/Shipping";
import { Stripe } from "../forms/Stripe";

export interface OneCheckoutProps {
  product: ProductDescriptionProps;
}

export const OneCheckout: FunctionComponent<OneCheckoutProps> = ({
  product
}) => {
  const [step, setStep] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Button variant={Variants.LINK}>Go back</Button>
          <ProductDescription {...product}>
            <Image {...asBackgroundProps} />
          </ProductDescription>
        </div>
        <div className="col-6">
          <Stripe />
        </div>
        <div className="col-6">
          <Shipping onFormChange={() => {}} onFormValidChange={() => {}} />
        </div>
      </div>
    </div>
  );
};
