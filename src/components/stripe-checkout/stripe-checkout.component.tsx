import React, { FunctionComponent } from 'react';
import { ProductCard } from '../product-card.component';
import { Image } from '../image.component';
import { Button, Type, Variants } from '../../forms/Button';
import { Stripe } from './stripe';
import { Shipping } from '../shipping';
import { Viewport } from '../viewport.component';
import { ButtonProps } from '../../forms/Button';
import { Builder } from '../../builder';
import { StripeCheckoutI18nProps } from './stripe-checkout.i18n';
import { Form, FormType } from '../../forms/Form';
import { Conditional } from '../conditional.component';
import { ContactDetails } from '../contact-details.component';
import { ImageVariants } from '../image.types';

export interface StripeCheckoutProps extends StripeCheckoutI18nProps {
  back: string;
  paymentTitle: string;
  checkoutButton: string;
  processingPayment: string;
}

export const StripeCheckout: FunctionComponent<StripeCheckoutProps> = ({
  product,
  back,
  onGoBack: handleGoBack,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  onContactChange: handleContactChange,
  onContactValidChange: handleContactValidChange,
  paymentTitle,
  checkoutButton,
  processingPayment,
  isCheckoutValid,
  onPaymentValidChange: handlePaymentValid,
  onCheckout,
  isCheckoutDisabled,
  onPaymentReady: handlePaymentReady,
  image,
}) => {
  const buttonBack = Builder<ButtonProps>()
    .className('align-self-start')
    .variant(Variants.LINK)
    .children(back)
    .onClick(handleGoBack)
    .build();

  return (
    <Viewport>
      <Form type={FormType.FLOATING} onSubmit={onCheckout}>
        <div className="d-flex align-items-md-center">
          <div className="container-fluid stripe-checkout">
            <div className="row justify-content-between">
              <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column pb-xs-4">
                <Button {...buttonBack} disabled={isCheckoutDisabled} />
                <ProductCard {...product}>
                  <Image {...image} variant={ImageVariants.BACKGROUND} />
                </ProductCard>
              </div>
              <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
                <h6>Contact details</h6>
                <div className="mb-4">
                  <ContactDetails
                    disabled={isCheckoutDisabled}
                    onContactChange={handleContactChange}
                    onContactValidChange={handleContactValidChange}
                  />
                </div>
                <div className="mb-4">
                  <Shipping
                    onFormChange={handleShippingChange}
                    onFormValidChange={handleShippingValidChange}
                    disabled={isCheckoutDisabled}
                  />
                </div>
                <h6>{paymentTitle}</h6>
                <Stripe
                  onPaymentValid={handlePaymentValid}
                  disabled={isCheckoutDisabled}
                  onReady={handlePaymentReady}
                />
                <Button
                  type={Type.SUBMIT}
                  disabled={!isCheckoutValid || isCheckoutDisabled}
                >
                  <Conditional
                    condition={isCheckoutDisabled}
                    when={() => (
                      <>
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        {processingPayment}...
                      </>
                    )}
                    otherwise={() => <>{checkoutButton}</>}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Viewport>
  );
};
