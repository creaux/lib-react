import React, { FunctionComponent } from 'react';
import { faFileInvoiceDollar, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Conditional } from './utility/conditional.component';
import { Checkbox } from '../forms/Checkbox';
import { Abode } from '../forms/Abode';
import { ShippingI18nProps } from './shipping.i18n';

export interface ShippingComponentProps extends ShippingI18nProps {
  deliveryHeading: string;
  billingHeading: string;
}

export const ShippingComponent: FunctionComponent<ShippingComponentProps> = ({
  invoicing,
  delivery,
  terms,
  data,
  company,
  onGroupChange: handleGroupChange,
  onFieldChange: handleFieldChange,
  onValidGroupFieldChange: handleValidGroupFieldChange,
  deliveryHeading,
  billingHeading,
  disabled,
}) => {
  return (
    <div className="shipping">
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
        <Abode
          {...delivery}
          onFieldChange={handleGroupChange('delivery')}
          onValidFieldChange={handleValidGroupFieldChange('delivery')}
          disabled={disabled}
        />
      </div>
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
          <span>{billingHeading}</span>
        </h6>
        <div className="mb-1">
          <Checkbox
            {...company}
            onChange={handleFieldChange('company')}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="mb-4">
        <Conditional
          condition={!company.checked}
          when={() => (
            <Abode
              {...invoicing}
              onFieldChange={handleGroupChange('invoicing')}
              onValidFieldChange={handleValidGroupFieldChange('invoicing')}
              disabled={disabled}
            />
          )}
        />
      </div>
      <div>
        <div className="mb-1">
          <Checkbox
            {...terms}
            onChange={handleFieldChange('terms')}
            disabled={disabled}
          />
        </div>
        <div className="mb-1">
          <Checkbox
            {...data}
            onChange={handleFieldChange('data')}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
