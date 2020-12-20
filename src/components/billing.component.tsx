import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { Abode, IAbode } from '../forms/Abode';
import { OnChange, OnFieldChange, OnValidFieldChange } from './form.types';
import { Builder } from '../builder';
import { IInputData, IOption, ISelect } from '../forms/Field/types';

export interface BillingProps {
  disabled: boolean;
  onBillingChange: (billing: IAbode) => void;
  onBillingValidChange: (valid: boolean) => void;
}

export const Billing: FunctionComponent<BillingProps> = ({
  disabled,
  onBillingChange: handleBillingChange,
  onBillingValidChange: handleBillingValidChange,
}) => {
  const [state, setState] = useState<IAbode>(
    Builder<IAbode>()
      .street(
        Builder<IInputData>().id('billingStreet').valid(false).value('').build()
      )
      .streetNo(
        Builder<IInputData>()
          .id('billingStreetNo')
          .valid(false)
          .value('')
          .build()
      )
      .postcode(
        Builder<IInputData>()
          .id('billingPostcode')
          .valid(false)
          .value('')
          .build()
      )
      .cities(
        Builder<ISelect>()
          .id('billingCity')
          .options([
            Builder<IOption>()
              .id('prague')
              .title('Prague')
              .value('Prague')
              .build(),
          ])
          .valid(false)
          .value('')
          .build()
      )
      .countries(
        Builder<ISelect>()
          .id('billingCountry')
          .options([
            Builder<IOption>().id('cz').title('Czechia').value('CZ').build(),
          ])
          .valid(false)
          .value('')
          .build()
      )
      .company(
        Builder<IInputData>().id('company').value('').valid(false).build()
      )
      .vat(Builder<IInputData>().id('vat').value('').valid(false).build())
      .build()
  );

  useEffect(() => {
    handleBillingChange(state);

    const validAddress = (state.street.valid &&
      state.streetNo.valid &&
      state.postcode.valid &&
      state.cities.valid &&
      state.countries.valid) as boolean;

    handleBillingValidChange(validAddress);
  }, [state, handleBillingChange, handleBillingValidChange]);

  const handleFieldChange: OnFieldChange<keyof IAbode> = (
    id: keyof IAbode
  ): OnChange => (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value },
    }));
  };

  const handleFieldValidChange: OnValidFieldChange<keyof IAbode> = (
    id: keyof IAbode
  ) => (valid: boolean) => {
    setState((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], valid },
    }));
  };

  return (
    <Abode
      {...state}
      onFieldChange={handleFieldChange}
      onValidFieldChange={handleFieldValidChange}
      disabled={disabled}
    />
  );
};
