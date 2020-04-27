import React, { FunctionComponent, useContext } from 'react';
import { Text, Number, Alpha } from '../Input';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { Select } from '../../forms/Select';
import { IAddress } from './types';
import { I18nConsumer } from '../../I18n'
import { FormTypeContext, isNormalForm } from '../Form';
import { Conditional } from '../../Conditional/component';
import defaultTranslations from './en.json';

export interface AddressProps extends IAddress {
  onFieldChange: OnFieldChange<keyof IAddress>;
  onValidFieldChange: OnValidFieldChange<keyof IAddress>;
}

export interface AddressTranslations {
  STREET: string;
  STREET_PLACEHOLDER: string;
  STREET_MESSAGE_VALID: string;
  STREET_MESSAGE_INVALID: string;
  STREET_NO: string;
  STREET_NO_PLACEHOLDER: string;
  STREET_NO_MESSAGE_VALID: string;
  STREET_NO_MESSAGE_INVALID: string;
  POSTCODE: string;
  POSTCODE_PLACEHOLDER: string;
  POSTCODE_MESSAGE_VALID: string;
  POSTCODE_MESSAGE_INVALID: string;
  CITY: string;
  CITY_PLACEHOLDER: string;
  CITY_MESSAGE_VALID: string;
  CITY_MESSAGE_INVALID: string;
  COUNTRY: string;
  COUNTRY_PLACEHOLDER: string;
  COUNTRY_MESSAGE_VALID: string;
  COUNTRY_MESSAGE_INVALID: string;
}

export const Address: FunctionComponent<AddressProps> = ({
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
}) => {
  const type = useContext(FormTypeContext);

  return <I18nConsumer<AddressTranslations> defaultTranslations={defaultTranslations}>
    {translations => (
      <fieldset name="address">
        <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-4 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Text
              label={isNormalForm(type) ? translations.STREET : undefined}
              placeholder={isNormalForm(type) ? translations.STREET_PLACEHOLDER : translations.STREET}
              id={street.id}
              {...street}
              onChange={handleFieldChange('street')}
              onValidChange={handleValidFieldChange('street')}
              messages={{
                valid: translations.STREET_MESSAGE_VALID,
                invalid: translations.STREET_MESSAGE_INVALID
              }}
            />
          </Conditional>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-4 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Number
              label={isNormalForm(type) ? translations.STREET_NO : undefined}
              placeholder={isNormalForm(type) ? translations.STREET_NO_PLACEHOLDER : translations.STREET_NO}
              id={streetNo.id}
              {...streetNo}
              onChange={handleFieldChange('streetNo')}
              onValidChange={handleValidFieldChange('streetNo')}
              messages={{
                valid: translations.STREET_NO_MESSAGE_VALID,
                invalid: translations.STREET_NO_MESSAGE_INVALID
              }}
            />
          </Conditional>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-4 mb-3">{children}</div>}
            otherwise={children => <div className="input-grow">{children}</div>}>
            <Alpha
              label={isNormalForm(type) ? translations.POSTCODE : undefined}
              placeholder={isNormalForm(type) ? translations.POSTCODE_PLACEHOLDER : translations.POSTCODE}
              id={postcode.id}
              {...postcode}
              onChange={handleFieldChange('postcode')}
              onValidChange={handleValidFieldChange('postcode')}
              messages={{
                valid: translations.POSTCODE_MESSAGE_VALID,
                invalid: translations.POSTCODE_MESSAGE_INVALID
              }}
            />
          </Conditional>
        </div>
        <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
          <Conditional
            condition={isNormalForm(type)}
            when={children => <div className="col-6 mb-3">{children}</div>}>
            <Select
              label={isNormalForm(type) ? translations.CITY : undefined}
              placeholder={isNormalForm(type) ? translations.CITY_PLACEHOLDER : translations.CITY}
              id={cities.id}
              {...cities}
              onChange={handleFieldChange('cities')}
              onValidChange={() => {
              }}
              messages={{
                valid: translations.CITY_MESSAGE_VALID,
                invalid: translations.CITY_MESSAGE_INVALID
              }}
              className="input-grow"
            />
          </Conditional>
          <Conditional condition={isNormalForm(type)} when={children => <div className="col-6 mb-3">{children}</div>}>
            <Select
              label={isNormalForm(type) ? translations.COUNTRY : undefined}
              placeholder={isNormalForm(type) ? translations.COUNTRY_PLACEHOLDER : translations.COUNTRY}
              id={countries.id}
              {...countries}
              onChange={handleFieldChange('countries')}
              onValidChange={() => {
              }}
              messages={{
                valid: translations.COUNTRY_MESSAGE_VALID,
                invalid: translations.COUNTRY_MESSAGE_INVALID
              }}
              className="input-grow"
            />
          </Conditional>
        </div>
      </fieldset>
    )}
  </I18nConsumer>
};
