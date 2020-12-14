import React, { FormEvent, FunctionComponent } from 'react';
import {
  ContactDetails,
  ContactDetailsState,
  OnContactChange,
} from '../contact-details.component';
import { Conditional } from '../conditional.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { OnDeliveryChange } from '../delivery.component';
import { Checkbox } from '../../forms/Checkbox';
import { Button, Type } from '../../forms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { OnValidChange } from '../../forms/Field/types';
import { OnChange } from '../form.types';
import { OnNextStep } from './stripe-checkout.types';
import { setContact, setContactValid } from './store/contact/contact.actions';
import { Builder } from '../../builder';
import { Contact } from './store/contact/contact.types';
import { IAbode } from '../../forms/Abode';
import {
  setDelivery,
  setDeliveryValid,
} from './store/delivery/delivery.actions';
import { Delivery } from './store/delivery/delivery.types';
import { setData, setTerms } from './store/conditions/conditions.actions';
import { RootState } from './store';
import { ICheckbox } from '../../forms/Checkbox/types';
import { I18n, Translations } from '../i18n.component';
import { Step } from './store/process/process.types';
import defaultTranslations from './stripe-delivery.default.json';

export interface DeliveryTranslations extends Translations {
  DELIVERY_HEADING: string;
  DELIVERY_CONTACT_DETAILS_HEADING: string;
  DELIVERY_DETAILS_HEADING: string;
  DELIVERY_NEXT_STEP_LABEL: string;
}

export interface StripeDeliveryProps {
  deliveryHeading: string;
  processingPayment: string;
}

export const StripeDelivery: FunctionComponent<StripeDeliveryProps> = ({
  deliveryHeading,
  processingPayment,
}) => {
  const dispatch = useDispatch();
  const translations = I18n.useTranslations<DeliveryTranslations>(
    defaultTranslations
  );

  const handleContactChange: OnContactChange = (
    contact: ContactDetailsState
  ) => {
    dispatch(
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

  const handleContactValidChange: OnValidChange = (valid: boolean) => {
    dispatch(setContactValid(valid));
  };

  const handleDeliveryChange: OnDeliveryChange = (delivery: IAbode) => {
    dispatch(
      setDelivery(
        Builder<Delivery>()
          .postcode(delivery.postcode.value)
          .street(delivery.street.value)
          .city(delivery.cities.value)
          .country(delivery.countries.value)
          .streetNo(delivery.streetNo.value)
          .build()
      )
    );
  };

  const handleDeliveryValidChange: OnValidChange = (valid: boolean) => {
    dispatch(setDeliveryValid(valid));
  };

  const terms: ICheckbox = Builder<ICheckbox>()
    .checked(
      useSelector<RootState>((state) => state.conditions.terms) as boolean
    )
    // TODO Implement terms translations useTranslations
    .title(terms.title)
    .id('terms')
    .build();

  const handleTermsChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    dispatch(setTerms(checked));
  };

  const data = useSelector<RootState>(
    (state: RootState) => state.conditions.data
  );

  const handleDataChange: OnChange<HTMLInputElement> = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const checked = e.currentTarget.checked;
    dispatch(setData(checked));
  };

  const isDeliveryStepValid = useSelector<RootState>(
    (state: RootState) =>
      state.contact.valid &&
      state.delivery.valid &&
      state.conditions.data &&
      state.conditions.terms
  );

  const handleNextStep: OnNextStep = (step: Step) => {};

  return (
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
          <Checkbox {...terms} onChange={handleTermsChange} disabled={false} />
        </div>
        <div className="mb-1">
          <Checkbox {...data} onChange={handleDataChange} disabled={false} />
        </div>
      </div>
      <Button
        type={Type.BUTTON}
        disabled={!isDeliveryStepValid}
        onClick={() => handleNextStep(Step.BILLING)}
      >
        {nextStepLabel}
      </Button>
    </div>
  );
};
