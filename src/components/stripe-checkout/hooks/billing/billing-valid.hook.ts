import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useBillingValid() {
  return useSelector<RootState>(
    (state: RootState) =>
      (state.billing.sameAsDelivery || state.billing.valid) &&
      state.paymentIntent.valid &&
      state.paymentIntent.ready
  );
}
