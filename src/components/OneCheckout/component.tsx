import React, { FunctionComponent } from "react";
import { ProductDescription } from "../ProductDescription";
import { ProductDescriptionProps } from "../ProductDescription/component";
import { asBackgroundProps } from "../Image/mock";
import { Image } from "../Image";
import { Button, Variants } from "../forms/Button";
import { Shipping } from "../forms/Shipping";
import { Stripe } from "../forms/Stripe";
import { Conditional } from "../Conditional/component";
import { ShippingState } from "../forms/Shipping/container";
import { Viewport } from "../Viewport/component";
import { I18nConsumer } from "../I18n/component";
import defaultTranslations from "./en.json";

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
  step,
  onStep: handleStep,
  onShippingValidChange: handleShippingValidChange,
  onShippingChange: handleShippingChange,
  isShippingValid
}) => {
  return (
    <I18nConsumer<OneCheckoutTranslations>
      defaultTranslations={defaultTranslations}
    >
      {translations => (
        <Viewport className="d-flex align-items-center">
          <div className="container-fluid one-checkout">
            <div className="row justify-content-between">
              <div className="col-md-5 col-s-12  justify-content-center d-flex flex-column">
                <Button variant={Variants.LINK} className="align-self-start">
                  {translations.BUTTON_GO_BACK}
                </Button>
                <ProductDescription {...product}>
                  <Image {...asBackgroundProps} />
                </ProductDescription>
              </div>
              <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
                <Conditional
                  condition={step === 0}
                  when={() => (
                    <>
                      <div className="mb-4">
                        <Shipping
                          onFormChange={handleShippingChange}
                          onFormValidChange={handleShippingValidChange}
                        />
                      </div>
                      <Button
                        variant={Variants.PRIMARY}
                        onClick={() => handleStep(1)}
                        disabled={!isShippingValid}
                        extended
                      >
                        {translations.BUTTON_NEXT}
                      </Button>
                    </>
                  )}
                />
                <Conditional condition={step === 1} when={() => <Stripe />} />
              </div>
            </div>
          </div>
        </Viewport>
      )}
    </I18nConsumer>
  );
};
