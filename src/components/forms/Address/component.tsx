import React, { FunctionComponent, useContext } from 'react';
import { Text, Number, Alpha, Select } from '../Field';
import { OnFieldChange, OnValidFieldChange } from '../../types/form';
import { IAddress } from './types';
import { I18nConsumer } from '../../I18n';
import {
  FormTypeContext,
  hasGridRow,
  hasLabel,
  hasPlaceholder,
  isNormalForm,
} from '../Form';
import { Conditional } from '../../conditional.component';
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
  STREET_MESSAGE_DEFAULT: string;
  STREET_NO: string;
  STREET_NO_PLACEHOLDER: string;
  STREET_NO_MESSAGE_VALID: string;
  STREET_NO_MESSAGE_INVALID: string;
  STREET_NO_MESSAGE_DEFAULT: string;
  POSTCODE: string;
  POSTCODE_PLACEHOLDER: string;
  POSTCODE_MESSAGE_VALID: string;
  POSTCODE_MESSAGE_INVALID: string;
  POSTCODE_MESSAGE_DEFAULT: string;
  CITY: string;
  CITY_PLACEHOLDER: string;
  CITY_MESSAGE_VALID: string;
  CITY_MESSAGE_INVALID: string;
  CITY_MESSAGE_DEFAULT: string;
  COUNTRY: string;
  COUNTRY_PLACEHOLDER: string;
  COUNTRY_MESSAGE_VALID: string;
  COUNTRY_MESSAGE_INVALID: string;
  COUNTRY_MESSAGE_DEFAULT: string;
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

  return (
    <I18nConsumer<AddressTranslations>
      defaultTranslations={defaultTranslations}
    >
      {(translations) => (
        <fieldset name="address">
          <div className={hasGridRow(type) ? 'form-row' : 'input-group pb-1'}>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-4 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Text
                label={hasLabel(type) ? translations.STREET : undefined}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.STREET_PLACEHOLDER
                    : translations.STREET
                }
                {...street}
                onChange={handleFieldChange('street')}
                onValidChange={handleValidFieldChange('street')}
                messages={[
                  translations.STREET_MESSAGE_VALID,
                  translations.STREET_MESSAGE_INVALID,
                  translations.STREET_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-4 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Number
                label={hasLabel(type) ? translations.STREET_NO : undefined}
                placeholder={
                  isNormalForm(type)
                    ? translations.STREET_NO_PLACEHOLDER
                    : translations.STREET_NO
                }
                {...streetNo}
                onChange={handleFieldChange('streetNo')}
                onValidChange={handleValidFieldChange('streetNo')}
                messages={[
                  translations.STREET_NO_MESSAGE_VALID,
                  translations.STREET_NO_MESSAGE_INVALID,
                  translations.STREET_NO_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-4 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Alpha
                label={hasLabel(type) ? translations.POSTCODE : undefined}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.POSTCODE_PLACEHOLDER
                    : translations.POSTCODE
                }
                {...postcode}
                onChange={handleFieldChange('postcode')}
                onValidChange={handleValidFieldChange('postcode')}
                messages={[
                  translations.POSTCODE_MESSAGE_VALID,
                  translations.POSTCODE_MESSAGE_INVALID,
                  translations.POSTCODE_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
          </div>
          <div className={hasGridRow(type) ? 'form-row' : 'input-group'}>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Select
                label={hasLabel(type) ? translations.CITY : undefined}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.CITY_PLACEHOLDER
                    : translations.CITY
                }
                {...cities}
                onChange={handleFieldChange('cities')}
                onValidChange={handleValidFieldChange('cities')}
                messages={[
                  translations.CITY_MESSAGE_VALID,
                  translations.CITY_MESSAGE_INVALID,
                  translations.CITY_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
            <Conditional
              condition={hasGridRow(type)}
              when={(children) => <div className="col-6 mb-3">{children}</div>}
              otherwise={(children) => children}
            >
              <Select
                label={hasLabel(type) ? translations.COUNTRY : undefined}
                placeholder={
                  hasPlaceholder(type)
                    ? translations.COUNTRY_PLACEHOLDER
                    : translations.COUNTRY
                }
                {...countries}
                onChange={handleFieldChange('countries')}
                onValidChange={handleValidFieldChange('countries')}
                messages={[
                  translations.COUNTRY_MESSAGE_VALID,
                  translations.COUNTRY_MESSAGE_INVALID,
                  translations.COUNTRY_MESSAGE_DEFAULT,
                ]}
              />
            </Conditional>
          </div>
        </fieldset>
      )}
    </I18nConsumer>
  );
};
