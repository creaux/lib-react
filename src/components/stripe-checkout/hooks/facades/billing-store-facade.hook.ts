import { useDispatch } from 'react-redux';
import { BillingStoreFacade } from '../../facade/billing-store.facade';

export function useBillingStoreFacade(): BillingStoreFacade {
  return new BillingStoreFacade(useDispatch());
}
