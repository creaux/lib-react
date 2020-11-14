import React, { FunctionComponent } from 'react';
import { ProductDescription } from './product-description.component';
import { asBackgroundProps } from './image.component.mock';
import { Image } from './image.component';
import { Button, Type, Variants } from '../forms/Button/index';
import { Stripe } from './stripe';
import { Shipping } from './shipping';
import { Viewport } from './viewport.component';
import { ButtonProps } from '../forms/Button/index';
import { Builder } from '../builder';
import { StripeCheckoutI18nProps } from './stripe-checkout.i18n';

export interface OneCheckoutProps extends StripeCheckoutI18nProps {
  back: string;
}

export const StripeCheckout: FunctionComponent<OneCheckoutProps> = ({
  product,
  back,
  onGoBack: handleGoBack,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  isShippingValid,
}) => {
  const buttonBack = Builder<ButtonProps>()
    .className('align-self-start')
    .variant(Variants.LINK)
    .children(back)
    .onClick(handleGoBack)
    .build();

  return (
    <Viewport>
      <div className="d-flex align-items-md-center">
        <div className="container-fluid stripe-checkout">
          <div className="row justify-content-between">
            <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column pb-xs-4">
              <Button {...buttonBack} />
              <ProductDescription {...product}>
                <Image {...asBackgroundProps} />
              </ProductDescription>
            </div>
            <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
              <div className="mb-4">
                <Shipping
                  onFormChange={handleShippingChange}
                  onFormValidChange={handleShippingValidChange}
                />
              </div>
              <Stripe />
              <Button type={Type.SUBMIT} />
            </div>
          </div>
        </div>
      </div>
    </Viewport>
  );
};
