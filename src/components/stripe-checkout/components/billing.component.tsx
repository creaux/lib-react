import React, { FunctionComponent } from 'react';
import { Conditional } from '../../conditional.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../../../forms/Checkbox';
import { Billing as BillingElement } from '../../billing.component';
import { Stripe } from './stripe.component';
import { Button, Type } from '../../../forms/Button';
import {
  BillingTranslation,
  BillingTranslations,
  useStripeBillingTranslations,
} from '../hooks/translations/billing-translations.hook';
import { useBillingSameAsDeliveryMapper } from '../hooks/billing/billing-same-as-delivery-mapper.hook';
import { ICheckbox } from '../../../forms/Checkbox/types';
import { useBillingStoreFacade } from '../hooks/facades/billing-store-facade.hook';
import { useBillingValid } from '../hooks/billing/billing-valid.hook';
import { BillingStoreFacade } from '../facade/billing-store.facade';

export const Billing: FunctionComponent = () => {
  const translations: Map<
    keyof BillingTranslations,
    BillingTranslations[keyof BillingTranslations]
  > = useStripeBillingTranslations();
  const sameAsDelivery: ICheckbox = useBillingSameAsDeliveryMapper(
    translations.get(BillingTranslation.BILLING_IS_UNIQUE_LABEL) as string
  );
  const handlers: BillingStoreFacade = useBillingStoreFacade();
  const isStripeBillingValid = useBillingValid();
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
            onChange={handlers.handleSameAsDeliveryChange}
            disabled={false}
          />
        </div>
      </div>
      <div className="mb-4">
        <Conditional
          condition={!sameAsDelivery.checked}
          when={() => (
            <BillingElement
              onBillingChange={handlers.handleBillingChange}
              onBillingValidChange={handlers.handleBillingValidChange}
              disabled={false}
            />
          )}
        />
      </div>
      <h6>{translations.get(BillingTranslation.BILLING_PAYMENT_HEADING)}</h6>
      <Stripe
        onPaymentValid={handlers.handlePaymentValid}
        disabled={false}
        onReady={handlers.handlePaymentReady}
      />
      <Button type={Type.SUBMIT} disabled={!isStripeBillingValid}>
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
