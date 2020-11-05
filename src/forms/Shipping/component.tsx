import React, { FunctionComponent } from 'react';
import { Abode, IAbode } from '../Abode';
import {
  OnFieldChange,
  OnGroupChange,
  OnValidGroupFieldChange,
} from '../../components/form.types';
import { IShippingFields, IShippingGroups } from './types';
import { faFileInvoiceDollar, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from '../Checkbox';
import { Conditional } from '../../components/conditional.component';
import { CSSTransition } from 'react-transition-group';

export interface ShippingTitles {
  delivery: string;
  company: string;
  isCompany: string;
  terms: string;
  data: string;
}

export interface ShippingProps extends IShippingGroups, IShippingFields {
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof IShippingGroups,
    keyof IAbode
  >;
  titles: ShippingTitles;
}

export const Shipping: FunctionComponent<ShippingProps> = ({
  invoicing,
  delivery,
  terms,
  data,
  company,
  onGroupChange: handleGroupChange,
  onFieldChange: handleFieldChange,
  onValidGroupFieldChange: handleValidGroupFieldChange,
  deliveryAddressTitle,
  companyDetailsTitle,
  isCompanyTitle,
  termsTitle,
  dataTitle,
}) => {
  return (
    <>
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
          <span>{deliveryAddressTitle}</span>
        </h6>
        <Abode
          {...delivery}
          onFieldChange={handleGroupChange('delivery')}
          onValidFieldChange={handleValidGroupFieldChange('delivery')}
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
          <span>{companyDetailsTitle}</span>
        </h6>
        <div className="mb-1">
          <Checkbox
            title={isCompanyTitle}
            {...company}
            onChange={handleFieldChange('company')}
          />
        </div>
      </div>
      <div className="mb-4">
        <CSSTransition
          in={!company.checked}
          timeout={400}
          className="shipping__billing"
        >
          <div>
            <Abode
              {...invoicing}
              onFieldChange={handleGroupChange('invoicing')}
              onValidFieldChange={handleValidGroupFieldChange('invoicing')}
            />
          </div>
        </CSSTransition>
      </div>
      <div>
        <div className="mb-1">
          <Checkbox
            title={termsTitle}
            {...terms}
            onChange={handleFieldChange('terms')}
          />
        </div>
        <div className="mb-1">
          <Checkbox
            title={dataTitle}
            {...data}
            onChange={handleFieldChange('data')}
          />
        </div>
      </div>
    </>
  );
};
