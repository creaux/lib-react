import React, { FunctionComponent } from 'react';
import { ProductDescription } from '../ProductDescription';
import { ProductDescriptionProps } from '../ProductDescription/component';
import { asBackgroundProps } from '../Image/mock';
import { Image } from '../Image';
import { Button, Variants } from '../forms/Button';
import { Shipping } from '../forms/Shipping';

export interface OneCheckoutProps {
  product: ProductDescriptionProps;
}

export const OneCheckout: FunctionComponent<OneCheckoutProps> = ({ product }) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Button variant={Variants.LINK}>Go back</Button>
          <ProductDescription {...product}>
            <Image {...asBackgroundProps} />
          </ProductDescription>
        </div>
        <div className="col-6">
          <Shipping onFormSubmit={() => {}} />
        </div>
      </div>
    </div>
  )
};