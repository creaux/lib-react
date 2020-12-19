import React, { FunctionComponent } from 'react';
import { ProductCard, ProductCardProps } from '../../product-card.component';
import { Image, ImageProps } from '../../image.component';
import { Button, ButtonProps, Variants } from '../../../forms/Button';
import { Viewport } from '../../viewport.component';
import { Builder } from '../../../builder';
import { Form, FormType } from '../../../forms/Form';
import { Conditional } from '../../conditional.component';
import { ImageVariants } from '../../image.types';
import { Step } from '../store/process/process.types';
import { Delivery } from './delivery.component';
import { Billing } from './billing.component';
import { useCheckoutStoreFacade } from '../hooks/facades/checkout-handlers.hook';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeElements, Stripe } from '@stripe/stripe-js';
import { useFetchProduct } from '../hooks/checkout/fetch-product.hook';
import { useStripeProduct } from '../hooks/checkout/product.hook';
import { useStep } from '../hooks/checkout/step.hook';
import { ProductState } from '../store/product/product.types';
import { Succeeded } from './succeeded.component';
import { Failed } from './failed.component';
import {
  CheckoutTranslation,
  useCheckoutTranslations,
} from '../hooks/translations/checkout-translations.hook';

export interface CheckoutProps {
  productId: string;
}

export const Checkout: FunctionComponent<CheckoutProps> = ({ productId }) => {
  useFetchProduct(productId);

  const product: ProductState = useStripeProduct();

  const translations = useCheckoutTranslations();

  const buttonBack = Builder<ButtonProps>()
    .className('align-self-start')
    .variant(Variants.LINK)
    .children(translations.get(CheckoutTranslation.BACK) as string)
    .onClick(() => {})
    .build();

  const stripe = useStripe();
  const elements = useElements();

  const handlers = useCheckoutStoreFacade(
    stripe as Stripe,
    elements as StripeElements
  );

  const step = useStep();

  const imageProps: ImageProps = Builder<ImageProps>()
    .src(product.images[0])
    .build();

  const productCardProps = Builder<ProductCardProps>()
    .id(product.id)
    .name(product.name)
    .price(product.price)
    .build();

  return (
    <Viewport>
      <Conditional
        condition={step === Step.DELIVERY || step === Step.BILLING}
        when={() => (
          <Form type={FormType.FLOATING} onSubmit={handlers.handleCheckout}>
            <div className="d-flex align-items-md-center">
              <div className="container-fluid stripe-checkout">
                <div className="row justify-content-between">
                  <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column pb-xs-4">
                    <Button {...buttonBack} disabled={false} />
                    <ProductCard {...productCardProps}>
                      <Image
                        {...imageProps}
                        variant={ImageVariants.BACKGROUND}
                      />
                    </ProductCard>
                  </div>
                  <Conditional
                    condition={step === Step.DELIVERY}
                    when={() => <Delivery />}
                  />
                  <Conditional
                    condition={step === Step.BILLING}
                    when={() => <Billing />}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      />
      <Conditional
        condition={step === Step.SUCCEEDED}
        when={() => <Succeeded />}
      />
      <Conditional condition={step === Step.FAILED} when={() => <Failed />} />
    </Viewport>
  );
};
