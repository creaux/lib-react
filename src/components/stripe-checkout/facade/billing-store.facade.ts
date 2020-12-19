import { Dispatch } from 'redux';
import { OnChange } from '../../form.types';
import {
  setBilling,
  setBillingSameAsDelivery,
  setBillingValid,
} from '../store/billing/billing.actions';
import { IAbode } from '../../../forms/Abode';
import { FormEvent } from 'react';
import { Billing } from '../store/billing/billing.types';
import { Builder } from '../../../builder';
import {
  setPaymentReady,
  setPaymentValid,
} from '../store/payment-intent/payment-intent.actions';

export class BillingStoreFacade {
  constructor(private readonly dispatch: Dispatch) {}

  readonly handleSameAsDeliveryChange: OnChange<HTMLInputElement> = (
    input: FormEvent<HTMLInputElement>
  ) => {
    this.dispatch(setBillingSameAsDelivery(input.currentTarget.checked));
  };

  readonly handleBillingChange: (billing: IAbode) => void = (
    billing: IAbode
  ) => {
    this.dispatch(
      setBilling(
        Builder<Billing>()
          .postcode(billing.postcode.value)
          .street(billing.street.value)
          .streetNo(billing.streetNo.value)
          .vat(billing.vat?.value)
          .company(billing.company?.value)
          .country(billing.countries.value)
          .city(billing.cities.value)
          .build()
      )
    );
  };

  readonly handleBillingValidChange: (valid: boolean) => void = (
    valid: boolean
  ) => {
    this.dispatch(setBillingValid(valid));
  };

  readonly handlePaymentValid: (valid: boolean) => void = (valid: boolean) => {
    this.dispatch(setPaymentValid(valid));
  };

  readonly handlePaymentReady: () => void = () => {
    this.dispatch(setPaymentReady(true));
  };
}
