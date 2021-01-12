import React, { FunctionComponent, useContext } from 'react';
import { Alpha, Number, Select, Text } from '../Field';
import { OnFieldChange, OnValidFieldChange } from '../../components/form.types';
import { IAddress } from './address.types';
import { FormTypeContext, isNormalFloatingForm, isNormalForm } from '../Form';
import { Conditional } from '../../components/utility/conditional.component';
import {
  AddressTranslation,
  useAddressTranslations,
} from './address-translations.hook';

export interface AddressProps extends IAddress {
  onFieldChange: OnFieldChange<keyof IAddress>;
  onValidFieldChange: OnValidFieldChange<keyof IAddress>;
  disabled: boolean;
}

export const Address: FunctionComponent<AddressProps> = ({
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange,
  disabled,
}) => {
  const type = useContext(FormTypeContext);
  const translations = useAddressTranslations();

  return (
    <fieldset name="address">
      <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-4 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Text
            label={
              isNormalFloatingForm(type)
                ? translations.get(AddressTranslation.STREET)
                : undefined
            }
            placeholder={
              isNormalForm(type)
                ? (translations.get(
                    AddressTranslation.STREET_PLACEHOLDER
                  ) as string)
                : (translations.get(AddressTranslation.STREET) as string)
            }
            {...street}
            onChange={handleFieldChange('street')}
            onValidChange={handleValidFieldChange('street')}
            messages={[
              translations.get(
                AddressTranslation.STREET_MESSAGE_VALID
              ) as string,
              translations.get(
                AddressTranslation.STREET_MESSAGE_INVALID
              ) as string,
              translations.get(
                AddressTranslation.STREET_MESSAGE_DEFAULT
              ) as string,
            ]}
            disabled={disabled}
          />
        </Conditional>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-4 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Number
            label={
              isNormalFloatingForm(type)
                ? (translations.get(AddressTranslation.STREET_NO) as string)
                : undefined
            }
            placeholder={
              isNormalForm(type)
                ? (translations.get(
                    AddressTranslation.STREET_NO_PLACEHOLDER
                  ) as string)
                : (translations.get(AddressTranslation.STREET_NO) as string)
            }
            {...streetNo}
            onChange={handleFieldChange('streetNo')}
            onValidChange={handleValidFieldChange('streetNo')}
            messages={[
              translations.get(
                AddressTranslation.STREET_NO_MESSAGE_VALID
              ) as string,
              translations.get(
                AddressTranslation.STREET_NO_MESSAGE_INVALID
              ) as string,
              translations.get(
                AddressTranslation.STREET_NO_MESSAGE_DEFAULT
              ) as string,
            ]}
            disabled={disabled}
          />
        </Conditional>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-4 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Alpha
            label={
              isNormalFloatingForm(type)
                ? (translations.get(AddressTranslation.POSTCODE) as string)
                : undefined
            }
            placeholder={
              isNormalForm(type)
                ? (translations.get(
                    AddressTranslation.POSTCODE_PLACEHOLDER
                  ) as string)
                : (translations.get(AddressTranslation.POSTCODE) as string)
            }
            {...postcode}
            onChange={handleFieldChange('postcode')}
            onValidChange={handleValidFieldChange('postcode')}
            messages={[
              translations.get(
                AddressTranslation.POSTCODE_MESSAGE_VALID
              ) as string,
              translations.get(
                AddressTranslation.POSTCODE_MESSAGE_INVALID
              ) as string,
              translations.get(
                AddressTranslation.POSTCODE_MESSAGE_DEFAULT
              ) as string,
            ]}
            disabled={disabled}
          />
        </Conditional>
      </div>
      <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Select
            label={
              isNormalForm(type)
                ? (translations.get(AddressTranslation.CITY) as string)
                : undefined
            }
            placeholder={
              isNormalForm(type)
                ? (translations.get(
                    AddressTranslation.CITY_PLACEHOLDER
                  ) as string)
                : (translations.get(AddressTranslation.CITY) as string)
            }
            {...cities}
            onChange={handleFieldChange('cities')}
            onValidChange={handleValidFieldChange('cities')}
            messages={[
              translations.get(AddressTranslation.CITY_MESSAGE_VALID) as string,
              translations.get(
                AddressTranslation.CITY_MESSAGE_INVALID
              ) as string,
              translations.get(
                AddressTranslation.CITY_MESSAGE_DEFAULT
              ) as string,
            ]}
            disabled={disabled}
          />
        </Conditional>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Select
            label={
              isNormalForm(type)
                ? (translations.get(AddressTranslation.COUNTRY) as string)
                : undefined
            }
            placeholder={
              isNormalForm(type)
                ? (translations.get(
                    AddressTranslation.COUNTRY_PLACEHOLDER
                  ) as string)
                : (translations.get(AddressTranslation.COUNTRY) as string)
            }
            {...countries}
            onChange={handleFieldChange('countries')}
            onValidChange={handleValidFieldChange('countries')}
            messages={[
              translations.get(
                AddressTranslation.COUNTRY_MESSAGE_VALID
              ) as string,
              translations.get(
                AddressTranslation.COUNTRY_MESSAGE_INVALID
              ) as string,
              translations.get(
                AddressTranslation.COUNTRY_MESSAGE_DEFAULT
              ) as string,
            ]}
            disabled={disabled}
          />
        </Conditional>
      </div>
    </fieldset>
  );
};
