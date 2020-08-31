import React, { FunctionComponent } from 'react';
import { ProductDescription } from './product-description.component';
import { ProductDescriptionProps } from './product-description.component';
import { asBackgroundProps } from './image.component.mock';
import { Image } from './image.component';
import { Button, Variants } from '../forms/Button/index';
import { Shipping } from '../forms/Shipping/index';
import { Stripe } from '../forms/Stripe/index';
import { ShippingState } from '../forms/Shipping/container';
import { Viewport } from './viewport.component';
import { I18nConsumer } from './i18n.component';
import defaultTranslations from './one-checkout.en.json';

export interface OneCheckoutProps {
  product: ProductDescriptionProps;
  step: number;
  onStep: (step: number) => void;
  onShippingValidChange: (valid: boolean) => void;
  onShippingChange: (data: ShippingState) => void;
  isShippingValid: boolean;
}

export interface OneCheckoutTranslations {
  BUTTON_GO_BACK: string;
  BUTTON_NEXT: string;
}

export const OneCheckout: FunctionComponent<OneCheckoutProps> = ({
  product,
  onStep: handleStep,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  isShippingValid,
}) => {
  return (
    <I18nConsumer<OneCheckoutTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <Viewport>
          <div className="d-flex align-items-md-center">
            <div className="container-fluid one-checkout">
              <div className="row justify-content-between">
                <div className="col-md-5 col-s-12 justify-content-center d-flex flex-column pb-xs-4">
                  <Button variant={Variants.LINK} className="align-self-start">
                    {translations.BUTTON_GO_BACK}
                  </Button>
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
                  <Stripe disabled={!isShippingValid} onSubmit={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </Viewport>
      )}
    </I18nConsumer>
  );
};
