import React, { FunctionComponent, useEffect, useState } from 'react';
import { IAbode } from '../../../../forms/Abode/index';
import { OnChange } from '../../../form.types';
import { Builder } from '../../../../builder';
import {
  BillingTranslation,
  BillingStepTranslations,
  useStripeBillingStepTranslations,
} from './billing-step-translations.hook';
import { Conditional } from '../../../utility/conditional.component';
import { Checkbox } from '../../../../forms/Checkbox/component';
import { Stripe } from '../../stripe/stripe.component';
import { Button } from '../../../../forms/Button/component';
import { Type } from '../../../../forms/Button/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { ICheckbox } from '../../../../forms/Checkbox/types';
import { Billing } from '../../../billing.component';

export interface BillingStepProps {
  disabled: boolean;
  onBillingChange: (billing: IAbode) => void;
  onBillingValidChange: (valid: boolean) => void;
  onSameAsDeliveryChange: (checked: boolean) => void;
  onPaymentValid: (valid: boolean) => void;
  onPaymentReady: () => void;
}

export const BillingStep: FunctionComponent<BillingStepProps> = ({
  disabled,
  onBillingChange: handleBillingChange,
  onBillingValidChange,
  onSameAsDeliveryChange,
  onPaymentValid,
  onPaymentReady,
}) => {
  const [billingValid, setBillingValid] = useState<boolean>(false);
  const [sameAsDeliveryFlag, setSameAsDeliveryChecked] = useState<boolean>(
    true
  );
  const [paymentValid, setPaymentValid] = useState<boolean>(false);
  const [paymentReady, setPaymentReady] = useState<boolean>(false);

  const billingStepValid =
    (sameAsDeliveryFlag || billingValid) && paymentReady && paymentValid;

  const translations: Map<
    keyof BillingStepTranslations,
    BillingStepTranslations[keyof BillingStepTranslations]
  > = useStripeBillingStepTranslations();

  const sameAsDelivery = Builder<ICheckbox>()
    .id('sameAsDelivery')
    .checked(sameAsDeliveryFlag)
    .title(
      translations.get(BillingTranslation.BILLING_IS_UNIQUE_LABEL) as string
    )
    .build();

  useEffect(() => {
    onBillingValidChange(billingValid);
  }, [billingValid]);

  useEffect(() => {
    onSameAsDeliveryChange(sameAsDeliveryFlag);
  }, [sameAsDeliveryFlag]);

  useEffect(() => {
    onPaymentValid(paymentValid);
  }, [paymentValid]);

  useEffect(() => {
    if (paymentReady) {
      onPaymentReady();
    }
  }, [paymentReady]);

  const handleBillingValidChange: (valid: boolean) => void = (valid) => {
    setBillingValid(valid);
  };

  const handleSameAsDeliveryChange: OnChange<HTMLInputElement> = (e) => {
    setSameAsDeliveryChecked(e.currentTarget.checked);
  };

  const handlePaymentValid: (error: boolean) => void = (error) => {
    setPaymentValid(error);
  };

  const handlePaymentReady: () => void = () => {
    setPaymentReady(true);
  };

  return (
    <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
      <h5>{translations.get(BillingTranslation.BILLING_HEADING)}</h5>
      <hr className="w-100 mb-4" />
      <div>
        <h6>
          <Conditional
            condition={false}
            when={() => (
              <>
                <span className="shipping__icon">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} size="1x" />
                </span>
                &nbsp;&nbsp;
              </>
            )}
          />
          <span>
            {translations.get(BillingTranslation.BILLING_DETAILS_HEADING)}
          </span>
        </h6>
        <div className="mb-1">
          <Checkbox
            {...sameAsDelivery}
            onChange={handleSameAsDeliveryChange}
            disabled={false}
          />
        </div>
      </div>
      <div className="mb-4">
        <Conditional
          condition={!sameAsDelivery.checked}
          when={() => (
            <Billing
              onBillingChange={handleBillingChange}
              onBillingValidChange={handleBillingValidChange}
              disabled={disabled}
            />
          )}
        />
      </div>
      <h6>{translations.get(BillingTranslation.BILLING_PAYMENT_HEADING)}</h6>
      <Stripe
        onPaymentValid={handlePaymentValid}
        disabled={false}
        onReady={handlePaymentReady}
      />
      <Button type={Type.SUBMIT} disabled={!billingStepValid}>
        <Conditional
          condition={false}
          when={() => (
            <>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              />
              {translations.get(BillingTranslation.BILLING_BUTTON_PROCESSING)}
              ...
            </>
          )}
          otherwise={() => (
            <>{translations.get(BillingTranslation.BILLING_BUTTON_PAY)}</>
          )}
        />
      </Button>
    </div>
  );
};
