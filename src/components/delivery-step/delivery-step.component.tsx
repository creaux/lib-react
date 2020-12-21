import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { ContactDetails, OnContactChange } from '../contact-details.component';
import { Conditional } from '../conditional.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  Delivery as DeliveryElement,
  OnDeliveryChange,
} from '../delivery.component';
import { Checkbox } from '../../forms/Checkbox/index';
import { Button, Type } from '../../forms/Button/index';
import { ICheckbox } from '../../forms/Checkbox/types';
import {
  DeliveryTranslation,
  useDeliveryTranslations,
} from './delivery-translations.hook';
import { Builder } from '../../builder';

export interface DeliveryStepProps {
  onContactChange: OnContactChange;
  onContactValidChange: (valid: boolean) => void;
  onDeliveryChange: OnDeliveryChange;
  onDeliveryValidChange: (valid: boolean) => void;
  onTermsChange: (checked: boolean) => void;
  onDataChange: (checked: boolean) => void;
  onNextStepChange: () => void;
  valid: boolean;
  disabled: boolean;
}

export const DeliveryStep: FunctionComponent<DeliveryStepProps> = ({
  onContactChange: handleContactChange,
  onContactValidChange: handleContactValidChange,
  onDeliveryChange: handleDeliveryChange,
  onDeliveryValidChange: handleDeliveryValidChange,
  onTermsChange,
  onDataChange,
  onNextStepChange: handleNextStep,
  disabled,
  valid,
}) => {
  const [terms, setTerms] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);

  const translations = useDeliveryTranslations();

  const termsProps = Builder<ICheckbox>()
    .checked(terms)
    .title(translations.get(DeliveryTranslation.DELIVERY_TERMS_LABEL) as string)
    .id('terms')
    .build();

  const dataProps = Builder<ICheckbox>()
    .checked(data)
    .title(translations.get(DeliveryTranslation.DELIVERY_DATA_LABEL) as string)
    .id('data')
    .build();

  useEffect(() => {
    onDataChange(data);
  }, [data]);

  useEffect(() => {
    onTermsChange(terms);
  }, [terms]);

  const handleTermsChange: (event: FormEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setTerms(event.currentTarget.checked);
  };

  const handleDataChange: (event: FormEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setData(event.currentTarget.checked);
  };

  return (
    <div className="col-md-6 col-s-12 justify-content-center d-flex flex-column border-left-1">
      <h5>{translations.get(DeliveryTranslation.DELIVERY_HEADING)}</h5>
      <hr className="w-100 mb-4" />
      <h6>
        {translations.get(DeliveryTranslation.DELIVERY_CONTACT_DETAILS_HEADING)}
      </h6>
      <div className="mb-4">
        <ContactDetails
          disabled={disabled}
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
          <span>
            {translations.get(DeliveryTranslation.DELIVERY_DETAILS_HEADING)}
          </span>
        </h6>
        <DeliveryElement
          onDeliveryChange={handleDeliveryChange}
          onDeliveryValidChange={handleDeliveryValidChange}
          disabled={disabled}
        />
      </div>
      <div>
        <div className="mb-1">
          <Checkbox
            {...termsProps}
            onChange={handleTermsChange}
            disabled={disabled}
          />
        </div>
        <div className="mb-1">
          <Checkbox
            {...dataProps}
            onChange={handleDataChange}
            disabled={disabled}
          />
        </div>
      </div>
      <Button
        type={Type.BUTTON}
        disabled={!valid || disabled}
        onClick={handleNextStep}
      >
        <Conditional
          condition={disabled}
          when={() => (
            <>
              {
                translations.get(
                  DeliveryTranslation.DELIVERY_NEXT_STEP_DISABLED_LABEL
                ) as string
              }
            </>
          )}
          otherwise={() => (
            <>
              {
                translations.get(
                  DeliveryTranslation.DELIVERY_NEXT_STEP_LABEL
                ) as string
              }
            </>
          )}
        />
      </Button>
    </div>
  );
};
