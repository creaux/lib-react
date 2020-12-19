import { Dispatch } from 'redux';
import {
  ContactDetailsState,
  OnContactChange,
} from '../../contact-details.component';
import { setContact, setContactValid } from '../store/contact/contact.actions';
import { Builder } from '../../../builder';
import { Contact } from '../store/contact/contact.types';
import { OnValidChange } from '../../../forms/Field/types';
import { OnDeliveryChange } from '../../delivery.component';
import { IAbode } from '../../../forms/Abode';
import {
  setDelivery,
  setDeliveryValid,
} from '../store/delivery/delivery.actions';
import { DeliveryStore } from '../store/delivery/delivery.types';
import { OnChange } from '../../form.types';
import { FormEvent } from 'react';
import { setData, setTerms } from '../store/conditions/conditions.actions';
import { OnNextStep } from '../types/stripe-checkout.types';
import { Step } from '../store/process/process.types';
import { setStep } from '../store/process/process.actions';
import { ThunkDispatchType } from '../store/thunk.type';
import { fetchPaymentIntent } from '../store/payment-intent/payment-intent.thunk';

export class DeliveryStoreFacade {
  constructor(private readonly dispatch: ThunkDispatchType) {}

  readonly handleContactChange: OnContactChange = (
    contact: ContactDetailsState
  ) => {
    this.dispatch(
      setContact(
        Builder<Contact>()
          .email(contact.email.value)
          .phone(contact.number.value)
          .forename(contact.forname.value)
          .surname(contact.surname.value)
          .build()
      )
    );
  };

  readonly handleContactValidChange: OnValidChange = (valid: boolean) => {
    this.dispatch(setContactValid(valid));
  };

  readonly handleDeliveryChange: OnDeliveryChange = (delivery: IAbode) => {
    this.dispatch(
      setDelivery(
        Builder<DeliveryStore>()
          .postcode(delivery.postcode.value)
          .street(delivery.street.value)
          .city(delivery.cities.value)
          .country(delivery.countries.value)
          .streetNo(delivery.streetNo.value)
          .build()
      )
    );
  };

  readonly handleDeliveryValidChange: OnValidChange = (valid: boolean) => {
    this.dispatch(setDeliveryValid(valid));
  };

  readonly handleTermsChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    this.dispatch(setTerms(checked));
  };

  readonly handleDataChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    this.dispatch(setData(checked));
  };

  readonly handleNextStep: OnNextStep = async () => {
    await this.dispatch(fetchPaymentIntent());
    this.dispatch(setStep(Step.BILLING));
  };
}
