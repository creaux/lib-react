import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useDeliveryStepValid() {
  return useSelector<RootState>(
    (state: RootState) =>
      state.contact.valid &&
      state.delivery.valid &&
      state.conditions.data &&
      state.conditions.terms
  );
}
