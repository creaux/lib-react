import React, { FunctionComponent } from 'react';
import { ContactDetails } from '../../contact-details.component';
import { Conditional } from '../../conditional.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Delivery as DeliveryElement } from '../../delivery.component';
import { Checkbox } from '../../../forms/Checkbox';
import { Button, Type } from '../../../forms/Button';
import { ICheckbox } from '../../../forms/Checkbox/types';
import { Step } from '../store/process/process.types';
import { useDeliveryStoreFacade } from '../hooks/facades/delivery-store-facade.hook';
import { useTermsMapper } from '../hooks/delivery/terms-mapper.hook';
import { useStripeDeliveryDataMapper } from '../hooks/delivery/data-mapper.hook';
import { useDeliveryStepValid } from '../hooks/delivery/delivery-valid.hook';
import {
  DeliveryTranslation,
  useDeliveryTranslations,
} from '../hooks/translations/delivery-translations.hook';
import { useDeliveryDisabled } from '../hooks/delivery/delivery-disabled.hook';

export const Delivery: FunctionComponent = () => {
  const handlers = useDeliveryStoreFacade();

  const translations = useDeliveryTranslations();

  const terms: ICheckbox = useTermsMapper(
    translations.get(DeliveryTranslation.DELIVERY_TERMS_LABEL) as string
  );

  const data: ICheckbox = useStripeDeliveryDataMapper(
    translations.get(DeliveryTranslation.DELIVERY_DATA_LABEL) as string
  );

  const isDeliveryStepValid = useDeliveryStepValid();

  const disabled = useDeliveryDisabled();

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
          onContactChange={handlers.handleContactChange}
          onContactValidChange={handlers.handleContactValidChange}
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
          onDeliveryChange={handlers.handleDeliveryChange}
          onDeliveryValidChange={handlers.handleDeliveryValidChange}
          disabled={disabled}
        />
      </div>
      <div>
        <div className="mb-1">
          <Checkbox
            {...terms}
            onChange={handlers.handleTermsChange}
            disabled={disabled}
          />
        </div>
        <div className="mb-1">
          <Checkbox
            {...data}
            onChange={handlers.handleDataChange}
            disabled={disabled}
          />
        </div>
      </div>
      <Button
        type={Type.BUTTON}
        disabled={!isDeliveryStepValid || disabled}
        onClick={() => handlers.handleNextStep(Step.BILLING)}
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
