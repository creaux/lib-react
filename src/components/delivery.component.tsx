import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { Abode, IAbode } from '../forms/Abode';
import { OnChange, OnFieldChange, OnValidFieldChange } from './form.types';
import { Builder } from '../builder';
import {
  IInputData,
  IOption,
  ISelect,
  OnValidChange,
} from '../forms/Field/types';

export type OnDeliveryChange = (delivery: IAbode) => void;

export interface DeliveryProps {
  disabled: boolean;
  onDeliveryChange: OnDeliveryChange;
  onDeliveryValidChange: OnValidChange;
}

export const Delivery: FunctionComponent<DeliveryProps> = ({
  disabled,
  onDeliveryChange: handleDeliveryChange,
  onDeliveryValidChange: handledeliveryValidChange,
}) => {
  const [state, setState] = useState<IAbode>(
    Builder<IAbode>()
      .street(
        Builder<IInputData>()
          .id('deliveryStreet')
          .valid(false)
          .value('')
          .build()
      )
      .streetNo(
        Builder<IInputData>()
          .id('deliveryStreetNo')
          .valid(false)
          .value('')
          .build()
      )
      .postcode(
        Builder<IInputData>()
          .id('deliveryPostcode')
          .valid(false)
          .value('')
          .build()
      )
      .cities(
        Builder<ISelect>()
          .id('deliveryCity')
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
          .id('deliveryCountry')
          .options([
            Builder<IOption>().id('cz').title('Czechia').value('CZ').build(),
          ])
          .valid(false)
          .value('')
          .build()
      )
      .build()
  );

  useEffect(() => {
    handleDeliveryChange(state);
    handledeliveryValidChange(
      (state.street.valid &&
        state.streetNo.valid &&
        state.postcode.valid &&
        state.cities.valid &&
        state.countries.valid) as boolean
    );
  }, [state]);

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
