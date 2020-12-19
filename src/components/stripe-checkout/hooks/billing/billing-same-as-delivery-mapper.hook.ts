import { Builder } from '../../../../builder';
import { ICheckbox } from '../../../../forms/Checkbox/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useBillingSameAsDeliveryMapper(label: string) {
  const sameAsDelivery: boolean = useSelector<RootState, boolean>(
    (state) => state.billing.sameAsDelivery
  );
  return Builder<ICheckbox>()
    .id('sameAsDelivery')
    .checked(sameAsDelivery)
    .title(label)
    .build();
}
