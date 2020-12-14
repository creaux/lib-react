import React, { FunctionComponent } from 'react';
import { ProductCard, ProductCardProps } from '../product-card.component';
import { Image, ImageElement } from '../image.component';
import { Button, ButtonProps, Type, Variants } from '../../forms/Button';
import { Stripe } from './stripe';
import { Viewport } from '../viewport.component';
import { Builder } from '../../builder';
import { Form, FormType } from '../../forms/Form';
import { Conditional } from '../conditional.component';
import {
  ContactDetails,
  ContactDetailsState,
} from '../contact-details.component';
import { ImageVariants } from '../image.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faHome } from '@fortawesome/free-solid-svg-icons';
import { IAbode } from '../../forms/Abode';
import { Checkbox } from '../../forms/Checkbox';
import { OnChange } from '../form.types';
import { ICheckbox } from '../../forms/Checkbox/types';
import { Delivery } from '../delivery.component';
import { Billing } from '../billing.component';
import { Step } from './store/process/process.types';

export interface StripeCheckoutProps {
  product: ProductCardProps;
  onGoBack: () => void;
  onPaymentValidChange: (valid: boolean) => void;
  isCheckoutValid: boolean;
  onCheckout: OnChange<HTMLFormElement>;
  isCheckoutDisabled: boolean;
  onPaymentReady: () => void;
  onContactChange: (data: ContactDetailsState) => void;
  onContactValidChange: (valid: boolean) => void;
  image: ImageElement;
  onDeliveryChange: (delivery: IAbode) => void;
  onDeliveryValidChange: (valid: boolean) => void;
  isBilling: ICheckbox;
  onIsBillingChange: OnChange<HTMLInputElement>;
  onBillingChange: (billing: IAbode) => void;
  onBillingValidChange: (valid: boolean) => void;
  terms: ICheckbox;
  onTermsChange: OnChange<HTMLInputElement>;
  data: ICheckbox;
  onDataChange: OnChange<HTMLInputElement>;
  back: string;
  paymentTitle: string;
  checkoutButton: string;
  processingPayment: string;
  deliveryHeading: string;
  billingHeading: string;
  onNextStep: (step: Step) => void;
  step: Step;
  isDeliveryStepValid: boolean;
}

export const StripeCheckout: FunctionComponent<StripeCheckoutProps> = ({
  product,
  back,
  onGoBack: handleGoBack,
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
  deliveryHeading,
  onDeliveryChange: handleDeliveryChange,
  onDeliveryValidChange: handleDeliveryValidChange,
  billingHeading,
  isBilling,
  onIsBillingChange: handleIsBillingChange,
  onBillingChange: handleBillingChange,
  onBillingValidChange: handleBillingValidChange,
  terms,
  data,
  onTermsChange: handleTermsChange,
  onDataChange: handleDataChange,
  onNextStep: handleNextStep,
  step,
  isDeliveryStepValid,
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
              <Conditional
                condition={step === Step.DELIVERY}
                when={() => (
                  <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
                    <h5>Getting your personal details</h5>
                    <hr className="w-100 mb-4" />
                    <h6>Contact details</h6>
                    <div className="mb-4">
                      <ContactDetails
                        disabled={false}
                        onContactChange={handleContactChange}
                        onContactValidChange={handleContactValidChange}
                      />
                    </div>
                    <div className="pb-4">
                      <h6>
                        <Conditional
                          condition={false}
                          when={() => (
                            <>
                              <span className="shipping__icon">
                                <FontAwesomeIcon icon={faHome} size="1x" />
                              </span>
                              &nbsp;&nbsp;
                            </>
                          )}
                        />
                        <span>{deliveryHeading}</span>
                      </h6>
                      <Delivery
                        onDeliveryChange={handleDeliveryChange}
                        onDeliveryValidChange={handleDeliveryValidChange}
                        disabled={false}
                      />
                    </div>
                    <div>
                      <div className="mb-1">
                        <Checkbox
                          {...terms}
                          onChange={handleTermsChange}
                          disabled={false}
                        />
                      </div>
                      <div className="mb-1">
                        <Checkbox
                          {...data}
                          onChange={handleDataChange}
                          disabled={false}
                        />
                      </div>
                    </div>
                    <Button
                      type={Type.BUTTON}
                      disabled={!isDeliveryStepValid}
                      onClick={() => handleNextStep(Step.BILLING)}
                    >
                      <Conditional
                        condition={false}
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
                        otherwise={() => <>Go to billing & payment</>}
                      />
                    </Button>
                  </div>
                )}
              />
              <Conditional
                condition={step === Step.BILLING}
                when={() => (
                  <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
                    <h5>Getting your billing details</h5>
                    <hr className="w-100 mb-4" />
                    <div>
                      <h6>
                        <Conditional
                          condition={false}
                          when={() => (
                            <>
                              <span className="shipping__icon">
                                <FontAwesomeIcon
                                  icon={faFileInvoiceDollar}
                                  size="1x"
                                />
                              </span>
                              &nbsp;&nbsp;
                            </>
                          )}
                        />
                        <span>{billingHeading}</span>
                      </h6>
                      <div className="mb-1">
                        <Checkbox
                          {...isBilling}
                          onChange={handleIsBillingChange}
                          disabled={isCheckoutDisabled}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <Conditional
                        condition={!isBilling.checked}
                        when={() => (
                          <Billing
                            onBillingChange={handleBillingChange}
                            onBillingValidChange={handleBillingValidChange}
                            disabled={isCheckoutDisabled}
                          />
                        )}
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
                )}
              />
            </div>
          </div>
        </div>
      </Form>
    </Viewport>
  );
};
