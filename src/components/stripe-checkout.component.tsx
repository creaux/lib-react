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

export interface StripeCheckoutProps extends StripeCheckoutI18nProps {
  back: string;
  paymentTitle: string;
  checkoutButton: string;
}

export const StripeCheckout: FunctionComponent<StripeCheckoutProps> = ({
  product,
  back,
  onGoBack: handleGoBack,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  paymentTitle,
  checkoutButton,
  isCheckoutValid,
  onPaymentValidChange: handlePaymentValid,
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
              <h6>{paymentTitle}</h6>
              <Stripe onPaymentValid={handlePaymentValid} />
              <Button type={Type.SUBMIT} disabled={!isCheckoutValid}>
                {checkoutButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Viewport>
  );
};
