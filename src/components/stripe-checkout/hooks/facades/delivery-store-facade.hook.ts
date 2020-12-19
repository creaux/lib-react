import { useDispatch } from 'react-redux';
import { DeliveryStoreFacade } from '../../facade/delivery-store.facade';

export function useDeliveryStoreFacade(): DeliveryStoreFacade {
  return new DeliveryStoreFacade(useDispatch());
}
