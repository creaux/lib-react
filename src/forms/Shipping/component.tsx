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

export interface ShippingProps extends IShippingGroups, IShippingFields {
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof IShippingGroups,
    keyof IAbode
  >;
  deliveryHeading: string;
  billingHeading: string;
  delivery: IAbode & { title: string };
  invoicing: IAbode & { title: string };
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
          <span>{delivery.title}</span>
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
          <span>{invoicing.title}</span>
        </h6>
        <div className="mb-1">
          <Checkbox
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
            {...terms}
            onChange={handleFieldChange('terms')}
          />
        </div>
        <div className="mb-1">
          <Checkbox
            {...data}
            onChange={handleFieldChange('data')}
          />
        </div>
      </div>
    </>
  );
};
