import React, { FunctionComponent } from 'react';
import { ProductDescription } from './product-description.component';
import { ProductDescriptionProps } from './product-description.component';
import { asBackgroundProps } from './image.component.mock';
import { Image } from './image.component';
import { Button, Variants } from '../forms/Button/index';
import { ShippingAbstract } from '../forms/Shipping/index';
import { Stripe } from '../forms/Stripe/index';
import { ShippingAbstractState } from '../forms/Shipping/shipping.abstract.container';
import { Viewport } from './viewport.component';
import { ButtonProps } from '../forms/Button/index';
import { Builder } from '../builder';

export interface OneCheckoutProps {
  product: ProductDescriptionProps;
  step: number;
  goBack: string;
  onGoBack: () => void;
  onStep: (step: number) => void;
  onShippingValidChange: (valid: boolean) => void;
  onShippingChange: (data: ShippingAbstractState) => void;
  isShippingValid: boolean;
}

export const OneCheckout: FunctionComponent<OneCheckoutProps> = ({
  product,
  goBack,
  onGoBack: handleGoBack,
  onStep: handleStep,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  isShippingValid,
}) => {
  const buttonBack = Builder<ButtonProps>()
    .className('align-self-start')
    .variant(Variants.LINK)
    .children(goBack)
    .onClick(handleGoBack)
    .build();

  return (
    <Viewport>
      <div className="d-flex align-items-md-center">
        <div className="container-fluid one-checkout">
          <div className="row justify-content-between">
            <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column pb-xs-4">
              <Button {...buttonBack} />
              <ProductDescription {...product}>
                <Image {...asBackgroundProps} />
              </ProductDescription>
            </div>
            <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
              <div className="mb-4">
                <ShippingAbstract
                  onFormChange={handleShippingChange}
                  onFormValidChange={handleShippingValidChange}
                />
              </div>
              <Stripe disabled={!isShippingValid} onSubmit={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </Viewport>
  );
};
