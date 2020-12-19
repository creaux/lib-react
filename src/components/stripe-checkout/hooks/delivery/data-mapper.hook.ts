import { Builder } from '../../../../builder';
import { ICheckbox } from '../../../../forms/Checkbox/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useStripeDeliveryDataMapper(label: string) {
  return Builder<ICheckbox>()
    .title(label)
    .checked(
      useSelector<RootState>(
        (state: RootState) => state.conditions.data
      ) as boolean
    )
    .id('data')
    .build();
}
